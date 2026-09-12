import React, { useState } from 'react';
import { Sparkles, Calendar, Plus, Trash2, Heart, Edit3 } from 'lucide-react';
import { TimelineEvent } from '../types';

interface LoveStoryTimelineProps {
  timeline: TimelineEvent[];
  onUpdateTimeline: (newTimeline: TimelineEvent[]) => void;
}

export const LoveStoryTimeline: React.FC<LoveStoryTimelineProps> = ({
  timeline,
  onUpdateTimeline
}) => {
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    dateStr: '',
    title: '',
    description: '',
    tag: 'Momento Especial'
  });

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvent.title.trim()) return;

    const item: TimelineEvent = {
      id: 't-' + Date.now(),
      dateStr: newEvent.dateStr.trim() || 'Nosso Momento',
      title: newEvent.title.trim(),
      description: newEvent.description.trim() || 'Uma lembrança guardada com muito carinho.',
      tag: newEvent.tag.trim() || 'Amor'
    };

    onUpdateTimeline([...timeline, item]);
    setNewEvent({ dateStr: '', title: '', description: '', tag: 'Momento Especial' });
    setIsAddingEvent(false);
  };

  const handleDeleteEvent = (id: string) => {
    onUpdateTimeline(timeline.filter(e => e.id !== id));
  };

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
            Os capítulos mais lindos da minha vida começaram a ser escritos no dia em que você chegou.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative mt-14 pl-4 sm:pl-8 before:absolute before:top-3 before:bottom-3 before:left-[19px] sm:before:left-[35px] before:w-0.5 before:bg-gradient-to-b before:from-rose-400 before:via-pink-300 before:to-rose-200">
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={event.id} className="relative flex items-start gap-4 sm:gap-6 group">
                {/* Node icon circle */}
                <div className="relative z-10 flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-rose-500 text-white shadow-md shadow-rose-200 transition-transform group-hover:scale-110">
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

                  {/* Delete button option if there are more than 2 items */}
                  {timeline.length > 2 && (
                    <div className="mt-3 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        type="button"
                        onClick={() => handleDeleteEvent(event.id)}
                        title="Remover este momento"
                        className="text-xs text-stone-500 hover:text-rose-600 flex items-center gap-1"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Remover</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Moment Form Button */}
        <div className="mt-10 flex flex-col items-center">
          {!isAddingEvent ? (
            <button
              id="add-memory-btn"
              type="button"
              onClick={() => setIsAddingEvent(true)}
              className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-rose-700 shadow-sm transition-all hover:border-rose-400 hover:bg-rose-50"
            >
              <Plus className="h-4 w-4" />
              <span>Adicionar Mais Um Momento Nosso</span>
            </button>
          ) : (
            <form
              onSubmit={handleAddEvent}
              className="w-full max-w-lg rounded-2xl border border-rose-200 bg-white p-6 shadow-md"
            >
              <h4 className="font-romantic-serif text-xl font-bold text-stone-800">
                Novo Momento Inesquecível
              </h4>
              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Título</label>
                  <input
                    type="text"
                    required
                    value={newEvent.title}
                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                    placeholder="Ex: Nossa primeira viagem juntos"
                    className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700">Data ou Fase</label>
                    <input
                      type="text"
                      value={newEvent.dateStr}
                      onChange={e => setNewEvent({ ...newEvent, dateStr: e.target.value })}
                      placeholder="Ex: Dezembro de 2023"
                      className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700">Tag / Categoria</label>
                    <input
                      type="text"
                      value={newEvent.tag}
                      onChange={e => setNewEvent({ ...newEvent, tag: e.target.value })}
                      placeholder="Ex: Viagem, Risadas"
                      className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Descrição do Momento</label>
                  <textarea
                    rows={3}
                    value={newEvent.description}
                    onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
                    placeholder="Conte o que tornou esse dia inesquecível..."
                    className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingEvent(false)}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-rose-700"
                >
                  Salvar Momento
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
