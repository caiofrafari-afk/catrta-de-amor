import React, { useState } from 'react';
import { X, Heart, Save, RotateCcw, Sparkles } from 'lucide-react';
import { LoveDeclarationData } from '../types';
import { DEFAULT_LOVE_DATA } from '../data/defaultData';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: LoveDeclarationData;
  onSave: (newData: LoveDeclarationData) => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<LoveDeclarationData>({ ...data });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    if (window.confirm('Deseja restaurar todos os textos para o padrão original?')) {
      setFormData({ ...DEFAULT_LOVE_DATA });
    }
  };

  return (
    <div
      id="customize-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div className="relative my-8 w-full max-w-xl rounded-3xl border border-rose-200 bg-white p-6 sm:p-8 shadow-2xl text-stone-800 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-700"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-rose-600">
          <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
          <h3 className="font-romantic-serif text-2xl font-bold text-stone-900">
            Personalizar Declaração
          </h3>
        </div>
        <p className="mt-1 text-xs sm:text-sm text-stone-600">
          Edite os nomes, data especial e detalhes para deixar tudo sob medida para o seu grande amor!
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
          {/* Couple Names */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-700">Seu Nome</label>
              <input
                type="text"
                required
                value={formData.senderName}
                onChange={e => setFormData({ ...formData, senderName: e.target.value })}
                className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Ex: Caio"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-700">Nome do Seu Amor</label>
              <input
                type="text"
                required
                value={formData.receiverName}
                onChange={e => setFormData({ ...formData, receiverName: e.target.value })}
                className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                placeholder="Ex: Meu Amor ou nome dela(e)"
              />
            </div>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-xs font-semibold text-stone-700">
              Data em que começaram a namorar / se conheceram
            </label>
            <input
              type="date"
              required
              value={formData.startDate}
              onChange={e => setFormData({ ...formData, startDate: e.target.value })}
              className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
            <span className="text-[11px] text-stone-500">
              Isso atualizará o contador em tempo real de dias, horas e minutos juntos.
            </span>
          </div>

          {/* Headline */}
          <div>
            <label className="block text-xs font-semibold text-stone-700">Frase de Destaque</label>
            <input
              type="text"
              required
              value={formData.headline}
              onChange={e => setFormData({ ...formData, headline: e.target.value })}
              className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </div>

          {/* Subheadline */}
          <div>
            <label className="block text-xs font-semibold text-stone-700">Subtítulo / Mensagem Inicial</label>
            <textarea
              rows={2}
              value={formData.subheadline}
              onChange={e => setFormData({ ...formData, subheadline: e.target.value })}
              className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />
          </div>

          {/* Song Dedication */}
          <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-4 space-y-3">
            <span className="text-xs font-semibold text-rose-900 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Canção Especial do Casal
            </span>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[11px] font-medium text-stone-600">Título da Música</label>
                <input
                  type="text"
                  value={formData.songDedication.title}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      songDedication: { ...formData.songDedication, title: e.target.value }
                    })
                  }
                  placeholder="Ex: Partilhar"
                  className="mt-0.5 w-full rounded-lg border border-stone-200 px-2.5 py-1.5 text-xs focus:border-rose-400 focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-stone-600">Artista / Banda</label>
                <input
                  type="text"
                  value={formData.songDedication.artist}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      songDedication: { ...formData.songDedication, artist: e.target.value }
                    })
                  }
                  placeholder="Ex: Rubel"
                  className="mt-0.5 w-full rounded-lg border border-stone-200 px-2.5 py-1.5 text-xs focus:border-rose-400 focus:outline-none bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-stone-600">Trecho Marcante</label>
              <input
                type="text"
                value={formData.songDedication.message}
                onChange={e =>
                  setFormData({
                    ...formData,
                    songDedication: { ...formData.songDedication, message: e.target.value }
                  })
                }
                placeholder="Ex: “Se for preciso, eu giro a Terra inteira até você...”"
                className="mt-0.5 w-full rounded-lg border border-stone-200 px-2.5 py-1.5 text-xs focus:border-rose-400 focus:outline-none bg-white"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex items-center justify-between pt-3 border-t border-stone-100">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-700"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 px-5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-rose-700"
              >
                <Save className="h-3.5 w-3.5" />
                <span>Salvar & Atualizar Página</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
