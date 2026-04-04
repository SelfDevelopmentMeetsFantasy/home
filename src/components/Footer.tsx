
import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';
import { AUTHOR_STORE_LINK } from '../constants';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="serif text-2xl font-bold text-slate-900 mb-2">Eduardo J. Aleman</h2>
            <p className="text-slate-500 text-sm">Empowering humans through words and code.</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-4">
          <p>© {new Date().getFullYear()} Eduardo J. Aleman. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
            <a href={AUTHOR_STORE_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 flex items-center gap-1 transition-colors">
              Amazon Store <ExternalLink size={12} />
            </a>
            <a href="#contact" onClick={scrollToContact} className="hover:text-slate-600 transition-all">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
