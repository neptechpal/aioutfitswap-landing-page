import { fetchFromBMS } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import { BlogPost } from "@/types/blog";
import Link from "next/link";
import { Tag, LayoutGrid, CheckCircle2, FolderOpen } from "lucide-react";


const slugify = (text: string) => 
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {

  const { category: activeSlug } = await searchParams;
  const posts: BlogPost[] = await fetchFromBMS();


  const categoryCounts = new Map<string, number>();
  
  posts.forEach((post) => {
    const name = post.category_name || "General";
    categoryCounts.set(name, (categoryCounts.get(name) || 0) + 1);
  });

  const uniqueCategories = Array.from(categoryCounts.keys()).sort();

 
  const filteredPosts = activeSlug
    ? posts.filter((post) => slugify(post.category_name || "General") === activeSlug)
    : posts;

 
  const activeCategoryName = activeSlug 
    ? Array.from(categoryCounts.keys()).find(name => slugify(name) === activeSlug) 
    : "All Stories";

  return (
    <main className="min-h-screen bg-[#fafafa] py-12 md:py-16">
      <section className="max-w-7xl mx-auto px-6">
        
   
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#002966] tracking-tight mb-4">
            {activeCategoryName}
          </h1>
         
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          
      
          <div className="lg:w-3/4 order-2 lg:order-1">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[3rem] p-20 text-center border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-black text-slate-800">No stories found</h2>
                <Link href="/blog" className="mt-4 inline-block text-rose-500 font-bold hover:underline">
                  Clear all filters
                </Link>
              </div>
            )}
          </div>

       
          <aside className="lg:w-1/4 order-1 lg:order-2">
            <div className="sticky top-10">
              <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-8">
                  <Tag size={18} className="text-rose-500" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-slate-800">
                    Categories
                  </h2>
                </div>

                <nav className="flex flex-col gap-3">
                 
                  <Link
                    href="/blog"
                    className={`group flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold transition-all border ${
                      !activeSlug 
                        ? "bg-rose-500 text-white border-rose-500 shadow-lg shadow-rose-200" 
                        : "bg-slate-50 text-slate-600 border-transparent hover:bg-slate-100"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <LayoutGrid size={16} /> All Stories
                    </span>
                    <span className={`text-[10px] px-2 py-1 rounded-full ${!activeSlug ? 'bg-white/20' : 'bg-slate-200 text-slate-500'}`}>
                      {posts.length}
                    </span>
                  </Link>

                
                  {uniqueCategories.map((catName) => {
                    const slug = slugify(catName);
                    const count = categoryCounts.get(catName);
                    const isActive = activeSlug === slug;

                    return (
                      <Link
                        key={slug}
                        href={`/blog?category=${slug}`}
                        className={`group flex items-center justify-between px-5 py-4 rounded-2xl text-sm font-bold transition-all border ${
                          isActive 
                            ? "bg-rose-500 text-white border-rose-500 shadow-lg shadow-rose-200" 
                            : "bg-white text-slate-600 border-slate-100 hover:border-rose-200 hover:text-rose-500 hover:bg-rose-50/50"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          {isActive && <CheckCircle2 size={14} />}
                          {catName}
                        </span>
                        
                       
                        <span className={`text-[10px] px-2.5 py-1 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-100 text-slate-400 group-hover:bg-rose-100 group-hover:text-rose-600'
                        }`}>
                          {count}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                   <p className="text-[11px] text-slate-400 font-medium">
                     Select a topic to filter results
                   </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}