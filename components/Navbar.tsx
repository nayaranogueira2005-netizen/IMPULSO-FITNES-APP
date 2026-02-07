
import React from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <nav className="sticky top-[35px] w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="font-heading text-2xl md:text-3xl font-black tracking-tighter uppercase text-slate-900">
            TU IMPULSO<span className="text-[#f97316]">.</span>
          </span>
        </a>
        
        <div className="hidden lg:flex space-x-8 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-500">
          <a href="#inicio" className="hover:text-blue-700 transition">Inicio</a>
          <a href="#metodo" className="hover:text-blue-700 transition">Método</a>
          <a href="#nutricion" className="hover:text-blue-700 transition">Nutrición</a>
          <a href="#tienda" className="hover:text-blue-700 transition">Tienda</a>
          <a href="#equipo" className="hover:text-blue-700 transition">Equipo</a>
          <a href="#tarifas" className="hover:text-blue-700 transition">Tarifas</a>
        </div>

        <button 
          onClick={onOpenModal}
          className="bg-blue-600 hover:bg-orange-500 text-white px-6 md:px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-600/10 hover:-translate-y-1"
        >
          Prueba Gratis
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
