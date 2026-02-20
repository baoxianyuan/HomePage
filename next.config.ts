import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,  // 禁用图片优化（静态导出不支持 Next Image 优化）
  }
};

export default nextConfig;
