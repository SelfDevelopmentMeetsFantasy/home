
import React, { useState, useRef, useEffect } from 'react';
import { Book } from '../types';
import { ArrowUpRight, BookOpen, Video, Clock, ChevronDown, ShoppingCart, Sparkles } from 'lucide-react';
import { ShareButton } from './ShareButton';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(book.localImageUrl || book.imageUrl);
  const [showBookstores, setShowBookstores] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleImageError = () => {
    if (imgSrc === book.localImageUrl && book.imageUrl) {
      setImgSrc(book.imageUrl);
    } else {
      setHasError(true);
    }
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

  return (
    <div className="group flex flex-col h-full rounded-2xl border border-slate-100 hover:bg-slate-50/50 transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-md">
      <div className="aspect-[2/3] w-full overflow-hidden bg-slate-100 relative">
        {imgSrc && !hasError ? (
          <img 
            src={imgSrc} 
            alt={book.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            onError={handleImageError}
          />
        ) : null}
        {hasError && (
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
            <BookOpen size={48} className="text-slate-300" />
          </div>
        )}
      </div>

      <div className="flex-grow space-y-3 flex flex-col p-5">
        <div className="flex items-center justify-between">
          <div className="w-6 h-6 rounded-lg bg-indigo-100 flex items-center justify-center">
            <BookOpen size={12} className="text-indigo-600" />
          </div>
          {book.status === 'In Progress' && (
            <span className="flex items-center space-x-1 text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              <Clock size={8} />
              <span>In Progress</span>
            </span>
          )}
        </div>

        <div className="flex items-start justify-between">
          <div>
            <h3 className="serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
              {book.title}
            </h3>
            <p className="text-indigo-500 text-[9px] font-bold uppercase tracking-wider mt-0.5">{book.subtitle}</p>
          </div>
          <ShareButton 
            title={book.title}
            text={`Check out "${book.title}" by Eduardo J. Aleman`}
            url={book.amazonLink || window.location.href}
            className="ml-2 flex-shrink-0"
          />
        </div>
        
        <p className="text-slate-600 leading-relaxed text-[13px]">
          {book.description}
        </p>

        <div className="pt-3 mt-auto space-y-1.5 relative" ref={dropdownRef}>
          {book.bookstoreLinks && book.bookstoreLinks.length > 0 ? (
            <div className="relative">
              <button 
                onClick={() => setShowBookstores(!showBookstores)}
                className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-900 text-white px-3 py-2.5 rounded-lg text-[11px] font-bold hover:bg-indigo-600 transition-all shadow-sm active:scale-95"
              >
                <ShoppingCart size={12} />
                <span>View on Bookstore</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${showBookstores ? 'rotate-180' : ''}`} />
              </button>

              {showBookstores && (
                <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-20 animate-in fade-in slide-in-from-bottom-2 duration-200">
                  <div className="p-2 bg-slate-50 border-b border-slate-100">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">Select Store</p>
                  </div>
                  <div className="p-1">
                    {book.bookstoreLinks.map((link) => (
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
          ) : book.amazonLink ? (
            <a 
              href={book.amazonLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-900 text-white px-3 py-2.5 rounded-lg text-[11px] font-bold hover:bg-indigo-600 transition-all shadow-sm active:scale-95"
            >
              <span>View on Amazon</span>
              <ArrowUpRight size={12} />
            </a>
          ) : (
            <div className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-100 text-slate-400 px-3 py-2.5 rounded-lg text-[11px] font-bold cursor-not-allowed">
              <span>Coming Soon</span>
            </div>
          )}
          
          {book.tiktokLink && (
            <a 
              href={book.tiktokLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 bg-white text-slate-600 border border-slate-200 px-3 py-2 rounded-lg text-[11px] font-bold hover:bg-slate-50 transition-all active:scale-95"
            >
              <Video size={12} className="text-slate-400" />
              <span>Watch Preview</span>
            </a>
          )}

          {book.reviewLink && (
            <a 
              href={book.reviewLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center space-x-1.5 bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-2 rounded-lg text-[11px] font-bold hover:bg-indigo-100 transition-all active:scale-95"
            >
              <Sparkles size={12} className="text-indigo-500" />
              <span>FREE reader copies for honest feedback</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
