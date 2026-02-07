
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Nutrition from './components/Nutrition';
import Shop from './components/Shop';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import AICoach from './components/AICoach';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAICoachOpen, setIsAICoachOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="bg-[#f97316] text-white text-[10px] font-extrabold uppercase tracking-[0.2em] py-2.5 text-center sticky top-0 z-[60]">
        Matrícula gratuita para nuevas altas este mes · Impulsa tu cambio ahora en Marín
      </div>
      
      <Navbar onOpenModal={openModal} />
      
      <main className="flex-grow">
        <Hero onOpenModal={openModal} />
        <Features />
        <Nutrition />
        <Shop />
        <Team />
        <Pricing onOpenModal={openModal} />
        <Contact />
      </main>

      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* Floating AI Action Button */}
      <button 
        onClick={() => setIsAICoachOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 group overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
        <i className="fas fa-robot text-2xl relative z-10"></i>
      </button>

      {isAICoachOpen && <AICoach onClose={() => setIsAICoachOpen(false)} />}
    </div>
  );
};

export default App;
