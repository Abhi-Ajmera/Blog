"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

const Contact = () => {
	const router = useRouter();
	const [form, handleSubmit] = useForm("xkndlqnp");

	if (form.succeeded) {
		setTimeout(() => {
			router.push("/");
		}, 500);
	}
	return (
		<div className="flex flex-col justify-center gap-10 mt-8">
			<h2 className="text-2xl text-center uppercase">Contact Us</h2>
			{form.succeeded && (
				<p className="text-center text-green-600">
					Thanks for connecting! <br />
					We will get back to you...
				</p>
			)}

			<form
				className="flex flex-col gap-3"
				onSubmit={handleSubmit}
				method="POST"
			>
				<label
					htmlFor="name"
					className="text-sm"
				>
					Name
				</label>
				<input
					name="name"
					type="text"
					id="name"
					placeholder="John Doe"
					required
					autoComplete="off"
					minLength={4}
					className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 mb-3"
				/>
				<label
					htmlFor="email"
					className="text-sm"
				>
					Your Email
				</label>
				<input
					name="email"
					type="email"
					id="email"
					autoComplete="off"
					placeholder="example@email.com"
					pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
					required
					className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 mb-3"
				/>
				<label
					htmlFor="subject"
					className="text-sm"
				>
					Subject
				</label>
				<input
					name="subject"
					type="text"
					id="subject"
					placeholder="Subject"
					required
					minLength={4}
					autoComplete="off"
					className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5 mb-3"
				/>
				<label
					htmlFor="message"
					className="text-sm"
				>
					Message
				</label>
				<textarea
					name="message"
					id="message"
					required
					minLength={20}
					className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full h-24 p-2.5 mb-4"
					placeholder="Leave your message here"
				/>
				<ValidationError
					prefix="Message"
					field="message"
					errors={form.errors}
				/>
				<button
					type="submit"
					className="bg-gradient-to-t from-[#2926FC] to-[#9998FD] hover:bg-clip-text border hover:text-[#9998FD] border-[#9998FD] py-2.5 px-5 rounded-lg w-full mb-8"
					disabled={form.submitting}
				>
					Send
				</button>
			</form>
		</div>
	);
};
export default Contact;
