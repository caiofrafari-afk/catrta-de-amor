import React from 'react';
import { Heart, ArrowUp, Sparkles, Settings } from 'lucide-react';

interface FooterSectionProps {
  senderName: string;
  receiverName: string;
  onOpenCustomize: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  senderName,
  receiverName,
  onOpenCustomize
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-rose-100 bg-white/80 py-12 text-stone-600 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-100 shadow-xs mb-3">
          <Heart className="h-6 w-6 fill-rose-500 text-rose-500 animate-pulse" />
        </div>

        <h4 className="font-romantic-serif text-2xl font-bold text-stone-900 tracking-tight">
          {senderName} <span className="text-rose-500 font-serif">&</span> {receiverName}
        </h4>

        <p className="mt-2 text-sm text-stone-500 max-w-md">
          Esta página é um registro eterno do que sinto por você. Obrigado por ser o amor mais lindo da
          minha vida.
        </p>

        <div className="mt-6 flex items-center gap-4 text-xs font-semibold">
          <button
            type="button"
            onClick={onOpenCustomize}
            className="flex items-center gap-1.5 text-stone-600 hover:text-rose-600 transition-colors"
          >
            <Settings className="h-3.5 w-3.5" />
            <span>Editar Informações</span>
          </button>

          <span className="text-stone-300">•</span>

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
