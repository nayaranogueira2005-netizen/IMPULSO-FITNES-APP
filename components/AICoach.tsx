
import React, { useState, useRef, useEffect } from 'react';
import { getCoachResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

interface AICoachProps {
  onClose: () => void;
}

const AICoach: React.FC<AICoachProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: '¡Hola! Soy Impulso Bot. ¿En qué puedo ayudarte a mejorar hoy? Puedo darte consejos de entrenamiento, nutrición o información sobre el gym.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await getCoachResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-28 right-8 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-3xl z-50 flex flex-col overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-10 duration-300">
      {/* Header */}
      <div className="bg-slate-900 p-6 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <i className="fas fa-robot"></i>
          </div>
          <div>
            <h3 className="text-white font-heading font-black text-sm uppercase tracking-wider">Impulso Bot</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Coach Online</span>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-500 hover:text-white transition">
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-grow p-6 overflow-y-auto bg-slate-50 space-y-4 scroll-smooth"
      >
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
              m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100'
            }`}>
              <p className="whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex gap-2">
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-slate-100 shrink-0">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu pregunta..."
            className="flex-grow bg-slate-50 p-4 rounded-2xl outline-none text-sm font-medium border-2 border-transparent focus:border-blue-600 transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-orange-600 transition-colors disabled:opacity-50"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
