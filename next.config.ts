import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'www.notion.so',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // 필요 마크다운 추가
  // extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
