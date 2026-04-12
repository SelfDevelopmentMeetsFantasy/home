
import React, { useEffect } from 'react';
import { BlogPost } from '../types';
import { ArrowUpRight, Linkedin, MessageSquare, Calendar, Tag, ExternalLink } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const isLinkedIn = post.source === 'LinkedIn';
  const isReddit = post.source === 'Reddit';

  useEffect(() => {
    if (isReddit && post.htmlEmbed) {
      // Load Reddit script if not already present
      if (!document.getElementById('reddit-embed-script')) {
        const script = document.createElement('script');
        script.id = 'reddit-embed-script';
        script.src = 'https://embed.reddit.com/widgets.js';
        script.async = true;
        script.charset = 'UTF-8';
        document.body.appendChild(script);
      } else {
        // If script exists, we might need to re-trigger it
        // Reddit widgets usually scan the DOM on load, but for dynamic content
        // we might need to call their init if available.
        // For now, let's hope it picks up the new blockquotes.
      }
    }
  }, [isReddit, post.htmlEmbed]);

  return (
    <div className="group flex flex-col h-full rounded-2xl border border-slate-100 hover:bg-slate-50/50 transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-md">
      {/* Embed or Image Section */}
      <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
        {post.htmlEmbed ? (
          <div 
            className="w-full h-full overflow-auto p-2 bg-white flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: post.htmlEmbed }}
          />
        ) : post.embedUrl ? (
          <iframe
            src={post.embedUrl}
            className="w-full h-full border-0"
            title={post.title}
            allowFullScreen
          />
        ) : post.localImageUrl || post.imageUrl ? (
          <img
            src={post.localImageUrl || post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50">
            {isLinkedIn ? (
              <Linkedin size={48} className="text-slate-200" />
            ) : isReddit ? (
              <MessageSquare size={48} className="text-slate-200" />
            ) : (
              <ExternalLink size={48} className="text-slate-200" />
            )}
          </div>
        )}
      </div>

      <div className="flex-grow space-y-3 flex flex-col p-5">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-2 px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
            isLinkedIn ? 'bg-blue-50 text-blue-600' : 
            isReddit ? 'bg-orange-50 text-orange-600' : 
            'bg-slate-50 text-slate-600'
          }`}>
            {isLinkedIn && <Linkedin size={12} />}
            {isReddit && <MessageSquare size={12} />}
            <span>{post.source}</span>
          </div>
          <div className="flex items-center space-x-1 text-[10px] font-medium text-slate-400">
            <Calendar size={10} />
            <span>{post.date}</span>
          </div>
        </div>

        <h3 className="serif text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">
          {post.title}
        </h3>
        
        <p className="text-slate-600 leading-relaxed text-[13px]">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {post.tags.map(tag => (
            <span key={tag} className="flex items-center space-x-1 text-[9px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">
              <Tag size={8} />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        <div className="pt-4 mt-auto">
          <a 
            href={post.externalUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center space-x-1.5 bg-slate-900 text-white px-3 py-2.5 rounded-lg text-[11px] font-bold hover:bg-indigo-600 transition-all shadow-sm active:scale-95"
          >
            <span>Read Full Post</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};
