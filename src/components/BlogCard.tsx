import Link from "next/link";

export default function BlogCard({ post }: { post: any }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="rounded-2xl overflow-hidden bg-[#111114] border border-gray-800 hover:border-gray-600 transition-shadow shadow-lg hover:shadow-xl cursor-pointer group transform hover:-translate-y-1">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="p-4 sm:p-5 ">
          <p className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
            {post.category.name}
          </p>
          <h3 className=" sm:text-lg md:text-xl font-semibold mt-2 text-purple-400 ">
            {post.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-3">
            {post.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}