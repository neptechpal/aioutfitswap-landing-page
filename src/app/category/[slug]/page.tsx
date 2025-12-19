import { blogPosts } from "@/data/post";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { FolderOpen, ArrowRight, LayoutGrid } from "lucide-react"; 

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const currentSlug = slug.toLowerCase();

    const filteredPosts = blogPosts.filter(p => p.category.slug.toLowerCase() === currentSlug);
    const categories = Array.from(new Map(blogPosts.map((p) => [p.category.slug, p.category])).values());

    return (
        <section className="bg-[#fcfaff] min-h-screen py-12 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
                
                <div className="flex flex-col lg:flex-row gap-16">
              
                    <main className="lg:w-3/4">
                        {filteredPosts.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                {filteredPosts.map((post) => (
                                    <div key={post.slug} className="transform transition-transform duration-500 hover:-translate-y-2">
                                        <BlogCard post={post} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-16 rounded-[3rem] text-center border-2 border-dashed border-rose-100 shadow-inner">
                                <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FolderOpen className="text-rose-300" size={40} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-800">No posts found</h2>
                                <p className="text-slate-500 mt-2 mb-8">We haven't published anything in this category yet.</p>
                                <Link href="/blog" className="bg-[#002966] text-white px-8 py-4 rounded-full font-bold hover:bg-rose-500 transition-colors shadow-lg shadow-blue-900/20">
                                    Return to Blog
                                </Link>
                            </div>
                        )}
                    </main>

                   
                    <aside className="lg:w-1/4">
                        <div className="sticky top-32">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-rose-50">
                                <h3 className="text-xl font-black text-[#002966] mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-6 bg-rose-500 rounded-full"></span>
                                    Explore Categories
                                </h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link 
                                            href="/blog" 
                                            className="group flex items-center justify-between p-4 rounded-2xl text-slate-600 hover:bg-rose-50 transition-all duration-300"
                                        >
                                            <span className="font-bold group-hover:text-rose-500">All Insights</span>
                                            <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                    
                                    {categories.map((cat) => {
                                        const isActive = cat.slug === currentSlug;
                                        return (
                                            <li key={cat.slug}>
                                                <Link 
                                                    href={`/category/${cat.slug}`}
                                                    className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                                                        isActive 
                                                        ? 'bg-[#002966] text-white shadow-xl shadow-blue-900/20 translate-x-2' 
                                                        : 'text-slate-600 hover:bg-rose-50 hover:pl-6'
                                                    }`}
                                                >
                                                    <span className={`font-bold ${isActive ? 'text-white' : 'group-hover:text-rose-500'}`}>
                                                        {cat.name}
                                                    </span>
                                                    {!isActive && <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all" />}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-10 p-6 rounded-[2rem] bg-gradient-to-br from-rose-500 to-rose-600 text-white overflow-hidden relative group">
                                    <div className="relative z-10">
                                        <p className="text-xs font-black uppercase tracking-widest opacity-90 mb-1">Outfit Swap</p>
                                        <p className="font-bold text-sm leading-tight mb-4">Get the latest fashion AI updates.</p>
                                        <button className="bg-white text-rose-500 text-xs font-black py-2 px-4 rounded-lg">Subscribe</button>
                                    </div>
                                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                </div>
                            </div>
                        </div>
                    </aside>    
                </div>
            </div>
        </section>
    );
}