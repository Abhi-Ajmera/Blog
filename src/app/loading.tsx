import Image from "next/image";

const loading = () => {
	return (
		<div className="h-[calc(100vh-200px)] flex w-full justify-center items-center">
			<Image
				src={"/loading.gif"}
				alt="loading"
				width={32}
				height={32}
			/>
		</div>
	);
};
export default loading;
