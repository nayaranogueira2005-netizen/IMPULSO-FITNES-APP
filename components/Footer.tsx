
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-900 text-center px-6">
      <div className="max-w-7xl mx-auto">
        <span className="font-heading text-2xl font-black text-white uppercase tracking-tighter mb-4 inline-block">
          TU IMPULSO<span className="text-orange-500">.</span>
        </span>
        <div className="flex justify-center gap-8 mb-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition">Privacidad</a>
          <a href="#" className="hover:text-white transition">Cookies</a>
          <a href="#" className="hover:text-white transition">Aviso Legal</a>
        </div>
        <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em]">
          © 2026 Tu Impulso Fitness Marín · Supera tus límites todos los días
        </p>
      </div>
    </footer>
  );
};

export default Footer;
