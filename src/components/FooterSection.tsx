import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterSectionProps {
  senderName: string;
  receiverName: string;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  senderName,
  receiverName
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-rose-100 bg-gradient-to-b from-white/80 to-rose-50/80 py-12 text-stone-600 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-md shadow-rose-200 mb-3">
          <Heart className="h-6 w-6 fill-white animate-pulse" />
        </div>

        <h4 className="font-romantic-serif text-2xl font-bold text-stone-900 tracking-tight">
          {senderName} <span className="text-rose-500 font-serif">&</span> {receiverName}
        </h4>

        <p className="mt-2 text-sm text-stone-500 max-w-md">
          Eu não quero recuperar o que tínhamos — quero construir algo ainda melhor com você. ❤️
        </p>

        <div className="mt-6 flex items-center gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-rose-600 hover:text-rose-700 transition-colors"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="mt-8 text-[11px] text-stone-400">
          Feito com o coração para tocar a sua alma. ❤️
        </div>
      </div>
    </footer>
  );
};
