
import React from 'react';
import { BOOKS, PROJECTS, BLOG_POSTS } from '../constants';
import { BookCard } from './BookCard';
import { ProjectCard } from './ProjectCard';
import { BlogCard } from './BlogCard';
import { Sparkles, GraduationCap, Sword, Newspaper } from 'lucide-react';

interface PortfolioProps {
  onShowHappierPrivacy: () => void;
  onShowFit4GymiPrivacy: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onShowHappierPrivacy, onShowFit4GymiPrivacy }) => {
  // ... existing logic ...
  const happinessItems = {
    apps: PROJECTS.filter(p => p.id === 'happier-decisions'),
    books: []
  };

  const gymiItems = {
    apps: PROJECTS.filter(p => p.id === 'fit4gymi'),
    books: []
  };

  const fantasyItems = {
    apps: [],
    books: BOOKS.filter(b => ['thousandfold-tide', 'incomplete-verses', 'versos-incompletos'].includes(b.id))
  };

  return (
    <div className="space-y-24 py-24">
      {/* Blog Section */}
      <section id="blog" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12 border-b border-slate-100 pb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
              <Newspaper size={24} />
            </div>
            <div>
              <h2 className="serif text-4xl font-bold text-slate-900">Blog & Insights</h2>
              <p className="text-slate-500 font-medium">Thoughts on writing, AI, and personal growth</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Happiness Section */}
      <section id="happiness" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12 border-b border-slate-100 pb-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="serif text-4xl font-bold text-slate-900">Happiness</h2>
              <p className="text-slate-500 font-medium">Frameworks for a more intentional life</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {happinessItems.apps.map((app, idx) => (
              <div key={app.id} className="lg:col-span-2">
                <ProjectCard 
                  project={app} 
                  index={idx} 
                  onShowHappierPrivacy={onShowHappierPrivacy}
                  isWide={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gymivorbereitung Section */}
      <section id="gymivorbereitung" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12 border-b border-slate-100 pb-8">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
              <GraduationCap size={24} />
            </div>
            <div>
              <h2 className="serif text-4xl font-bold text-slate-900">Gymivorbereitung</h2>
              <p className="text-slate-500 font-medium">Educational excellence through AI coaching</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gymiItems.apps.map((app, idx) => (
              <ProjectCard 
                key={app.id} 
                project={app} 
                index={idx} 
                onShowFit4GymiPrivacy={onShowFit4GymiPrivacy}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fantasy Section */}
      <section id="fantasy" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12 border-b border-slate-100 pb-8">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
              <Sword size={24} />
            </div>
            <div>
              <h2 className="serif text-4xl font-bold text-slate-900">Fantasy & Surrealism</h2>
              <p className="text-slate-500 font-medium">Atmospheric worlds and cosmic longing</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fantasyItems.books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
