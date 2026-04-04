
import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ title, text, url, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-200 ${
        copied 
          ? 'bg-green-50 text-green-600 border-green-100' 
          : 'bg-slate-50 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border-transparent'
      } border ${className}`}
      title="Share"
    >
      {copied ? <Check size={14} /> : <Share2 size={14} />}
    </button>
  );
};
