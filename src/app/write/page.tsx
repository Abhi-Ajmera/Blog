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
	const [title, setTitle] = useState<string>("");
	const [cat, setCat] = useState<string>("");
	const [desc, setDesc] = useState<string>("");
	const [file, setFile] = useState<File | null>(null);
	const [mediaUrl, setMediaUrl] = useState<string>();
	const [message, setMessage] = useState<string>();
	const imgTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif", "image/webp"];

	useEffect(() => {
		const upload = () => {
			if (file === null) return;

			const name = slugify(file.name) + " " + new Date().getTime();
			const storageRef = ref(storage, name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					setMessage("Uploading " + progress + "%");
					if (progress == 100) {
						setMessage("Uploading Completed");
					}
				},
				(error) => {
					setMessage(error.message);
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
		if (title === "") {
			setMessage("Title is required");
			return;
		}
		if (cat === "") {
			setMessage("Category is required");
			return;
		}
		if (!mediaUrl) {
			setMessage("File is required or Uploading");
			return;
		}
		if (desc === "") {
			setMessage("Description is required");
			return;
		} else {
			await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					slug: slugify(title),
					title,
					desc,
					img: mediaUrl,
					catSlug: slugify(cat),
				}),
			});
			setMessage("Blog Created Successfully");
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
			<div className="text-lg my-2 text-green-600">{message && message}</div>
			<div className="relative">
				<input
					className="mt-4 bg-transparent text-xs hidden"
					type="file"
					name="imageInput"
					id="imageInput"
					onChange={(e) => {
						if (e.target.files) {
							const imgUpload = e.target.files[0];
							if (imgTypes.some((x) => x === imgUpload.type)) {
								if (imgUpload.size <= 5242880) {
									setFile(imgUpload);
									setMessage("Upload Successfully");
								} else {
									setMessage("Image size should be less than 5 MB");
									e.target.files = null;
								}
							} else {
								setMessage("Image should be in JPG or PNG format");
								e.target.files = null;
							}
						}
					}}
				/>
				<button className="bg-transparent">
					<label htmlFor="imageInput">
						<Image
							src={"/plus.png"}
							alt=""
							width={28}
							height={28}
						/>
					</label>
				</button>

				<ReactQuill
					theme="bubble"
					modules={quillModules}
					formats={quillFormats}
					value={desc}
					onChange={setDesc}
					placeholder="Write your blog here"
					className="text-textColor dark:text-textColorDark h-[400px] py-2 text-wrap"
				/>
			</div>
		</div>
	);
};
export default WritePage;
