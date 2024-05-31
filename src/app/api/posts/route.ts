import { auth } from "@/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async ({ url }: NextResponse) => {
	const { searchParams } = new URL(url);

	const pageNum = searchParams.get("page") || "1";
	const cat = searchParams.get("cat") || "";

	const POST_PER_PAGE = 4;
	const query = {
		take: POST_PER_PAGE,
		skip: POST_PER_PAGE * (parseInt(pageNum) - 1),
		where: { ...(cat && { catSlug: cat }) },
	};

	try {
		const [posts, count, popular] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({ where: query.where }),
			prisma.post.findMany({ take: 6, include: { user: true }, orderBy: [{ views: "desc" }] }),
		]);

		return NextResponse.json({ posts, count, popular, POST_PER_PAGE, status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Something went wrong", status: 500 });
	}
};

// create a new post
export const POST = async (req: NextResponse) => {
	const session = await auth();

	if (!session) {
		return NextResponse.json({ message: "Not Authenticated", status: 401 });
	}

	try {
		const body = await req.json();
		const post = await prisma.post.create({
			data: { ...body, userEmail: session?.user?.email },
		});

		return NextResponse.json({ post, status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Something went wrong", status: 500 });
	}
};
