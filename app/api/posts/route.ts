import { getPublishedPosts } from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function GET() {
  // const { searchParams } = new URL(request.url);

  const posts = await getPublishedPosts();
  return NextResponse.json({ posts });
}
