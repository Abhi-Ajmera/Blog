"use client";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useMemo, useState } from "react";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);
	const quillModules = {
		toolbar: [
			[{ header: [1, 2, 3, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image"],
			[{ align: [] }],
			[{ color: [] }],
			["code-block"],
			["clean"],
		],
	};
	const quillFormats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"link",
		"image",
		"align",
		"color",
		"code-block",
	];

	const { status } = useSession();
	if (status === "loading") {
		return <div>Loading ...</div>;
	}

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
				className="w-full bg-transparent border-none outline-none py-4 text-3xl"
			/>
			<div className="relative">
				<button
					className="bg-transparent text-xs flex items-center justify-center"
					onClick={() => setOpen(!open)}
				>
					<Image
						src={"/plus.png"}
						alt=""
						width={28}
						height={28}
					/>
				</button>
				{open && (
					<div className="absolute top-0 left-11 flex gap-4">
						<button className="bg-transparent flex items-center justify-center">
							<Image
								src={"/image.png"}
								alt=""
								width={28}
								height={28}
							/>
						</button>
						<button className="bg-transparent flex items-center justify-center">
							<Image
								src={"/external.png"}
								alt=""
								width={28}
								height={28}
							/>
						</button>
						<button className="bg-transparent flex items-center justify-center">
							<Image
								src={"/video.png"}
								alt=""
								width={28}
								height={28}
							/>
						</button>
					</div>
				)}
				<ReactQuill
					theme="bubble"
					modules={quillModules}
					formats={quillFormats}
					value={value}
					onChange={setValue}
					placeholder="Tell your story ..."
					className="text-textColor dark:text-textColorDark h-[400px] py-2"
				/>
			</div>
			<button className="absolute bg-gradient-to-t from-[#2926FC] to-[#9998FD] text-white top-8 right-5 px-3 py-1 rounded-3xl hover:text-[#9998FD] hover:bg-clip-text hover:border border-[#9998FD] max-sm:top-20 max-sm:text-xs">
				Publish
			</button>
		</div>
	);
};
export default WritePage;
