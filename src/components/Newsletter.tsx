
import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    const path = 'subscribers';
    try {
      // Save to Firestore
      await addDoc(collection(db, path), {
        email: email.trim().toLowerCase(),
        createdAt: serverTimestamp()
      });
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
      // Reset to idle after 3 seconds to allow retry
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-16 text-center shadow-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 mb-8">
            <Mail className="text-indigo-400 w-8 h-8" />
          </div>
          
          <h2 className="serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Stay in the <span className="text-indigo-400 italic">Creative Loop</span>
          </h2>
          
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join the inner circle to receive updates on new book releases, 
            app launches, and exclusive surrealist insights.
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 flex flex-col items-center space-y-3"
              >
                <CheckCircle2 className="text-emerald-400 w-10 h-10" />
                <div className="text-white font-bold">You're on the list!</div>
                <p className="text-emerald-400/80 text-sm">Check your inbox for a welcome message soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs text-emerald-400/60 hover:text-emerald-400 underline underline-offset-4 mt-2"
                >
                  Subscribe another email
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className={`w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                      status === 'error' ? 'border-red-500 focus:ring-red-500/50' : 'border-white/10 focus:ring-indigo-500/50'
                    }`}
                  />
                  {status === 'error' && (
                    <p className="absolute -bottom-6 left-0 text-red-500 text-[10px] font-bold">Something went wrong. Please try again.</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2 min-w-[140px]"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center space-x-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <Sparkles size={12} className="text-indigo-500" />
              <span>No Spam</span>
            </div>
            <div className="w-1 h-1 bg-slate-700 rounded-full" />
            <div className="flex items-center space-x-2">
              <Sparkles size={12} className="text-emerald-500" />
              <span>Monthly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
