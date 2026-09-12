/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DEFAULT_LOVE_DATA } from './data/defaultData';
import { FloatingHearts } from './components/FloatingHearts';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { LoveStoryTimeline } from './components/LoveStoryTimeline';
import { ReasonsWhyILoveYou } from './components/ReasonsWhyILoveYou';
import { LoveLetterSection } from './components/LoveLetterSection';
import { MusicDedication } from './components/MusicDedication';
import { LovePromises } from './components/LovePromises';
import { TheBigQuestion } from './components/TheBigQuestion';
import { LoveCertificateModal } from './components/LoveCertificateModal';
import { FooterSection } from './components/FooterSection';
import { Volume2, Award } from 'lucide-react';

const ACCEPTED_STORAGE_KEY = 'love_declaration_accepted_v4';

// Página imutável: todo o conteúdo vem de DEFAULT_LOVE_DATA.
// Sem personalização, sem edição, sem adicionar/remover.
export default function App() {
  const data = DEFAULT_LOVE_DATA;

  const [isAccepted, setIsAccepted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(ACCEPTED_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  const handleAcceptProposal = () => {
    setIsAccepted(true);
    try {
      localStorage.setItem(ACCEPTED_STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
    // Automatically open the official certificate modal for a delightful reaction
    setTimeout(() => {
      setIsCertificateOpen(true);
    }, 900);
  };

  const handleScrollToLetter = () => {
    const element = document.getElementById('carta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToMusic = () => {
    const element = document.getElementById('musica');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-pink-50/60 to-amber-50/40 text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Gentle ambient floating hearts and interactive click reaction */}
      <FloatingHearts />

      {/* Decorative top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[420px] w-full max-w-6xl -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-200/50 via-pink-100/30 to-transparent blur-3xl" />

      {/* Main Top Header */}
      <HeaderNav
        senderName={data.senderName}
        receiverName={data.receiverName}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section with Names, infinity badge and live relationship clock */}
        <HeroSection
          senderName={data.senderName}
          receiverName={data.receiverName}
          startDate={data.startDate}
          headline={data.headline}
          subheadline={data.subheadline}
          songDedication={data.songDedication}
          onScrollToLetter={handleScrollToLetter}
        />

        {/* 2. Nossa História */}
        <LoveStoryTimeline
          timeline={data.timeline}
        />

        {/* 3. Motivos Pelos Quais Eu Te Amo */}
        <ReasonsWhyILoveYou
          reasons={data.reasons}
          receiverName={data.receiverName}
        />

        {/* 4. A Carta de Amor */}
        <LoveLetterSection
          letterTitle={data.letterTitle}
          letterGreeting={data.letterGreeting}
          letterBody={data.letterBody}
          letterClosing={data.letterClosing}
          letterSignature={data.letterSignature}
          senderName={data.senderName}
          receiverName={data.receiverName}
        />

        {/* 5. Nossa Música — Um Amor Puro, Djavan */}
        <MusicDedication
          title={data.songDedication.title}
          artist={data.songDedication.artist}
          message={data.songDedication.message}
          receiverName={data.receiverName}
        />

        {/* 6. Nossas Promessas */}
        <LovePromises
          senderName={data.senderName}
          receiverName={data.receiverName}
        />

        {/* 7. O Grande Pedido */}
        <TheBigQuestion
          proposalQuestion={data.proposalQuestion}
          proposalSubtext={data.proposalSubtext}
          senderName={data.senderName}
          receiverName={data.receiverName}
          onAccept={handleAcceptProposal}
          isAccepted={isAccepted}
        />
      </main>

      {/* Footer */}
      <FooterSection
        senderName={data.senderName}
        receiverName={data.receiverName}
      />

      {/* Persistent Floating Controls (Bottom) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 print:hidden">
        {isAccepted && (
          <button
            type="button"
            onClick={() => setIsCertificateOpen(true)}
            className="flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/90 px-4 py-2 text-xs font-semibold text-amber-900 shadow-lg shadow-amber-200/50 backdrop-blur-sm transition-transform hover:scale-105"
            title="Ver certificado oficial de amor"
          >
            <Award className="h-4 w-4 text-amber-600" />
            <span>Nosso Certificado ❤️</span>
          </button>
        )}

        <button
          type="button"
          onClick={handleScrollToMusic}
          className="flex items-center gap-2 rounded-full border border-rose-200 bg-white/90 p-3 text-rose-600 shadow-xl shadow-rose-100 backdrop-blur-md transition-all hover:scale-105 hover:bg-rose-50"
          title="Ouvir nossa música: Um Amor Puro — Djavan"
        >
          <Volume2 className="h-5 w-5" />
        </button>
      </div>

      {/* Certificate Modal */}
      <LoveCertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        senderName={data.senderName}
        receiverName={data.receiverName}
        startDate={data.startDate}
      />
    </div>
  );
}
