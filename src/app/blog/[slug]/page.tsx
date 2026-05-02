import { getBlogBySlug, blogs } from "@/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#050812]">
      {/* Article Header */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-20">
          <img src={blog.image} alt="Background" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-brand-red font-semibold hover:text-white transition-colors mb-8 group">
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Journal
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-full text-sm font-bold tracking-wider uppercase backdrop-blur-sm border border-brand-blue/30">
                {blog.category}
              </span>
              <span className="text-slate-300 font-medium">{blog.date}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 animate-[fadeInUp_1s_ease-out]">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 h-[400px]">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>

            {/* Markdown/HTML Content */}
            <div 
              className="prose prose-lg dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-600 dark:prose-li:text-slate-300 max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Keywords */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-primary-800">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {blog.keywords.map((keyword, i) => (
                  <span key={i} className="bg-slate-100 dark:bg-primary-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Global Final Blog Ending Structure */}
            <div className="mt-16 pt-12 border-t border-slate-200 dark:border-primary-800">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">CBPD Academy – Launching 2026–2027</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                CBPD is proud to announce the upcoming launch of <strong className="text-slate-900 dark:text-white">CBPD Academy</strong>, a strategic initiative dedicated to advancing excellence in education and professional development.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
                Planned for 2026–2027, CBPD Academy will offer industry-relevant learning programmes, innovative training solutions, and internationally aligned qualifications to support learners and institutions across global markets.
              </p>
              
              {/* CTA Box */}
              <div className="p-10 bg-slate-50 dark:bg-primary-900 rounded-3xl border border-slate-200 dark:border-primary-800 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Start Your Journey with CBPD</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Whether you are a learner looking to enhance your career or an institution seeking global accreditation, CBPD provides the pathway to professional success.
                </p>
                <div className="flex flex-col gap-4 font-semibold text-brand-blue dark:text-brand-red text-lg">
                  <Link href="/programs" className="flex items-center hover:translate-x-2 transition-transform w-fit">
                    👉 <span className="ml-2 hover:underline">Explore CBPD Qualifications</span>
                  </Link>
                  <Link href="/partner" className="flex items-center hover:translate-x-2 transition-transform w-fit">
                    👉 <span className="ml-2 hover:underline">Become a CBPD Approved Centre</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
