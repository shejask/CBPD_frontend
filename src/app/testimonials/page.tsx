import TiltCard from "@/components/TiltCard";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      title: "Senior Project Manager",
      text: "Securing my certification through CBPD was a phenomenal milestone in my career. The entire process was incredibly streamlined, and the instant global recognition helped me land my current senior role within two months.",
      rating: 5,
      image: "/images/external/1494790108377-be9c29b29330.jpg"
    },
    {
      name: "David Chen",
      title: "Data Analytics Lead",
      text: "The rigour of the assessments proved the high quality of the CBPD accreditation. My employer immediately recognized the value of the credential. Highly recommend this for professionals looking to upskill quickly but reliably.",
      rating: 5,
      image: "/images/external/1507003211169-0a1dd7228f2d.jpg"
    },
    {
      name: "Elena Rodriguez",
      title: "HR Director",
      text: "As an HR professional, I look for candidates with verified, practical skills. CBPD's approach to professional mastery and real-world application means that a candidate holding this certification is ready to hit the ground running.",
      rating: 5,
      image: "/images/external/1573496359142-b8d87734a5a2.jpg"
    },
    {
      name: "Michael Chang",
      title: "Operations Consultant",
      text: "I was looking for a credential that carried weight across Europe and Asia. CBPD exceeded my expectations. The networking opportunities with other industry experts have been incredibly valuable for my consulting business.",
      rating: 4,
      image: "/images/external/1506794778202-cad84cf45f1d.jpg"
    },
    {
      name: "Anita Patel",
      title: "Healthcare Administrator",
      text: "The Health and Safety discipline training through CBPD's partners was top-tier. I particularly appreciated the seamless digital verification, which made updating my compliance records effortless.",
      rating: 5,
      image: "/images/external/1580489944761-15a19d654956.jpg"
    },
    {
      name: "James Wilson",
      title: "Creative Art Director",
      text: "Creative fields often lack structured recognition. The Language and Creative Arts certification gave my portfolio the formal prestige it needed when bidding for massive corporate contracts.",
      rating: 5,
      image: "/images/external/1519085360753-af0119f7cbe7.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0f1c]">
      {/* Mini Hero */}
      <section className="relative pt-40 pb-20 bg-primary-900 border-b border-primary-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none transform translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-red/40 bg-brand-red/10 backdrop-blur-md mb-6 animate-[fadeInUp_0.8s_ease-out]">
            <span className="text-brand-red font-semibold tracking-wide text-sm uppercase">Success Stories</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl mx-auto leading-tight mb-8 animate-[fadeInUp_1s_ease-out]">
            Trusted by Professionals <br/>
            <span className="text-brand-red">Worldwide</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-[fadeInUp_1.2s_ease-out]">
            Don't just take our word for it. Read how CBPD accreditation has empowered individuals to redefine their professional journeys.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TiltCard key={index} sensitivity={8} className="h-full">
                <div 
                  className="bg-white dark:bg-primary-900 rounded-3xl p-10 shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-primary-800 relative h-full flex flex-col group hover:shadow-[0_20px_40px_rgba(30,64,175,0.1)] transition-all duration-500"
                  style={{ transform: "translateZ(10px)", transitionDelay: `${index * 100}ms` }}
                >
                  {/* Big Quote Icon background */}
                  <div className="absolute top-6 right-8 text-8xl text-slate-100 dark:text-primary-800/50 font-serif leading-none pointer-events-none group-hover:text-brand-red/10 transition-colors">
                    "
                  </div>

                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-brand-red' : 'text-slate-200 dark:text-primary-800'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed italic mb-10 relative z-10 flex-grow">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-slate-100 dark:border-primary-800">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-brand-blue/20 dark:border-primary-700 group-hover:border-brand-red transition-colors"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white capitalize">{testimonial.name}</h4>
                      <p className="text-sm text-brand-blue dark:text-brand-red font-medium">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
