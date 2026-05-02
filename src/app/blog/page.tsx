import TiltCard from "@/components/TiltCard";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform -translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">Insights & News</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            The CBPD <span className="text-brand-red">Journal</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            Explore the latest trends in global education, career advancement, and professional skill development from our network of experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, index) => (
              <TiltCard key={index} sensitivity={12} className="h-full">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="bg-white dark:bg-primary-900 rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 group hover:shadow-[0_20px_40px_rgba(30,64,175,0.1)] transition-all duration-500 h-full flex flex-col cursor-pointer" style={{ transform: "translateZ(10px)" }}>
                    
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden">
                      <div className="absolute inset-0 bg-brand-blue/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-primary-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-blue dark:text-brand-red uppercase tracking-wider">
                        {post.category}
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="p-8 flex flex-col flex-grow">
                      <span className="text-sm font-medium text-slate-400 mb-3 block">{post.date}</span>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-blue dark:group-hover:text-brand-red transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-brand-red dark:text-brand-blue font-bold group-hover:gap-3 transition-all mt-auto">
                        Read Article 
                        <svg className="w-5 h-5 ml-1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
                      </div>
                    </div>

                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>

          <div className="mt-16 text-center text-brand-blue dark:text-white font-bold text-lg hover:text-brand-red transition-colors cursor-pointer inline-flex items-center gap-2 group">
            Load More Posts 
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </div>
        </div>
      </section>
    </main>
  );
}
