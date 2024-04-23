"use client";
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

	return (
		<div>
			<input
				type="text"
				placeholder="Title"
			/>
			<div>
				<button>
					<Image
						src={"/plus.png"}
						alt=""
						width={16}
						height={16}
						onClick={() => setOpen(!open)}
					/>
				</button>
				{open && (
					<div>
						<button>
							<Image
								src={"/image.png"}
								alt=""
								width={16}
								height={16}
							/>
							<Image
								src={"/external.png"}
								alt=""
								width={16}
								height={16}
							/>
							<Image
								src={"/video.png"}
								alt=""
								width={16}
								height={16}
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
					className="text-textColor dark:text-textColorDark"
				/>
			</div>
		</div>
	);
};
export default WritePage;
