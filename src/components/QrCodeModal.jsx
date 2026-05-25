import React from 'react';
import { X, Monitor } from 'lucide-react';

const QrCodeModal = ({ onClose, link }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="qr-title"
      className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-sm w-full p-8 text-center relative shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Fechar QR Code"
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
        >
          <X size={24} />
        </button>

        <h3 id="qr-title" className="text-xl font-bold font-title text-[#020202] mb-2">Fale conosco no WhatsApp</h3>
        <p className="text-sm text-gray-500 mb-6 font-body">Escaneie o QR Code com seu celular</p>

        <div className="bg-white p-2 rounded-xl mb-6 inline-block border-2 border-gray-100 shadow-inner">
          <img
            src="https://lionlink-nine.vercel.app/qrcode.jpg"
            alt="QR Code para acessar o WhatsApp da Lion Link"
            loading="lazy"
            className="w-48 h-48 object-contain"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500 font-medium">ou</span>
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold transition-all font-title shadow-lg group"
        >
          <Monitor size={20} className="group-hover:scale-110 transition-transform" /> Abrir WhatsApp Web
        </a>
      </div>
    </div>
  );
};

export default QrCodeModal;
