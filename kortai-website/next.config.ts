import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Turbopack 默认不支持 .less，这里注册 less-loader
  turbopack: {
    // 明确指定项目根，避免上级目录的 lockfile 被误判为 workspace root
    root: process.cwd(),
    rules: {
      "*.less": {
        loaders: ["less-loader"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
