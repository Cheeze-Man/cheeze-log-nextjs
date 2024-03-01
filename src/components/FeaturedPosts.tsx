import { getAllPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  return (
    <section>
      <h2>게시물</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
