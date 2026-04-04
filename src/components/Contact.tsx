
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const path = 'messages';
    try {
      await addDoc(collection(db, path), {
        name: data.name,
        email: data.email,
        subject: data._subject || '',
        message: data.message,
        createdAt: serverTimestamp()
      });

      setStatus('success');
      form.reset();
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Have a question about my books, an inquiry about a project, or just want to say hello? 
              Please use the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form Container */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
            {status === 'success' ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                <div className="bg-green-100 p-4 rounded-full text-green-600">
                  <CheckCircle size={48} />
                </div>
                <h3 className="serif text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-600">Thank you for reaching out. Your message has been received.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      placeholder="Your Name"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="_subject" 
                    placeholder="How can I help?"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    placeholder="Type your message here..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full group flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
