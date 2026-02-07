
import React from 'react';

interface PricingProps {
  onOpenModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="tarifas" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plan Individual */}
          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 flex flex-col hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <h3 className="font-heading text-2xl font-black uppercase italic mb-4 text-blue-900">Individual</h3>
            <div className="mb-8 font-black text-7xl text-slate-900">55€<span className="text-lg text-slate-300 ml-2">/mes</span></div>
            <ul className="space-y-5 mb-12 text-slate-500 font-bold text-sm">
              <li className="flex items-center"><i className="fas fa-check text-green-500 mr-4"></i> Acceso 24h total</li>
              <li className="flex items-center"><i className="fas fa-check text-green-500 mr-4"></i> App de entrenamiento</li>
              <li className="flex items-center"><i className="fas fa-check text-green-500 mr-4"></i> Duchas individuales</li>
            </ul>
            <button onClick={onOpenModal} className="mt-auto bg-blue-600 group-hover:bg-orange-600 text-white w-full py-6 rounded-3xl font-black uppercase text-[10px] tracking-widest transition-colors shadow-lg shadow-blue-600/10">
              Empezar ahora
            </button>
          </div>

          {/* Plan Parejas - Destacado */}
          <div className="bg-slate-900 p-12 rounded-[4rem] text-white flex flex-col lg:scale-110 z-10 shadow-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-xl">
              MÁS POPULAR
            </div>
            <h3 className="font-heading text-2xl font-black uppercase italic mb-4">Parejas</h3>
            <div className="mb-8 font-black text-7xl">45€<span className="text-slate-500 text-lg ml-2">/pers</span></div>
            <ul className="space-y-5 mb-12 text-slate-400 font-bold text-sm">
              <li className="flex items-center"><i className="fas fa-check text-orange-500 mr-4"></i> Dos accesos 24h</li>
              <li className="flex items-center"><i className="fas fa-check text-orange-500 mr-4"></i> Plan nutricional básico</li>
              <li className="flex items-center"><i className="fas fa-check text-orange-500 mr-4"></i> Invitación mensual amigos</li>
            </ul>
            <button onClick={onOpenModal} className="mt-auto bg-orange-500 text-white w-full py-7 rounded-3xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-orange-500 transition-all shadow-xl shadow-orange-500/20">
              Entrenar juntos
            </button>
          </div>

          {/* Plan Familia */}
          <div className="bg-white p-12 rounded-[4rem] border border-slate-100 flex flex-col hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
            <h3 className="font-heading text-2xl font-black uppercase italic mb-4 text-blue-900">Familia</h3>
            <div className="mb-8 font-black text-7xl text-slate-900">35€<span className="text-lg text-slate-300 ml-2">/pers</span></div>
            <ul className="space-y-5 mb-12 text-slate-500 font-bold text-sm">
              <li className="flex items-center"><i className="fas fa-check text-green-500 mr-4"></i> Mínimo 3 miembros</li>
              <li className="flex items-center"><i className="fas fa-check text-green-500 mr-4"></i> Matrícula reducida</li>
              <li className="flex items-center"><i className="fas fa-check text-green-500 mr-4"></i> Plan familiar nutrición</li>
            </ul>
            <button onClick={onOpenModal} className="mt-auto bg-blue-600 group-hover:bg-orange-600 text-white w-full py-6 rounded-3xl font-black uppercase text-[10px] tracking-widest transition-colors shadow-lg shadow-blue-600/10">
              Unir a la familia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
