const page = () => {
	const handleSubmit = () => {};

	return (
		<div className="h-[480px] flex flex-col justify-center gap-12">
			<h2 className="text-xl text-center">Contact Us</h2>
			<form className="flex flex-col gap-3">
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
					className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
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
					placeholder="example@email.com"
					required
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
					className="bg-transparent border border-[#33353F] placeholder-[#9CA2A9] text-sm rounded-lg block w-full p-2.5"
					placeholder="Leave your message here"
				/>
				<button
					type="submit"
					className="bg-gradient-to-t from-[#2926FC] to-[#9998FD] hover:bg-clip-text border hover:text-[#9998FD] border-[#9998FD] py-2.5 px-5 rounded-lg w-full"
				>
					Send
				</button>
			</form>
		</div>
	);
};
export default page;
