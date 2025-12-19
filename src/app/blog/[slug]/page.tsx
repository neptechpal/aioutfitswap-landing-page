
import { blogPosts } from "@/data/post";

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <h1 className="text-center mt-20 text-white text-2xl">
        Post not found
      </h1>
    );
  }

  return (
    <section className="px-6 lg:px-20 mt-6 max-w-4xl mx-auto bg-rose-100 rounded-4xl mb-10">
      <h1 className="text-4xl font-extrabold text-rose-500 mb-6 pt-4">{post.title}</h1>
      <p className="text-purple-700 text-sm font-semibold mb-4">{post.category.name}</p>
      <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8" />
      <p className=" text-slate-700 text-lg leading-relaxed">{post.desc}</p>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  );
}
