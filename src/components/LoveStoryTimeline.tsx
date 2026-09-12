import React from 'react';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { TimelineEvent } from '../types';

interface LoveStoryTimelineProps {
  timeline: TimelineEvent[];
}

export const LoveStoryTimeline: React.FC<LoveStoryTimelineProps> = ({
  timeline
}) => {
  return (
    <section id="historia" className="relative py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-700">
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span>Nossa Trajetória</span>
          </div>
          <h2 className="mt-3 font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Nossa História em Cada Detalhe
          </h2>
          <p className="mt-2 text-base text-stone-600 max-w-lg mx-auto">
            Cinco anos de história — e agora, um novo começo escrito com maturidade e amor.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-14 pl-4 sm:pl-8 before:absolute before:top-3 before:bottom-3 before:left-[19px] sm:before:left-[35px] before:w-0.5 before:bg-gradient-to-b before:from-rose-400 before:via-pink-300 before:to-rose-200">
          <div className="space-y-8">
            {timeline.map(event => (
              <div key={event.id} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Node icon circle */}
                <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-md shadow-rose-200 transition-transform group-hover:scale-110">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                </div>

                {/* Event Card */}
                <div className="flex-1 rounded-2xl border border-rose-100 bg-white/90 p-5 sm:p-6 shadow-sm transition-all hover:border-rose-300 hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-0.5 text-xs font-semibold text-rose-700">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      {event.tag}
                    </span>
                    <span className="text-xs font-medium text-stone-600 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-stone-500" />
                      {event.dateStr}
                    </span>
                  </div>

                  <h3 className="mt-2 font-romantic-serif text-xl sm:text-2xl font-bold text-stone-900">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-stone-600">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
