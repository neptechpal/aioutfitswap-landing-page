import { blogPosts } from "@/data/post";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { LayoutGrid, ArrowRight } from "lucide-react";

export default function BlogPage() {

  const categories = Array.from(
    new Map(blogPosts.map((p) => [p.category.slug, p.category])).values()
  );

  const categoryCounts = blogPosts.reduce((acc, post) => {
    acc[post.category.slug] = (acc[post.category.slug] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section className="bg-rose-100 min-h-screen py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
      
        <div className="flex flex-col lg:flex-row gap-16">
          
      
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
              {blogPosts.map((post) => (
                <article key={post.slug} className="group cursor-pointer">
            
                  <div className="transition-all duration-500 group-hover:-translate-y-3">
                    <BlogCard post={post} />
                  </div>
                </article>
              ))}
            </div>
          </main>

          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              
            
              <div className="bg-white p-10 rounded-[3rem] shadow-[0_25px_60px_rgba(0,0,0,0.03)] border border-rose-50">
                <h3 className="text-2xl font-black text-[#002966] mb-8 tracking-tight">
                  Discover<span className="text-rose-500 text-3xl">.</span>
                </h3>
                
                <nav className="space-y-2">
                  <Link 
                    href="/blog" 
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#002966] text-white shadow-xl shadow-blue-900/20 group transition-all"
                  >
                    <span className="font-bold">All Insights</span>
                    <span className="bg-white/20 text-[10px] px-2 py-1 rounded-md font-bold">{blogPosts.length}</span>
                  </Link>

                  {categories.map((cat) => (
                    <Link 
                      key={cat.slug}
                      href={`/category/${cat.slug}`}
                      className="flex items-center justify-between p-4 rounded-2xl text-slate-600 hover:bg-rose-50 hover:text-rose-500 transition-all duration-300 group"
                    >
                      <span className="font-bold">{cat.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-300 font-bold group-hover:text-rose-300 transition-colors">
                            {categoryCounts[cat.slug] || 0}
                        </span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

            
              <div className="relative group overflow-hidden bg-[#002966] p-10 rounded-[3rem] text-white shadow-2xl">
                <div className="relative z-10">
                  <p className="text-rose-400 font-black text-[10px] uppercase tracking-widest mb-2">Early Access</p>
                  <h4 className="text-2xl font-bold leading-tight mb-6">Experience the AI Stylist App.</h4>
                  <button className="w-full bg-white text-[#002966] py-4 rounded-2xl font-black text-sm hover:bg-rose-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                    Download Now
                  </button>
                </div>
                
           
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}