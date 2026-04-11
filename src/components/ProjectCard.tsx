
import React, { useEffect, useState, useRef } from 'react';
import { AppProject } from '../types';
import { ArrowUpRight, Clock, Shield, Sparkles, Smartphone, ChevronDown, ShoppingCart } from 'lucide-react';
import { ShareButton } from './ShareButton';
import { fetchAppInfo, AppInfo } from '../services/gemini';

interface ProjectCardProps {
  project: AppProject;
  index: number;
  onShowHappierPrivacy?: () => void;
  onShowFit4GymiPrivacy?: () => void;
  isWide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  index, 
  onShowHappierPrivacy, 
  onShowFit4GymiPrivacy,
  isWide = false
}) => {
  const [info, setInfo] = useState<AppInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [screenshotError, setScreenshotError] = useState(false);
  const [showBookstores, setShowBookstores] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScreenshotError = () => {
    setScreenshotError(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowBookstores(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Skip fetching if we already have a local screenshot
    if (project.localScreenshotUrl) return;

    const link = project.link;
    if (link && link.includes('apps.apple.com') && !info && !loading) {
      const timer = setTimeout(() => {
        setLoading(true);
        fetchAppInfo(link).then(data => {
          setInfo(data);
          setLoading(false);
        }).catch(() => setLoading(false));
      }, index * 1000);
      return () => clearTimeout(timer);
    }
  }, [project.link, project.localScreenshotUrl, index]);

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (project.id === 'happier-decisions' && onShowHappierPrivacy) {
      onShowHappierPrivacy();
    } else if (project.id === 'fit4gymi' && onShowFit4GymiPrivacy) {
      onShowFit4GymiPrivacy();
    }
  };

  const displayScreenshot = project.localScreenshotUrl || info?.screenshotUrl;
  const displayTagline = project.tagline || info?.tagline;

  return (
    <div 
      className={`group flex flex-col ${isWide ? 'lg:flex-row' : ''} h-full rounded-2xl border transition-all duration-300 overflow-hidden ${
        project.featured 
          ? 'bg-white border-indigo-100 shadow-lg shadow-indigo-100/50' 
          : 'bg-white border-slate-200 hover:border-indigo-200 hover:shadow-md'
      }`}
    >
      {/* Screenshot Section */}
      <div className={`${isWide ? 'lg:w-3/5' : 'w-full'} ${!isWide && project.id === 'fit4gymi' ? 'aspect-[2/3]' : 'aspect-video'} bg-slate-100 overflow-hidden relative ${project.id === 'fit4gymi' ? 'p-4 lg:p-8' : ''}`}>
        {displayScreenshot && !screenshotError ? (
          <img 
            src={displayScreenshot} 
            alt={`${project.name} screenshot`}
            className={`w-full h-full ${project.id === 'fit4gymi' ? 'object-contain' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
            onError={handleScreenshotError}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50">
            <Smartphone size={48} className="text-slate-200" />
          </div>
        )}
        {project.featured && (
          <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center space-x-1">
            <Sparkles size={10} />
            <span>Featured App</span>
          </div>
        )}
      </div>

      <div className={`p-5 flex-grow space-y-3 flex flex-col ${isWide ? 'lg:w-2/5 lg:p-8' : ''}`}>
        <div className="flex items-center justify-between">
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
              {displayTagline}
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

        <div className="pt-3 space-y-1.5 relative" ref={dropdownRef}>
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

          {project.bookstoreLinks && project.bookstoreLinks.length > 0 && (
            <div className="relative">
              <button 
                onClick={() => setShowBookstores(!showBookstores)}
                className="w-full inline-flex items-center justify-center space-x-1.5 bg-white text-slate-900 border border-slate-200 px-3 py-2 rounded-lg text-[11px] font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95"
              >
                <ShoppingCart size={12} />
                <span>Get the Book</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${showBookstores ? 'rotate-180' : ''}`} />
              </button>

              {showBookstores && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="p-2 bg-slate-50 border-b border-slate-100">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Select Store</p>
                  </div>
                  <div className="p-1">
                    {project.bookstoreLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-[11px] font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        onClick={() => setShowBookstores(false)}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={10} className="opacity-50" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {project.reviewLink && (
            <a 
              href={project.reviewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-2 rounded-lg text-[11px] font-bold hover:bg-indigo-100 transition-all active:scale-95"
            >
              <Sparkles size={12} className="text-indigo-500" />
              <span>FREE reader copies for honest feedback</span>
            </a>
          )}

          {(onShowHappierPrivacy || onShowFit4GymiPrivacy) && (
            <button 
              onClick={handlePrivacyClick}
              className="w-full flex items-center justify-center space-x-1 text-[10px] text-slate-400 hover:text-indigo-600 transition-colors py-1"
            >
              <Shield size={10} />
              <span>Privacy Policy & Terms of Use</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
