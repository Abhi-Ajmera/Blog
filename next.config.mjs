/** @type {import('next').NextConfig} */
const nextConfig = {
	target: "serverless",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "firebasestorage.googleapis.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
