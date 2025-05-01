import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "shadcnblocks.com",
        port: "",
        pathname: "images/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "wikipedia/commons/**",
      },
    ],
  },
};

export default nextConfig;
