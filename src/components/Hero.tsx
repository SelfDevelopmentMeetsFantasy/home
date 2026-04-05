
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToBooks = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('happiness');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Accent */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-40 -z-10"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-teal-50 rounded-full blur-[100px] opacity-30 -z-10"></div>

        <div className="text-center max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full border border-slate-200 text-slate-800 text-sm font-bold shadow-sm animate-fade-in-up">
            <Sparkles size={16} className="text-indigo-600" />
            <span>Eduardo J. Aleman | Author & Developer</span>
          </div>
          
          <h1 className="serif text-5xl md:text-8xl font-black text-slate-900 leading-[1.1] animate-fade-in-up tracking-tight" style={{ animationDelay: '0.1s' }}>
            Where <span className="text-indigo-600 italic">self development</span> meets fantasy.
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 leading-relaxed animate-fade-in-up max-w-3xl mx-auto font-medium" style={{ animationDelay: '0.2s' }}>
            Transforming complex psychology and high-performance research into practical books 
            and intelligent applications. Empowering you to reclaim your potential.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-in-up pt-4" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#happiness" 
              onClick={scrollToBooks}
              className="group w-full sm:w-auto flex items-center justify-center space-x-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              <span>Explore My Library</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
