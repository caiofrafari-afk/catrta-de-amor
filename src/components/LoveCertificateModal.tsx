import React from 'react';
import { Heart, X, Printer, Sparkles, CheckCircle, Share2 } from 'lucide-react';

interface LoveCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  senderName: string;
  receiverName: string;
  startDate: string;
}

export const LoveCertificateModal: React.FC<LoveCertificateModalProps> = ({
  isOpen,
  onClose,
  senderName,
  receiverName,
  startDate
}) => {
  if (!isOpen) return null;

  const todayStr = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link da sua declaração copiado com sucesso! ❤️');
  };

  return (
    <div
      id="love-certificate-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div className="relative my-8 w-full max-w-2xl rounded-3xl border-4 border-amber-200/90 bg-[#FAF7F2] p-6 sm:p-10 shadow-2xl text-stone-900 animate-in fade-in zoom-in-95">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2 text-stone-400 hover:bg-stone-200/60 hover:text-stone-700 transition-colors print:hidden"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Certificate Border Frame */}
        <div className="rounded-2xl border-2 border-amber-300/80 p-6 sm:p-8 text-center relative bg-white/60">
          {/* Ornamental corner icons */}
          <div className="flex justify-between items-center text-amber-500 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-700">
              Certidão de Compromisso Romântico
            </span>
            <Sparkles className="h-5 w-5" />
          </div>

          <h2 className="font-romantic-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Certificado de Amor Eterno
          </h2>

          <p className="mt-4 text-xs sm:text-sm font-medium uppercase tracking-widest text-stone-500">
            Fica solenemente declarado e registrado que
          </p>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <span className="font-romantic-serif text-2xl sm:text-3xl font-bold text-rose-700">
              {senderName}
            </span>
            <span className="text-xl text-rose-400 font-serif">&</span>
            <span className="font-romantic-serif text-2xl sm:text-3xl font-bold text-rose-700">
              {receiverName}
            </span>
          </div>

          <p className="mt-6 text-sm sm:text-base text-stone-700 leading-relaxed max-w-lg mx-auto font-light">
            Responderam com o coração cheio e concordaram em caminhar lado a lado, rir das mesmas
            piadas bobas, apoiar os sonhos um do outro e renovar o amor a cada novo amanhecer.
          </p>

          {/* Golden Wax Seal simulation */}
          <div className="mt-8 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-300 text-amber-950 shadow-xl border-4 border-amber-200">
              <div className="flex flex-col items-center">
                <Heart className="h-7 w-7 fill-amber-950 text-amber-950" />
                <span className="text-[9px] uppercase font-bold tracking-widest">Aprovado</span>
              </div>
            </div>
          </div>

          {/* Signatures and Date */}
          <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-amber-200 text-xs text-stone-600">
            <div>
              <p className="font-romantic-script text-2xl text-stone-800">{senderName}</p>
              <div className="mt-1 h-0.5 w-24 mx-auto bg-stone-300" />
              <p className="mt-1 font-medium text-[11px] text-stone-500">Assinatura do seu amor</p>
            </div>
            <div>
              <p className="font-romantic-script text-2xl text-stone-800">{receiverName}</p>
              <div className="mt-1 h-0.5 w-24 mx-auto bg-stone-300" />
              <p className="mt-1 font-medium text-[11px] text-stone-500">Amor da Minha Vida</p>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-stone-600">
            Registrado com todo o carinho em {todayStr}
          </div>
        </div>

        {/* Modal actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-semibold text-stone-700 shadow-sm hover:bg-stone-50"
          >
            <Printer className="h-4 w-4 text-stone-500" />
            <span>Imprimir / Salvar PDF</span>
          </button>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-rose-700"
          >
            <Share2 className="h-4 w-4" />
            <span>Copiar Link da Declaração</span>
          </button>
        </div>
      </div>
    </div>
  );
};
