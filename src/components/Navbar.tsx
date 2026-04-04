
import React from 'react';
import { AUTHOR_STORE_LINK } from '../constants';
import { ExternalLink } from 'lucide-react';

interface NavbarProps {
  onGoHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGoHome }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-[60] border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={onGoHome}
              className="serif text-2xl font-black tracking-tighter text-slate-900 hover:text-indigo-600 transition-colors"
            >
              Aleman.
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#books" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Books</a>
            <a href="#apps" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Apps</a>
            <a href="#music" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Music</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
          
          {/* Action Link */}
          <div className="flex items-center">
            <a 
              href={AUTHOR_STORE_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              <span>Amazon Store</span>
              <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
