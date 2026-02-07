
import React from 'react';

const Nutrition: React.FC = () => {
  return (
    <section id="nutricion" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-orange-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-6">El combustible de tu cambio</h2>
        <h2 className="font-heading text-5xl font-black uppercase mb-8 leading-tight">Nutrición <span className="text-blue-500 underline decoration-white underline-offset-8">Inteligente</span></h2>
        <p className="text-slate-400 text-lg mb-12">No solo entrenamos tu cuerpo, optimizamos tu alimentación con planes personalizados y seguimiento mensual.</p>
        <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-blue-500 transition-colors">
            <h4 className="font-bold uppercase text-blue-400 mb-3 text-lg">Antropometría</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Medición de grasa y masa muscular cada mes para ajustar tu progreso con precisión clínica.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-orange-500 transition-colors">
            <h4 className="font-bold uppercase text-orange-400 mb-3 text-lg">Dietas Adaptadas</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Planes flexibles diseñados por nutricionistas deportivos titulados que se adaptan a tu ritmo de vida.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
