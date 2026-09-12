import React from 'react';
import { Heart, Music, VolumeX, Settings, Sparkles } from 'lucide-react';

interface HeaderNavProps {
  senderName: string;
  receiverName: string;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
  onOpenCustomize: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  senderName,
  receiverName,
  isPlayingMusic,
  onToggleMusic,
  onOpenCustomize
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
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-100/90 text-rose-600 transition-transform group-hover:scale-105">
            <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-romantic-serif text-lg md:text-xl font-bold leading-tight tracking-tight text-stone-800">
              {senderName} <span className="text-rose-500 font-serif">&</span> {receiverName}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-rose-500">
              Para Todo o Sempre
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
          {/* Ambient Music Toggle */}
          <button
            id="toggle-music-button"
            type="button"
            onClick={onToggleMusic}
            title={isPlayingMusic ? 'Pausar melodia romântica' : 'Ouvir melodia romântica suave'}
            className={`relative flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all shadow-sm ${
              isPlayingMusic
                ? 'bg-rose-600 text-white shadow-rose-200'
                : 'border border-rose-200 bg-rose-50/80 text-rose-700 hover:bg-rose-100'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Music className="h-3.5 w-3.5 animate-bounce" />
                <span className="hidden sm:inline">Música Ativa</span>
                <span className="flex h-2 w-2 items-center justify-center">
                  <span className="h-1.5 w-1.5 animate-ping rounded-full bg-white" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Tocar Música</span>
              </>
            )}
          </button>

          {/* Personalize Button */}
          <button
            id="open-customize-button"
            type="button"
            onClick={onOpenCustomize}
            className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-sm transition-all hover:border-rose-300 hover:bg-rose-50/50 hover:text-rose-700"
          >
            <Settings className="h-3.5 w-3.5 text-stone-500" />
            <span>Personalizar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
