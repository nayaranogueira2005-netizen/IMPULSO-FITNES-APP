
import React from 'react';

const Team: React.FC = () => {
  const coaches = [
    { initials: 'AM', color: 'bg-blue-700', name: 'Adrian Marín', role: 'Director & Head Coach', desc: 'Especialista en entrenamiento de fuerza de alta intensidad y biomecánica aplicada.' },
    { initials: 'SC', color: 'bg-slate-800', name: 'Sara Castro', role: 'Entrenamiento Funcional', desc: 'Experta en readaptación de lesiones y movilidad. Clases dirigidas de HIIT y Yoga.' },
    { initials: 'JL', color: 'bg-blue-900', name: 'Javi López', role: 'Nutricionista Deportivo', desc: 'Encargado de los planes de alimentación y suplementación para optimizar el rendimiento.' }
  ];

  return (
    <section id="equipo" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-black uppercase italic mb-2">Nuestro <span className="text-blue-700">Equipo</span></h2>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Profesionales cualificados a tu servicio</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((c, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all hover:scale-[1.02]">
              <div className={`w-24 h-24 ${c.color} text-white flex items-center justify-center rounded-3xl font-heading text-2xl font-black mb-6 shadow-lg`}>
                {c.initials}
              </div>
              <h4 className="font-heading font-black text-xl uppercase mb-1">{c.name}</h4>
              <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest mb-4">{c.role}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
