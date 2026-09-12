import React from 'react';
import { Music2, Heart, Quote } from 'lucide-react';

interface MusicDedicationProps {
  title: string;
  artist: string;
  message: string;
  receiverName: string;
}

export const MusicDedication: React.FC<MusicDedicationProps> = ({
  title,
  artist,
  message,
  receiverName
}) => {
  return (
    <section id="musica" className="relative py-16 md:py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-rose-100/60 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-200/50 via-pink-100/40 to-amber-100/40 blur-3xl" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3.5 py-1 text-xs font-semibold text-rose-700 shadow-sm">
            <Music2 className="h-3.5 w-3.5 text-rose-500" />
            <span>Nossa Música</span>
          </div>
          <h2 className="mt-3 font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            {title} <span className="text-rose-500">—</span> {artist}
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-lg mx-auto">
            {receiverName}, essa música diz tudo o que eu sinto por você.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-rose-200/70 bg-gradient-to-br from-stone-950 via-rose-950 to-stone-950 p-6 sm:p-10 text-center shadow-2xl shadow-rose-300/40">
          {/* Decorative vinyl glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-500/25 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-lg shadow-rose-500/40">
              <Heart className="h-8 w-8 fill-white animate-pulse" />
            </div>

            <blockquote className="mx-auto mt-6 max-w-xl">
              <Quote className="mx-auto h-6 w-6 text-rose-300/70" />
              <p className="mt-3 font-romantic-serif text-2xl sm:text-3xl font-semibold italic leading-snug text-rose-50">
                O que há dentro do meu coração
                <br />
                eu tenho guardado pra te dar...
              </p>
              <p className="mt-4 text-sm sm:text-base font-semibold tracking-wide text-rose-200">
                “Te adoro em tudo, tudo, tudo — quero mais que tudo te amar sem limites,
                viver uma grande história.”
              </p>
              <footer className="mt-2 text-xs uppercase tracking-widest text-rose-300/80">
                {message} · {artist}
              </footer>
            </blockquote>

            {/* Spotify player (official track) */}
            <div className="mx-auto mt-8 max-w-md overflow-hidden rounded-2xl shadow-xl shadow-black/30">
              <iframe
                title={`${title} — ${artist} no Spotify`}
                src="https://open.spotify.com/embed/track/6ZB2gAlP98UVIeWmpqrC1m?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
              <a
                href="https://open.spotify.com/track/6ZB2gAlP98UVIeWmpqrC1m"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-stone-900 shadow transition-transform hover:scale-105"
              >
                <Music2 className="h-3.5 w-3.5 text-emerald-600" />
                Abrir no Spotify
              </a>
              <a
                href="https://www.youtube.com/results?search_query=Djavan+Um+Amor+Puro"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20"
              >
                Ver no YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
