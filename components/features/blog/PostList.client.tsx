'use client';

import { Post } from '@/types/blog';
import Link from 'next/link';
import { PostCard } from './PostCard';
import { useEffect, useState } from 'react';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const { posts } = await response.json();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="grid gap-4">
      {/* 블로그 카드 반복 */}
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          <PostCard post={post} isFirst={index === 0} />
        </Link>
      ))}
    </div>
  );
}
