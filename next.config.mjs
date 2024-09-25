/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false }
    return config
    },
};

export default nextConfig;
