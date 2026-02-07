
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: 'fa-heart-pulse',
      color: 'blue',
      title: 'Asesoramiento Real',
      desc: 'Te enseñamos la técnica correcta para que cada repetición cuente en tu progreso.'
    },
    {
      icon: 'fa-dumbbell',
      color: 'orange',
      title: 'Material de Élite',
      desc: 'Equipamiento de última generación Hammer Strength y Life Fitness.'
    },
    {
      icon: 'fa-clock',
      color: 'green',
      title: 'Acceso 24/7',
      desc: 'Sin excusas. Abierto todos los días del año con tu pulsera de socio.'
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {features.map((f, idx) => (
          <div key={idx} className="p-10 rounded-[3rem] bg-white shadow-sm hover:shadow-xl transition-all group">
            <div className={`w-16 h-16 bg-${f.color}-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-${f.color}-600 text-2xl group-hover:bg-${f.color}-600 group-hover:text-white transition-all`}>
              <i className={`fas ${f.icon}`}></i>
            </div>
            <h3 className="font-heading text-xl font-black uppercase mb-4 italic">{f.title}</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
