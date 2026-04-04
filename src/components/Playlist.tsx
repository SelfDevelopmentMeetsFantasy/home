
import React from 'react';
import { Music, ExternalLink, Sparkles, Play, Headphones, Disc } from 'lucide-react';

export const Playlist: React.FC = () => {
  const playlistId = '1277e136-ec71-446a-ad8f-19915daedc9a';
  const playlistUrl = `https://suno.com/playlist/${playlistId}`;

  const embedIds = [
    '8e74052a-8e5c-4663-bef7-651b7e6c4e2f',
    '1e92d938-ac44-4332-ac4c-1ea9ba9026a9',
    '7d3f7f04-1a6f-4752-a2c4-085acd9b12cf',
    '8e9d83c4-93aa-462c-8788-b0136d9c762a',
    'cb543597-9ff3-472b-bd6f-0143a41029c0',
    '765a14da-efcd-4d83-9f91-67afe5104f66',
    'a7f7ebaa-998d-4910-8928-d21eb5452d92'
  ];

  return (
    <section id="music" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 px-3 py-1 rounded-full text-indigo-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles size={12} />
              <span>AI-Assisted Composition</span>
            </div>
            
            <h2 className="serif text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Sonic <span className="text-indigo-600 italic">Explorations</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              A curated collection of auditory experiments assisted by Suno AI. 
              This playlist represents a journey through diverse genres and themes, 
              where human lyrical intent meets machine-generated melodies.
            </p>

            <div className="pt-4">
              <a 
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                <span>Listen to Full Playlist</span>
                <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="serif text-2xl font-bold text-slate-900">Featured Tracks</h3>
              <Disc className="text-indigo-600 animate-spin-slow" size={24} />
            </div>

            {/* Embedded Tracks */}
            <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {embedIds.map((id, index) => (
                  <div key={id} className="w-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                    <iframe 
                      src={`https://suno.com/embed/${id}`} 
                      width="100%" 
                      height="180" 
                      style={{ border: 'none' }}
                      allow="autoplay; encrypted-media; fullscreen" 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Suno AI Featured Track ${index + 1}`}
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-[2rem] border border-indigo-100 mt-8">
              <p className="text-indigo-700 text-sm font-medium text-center italic">
                "Music is the shorthand of emotion." — These tracks are experiments in translating literary themes into sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
