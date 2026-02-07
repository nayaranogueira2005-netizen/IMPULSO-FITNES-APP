
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-xl flex items-center justify-center p-6">
      <div className="bg-white max-w-lg w-full rounded-[4rem] p-12 relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-10 right-10 text-slate-300 hover:text-red-500 transition-colors"
        >
          <i className="fas fa-times text-2xl"></i>
        </button>
        
        <div className="text-center mb-10">
          <h3 className="font-heading text-4xl font-black uppercase italic mb-2">Pide tu pase <span className="text-orange-500">GRATIS</span></h3>
          <p className="text-slate-400 font-bold text-[11px] uppercase tracking-widest">Estás a un paso de empezar tu cambio</p>
        </div>

        <form 
          className="space-y-5" 
          onSubmit={(e) => {
            e.preventDefault(); 
            alert('¡Recibido! Te enviaremos tu invitación por WhatsApp en menos de 10 minutos.');
            onClose();
          }}
        >
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Ej: Manuel García" 
              required 
              className="w-full bg-slate-50 p-6 rounded-3xl outline-none font-bold border-2 border-transparent focus:border-blue-600 transition-all text-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Teléfono (WhatsApp)</label>
            <input 
              type="tel" 
              placeholder="Ej: +34 600 000 000" 
              required 
              className="w-full bg-slate-50 p-6 rounded-3xl outline-none font-bold border-2 border-transparent focus:border-blue-600 transition-all text-slate-900"
            />
          </div>
          
          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-orange-600 text-white py-6 rounded-3xl font-black uppercase text-[11px] tracking-[0.2em] shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Enviar Solicitud
            </button>
          </div>
          <p className="text-[9px] text-slate-400 text-center font-medium px-8 leading-relaxed">
            Al enviar, aceptas que un coach de Tu Impulso se ponga en contacto contigo para gestionar tu pase gratuito.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;
