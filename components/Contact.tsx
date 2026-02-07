
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="ubicacion" className="py-24 bg-white px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
          <iframe 
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.4862261642!2d-8.7042898!3d42.321481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f6385d56f5a33%3A0xe5f80f9776d6537!2sR%C3%BAa%20Jaime%20Janer%2C%2042%2C%2036900%20Mar%C3%ADn%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1715000000000!5m2!1ses!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="p-4 md:p-8">
          <h2 className="font-heading text-4xl md:text-5xl font-black mb-10 uppercase italic">Ven a <span className="text-orange-500">vernos</span></h2>
          <div className="space-y-10 text-slate-600 font-bold mb-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <i className="fas fa-location-dot text-xl"></i>
              </div>
              <div className="pt-1">
                <p className="text-slate-900 text-lg">Rúa Jaime Janer 42</p>
                <p className="text-slate-400 font-medium">36900 Marín, Pontevedra</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 flex-shrink-0">
                <i className="fas fa-clock text-xl"></i>
              </div>
              <div className="pt-1">
                <p className="text-slate-900 text-lg">Acceso 24h / 365 días</p>
                <p className="text-slate-400 font-medium">Atención presencial: 09:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:bg-pink-50 transition-all text-2xl shadow-sm"><i className="fab fa-instagram"></i></a>
            <a href="#" className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-green-600 hover:bg-green-50 transition-all text-2xl shadow-sm"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all text-2xl shadow-sm"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
