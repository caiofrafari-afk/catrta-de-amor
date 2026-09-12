/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { DEFAULT_LOVE_DATA } from './data/defaultData';
import { LoveDeclarationData, ReasonItem, TimelineEvent } from './types';
import { romanticAudio } from './utils/audio';
import { FloatingHearts } from './components/FloatingHearts';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { LoveStoryTimeline } from './components/LoveStoryTimeline';
import { ReasonsWhyILoveYou } from './components/ReasonsWhyILoveYou';
import { LoveLetterSection } from './components/LoveLetterSection';
import { LovePromises } from './components/LovePromises';
import { TheBigQuestion } from './components/TheBigQuestion';
import { LoveCertificateModal } from './components/LoveCertificateModal';
import { CustomizeModal } from './components/CustomizeModal';
import { FooterSection } from './components/FooterSection';
import { Music, Volume2, VolumeX, Heart, Award, Sparkles } from 'lucide-react';

const STORAGE_KEY = 'love_declaration_page_data_v3';
const ACCEPTED_STORAGE_KEY = 'love_declaration_accepted_v3';

export default function App() {
  const [data, setData] = useState<LoveDeclarationData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return DEFAULT_LOVE_DATA;
  });

  const [isAccepted, setIsAccepted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(ACCEPTED_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);

  // Sync data to localStorage
  const handleSaveData = (newData: LoveDeclarationData) => {
    setData(newData);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch {
      // ignore
    }
  };

  const handleToggleMusic = () => {
    romanticAudio.toggle(setIsPlayingMusic);
  };

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

  const handleUpdateLetter = (updated: {
    letterTitle: string;
    letterGreeting: string;
    letterBody: string[];
    letterClosing: string;
    letterSignature: string;
  }) => {
    const updatedData: LoveDeclarationData = {
      ...data,
      letterTitle: updated.letterTitle,
      letterGreeting: updated.letterGreeting,
      letterBody: updated.letterBody,
      letterClosing: updated.letterClosing,
      letterSignature: updated.letterSignature
    };
    handleSaveData(updatedData);
  };

  const handleUpdateReasons = (newReasons: ReasonItem[]) => {
    const updatedData: LoveDeclarationData = {
      ...data,
      reasons: newReasons
    };
    handleSaveData(updatedData);
  };

  const handleUpdateTimeline = (newTimeline: TimelineEvent[]) => {
    const updatedData: LoveDeclarationData = {
      ...data,
      timeline: newTimeline
    };
    handleSaveData(updatedData);
  };

  const handleScrollToLetter = () => {
    const element = document.getElementById('carta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50/50 via-pink-50/30 to-rose-100/40 text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Gentle ambient floating hearts and interactive click reaction */}
      <FloatingHearts />

      {/* Main Top Header */}
      <HeaderNav
        senderName={data.senderName}
        receiverName={data.receiverName}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={handleToggleMusic}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
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

        {/* 2. Nossa História (Interactive Story & Milestones) */}
        <LoveStoryTimeline
          timeline={data.timeline}
          onUpdateTimeline={handleUpdateTimeline}
        />

        {/* 3. Motivos Pelos Quais Eu Te Amo (Interactive Cards & Random Draw) */}
        <ReasonsWhyILoveYou
          reasons={data.reasons}
          onUpdateReasons={handleUpdateReasons}
          receiverName={data.receiverName}
        />

        {/* 4. A Carta de Amor (Parchment & Customization) */}
        <LoveLetterSection
          letterTitle={data.letterTitle}
          letterGreeting={data.letterGreeting}
          letterBody={data.letterBody}
          letterClosing={data.letterClosing}
          letterSignature={data.letterSignature}
          senderName={data.senderName}
          receiverName={data.receiverName}
          onUpdateLetter={handleUpdateLetter}
        />

        {/* 5. Nossas Promessas */}
        <LovePromises
          senderName={data.senderName}
          receiverName={data.receiverName}
        />

        {/* 6. O Grande Pedido (SIM / Não evasivo com chuva de confetes) */}
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
        onOpenCustomize={() => setIsCustomizeOpen(true)}
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
          onClick={handleToggleMusic}
          className={`flex items-center gap-2 rounded-full p-3 shadow-xl backdrop-blur-md transition-all hover:scale-105 ${
            isPlayingMusic
              ? 'bg-rose-600 text-white shadow-rose-300 animate-pulse'
              : 'border border-rose-200 bg-white/90 text-rose-600 hover:bg-rose-50 shadow-rose-100'
          }`}
          title={isPlayingMusic ? 'Pausar música romântica' : 'Ouvir melodia suave ao fundo'}
        >
          {isPlayingMusic ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
        </button>
      </div>

      {/* Modals */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        data={data}
        onSave={handleSaveData}
      />

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
