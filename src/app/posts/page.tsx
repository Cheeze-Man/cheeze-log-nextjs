import { Metadata } from "next";
import { getAllPosts } from "@/service/posts";
import FilterablePosts from "@/components/FilterablePosts";

export const metadata: Metadata = {
  title: "All Posts",
  description: "풀스택 관련 게시물",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
