import React from 'react';
import { Heart, Sparkles, ArrowDown, Music2, MailOpen } from 'lucide-react';
import { RelationshipTimer } from './RelationshipTimer';

interface HeroSectionProps {
  senderName: string;
  receiverName: string;
  startDate: string;
  headline: string;
  subheadline: string;
  songDedication: {
    title: string;
    artist: string;
    message: string;
  };
  onScrollToLetter: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  senderName,
  receiverName,
  startDate,
  headline,
  subheadline,
  songDedication,
  onScrollToLetter
}) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 md:pt-14 md:pb-20 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-5xl rounded-full bg-gradient-to-b from-rose-100/60 via-pink-50/40 to-transparent blur-3xl -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top romantic tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/80 bg-white/90 px-4 py-1.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span className="font-romantic-serif text-sm font-semibold tracking-wide text-rose-800">
              Uma declaração especial para você
            </span>
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
          </div>

          {/* Couple Names Header */}
          <div className="mt-6 flex items-center justify-center gap-3 md:gap-4">
            <span className="font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 tracking-tight">
              {senderName}
            </span>
            <div className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-md shadow-rose-300/50">
              <span className="text-xl md:text-2xl leading-none">∞</span>
            </div>
            <span className="font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 tracking-tight">
              {receiverName}
            </span>
          </div>

          {/* Main Poetic Headline */}
          <h1 className="mt-6 max-w-3xl font-romantic-serif text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] text-stone-900 tracking-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed font-light">
            {subheadline}
          </p>

          {/* Song dedication badge */}
          {songDedication.title && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-rose-200/90 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Music2 className="h-4 w-4" />
              </div>
              <div className="text-left">
                <div className="text-xs text-stone-500 font-medium">
                  Nossa Canção:{' '}
                  <strong className="text-stone-800">
                    {songDedication.title} — {songDedication.artist}
                  </strong>
                </div>
                <div className="text-xs italic text-rose-700 font-romantic-serif">
                  {songDedication.message}
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              id="hero-read-letter-btn"
              type="button"
              onClick={onScrollToLetter}
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg shadow-rose-300/60 transition-all hover:scale-[1.03] hover:shadow-xl hover:shadow-rose-400/50 active:scale-[0.98]"
            >
              <MailOpen className="h-4 w-4" />
              <span>Ler Minha Carta de Amor</span>
            </button>

            <a
              id="hero-see-story-btn"
              href="#historia"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/90 px-6 py-3.5 text-sm md:text-base font-semibold text-stone-700 shadow-sm transition-all hover:border-rose-300 hover:bg-rose-50/60 hover:text-rose-700"
            >
              <span>Nossa Linha do Tempo</span>
              <ArrowDown className="h-4 w-4 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Live Relationship Counter */}
        <div className="mt-14 max-w-3xl mx-auto">
          <RelationshipTimer
            startDate={startDate}
            senderName={senderName}
            receiverName={receiverName}
          />
        </div>
      </div>
    </section>
  );
};
