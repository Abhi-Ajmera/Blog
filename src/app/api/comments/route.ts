import { auth } from "@/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

// Get all comments for a Post
export const GET = async ({ url }: NextRequest) => {
	const { searchParams } = new URL(url);
	const postSlug = searchParams.get("postSlug");

	try {
		const comments = await prisma.comment.findMany({
			where: { ...(postSlug && { postSlug }) },
			include: { user: true },
		});

		return NextResponse.json({ comments, status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Something went wrong", status: 500 });
	}
};

// create a new comment
export const POST = async (req: NextRequest) => {
	const session = await auth();

	if (!session) {
		return NextResponse.json({ message: "Not Authenticated", status: 401 });
	}

	try {
		const body = await req.json();
		const comment = await prisma.comment.create({
			data: { ...body, userEmail: session?.user?.email },
		});

		return NextResponse.json({ comment, status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Something went wrong", status: 500 });
	}
};
