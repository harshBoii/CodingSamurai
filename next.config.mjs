import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three']
};

export default withFlowbiteReact(nextConfig);