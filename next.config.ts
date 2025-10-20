import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';

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
  options: {
    // webpack 버전 사용 시
    // remarkPlugins: [remarkGfm],
    // ts-expect-error remark-gfm 타입 충돌 문제 해결
    // turbo 버전 사용 시
    // remarkPlugins: [['remarkGfm']],
  },
});

export default withMDX(nextConfig);
