import { paramsType } from "@/types/types";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Get single Post using slug
export const GET = async (req: NextResponse, { params }: { params: paramsType }) => {
	const { slug } = params;
	try {
		const post = await prisma.post.update({
			where: { slug },
			data: { views: { increment: 1 } },
			include: { user: true },
		});

		return NextResponse.json({ post, status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Something went wrong", status: 500 });
	}
};
