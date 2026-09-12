import React from 'react';
import { Heart, Check, ShieldCheck, Sun, Coffee, Sparkles } from 'lucide-react';

interface LovePromisesProps {
  senderName: string;
  receiverName: string;
}

const PROMISES = [
  {
    icon: <Sun className="h-4 w-4 text-amber-500" />,
    text: 'Te dar atenção de verdade ao chegar em casa — você antes do celular, do jogo ou de qualquer distração.'
  },
  {
    icon: <ShieldCheck className="h-4 w-4 text-rose-500" />,
    text: 'Assumir meus erros sem fugir e aprender com eles para nunca mais deixar você se sentir de lado.'
  },
  {
    icon: <Coffee className="h-4 w-4 text-amber-700" />,
    text: 'Equilibrar trabalho, academia e jiu-jitsu com o que mais importa: tempo de qualidade com você.'
  },
  {
    icon: <Sparkles className="h-4 w-4 text-pink-500" />,
    text: 'Conhecer a nova você com curiosidade e respeito, e me deixar ser conhecido de novo.'
  },
  {
    icon: <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />,
    text: 'Te reconquistar todos os dias — não só com palavras, mas com atitudes, carinho e presença.'
  }
];

export const LovePromises: React.FC<LovePromisesProps> = ({ senderName, receiverName }) => {
  return (
    <section className="py-14 bg-white/70 border-y border-rose-100/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span>Compromisso do Meu Coração</span>
          </div>
          <h2 className="mt-2 font-romantic-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Minhas Promessas Para Nós Dois
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            Juro com a certeza de quem encontrou a pessoa certa para dividir a vida.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {PROMISES.map((promise, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-2xl border border-rose-100 bg-rose-50/40 p-4 transition-all hover:bg-rose-50 hover:shadow-xs"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs border border-rose-100">
                {promise.icon}
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                {promise.text}
              </p>
            </div>
          ))}

          {/* Golden Infinity Promise */}
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/50 p-4 transition-all sm:col-span-2 lg:col-span-1">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs border border-amber-200 text-amber-600">
              <Sparkles className="h-4 w-4" />
            </div>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-semibold">
              Te amar hoje, amanhã e em todos os dias que virão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
