import React, { useState } from 'react';
import { Heart, Sparkles, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

interface TheBigQuestionProps {
  proposalQuestion: string;
  proposalSubtext: string;
  senderName: string;
  receiverName: string;
  onAccept: () => void;
  isAccepted: boolean;
}

const PLAYFUL_NO_PHRASES = [
  'Não',
  'Tem certeza? Pensa de novo! 😉',
  'Ops, o botão correu! 😂',
  'Essa opção está indisponível 🥰',
  'Clica no SIM logo! ❤️',
  'Você não tem como escapar do meu amor 🌹',
  'O botão Não quebrou de propósito! 😜'
];

export const TheBigQuestion: React.FC<TheBigQuestionProps> = ({
  proposalQuestion,
  proposalSubtext,
  senderName,
  receiverName,
  onAccept,
  isAccepted
}) => {
  const [noIndex, setNoIndex] = useState(0);
  const [noPosition, setNoPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);

  const triggerConfetti = () => {
    // Blast 1: center hearts & colors
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#f43f5e', '#fb7185', '#fda4af', '#f59e0b']
    });

    // Blast 2: sides
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: ['#e11d48', '#fda4af', '#ffffff']
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: ['#e11d48', '#fda4af', '#ffffff']
      });
    }, 250);

    // Audio chime
    romanticAudio.playCelebrationFanfare();
  };

  const handleYesClick = () => {
    triggerConfetti();
    onAccept();
  };

  const handleNoDodge = () => {
    // Dodge playfully within bounds
    const randomX = Math.floor((Math.random() - 0.5) * 220);
    const randomY = Math.floor((Math.random() - 0.5) * 140);
    setNoPosition({ x: randomX, y: randomY });
    setNoIndex(prev => (prev + 1) % PLAYFUL_NO_PHRASES.length);
    // Grow the YES button slightly each dodge to make it irresistible!
    setYesScale(prev => Math.min(prev + 0.12, 1.7));
  };

  return (
    <section id="pedido" className="relative py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-80 w-80 rounded-full bg-rose-200/40 blur-3xl animate-pulse" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-rose-300 bg-white/95 px-4 py-1.5 shadow-sm">
          <Heart className="h-4 w-4 fill-rose-500 text-rose-500 animate-pulse" />
          <span className="font-romantic-serif text-sm font-semibold text-rose-800">
            A Pergunta Mais Importante
          </span>
          <Sparkles className="h-4 w-4 text-amber-500" />
        </div>

        {/* The Question */}
        <h2 className="mt-6 font-romantic-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight max-w-3xl mx-auto">
          {proposalQuestion}
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-stone-600 max-w-xl mx-auto">
          {proposalSubtext}
        </p>

        {isAccepted ? (
          /* When already accepted */
          <div className="mt-10 mx-auto max-w-lg rounded-3xl border border-rose-200 bg-white/95 p-8 shadow-2xl animate-in zoom-in-95">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-inner">
              <Heart className="h-10 w-10 fill-rose-600 text-rose-600 animate-bounce" />
            </div>

            <h3 className="mt-4 font-romantic-serif text-3xl font-bold text-rose-700">
              ELA DISSE SIM! ❤️
            </h3>

            <p className="mt-2 text-stone-600 text-base leading-relaxed">
              Você acabou de fazer o <strong className="text-stone-800">{senderName}</strong> a pessoa
              mais feliz de todo o universo! Nosso amor é um compromisso eterno.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-200 hover:bg-rose-700 transition-transform active:scale-95"
              >
                <Sparkles className="h-4 w-4" />
                <span>Soltar Mais Fogos & Confetes 🎉</span>
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Yes/No Buttons */
          <div className="mt-12 relative min-h-[160px] flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {/* YES BUTTON */}
              <button
                id="proposal-yes-button"
                type="button"
                onClick={handleYesClick}
                style={{ transform: `scale(${yesScale})` }}
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold text-white shadow-xl shadow-rose-300 transition-all duration-300 hover:scale-105 active:scale-95 z-20 cursor-pointer"
              >
                <Heart className="h-6 w-6 fill-white text-white group-hover:animate-ping" />
                <span>SIM, MIL VEZES SIM! ❤️</span>
              </button>

              {/* PLAYFUL NO BUTTON */}
              <button
                id="proposal-no-button"
                type="button"
                onMouseEnter={handleNoDodge}
                onTouchStart={handleNoDodge}
                onClick={handleNoDodge}
                style={{
                  transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
                  transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/90 px-6 py-3 text-sm font-medium text-stone-500 shadow-sm hover:border-rose-200 hover:text-stone-700 select-none z-10"
              >
                <span>{PLAYFUL_NO_PHRASES[noIndex]}</span>
              </button>
            </div>

            <p className="mt-8 text-xs text-stone-600 italic">
              *Dica: o botão "Não" tem um mecanismo especial de defesa contra erros do coração 😉
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
