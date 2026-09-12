import React from 'react';
import { Mail, Heart, Sparkles, Quote } from 'lucide-react';

interface LoveLetterSectionProps {
  letterTitle: string;
  letterGreeting: string;
  letterBody: string[];
  letterClosing: string;
  letterSignature: string;
  senderName: string;
  receiverName: string;
}

export const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({
  letterTitle,
  letterGreeting,
  letterBody,
  letterClosing,
  letterSignature,
  senderName,
  receiverName
}) => {
  return (
    <section id="carta" className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/70 to-transparent -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3.5 py-1 text-xs font-semibold text-rose-700 shadow-sm">
            <Mail className="h-3.5 w-3.5 text-rose-500" />
            <span>Do Fundo do Meu Coração</span>
          </div>
          <h2 className="mt-3 font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Minha Carta Para Você
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-md mx-auto">
            Palavras que talvez a rotina não me deixe dizer com a frequência que você merece ouvir.
          </p>
        </div>

        {/* The Parchment / Romantic Letter Card */}
        <div className="relative mx-auto rounded-3xl border border-rose-200/90 bg-[#FFFDF9] p-8 sm:p-12 md:p-16 shadow-2xl shadow-rose-200/50">
          {/* Decorative double frame */}
          <div className="pointer-events-none absolute inset-3 rounded-2xl border border-rose-100/80" />
          {/* Wax Seal Stamp top right */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 text-amber-200 shadow-lg shadow-rose-900/40 border-2 border-rose-600/50 select-none">
            <div className="flex flex-col items-center">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-200 text-amber-200" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-amber-100">
                Amor
              </span>
            </div>
          </div>

          <Quote className="h-8 w-8 text-rose-200 mb-4" />

          <div className="space-y-6">
            <h3 className="font-romantic-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight pr-16 sm:pr-20">
              {letterTitle}
            </h3>

            <p className="text-base sm:text-lg font-semibold text-rose-800">
              {letterGreeting || `Querido(a) ${receiverName},`}
            </p>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed sm:leading-loose">
              {letterBody.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={`indent-4 sm:indent-6 ${idx === letterBody.length - 1 ? 'font-semibold text-stone-900' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-stone-500 italic">
                  {letterClosing}
                </p>
                <p className="font-romantic-script text-3xl sm:text-4xl text-rose-700 mt-1">
                  {letterSignature || senderName}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-500">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>Escrito com amor infinito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
