import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async ({ url }) => {
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
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({ where: query.where }),
		]);

		return NextResponse.json({ posts, count, POST_PER_PAGE, status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Something went wrong", status: 500 });
	}
};
