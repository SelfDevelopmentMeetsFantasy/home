
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Books } from './components/Books';
import { Apps } from './components/Apps';
import { Newsletter } from './components/Newsletter';
import { Playlist } from './components/Playlist';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Fit4GymiPrivacy } from './components/Fit4GymiPrivacy';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'happier-privacy' | 'fit4gymi-privacy'>('home');

  const handleGoHome = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      <Navbar onGoHome={handleGoHome} />
      <main className="flex-grow">
        {view === 'home' && (
          <>
            <Hero />
            <Books />
            <Apps 
              onShowHappierPrivacy={() => setView('happier-privacy')}
              onShowFit4GymiPrivacy={() => setView('fit4gymi-privacy')}
            />
            <Newsletter />
            <Playlist />
            <Contact />
          </>
        )}
        {view === 'happier-privacy' && <PrivacyPolicy onBack={handleGoHome} />}
        {view === 'fit4gymi-privacy' && <Fit4GymiPrivacy onBack={handleGoHome} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
