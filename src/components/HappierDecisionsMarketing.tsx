
import React from 'react';
import { ArrowLeft, CheckCircle2, Star, Zap, Brain, Shield } from 'lucide-react';

interface MarketingProps {
  onBack: () => void;
}

export const HappierDecisionsMarketing: React.FC<MarketingProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white animate-fade-in-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 mb-12 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-amber-50 px-3 py-1 rounded-full border border-amber-100 text-amber-700 text-sm font-medium">
              <Star size={16} fill="currentColor" />
              <span>Available Now on App Store</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl p-2 shadow-sm">
                 <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="white" stroke="#0f172a" strokeWidth="4" />
                    <path d="M35,30 Q30,5 50,15 Q70,5 65,30" fill="white" stroke="#0f172a" strokeWidth="4" />
                    <circle cx="40" cy="45" r="4" fill="#0f172a" />
                    <circle cx="60" cy="45" r="4" fill="#0f172a" />
                    <path d="M45,55 L55,55 L50,60 Z" fill="#0f172a" />
                    <path d="M20,50 Q10,50 15,60" fill="none" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />
                    <path d="M80,50 Q90,50 85,60" fill="none" stroke="#2dd4bf" strokeWidth="3" strokeLinecap="round" />
                 </svg>
              </div>
              <h1 className="serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Happier Decisions
              </h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed">
              Empowering you to choose with confidence. Stop overthinking and start living with 
              a science-backed framework for life's most complex choices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-slate-800 transition-all shadow-lg"
              >
                Download for iOS
              </a>
              <div className="flex items-center space-x-4 px-4 text-slate-500 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                  ))}
                </div>
                <span>Trusted by 5k+ decision makers</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[9/16] max-w-[320px] mx-auto bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-indigo-600 flex flex-col items-center justify-center p-8 text-white text-center">
                  <div className="w-24 h-24 mb-6">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="white" stroke="white" strokeWidth="4" />
                      <path d="M35,30 Q30,5 50,15 Q70,5 65,30" fill="white" stroke="white" strokeWidth="4" />
                      <circle cx="40" cy="45" r="4" fill="#0f172a" />
                      <circle cx="60" cy="45" r="4" fill="#0f172a" />
                      <path d="M45,55 L55,55 L50,60 Z" fill="#0f172a" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-32 bg-white/20 rounded-full mx-auto"></div>
                    <div className="h-4 w-48 bg-white/30 rounded-full mx-auto"></div>
                    <div className="h-4 w-40 bg-white/20 rounded-full mx-auto"></div>
                  </div>
                  <div className="mt-12 bg-white text-indigo-600 px-6 py-2 rounded-full font-bold">
                    Start Deciding
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-3 text-green-600 font-bold mb-1">
                <CheckCircle2 size={20} />
                <span>98% Confidence Rate</span>
              </div>
              <p className="text-xs text-slate-400">Based on user feedback</p>
            </div>
          </div>
        </div>

        <section className="py-16 border-t border-slate-100">
          <h2 className="serif text-3xl font-bold text-center mb-16">Why Happier Decisions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="text-amber-500" />,
                title: "Beat Fatigue",
                desc: "Reduce decision fatigue by offloading complex evaluations to a structured, logical process."
              },
              {
                icon: <Brain className="text-indigo-500" />,
                title: "Cognitive Science",
                desc: "Built on principles of behavioral economics to help you avoid common mental biases."
              },
              {
                icon: <Shield className="text-green-500" />,
                title: "100% Private",
                desc: "Your dilemmas are yours alone. Data is stored on your device and never uploaded to any server."
              }
            ].map((feature, i) => (
              <div key={i} className="space-y-4">
                <div className="bg-slate-50 w-12 h-12 flex items-center justify-center rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
