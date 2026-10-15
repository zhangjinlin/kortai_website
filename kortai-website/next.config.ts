import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Turbopack 默认不支持 .less，这里注册 less-loader
  turbopack: {
    rules: {
      "*.less": {
        loaders: ["less-loader"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
