"use client";
import { CategoryTypes } from "@/types/types";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import useSWR from "swr";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";

const catFetch = async (url: string | URL | Request) => {
	const res = await fetch(url);
	const data = await res.json();

	if (!res.ok) {
		const err = new Error(data.message);
		throw err;
	}
	return data;
};

const WritePage = () => {
	const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, catFetch);
	const categories = data;
	const storage = getStorage(app);

	const router = useRouter();
	const [open, setOpen] = useState<boolean>(false);
	const [title, setTitle] = useState<string>("");
	const [cat, setCat] = useState<string>("");
	const [desc, setDesc] = useState<string>("");
	const [file, setFile] = useState<File | null>(null);
	const [fileUploading, setFileUploading] = useState<string>();
	const [mediaUrl, setMediaUrl] = useState<string>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		const upload = () => {
			if (file === null) return;

			const name = new Date().getTime() + file.name;
			const storageRef = ref(storage, name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setFileUploading("Uploading " + progress + "%");
					if (progress == 100) {
						setFileUploading("Uploading Completed");
					}
				},
				(error) => {
					setError(error.message);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setMediaUrl(downloadURL);
					});
				}
			);
		};
		upload();
	}, [file, storage]);

	const slugify = (str: string) =>
		str
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9]+/g, "-");

	const handleSubmit = async () => {
		if (!mediaUrl) {
			setError("File is Uploading");
			return;
		} else {
			const res = await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					slug: slugify(title),
					title,
					desc,
					img: mediaUrl,
					catSlug: slugify(cat),
				}),
			});
			setError("Blog Created Successfully");
			setTimeout(() => router.push("/"), 3000);
		}
	};

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

	if (status === "unauthenticated") {
		router.push("/login");
	}

	return (
		<div>
			<div className="flex gap-8 justify-end items-center">
				<input
					type="text"
					placeholder="Title"
					className="flex-1 w-full bg-transparent border-none outline-none py-2 text-3xl"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button
					className="bg-gradient-to-t from-[#2926FC] to-[#9998FD] text-white px-3 py-1 rounded-md hover:text-[#9998FD] hover:bg-clip-text max-sm:top-20 max-sm:right-0 "
					onClick={handleSubmit}
				>
					Publish
				</button>
			</div>
			<select
				name="cat"
				id="cat"
				className="w-full bg-transparent border-none outline-none mt-4 text-xl capitalize font-semibold text-softTextDark text-center"
				value={cat}
				onChange={(e) => setCat(e.target.value)}
			>
				<option value="">Select Category</option>
				{categories?.map((category: CategoryTypes) => (
					<option
						key={category.id}
						value={category.title}
						className="bg-transparent capitalize text-black"
					>
						{category.title}
					</option>
				))}
			</select>
			<div className="text-lg text-green-600">
				{fileUploading && fileUploading} <br /> {error && error}
			</div>
			<div className="relative">
				<button
					className="mt-4 bg-transparent text-xs flex items-center justify-center"
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
					<div className="absolute top-0 left-11 flex gap-4 cursor-pointer">
						<input
							type="file"
							name="imageInput"
							id="imageInput"
							onChange={(e) => {
								if (e.target.files) {
									setFile(e.target.files[0]);
								}
							}}
							className="hidden"
						/>
						<button className="bg-transparent flex items-center justify-center">
							<label htmlFor="imageInput">
								<Image
									src={"/image.png"}
									alt=""
									width={28}
									height={28}
								/>
							</label>
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
					value={desc}
					onChange={setDesc}
					placeholder="Write your blog here"
					className="text-textColor dark:text-textColorDark h-[400px] py-2"
				/>
			</div>
		</div>
	);
};
export default WritePage;
