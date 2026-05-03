export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { notFound } from "next/navigation";
import Link from "next/link";
import ApplicationForm from "./ApplicationForm";
import { api } from "@/lib/api";

export default async function SubProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  let category: any = null;
  let program: any = null;
  let categoryCourses: any[] = [];

  try {
    const [catsRes, coursesRes] = await Promise.all([
      api.getCategories(),
      api.getCourses()
    ]);
    
    category = catsRes.categories?.find((c: any) => c.slug === resolvedParams.slug);
    program = coursesRes.courses?.find((c: any) => c.slug === resolvedParams.slug);
    
    if (category) {
      categoryCourses = coursesRes.courses?.filter((c: any) => 
        c.categoryId && (c.categoryId._id === category._id || c.categoryId === category._id)
      ) || [];
    }

    if (!program && !category) {
      notFound();
    }
  } catch (err) {
    console.error(err);
    notFound();
  }

  // If it's a category page (and doesn't have a dedicated page like /business already), render a generic category template
  if (category && !program) {
    return (
      <main className="min-h-screen bg-slate-50 dark:bg-primary-900 pb-20">
        <div className="bg-white dark:bg-primary-900 pt-32 pb-4 border-b border-slate-200 dark:border-primary-800">
          <div className="container mx-auto px-6 md:px-12 flex items-center gap-3 text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-brand-red border-transparent transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/programs" className="hover:text-brand-red border-transparent transition-colors">Programmes</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-900 dark:text-white">{category.name}</span>
          </div>
        </div>

        <section className="bg-primary-900 py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Master the principles of {category.name.toLowerCase()} with our globally accredited industry curriculum. 
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Available Sub-Programmes</h2>
            <div className="space-y-4">
              {categoryCourses.map((sub: any, i: number) => (
                <Link key={i} href={`/programs/${sub.slug}`} className="block p-6 bg-white dark:bg-primary-800 border border-slate-200 dark:border-primary-700 rounded-lg hover:border-brand-red dark:hover:border-brand-red transition-all group shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-red transition-colors mb-2">
                        {sub.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400">Click to explore the core curriculum, market insights, and enrolment steps.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-primary-900 flex items-center justify-center text-slate-400 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Render specific Sub-Program template
  if (!program) return notFound();

  const categoryName = program.categoryId?.name || "Programme";
  const heroImage = program.image || `https://picsum.photos/seed/${categoryName.replace(/ & | /g, "")}/1920/600`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c] pt-20">
      
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={categoryName} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl">
            <Link href="/programs" className="inline-flex items-center gap-2 text-brand-blue dark:text-brand-red font-bold mb-6 hover:-translate-x-1 transition-transform bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              View All Programs
            </Link>
            <div className="text-brand-red font-bold tracking-widest uppercase mb-2">
              {categoryName} DISCIPLINE
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {program.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Equip yourself with verified expertise and drive industry innovation through our globally recognized curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Details & Curriculum */}
            <div className="lg:w-2/3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  Program Overview
                </h2>
                <div className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line bg-white dark:bg-primary-900 p-8 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                  {program.overview || "Overview coming soon."}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  Core Curriculum
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(program.curriculum || []).map((item: string, idx: number) => (
                    <div key={idx} className="bg-white dark:bg-primary-900 border border-slate-200 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-4 group-hover:bg-brand-red transition-colors">
                        {idx + 1}
                      </div>
                      <h3 className="font-bold text-slate-800 dark:text-white">{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Job Market Insights Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-gradient-to-br from-primary-900 to-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                    <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Job Market Insights
                  </h3>
                  
                  <div className="space-y-6 relative z-10 text-slate-300">
                    <p className="text-sm leading-relaxed mb-8">
                      {program.jobMarket?.description || "Market insights coming soon."}
                    </p>

                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-sm text-slate-400 mb-1">Average Salary Range</div>
                      <div className="text-2xl font-bold text-brand-red">{program.jobMarket?.salaryRange || "TBD"}</div>
                    </div>

                    <div className="bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-sm text-slate-400 mb-1">Projected Growth</div>
                      <div className="text-2xl font-bold text-green-400 flex items-center gap-2">
                        {program.jobMarket?.growthRate || "TBD"}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-slate-400 mb-3 uppercase tracking-wider font-bold">Top Employers</div>
                      <ul className="space-y-2">
                        {(program.jobMarket?.topEmployers || []).map((emp: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                            <span className="font-medium text-slate-200">{emp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-slate-100 dark:bg-primary-900 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-brand-red/5 blur-3xl rounded-full"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Secure Your Place
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Submit an application for <strong className="text-brand-blue dark:text-brand-red">{program.title}</strong> today to step onto the path of mastery. Spaces are strictly limited per cohort.
              </p>
            </div>
            
            <ApplicationForm programTitle={program.title} />
          </div>
        </div>
      </section>
    </div>
  );
}
