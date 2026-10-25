import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import FieldNotes from './components/FieldNotes';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import OfflineBanner from './components/OfflineBanner';
import ProgressBar from './components/ProgressBar';
import SectionSeparator from './components/SectionSeparator';

export default function App() {
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <ProgressBar />
      <OfflineBanner />
      <CommandPalette isOpen={cmdPaletteOpen} onClose={setCmdPaletteOpen} />
      <Header onOpenCmdPalette={setCmdPaletteOpen} />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <Hero />
          <SectionSeparator />
          <Projects />
          <SectionSeparator />
          <Experience />
          <SectionSeparator />
          <FieldNotes />
          <SectionSeparator />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
