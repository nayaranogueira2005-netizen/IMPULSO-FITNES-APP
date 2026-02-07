
import React from 'react';

const Shop: React.FC = () => {
  const products = [
    { icon: 'fa-vial', color: 'blue', title: 'Proteína Isolate', desc: 'Sabor Vainilla o Chocolate (2kg)', price: '39.90€' },
    { icon: 'fa-bolt', color: 'orange', title: 'Pre-Entreno Pro', desc: 'Energía explosiva sin efectos secundarios', price: '24.50€' },
    { icon: 'fa-tshirt', color: 'blue', title: 'Camiseta Técnica', desc: 'Transpirable · Corte Atlético', price: '19.00€' },
    { icon: 'fa-bottle-water', color: 'orange', title: 'Shaker Ed. Limitada', desc: 'Antifugas · Libre de BPA', price: '9.90€' }
  ];

  return (
    <section id="tienda" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-black uppercase italic mb-2">Impulso <span className="text-orange-500">Shop</span></h2>
          <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Suplementación y Merchandising oficial</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:border-orange-500 hover:-translate-y-2 hover:shadow-xl group">
              <div className={`w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-${p.color}-600 text-3xl mb-6 group-hover:bg-${p.color}-600 group-hover:text-white transition-all`}>
                <i className={`fas ${p.icon}`}></i>
              </div>
              <h4 className="font-heading font-black text-lg uppercase mb-2">{p.title}</h4>
              <p className="text-xs text-slate-400 mb-6 italic min-h-[32px]">{p.desc}</p>
              <span className="text-3xl font-black text-slate-900 mb-8">{p.price}</span>
              <button className="w-full py-4 bg-slate-100 rounded-2xl text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition shadow-sm">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
