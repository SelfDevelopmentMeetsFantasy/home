
import React from 'react';
import { ArrowLeft, Rocket, Target, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

interface MarketingProps {
  onBack: () => void;
}

export const Fit4GymiMarketing: React.FC<MarketingProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white animate-fade-in-up">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 mb-12 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Zurück zur Übersicht</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 text-blue-700 text-sm font-medium">
              <Rocket size={16} />
              <span>Die Revolution der Gymi-Vorbereitung</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-[#7c83fd] p-2 rounded-2xl shadow-lg flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="currentColor">
                    <path d="M30,50 Q30,20 50,20 Q70,20 70,50 Q70,80 50,80 Q30,80 30,50" stroke="white" strokeWidth="4" fill="none" />
                    <rect x="15" y="45" width="70" height="10" rx="2" />
                    <circle cx="15" cy="50" r="5" />
                    <circle cx="85" cy="50" r="5" />
                  </svg>
              </div>
              <h1 className="serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Fit4Gymi
              </h1>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Der KI-Coach für den Gymi-Erfolg 🚀
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Die erste intelligente App, die speziell dafür entwickelt wurde, Sechstklässler stressfrei und erfolgreich durch die Schweizer Gymnasium-Aufnahmeprüfung (ZAP) zu begleiten.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <p className="text-slate-700 italic">
                 "Stell dir vor, dein Kind hätte einen persönlichen Gymi-Lehrer in der Hosentasche, der 24/7 bereitsteht – aber zu einem Bruchteil der Kosten einer klassischen Nachhilfe."
               </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/app/fit4gymi/id6759988048"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
              >
                Im App Store laden
              </a>
              <div className="flex items-center space-x-2 text-slate-400 text-sm px-4">
                <CheckCircle size={16} className="text-green-500" />
                <span>Jetzt verfügbar</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-tr from-[#7c83fd] to-indigo-900 rounded-[4rem] flex items-center justify-center p-12">
               <div className="bg-white w-full h-full rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
                  <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-widest">Fit4Gymi AI</span>
                    <svg viewBox="0 0 100 100" className="w-5 h-5" fill="white">
                       <path d="M30,50 Q30,20 50,20 Q70,20 70,50 Q70,80 50,80 Q30,80 30,50" stroke="white" strokeWidth="4" fill="none" />
                       <rect x="15" y="45" width="70" height="10" rx="2" />
                    </svg>
                  </div>
                  <div className="p-6 space-y-4 flex-grow">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0"></div>
                      <div className="bg-slate-100 p-3 rounded-2xl text-xs text-slate-600">
                        Wie löse ich diese Textaufgabe zum Dreisatz?
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 justify-end">
                      <div className="bg-indigo-600 p-3 rounded-2xl text-xs text-white max-w-[80%]">
                        Schauen wir uns das gemeinsam an! Zuerst identifizieren wir die bekannten Grössen...
                      </div>
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0"></div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-slate-100 bg-slate-50">
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-2/3 bg-green-500"></div>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2 text-center uppercase tracking-widest font-bold">Lernfortschritt: 67%</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
