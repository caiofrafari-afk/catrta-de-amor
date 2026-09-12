import React, { useEffect, useState } from 'react';
import { Clock, Heart, Sparkles, Calendar } from 'lucide-react';

interface RelationshipTimerProps {
  startDate: string;
  senderName: string;
  receiverName: string;
}

interface TimePassed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
  totalHours: number;
}

export const RelationshipTimer: React.FC<RelationshipTimerProps> = ({
  startDate,
  senderName,
  receiverName
}) => {
  const [timePassed, setTimePassed] = useState<TimePassed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    totalHours: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate).getTime();
      const now = new Date().getTime();
      let diff = now - start;

      // In case date is in the future, fallback gracefully
      if (diff < 0) {
        diff = 0;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      const days = totalDays;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimePassed({
        days,
        hours,
        minutes,
        seconds,
        totalDays,
        totalHours
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  const formattedDate = new Date(startDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div
      id="relationship-timer-card"
      className="relative overflow-hidden rounded-3xl border border-rose-200/80 bg-white/80 p-6 md:p-8 shadow-xl shadow-rose-100/60 backdrop-blur-md"
    >
      {/* Subtle glowing radial decor */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/90 px-3.5 py-1 text-xs font-semibold text-rose-700">
          <Calendar className="h-3.5 w-3.5 text-rose-500" />
          <span>Nosso amor começou em {formattedDate}</span>
        </div>

        <h3 className="font-romantic-serif text-2xl md:text-3xl font-bold text-stone-800 tracking-tight">
          Tempo Compartilhado Juntos
        </h3>
        <p className="mt-1 text-sm text-stone-600 max-w-md">
          Cada segundo ao seu lado é uma lembrança guardada com carinho no meu coração.
        </p>

        {/* Live Counter Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full max-w-xl">
          <div className="flex flex-col items-center justify-center rounded-2xl border border-rose-100 bg-rose-50/50 p-3.5 sm:p-4 transition-transform hover:scale-[1.02]">
            <span className="font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600">
              {timePassed.days}
            </span>
            <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-stone-500">
              {timePassed.days === 1 ? 'Dia' : 'Dias'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-rose-100 bg-rose-50/50 p-3.5 sm:p-4 transition-transform hover:scale-[1.02]">
            <span className="font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600">
              {timePassed.hours.toString().padStart(2, '0')}
            </span>
            <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-stone-500">
              {timePassed.hours === 1 ? 'Hora' : 'Horas'}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-rose-100 bg-rose-50/50 p-3.5 sm:p-4 transition-transform hover:scale-[1.02]">
            <span className="font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600">
              {timePassed.minutes.toString().padStart(2, '0')}
            </span>
            <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-stone-500">
              Minutos
            </span>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-rose-100 bg-rose-50/50 p-3.5 sm:p-4 transition-transform hover:scale-[1.02]">
            <span className="font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-rose-600">
              {timePassed.seconds.toString().padStart(2, '0')}
            </span>
            <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-stone-500">
              Segundos
            </span>
          </div>
        </div>

        {/* Sweet stats line */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-stone-600">
          <span className="inline-flex items-center gap-1.5 font-medium text-rose-700">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500 animate-pulse" />
            + de {timePassed.totalHours.toLocaleString('pt-BR')} horas de carinho
          </span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-amber-700">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Infinitos motivos para continuar te amando
          </span>
        </div>
      </div>
    </div>
  );
};
