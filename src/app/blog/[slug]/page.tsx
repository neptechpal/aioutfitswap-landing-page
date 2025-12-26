import { fetchFromBMS } from "@/lib/blog";
import { notFound } from "next/navigation";
import { User, Calendar } from "lucide-react"; 

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const allPosts = await fetchFromBMS();
  
  
  const post = allPosts.find(p => (p.slug || p.id.toString()) === slug);

  if (!post) notFound();

  const BASE_URL = "https://bms.neptechpal.com.np";
  const imageUrl = post.image?.startsWith('http') ? post.image : `${BASE_URL}${post.image}`;
  console.log(imageUrl);


  const publishDate = new Date(post.created_at).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="min-h-screen bg-white pb-20">

      <div className="max-w-4xl mx-auto py-12 px-6">
       
        <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <User size={16} className="text-rose-500" />
            <span>By {post.author_name || "Style Editor"}</span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
            <Calendar size={16} className="text-rose-500" />
            <span>{publishDate}</span>
          </div>
          <span className="bg-rose-50 text-rose-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ml-auto">
            {post.category_name || "Uncategorized"}
          </span>
        </div>

      
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
          {post.title}
        </h1>

      
        {post.image && (
          <div className="relative mb-16">
            <img 
              src={imageUrl} 
              alt={post.title} 
              className="w-full rounded-[2rem] md:rounded-[4rem] shadow-2xl object-cover aspect-video"
            />
          </div>
        )}

   
        <div className="relative mb-16">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-rose-500 rounded-full" />
          <p className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed pl-6 italic">
            {post.description}
          </p>
        </div>

        <div 
          className="prose prose-lg md:prose-xl max-w-none prose-slate 
                     prose-headings:font-black prose-headings:text-slate-900
                     prose-p:leading-relaxed prose-p:text-slate-600
                     prose-strong:text-slate-900 prose-img:rounded-3xl"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
    
        <div className="mt-20 p-10 bg-slate-50 rounded-[3rem] border border-slate-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            {post.author_name ? post.author_name[0] : "S"}
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-rose-500 mb-1">Written By</p>
            <h4 className="text-xl font-black text-slate-900">{post.author_name || "Style Team"}</h4>
          </div>
        </div>
      </div>
    </article>
  );
}