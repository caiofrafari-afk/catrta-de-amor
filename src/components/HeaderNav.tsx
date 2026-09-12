import React from 'react';
import { Heart, Music2, Sparkles } from 'lucide-react';

interface HeaderNavProps {
  senderName: string;
  receiverName: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  senderName,
  receiverName
}) => {
  return (
    <header
      id="main-romantic-header"
      className="sticky top-0 z-40 w-full border-b border-rose-100/80 bg-white/75 backdrop-blur-md transition-all"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Monogram / Couple Name */}
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-stone-800 transition-opacity hover:opacity-90"
          id="couple-logo"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-md shadow-rose-200 transition-transform group-hover:scale-105">
            <Heart className="h-5 w-5 fill-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-romantic-serif text-lg md:text-xl font-bold leading-tight tracking-tight text-stone-800">
              {senderName} <span className="text-rose-500 font-serif">&</span> {receiverName}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-rose-500">
              Um Novo Começo
            </span>
          </div>
        </a>

        {/* Navigation Links for larger screens */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#historia" className="hover:text-rose-600 transition-colors">
            Nossa História
          </a>
          <a href="#motivos" className="hover:text-rose-600 transition-colors">
            Por Que Te Amo
          </a>
          <a href="#carta" className="hover:text-rose-600 transition-colors">
            Minha Carta
          </a>
          <a
            href="#pedido"
            className="flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5" />
            O Pedido
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="toggle-music-button"
            href="#musica"
            title="Ouvir nossa música: Um Amor Puro — Djavan"
            className="relative flex items-center gap-2 rounded-full border border-rose-200 bg-gradient-to-r from-rose-500 to-pink-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-rose-200 transition-all hover:scale-105"
          >
            <Music2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Nossa Música</span>
          </a>
        </div>
      </div>
    </header>
  );
};
