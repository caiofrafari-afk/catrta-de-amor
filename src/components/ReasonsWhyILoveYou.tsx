import React, { useState } from 'react';
import {
  Heart,
  Smile,
  Sparkles,
  HeartHandshake,
  Sun,
  Music,
  ShieldCheck,
  Compass,
  Shuffle,
  Plus,
  Trash2,
  CheckCircle2
} from 'lucide-react';
import { ReasonItem } from '../types';

interface ReasonsWhyILoveYouProps {
  reasons: ReasonItem[];
  onUpdateReasons: (reasons: ReasonItem[]) => void;
  receiverName: string;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Smile':
      return <Smile className="h-5 w-5 text-rose-500" />;
    case 'HeartHandshake':
      return <HeartHandshake className="h-5 w-5 text-pink-500" />;
    case 'Sparkles':
      return <Sparkles className="h-5 w-5 text-amber-500" />;
    case 'Sun':
      return <Sun className="h-5 w-5 text-amber-500" />;
    case 'Music':
      return <Music className="h-5 w-5 text-rose-500" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-5 w-5 text-emerald-500" />;
    case 'Compass':
      return <Compass className="h-5 w-5 text-indigo-500" />;
    default:
      return <Heart className="h-5 w-5 text-rose-500" />;
  }
};

export const ReasonsWhyILoveYou: React.FC<ReasonsWhyILoveYouProps> = ({
  reasons,
  onUpdateReasons,
  receiverName
}) => {
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [surpriseReason, setSurpriseReason] = useState<ReasonItem | null>(null);
  const [isAddingReason, setIsAddingReason] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleSurpriseMe = () => {
    if (reasons.length === 0) return;
    const randomIndex = Math.floor(Math.random() * reasons.length);
    const chosen = reasons[randomIndex];
    setSurpriseReason(chosen);
    setHighlightedId(chosen.id);
    setIsSurpriseOpen(true);
  };

  const handleAddReason = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newReason: ReasonItem = {
      id: 'r-' + Date.now(),
      title: newTitle.trim(),
      description: newDesc.trim() || 'Mais um motivo entre infinitos para amar você.',
      category: 'magia',
      icon: 'Heart'
    };

    onUpdateReasons([...reasons, newReason]);
    setNewTitle('');
    setNewDesc('');
    setIsAddingReason(false);
  };

  const handleDeleteReason = (id: string) => {
    onUpdateReasons(reasons.filter(r => r.id !== id));
  };

  return (
    <section id="motivos" className="relative py-16 md:py-24 bg-rose-50/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3.5 py-1 text-xs font-semibold text-rose-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Infinitas Razões</span>
          </div>
          <h2 className="mt-3 font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Motivos Pelos Quais Eu Te Amo
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Poderia listar milhares de páginas, mas aqui estão algumas das razões que fazem meu coração
            bater mais forte todos os dias por você, {receiverName}.
          </p>

          {/* Surprise Me / Random Reason Button */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              id="surprise-reason-btn"
              type="button"
              onClick={handleSurpriseMe}
              className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-rose-200 transition-all hover:bg-rose-700 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Shuffle className="h-4 w-4" />
              <span>Sortear um Motivo de Amor</span>
            </button>

            <button
              id="add-reason-btn"
              type="button"
              onClick={() => setIsAddingReason(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-rose-700 shadow-sm transition-all hover:bg-rose-50"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Adicionar Motivo</span>
            </button>
          </div>
        </div>

        {/* Add Reason Form Modal/Inline */}
        {isAddingReason && (
          <div className="mt-8 mx-auto max-w-lg rounded-2xl border border-rose-200 bg-white p-6 shadow-lg">
            <h4 className="font-romantic-serif text-xl font-bold text-stone-900">
              Adicionar Novo Motivo
            </h4>
            <form onSubmit={handleAddReason} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700">Título do motivo</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="Ex: O jeito como você me olha"
                  className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700">Por que isso é especial?</label>
                <textarea
                  rows={2}
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="Explique o sentimento por trás disso..."
                  className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingReason(false)}
                  className="rounded-xl px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-rose-700"
                >
                  Salvar Motivo
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reasons Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((reason, index) => {
            const isHighlighted = highlightedId === reason.id;
            return (
              <div
                key={reason.id}
                className={`group relative flex flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
                  isHighlighted
                    ? 'border-rose-500 bg-rose-50/90 shadow-lg shadow-rose-200 ring-2 ring-rose-400 scale-[1.03]'
                    : 'border-rose-100 bg-white shadow-sm hover:border-rose-300 hover:shadow-md hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 border border-rose-100 shadow-xs">
                      {getIcon(reason.icon)}
                    </div>
                    <span className="font-romantic-serif text-sm font-bold text-rose-400">
                      #{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-romantic-serif text-lg font-bold text-stone-900 leading-snug">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {reasons.length > 3 && (
                  <div className="mt-4 pt-3 border-t border-rose-50 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-rose-500 flex items-center gap-1">
                      <Heart className="h-3 w-3 fill-rose-500" />
                      Com amor
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteReason(reason.id)}
                      title="Excluir motivo"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-stone-400 hover:text-rose-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Surprise Reason Spotlight Modal */}
      {isSurpriseOpen && surpriseReason && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md rounded-3xl border border-rose-200 bg-white p-6 sm:p-8 text-center shadow-2xl animate-in fade-in zoom-in-95">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-600 shadow-inner">
              <Heart className="h-8 w-8 fill-rose-500 text-rose-500 animate-bounce" />
            </div>

            <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
              <Sparkles className="h-3.5 w-3.5" />
              Motivo Sorteado Para Você
            </div>

            <h3 className="mt-2 font-romantic-serif text-2xl font-bold text-stone-900">
              {surpriseReason.title}
            </h3>

            <p className="mt-3 text-sm text-stone-600 leading-relaxed font-light">
              "{surpriseReason.description}"
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <button
                type="button"
                onClick={handleSurpriseMe}
                className="w-full rounded-xl border border-rose-200 bg-rose-50 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors"
              >
                Sortear Outro Motivo ✨
              </button>
              <button
                type="button"
                onClick={() => setIsSurpriseOpen(false)}
                className="w-full rounded-xl bg-rose-600 py-2.5 text-xs font-semibold text-white hover:bg-rose-700 transition-colors shadow-sm"
              >
                Guardar no Coração ❤️
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
