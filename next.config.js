/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    unoptimized: true, // Disable image optimization
  },
  output: "export", // Enables `next build` to generate static files in the `out` directory
  typescript: {
    ignoreBuildErrors: true, // Disables TypeScript linting during the build process
  },
  trailingSlash: true,
};

module.exports = nextConfig;
