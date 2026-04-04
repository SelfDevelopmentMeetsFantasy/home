
import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Clock, Shield, Sparkles, Smartphone, Share2 } from 'lucide-react';
import { ShareButton } from './ShareButton';
import { fetchAppInfo, AppInfo } from '../services/gemini';

interface AppsProps {
  onShowHappierPrivacy: () => void;
  onShowFit4GymiPrivacy: () => void;
}

const ProjectCard: React.FC<{ 
  project: typeof PROJECTS[0], 
  index: number,
  onShowHappierPrivacy: () => void, 
  onShowFit4GymiPrivacy: () => void 
}> = ({ project, index, onShowHappierPrivacy, onShowFit4GymiPrivacy }) => {
  const [info, setInfo] = useState<AppInfo | null>(project.localImageUrl ? {
    logoUrl: project.localImageUrl,
    tagline: project.tagline
  } : project.logoUrl ? {
    logoUrl: project.logoUrl,
    tagline: project.tagline
  } : null);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    // If local logo fails, try to fetch from store if applicable
    if (info?.logoUrl === project.localImageUrl && project.link?.includes('apps.apple.com')) {
      setLoading(true);
      fetchAppInfo(project.link).then(data => {
        setInfo(data);
        setLoading(false);
      }).catch(() => {
        setLoading(false);
        setHasError(true);
      });
    } else {
      setHasError(true);
    }
  };

  useEffect(() => {
    // If we already have info (from hardcoded or previous fetch), don't fetch again
    if (info?.logoUrl && info.logoUrl !== project.localImageUrl) return;

    const link = project.link;
    if (link && link.includes('apps.apple.com') && !info && !loading) {
      const timer = setTimeout(() => {
        setLoading(true);
        fetchAppInfo(link).then(data => {
          setInfo(data);
          setLoading(false);
        }).catch(() => setLoading(false));
      }, index * 1000); // 1 second stagger
      return () => clearTimeout(timer);
    }
  }, [project.link, project.logoUrl, project.localImageUrl, index]);

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (project.id === 'happier-decisions') {
      onShowHappierPrivacy();
    } else if (project.id === 'fit4gymi') {
      onShowFit4GymiPrivacy();
    }
  };

  return (
    <div 
      className={`group flex flex-col h-full p-5 rounded-2xl border transition-all duration-300 ${
        project.featured 
          ? 'bg-white border-indigo-100 shadow-lg shadow-indigo-100/50' 
          : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
      }`}
    >
      <div className="flex-grow space-y-3 flex flex-col">
        <div className="flex items-start justify-between">
          <div className={`overflow-hidden rounded-xl p-0.5 ${project.featured ? 'bg-indigo-50' : 'bg-slate-50'}`}>
            {loading ? (
              <div className="w-12 h-12 bg-white animate-pulse rounded-lg flex items-center justify-center">
                <Sparkles size={16} className="text-slate-200" />
              </div>
            ) : info?.logoUrl ? (
              <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm overflow-hidden relative">
                {info.logoUrl && !hasError ? (
                  <img 
                    src={info.logoUrl} 
                    alt={project.name} 
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    referrerPolicy="no-referrer"
                    onLoad={() => setIsLoaded(true)}
                    onError={handleImageError}
                  />
                ) : null}
                {(!isLoaded || hasError) && (
                  <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-2">
                    {project.id === 'happier-decisions' ? (
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="white" stroke="#0f172a" strokeWidth="4" />
                        <path d="M35,30 Q30,5 50,15 Q70,5 65,30" fill="white" stroke="#0f172a" strokeWidth="4" />
                        <circle cx="40" cy="45" r="4" fill="#0f172a" />
                        <circle cx="60" cy="45" r="4" fill="#0f172a" />
                        <path d="M45,55 L55,55 L50,60 Z" fill="#0f172a" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 100 100" className="w-full h-full text-[#7c83fd]" fill="currentColor">
                        <path d="M30,50 Q30,20 50,20 Q70,20 70,50 Q70,80 50,80 Q30,80 30,50" stroke="#7c83fd" strokeWidth="4" fill="none" />
                        <rect x="15" y="45" width="70" height="10" rx="2" />
                        <circle cx="15" cy="50" r="5" fill="#7c83fd" />
                        <circle cx="85" cy="50" r="5" fill="#7c83fd" />
                      </svg>
                    )}
                  </div>
                )}
                {!(info.logoUrl === project.localImageUrl) && (
                  <div className="absolute bottom-0 right-0 bg-indigo-600 p-0.5 rounded-tl-md">
                    <Sparkles size={6} className="text-white" />
                  </div>
                )}
              </div>
            ) : (
              <div className={`w-12 h-12 p-2 flex items-center justify-center rounded-lg shadow-sm ${project.id === 'happier-decisions' ? 'bg-white' : 'bg-[#7c83fd]'}`}>
                {project.id === 'happier-decisions' ? (
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="white" stroke="#0f172a" strokeWidth="4" />
                    <path d="M35,30 Q30,5 50,15 Q70,5 65,30" fill="white" stroke="#0f172a" strokeWidth="4" />
                    <circle cx="40" cy="45" r="4" fill="#0f172a" />
                    <circle cx="60" cy="45" r="4" fill="#0f172a" />
                    <path d="M45,55 L55,55 L50,60 Z" fill="#0f172a" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="currentColor">
                    <path d="M30,50 Q30,20 50,20 Q70,20 70,50 Q70,80 50,80 Q30,80 30,50" stroke="white" strokeWidth="4" fill="none" />
                    <rect x="15" y="45" width="70" height="10" rx="2" />
                  </svg>
                )}
              </div>
            )}
          </div>
          <span className={`text-[9px] font-bold uppercase tracking-tighter px-2 py-0.5 rounded-full ${
            project.status === 'Published' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-amber-100 text-amber-700'
          }`}>
            {project.status === 'In Progress' && <Clock size={8} className="inline mr-1" />}
            {project.status}
          </span>
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <h3 className="serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
              {project.name}
            </h3>
            <p className="text-indigo-600 font-bold text-[9px] uppercase tracking-wider mt-0.5">
              {info?.tagline || project.tagline}
            </p>
          </div>
          <ShareButton 
            title={project.name}
            text={`Check out "${project.name}" on the App Store`}
            url={project.link || window.location.href}
            className="ml-2 flex-shrink-0"
          />
        </div>

        <p className="text-slate-600 leading-relaxed text-[13px] flex-grow">
          {project.description}
        </p>

        <div className="pt-3 space-y-1.5">
          <p className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest text-center mb-1">{project.platform}</p>
          
          {project.link ? (
            <a 
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-900 text-white px-3 py-2 rounded-lg text-[11px] font-bold hover:bg-indigo-600 transition-all shadow-sm active:scale-95"
            >
              <span>Get App</span>
              <ArrowUpRight size={12} />
            </a>
          ) : (
            <div className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-100 text-slate-400 px-3 py-2 rounded-lg text-[11px] font-bold cursor-not-allowed">
               <span>Coming Soon</span>
            </div>
          )}

          <button 
            onClick={handlePrivacyClick}
            className="w-full flex items-center justify-center space-x-1 text-[10px] text-slate-400 hover:text-indigo-600 transition-colors py-1"
          >
            <Shield size={10} />
            <span>Privacy Policy & Terms of Use</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const Apps: React.FC<AppsProps> = ({ onShowHappierPrivacy, onShowFit4GymiPrivacy }) => {
  return (
    <section id="apps" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-12">
          <div className="max-w-2xl">
            <h2 className="serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Digital Ecosystem</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Interactive solutions born from deep research and modern AI. 
              From decision-making frameworks to educational coaching.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onShowHappierPrivacy={onShowHappierPrivacy} 
              onShowFit4GymiPrivacy={onShowFit4GymiPrivacy} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
