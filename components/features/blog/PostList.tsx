import { Post } from '@/types/blog';
import Link from 'next/link';
import { PostCard } from './PostCard';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
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
