import React, { useState } from 'react';
import { Mail, Edit3, Check, Heart, Sparkles, Quote } from 'lucide-react';

interface LoveLetterSectionProps {
  letterTitle: string;
  letterGreeting: string;
  letterBody: string[];
  letterClosing: string;
  letterSignature: string;
  senderName: string;
  receiverName: string;
  onUpdateLetter: (updated: {
    letterTitle: string;
    letterGreeting: string;
    letterBody: string[];
    letterClosing: string;
    letterSignature: string;
  }) => void;
}

export const LoveLetterSection: React.FC<LoveLetterSectionProps> = ({
  letterTitle,
  letterGreeting,
  letterBody,
  letterClosing,
  letterSignature,
  senderName,
  receiverName,
  onUpdateLetter
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(letterTitle);
  const [editedGreeting, setEditedGreeting] = useState(letterGreeting);
  const [editedBody, setEditedBody] = useState(letterBody.join('\n\n'));
  const [editedClosing, setEditedClosing] = useState(letterClosing);
  const [editedSignature, setEditedSignature] = useState(letterSignature);

  const handleSave = () => {
    onUpdateLetter({
      letterTitle: editedTitle,
      letterGreeting: editedGreeting,
      letterBody: editedBody
        .split('\n\n')
        .map(p => p.trim())
        .filter(Boolean),
      letterClosing: editedClosing,
      letterSignature: editedSignature
    });
    setIsEditing(false);
  };

  return (
    <section id="carta" className="relative py-16 md:py-24 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/70 to-transparent -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3.5 py-1 text-xs font-semibold text-rose-700 shadow-sm">
            <Mail className="h-3.5 w-3.5 text-rose-500" />
            <span>Do Fundo do Meu Coração</span>
          </div>
          <h2 className="mt-3 font-romantic-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Minha Carta Para Você
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600 max-w-md mx-auto">
            Palavras que talvez a rotina não me deixe dizer com a frequência que você merece ouvir.
          </p>

          <div className="mt-4">
            <button
              id="edit-letter-toggle-btn"
              type="button"
              onClick={() => {
                if (isEditing) handleSave();
                else setIsEditing(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-rose-300 bg-rose-50 px-3.5 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-100 transition-colors"
            >
              {isEditing ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Salvar Alterações da Carta</span>
                </>
              ) : (
                <>
                  <Edit3 className="h-3.5 w-3.5" />
                  <span>Personalizar o Texto da Carta</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* The Parchment / Romantic Letter Card */}
        <div className="relative mx-auto rounded-3xl border border-rose-200/90 bg-[#FFFDF9] p-8 sm:p-12 md:p-16 shadow-2xl shadow-rose-200/50">
          {/* Wax Seal Stamp top right */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-rose-700 via-rose-800 to-rose-900 text-amber-200 shadow-lg shadow-rose-900/40 border-2 border-rose-600/50 select-none">
            <div className="flex flex-col items-center">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-200 text-amber-200" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-amber-100">
                Amor
              </span>
            </div>
          </div>

          <Quote className="h-8 w-8 text-rose-200 mb-4" />

          {isEditing ? (
            /* Editing Mode */
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700">Título da Carta</label>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={e => setEditedTitle(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-stone-300 p-2.5 text-base font-romantic-serif font-bold text-stone-900 focus:border-rose-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700">Saudação Inicial</label>
                <input
                  type="text"
                  value={editedGreeting}
                  onChange={e => setEditedGreeting(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-stone-300 p-2 text-sm focus:border-rose-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700">
                  Corpo da Carta (Separe parágrafos com duas quebras de linha)
                </label>
                <textarea
                  rows={8}
                  value={editedBody}
                  onChange={e => setEditedBody(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-stone-300 p-3 text-sm leading-relaxed focus:border-rose-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Encerramento</label>
                  <input
                    type="text"
                    value={editedClosing}
                    onChange={e => setEditedClosing(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-stone-300 p-2 text-sm focus:border-rose-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700">Assinatura</label>
                  <input
                    type="text"
                    value={editedSignature}
                    onChange={e => setEditedSignature(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-stone-300 p-2 text-sm focus:border-rose-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-full bg-rose-600 px-6 py-2.5 text-xs font-semibold text-white shadow hover:bg-rose-700"
                >
                  Concluir Edição
                </button>
              </div>
            </div>
          ) : (
            /* Display Mode */
            <div className="space-y-6">
              <h3 className="font-romantic-serif text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight pr-16 sm:pr-20">
                {letterTitle}
              </h3>

              <p className="text-base sm:text-lg font-semibold text-rose-800">
                {letterGreeting || `Querido(a) ${receiverName},`}
              </p>

              <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed sm:leading-loose">
                {letterBody.map((paragraph, idx) => (
                  <p key={idx} className="indent-4 sm:indent-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-stone-500 italic">
                    {letterClosing}
                  </p>
                  <p className="font-romantic-script text-3xl sm:text-4xl text-rose-700 mt-1">
                    {letterSignature || senderName}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-500">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  <span>Escrito com amor infinito</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
