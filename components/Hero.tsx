
import React from 'react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section id="inicio" className="min-h-[80vh] flex items-center bg-white px-6">
      <div className="max-w-4xl mx-auto w-full text-center py-20">
        <h2 className="text-[#f97316] font-bold tracking-[0.4em] text-[12px] uppercase mb-6 animate-pulse">
          Tu centro de transformación en Marín
        </h2>
        <h1 className="font-heading text-6xl md:text-9xl font-black leading-[0.9] mb-8 text-slate-900">
          No es solo gym.<br /><span className="text-gradient">Es tu cambio.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed mx-auto max-w-2xl">
          Instalaciones de primer nivel abiertas las 24 horas. Entrena con la mejor maquinaria y el mejor equipo humano en el corazón de Marín.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onOpenModal}
            className="bg-blue-600 hover:bg-orange-600 text-white px-12 py-6 rounded-2xl text-[12px] font-bold uppercase tracking-widest shadow-xl shadow-blue-600/20 transition-all transform hover:-translate-y-1"
          >
            Quiero empezar
          </button>
          <a 
            href="#ubicacion" 
            className="bg-slate-100 text-slate-900 px-12 py-6 rounded-2xl text-[12px] font-bold uppercase tracking-widest hover:bg-slate-200 transition"
          >
            Dónde estamos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
