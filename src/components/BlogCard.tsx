import Link from "next/link";
import { BlogPost } from "@/types/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const postIdentifier = post.slug || post.id.toString();
  const BASE_URL = "https://bms.neptechpal.com.np"; 
  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`)
    : "/placeholder-blog.webp";

  return (
    <Link 
      href={`/blog/${postIdentifier}`} 
      className="group bg-white rounded-[2.5rem] block overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-white/90 backdrop-blur-md text-rose-600 text-[10px] font-black uppercase px-4 py-2 rounded-full">
            {post.category_name || "Style"}
          </span>
        </div>
      </div>

      <div className="p-8">
        <span className="text-slate-400 text-[11px] font-bold">
          {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <h3 className="text-2xl font-black text-slate-800 mt-2 leading-tight group-hover:text-rose-500 transition-colors">
          {post.title}
        </h3>
        <div className="mt-6 flex items-center text-rose-500 font-black text-xs uppercase">
          View Story →
        </div>
      </div>
    </Link>
  );
}