
import React, { useEffect, useState } from 'react';
import { ArrowLeft, Shield, Lock, Mic, Mail, Info, CheckCircle, GraduationCap, Send, AlertCircle, Languages, Sparkles } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

type Language = 'en' | 'de-ch';

export const Fit4GymiPrivacy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    en: {
      title: "Privacy Policy for Fit4Gymi",
      updated: "Last Updated: February 2026",
      intro: "Fit4Gymi (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we handle information in our mobile application.",
      sections: {
        data: {
          title: "1. Data Collection",
          desc: "We do not collect any personally identifiable information (PII).",
          camera: "Used only locally to process math scans and voice interaction. Data is sent to Google Gemini or Claude API for analysis and is not stored by us.",
          purchases: "Transactions are handled entirely by Apple. We do not have access to your credit card details."
        },
        thirdParty: {
          title: "2. Third-Party Services",
          desc: "We use Google Gemini or Claude API for educational content generation. Please refer to Google's and Anthropic's Privacy Policies regarding their AI services."
        },
        security: {
          title: "3. Data Security",
          desc: "Since we do not store user data on our own servers, there is no personal data at risk of breach from our side."
        },
        children: {
          title: "4. Children's Privacy",
          desc: "Our app is designed for students. We do not knowingly collect personal data from children. All processing is educational in nature."
        },
        terms: {
          title: "Terms of Use",
          desc: "Fit4Gymi is an educational aid. While we strive for accuracy using advanced AI (Gemini or Claude), the content generated should be used as a supplement to official study materials. We are not responsible for exam results or academic performance. By using this app, you also agree to the Apple Standard EULA (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).",
          aiNoteTitle: "A Note on AI",
          aiNote: "We use state-of-the-art AI technology to support you in the best possible way. However, since AI can sometimes \"hallucinate\" (make small mistakes), we have tested the app extensively and are constantly optimizing it. Your feedback helps us make the app better every day!"
        },
        contact: {
          title: "5. Contact",
          desc: "If you have questions, please contact us at:"
        }
      },
      contactForm: {
        title: "Contact Us",
        subtitle: "If you have questions about Fit4Gymi or our policies, please reach out.",
        name: "Name",
        email: "Email",
        message: "Your inquiry...",
        send: "Send Message",
        sent: "Message Sent!",
        sentDesc: "Thank you for reaching out. Your message has been received and we'll get back to you soon.",
        sendAnother: "Send another message"
      }
    },
    'de-ch': {
      title: "Datenschutzerklärung für Fit4Gymi",
      updated: "Zuletzt aktualisiert: Februar 2026",
      intro: "Fit4Gymi (\"wir\", \"unser\" oder \"uns\") setzt sich für den Schutz Ihrer Privatsphäre ein. Diese Datenschutzerklärung erläutert, wie wir mit Informationen in unserer mobilen Anwendung umgehen.",
      sections: {
        data: {
          title: "1. Datenerhebung",
          desc: "Wir sammeln keine personenbezogenen Daten (PII).",
          camera: "Kamera/Mikrofon - Wird nur lokal verwendet, um Mathe-Scans und Sprachinteraktionen zu verarbeiten. Die Daten werden zur Analyse an die Google Gemini oder Claude API gesendet und nicht von uns gespeichert.",
          purchases: "In-App-Käufe - Transaktionen werden vollständig von Apple abgewickelt. Wir haben keinen Zugriff auf Ihre Kreditkartendaten."
        },
        thirdParty: {
          title: "2. Drittanbieter-Dienste",
          desc: "Wir nutzen die Google Gemini oder Claude API zur Erstellung von Bildungsinhalten. Bitte beachten Sie die Datenschutzerklärungen von Google und Anthropic bezüglich ihrer KI-Dienste."
        },
        security: {
          title: "3. Datensicherheit",
          desc: "Da wir keine Nutzerdaten auf unseren eigenen Servern speichern, besteht von unserer Seite aus kein Risiko für eine Verletzung des Schutzes personenbezogener Daten."
        },
        children: {
          title: "4. Privatsphäre von Kindern",
          desc: "Unsere App wurde für Schüler entwickelt. Wir sammeln wissentlich keine personenbezogenen Daten von Kindern. Die gesamte Verarbeitung dient Bildungszwecken."
        },
        terms: {
          title: "Nutzungsbedingungen",
          desc: "Fit4Gymi ist ein Hilfsmittel für den Unterricht. Obwohl wir uns um Genauigkeit bemühen und fortschrittliche KI (Gemini oder Claude) einsetzen, sollten die generierten Inhalte als Ergänzung zu den offiziellen Lernmaterialien verwendet werden. Wir sind nicht verantwortlich für Prüfungsergebnisse oder schulische Leistungen. Durch die Nutzung dieser App erklären Sie sich auch mit der Apple Standard-EULA (https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) einverstanden.",
          aiNoteTitle: "Ein Hinweis zu KI",
          aiNote: "Wir nutzen modernste KI-Technologie, um Sie bestmöglich zu unterstützen. Da KI jedoch manchmal \"halluzinieren\" kann (kleine Fehler machen kann), haben wir die App ausgiebig getestet und optimieren sie ständig. Ihr Feedback hilft uns, die App jeden Tag besser zu machen!"
        },
        contact: {
          title: "5. Kontakt",
          desc: "Wenn Sie Fragen haben, kontaktieren Sie uns bitte unter:"
        }
      },
      contactForm: {
        title: "Kontaktieren Sie uns",
        subtitle: "Wenn Sie Fragen zu Fit4Gymi oder unseren Richtlinien haben, wenden Sie sich bitte an uns.",
        name: "Name",
        email: "E-Mail",
        message: "Ihre Anfrage...",
        send: "Nachricht senden",
        sent: "Nachricht gesendet!",
        sentDesc: "Vielen Dank für Ihre Kontaktaufnahme. Ihre Nachricht wurde empfangen und wir werden uns in Kürze bei Ihnen melden.",
        sendAnother: "Weitere Nachricht senden"
      }
    }
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mqaeapzo', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center bg-slate-100 p-1 rounded-xl">
            <div className="px-2 text-slate-400">
              <Languages size={16} />
            </div>
            <button 
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${lang === 'en' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLang('de-ch')}
              className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${lang === 'de-ch' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Deutsch (CH)
            </button>
          </div>
        </div>

        <header className="mb-16">
          <div className="inline-flex items-center space-x-3 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl mb-6">
            <GraduationCap size={20} />
            <span className="font-bold tracking-tight uppercase text-xs">Educational Privacy</span>
          </div>
          <h1 className="serif text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-4">
            {t.title}
          </h1>
          <p className="text-slate-500 font-medium">
            {t.updated}
          </p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12">
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <p className="text-lg text-slate-700 leading-relaxed">
              {t.intro}
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="text-indigo-600" size={24} />
              <h2 className="serif text-2xl font-bold text-slate-900">{t.sections.data.title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t.sections.data.desc}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-2 text-indigo-600 font-bold mb-3">
                  <Mic size={18} />
                  <span>Kamera / Mikrofon</span>
                </div>
                <p className="text-sm text-slate-600">
                  {t.sections.data.camera}
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="flex items-center space-x-2 text-indigo-600 font-bold mb-3">
                  <CheckCircle size={18} />
                  <span>In-App Purchases</span>
                </div>
                <p className="text-sm text-slate-600">
                  {t.sections.data.purchases}
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <Info className="text-indigo-600" size={24} />
              <h2 className="serif text-2xl font-bold text-slate-900">{t.sections.thirdParty.title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t.sections.thirdParty.desc}
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <Lock className="text-indigo-600" size={24} />
              <h2 className="serif text-2xl font-bold text-slate-900">{t.sections.security.title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t.sections.security.desc}
            </p>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-3">
              <GraduationCap className="text-indigo-600" size={24} />
              <h2 className="serif text-2xl font-bold text-slate-900">{t.sections.children.title}</h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t.sections.children.desc}
            </p>
          </section>

          <section className="space-y-6 pt-8 border-t border-slate-100">
            <div className="flex items-center space-x-3">
              <Shield className="text-indigo-600" size={24} />
              <h2 className="serif text-2xl font-bold text-slate-900">{t.sections.terms.title}</h2>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
              <p className="text-slate-700 leading-relaxed text-sm">
                {t.sections.terms.desc}
              </p>
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2 flex items-center">
                  <Sparkles size={14} className="mr-1" />
                  {t.sections.terms.aiNoteTitle}
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm italic">
                  {t.sections.terms.aiNote}
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section id="contact" className="pt-20 border-t border-slate-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-indigo-600 text-white p-3 rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h2 className="serif text-2xl font-bold text-slate-900">{t.contactForm.title}</h2>
              <p className="text-slate-500 max-w-md mx-auto">
                {t.contactForm.subtitle}
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                  <div className="bg-green-100 p-4 rounded-full text-green-600">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="serif text-2xl font-bold text-slate-900">{t.contactForm.sent}</h3>
                  <p className="text-slate-600">{t.contactForm.sentDesc}</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    {t.contactForm.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder={t.contactForm.name}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder={t.contactForm.email}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    placeholder={t.contactForm.message}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                  ></textarea>
                  
                  {status === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm">
                      <AlertCircle size={18} />
                      <span>Something went wrong. Please try again later.</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>{t.contactForm.send}</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    Direct inquiries: booksandappsbyeja@gmail.com
                  </p>
                </form>
              )}
            </div>
          </section>

          <section className="pt-12 border-t border-slate-100">
            <div className="bg-indigo-600 text-white p-8 rounded-3xl text-center">
              <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h2 className="serif text-2xl font-bold mb-2">{t.sections.contact.title}</h2>
              <p className="mb-6 opacity-90">{t.sections.contact.desc}</p>
              <a 
                href="mailto:booksandappsbyeja@gmail.com" 
                className="text-xl font-bold hover:underline"
              >
                booksandappsbyeja@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
