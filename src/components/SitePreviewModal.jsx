import React, { useState } from 'react';
import { Monitor, Smartphone, X } from 'lucide-react';

const SitePreviewModal = ({ url, title, onClose }) => {
  const [device, setDevice] = useState('desktop');

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Preview do site ${title}`}
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex flex-col animate-fade-in"
    >
      <div className="h-16 bg-[#181818] border-b border-gray-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <h3 className="text-white font-title hidden md:block">
            Visualizando: <span className="text-[#f5d10d]">{title}</span>
          </h3>
          <div className="flex bg-black rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => setDevice('desktop')}
              aria-label="Visualizar em desktop"
              aria-pressed={device === 'desktop'}
              className={`p-2 rounded ${device === 'desktop' ? 'bg-[#f5d10d] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <Monitor size={20} />
            </button>
            <button
              onClick={() => setDevice('mobile')}
              aria-label="Visualizar em mobile"
              aria-pressed={device === 'mobile'}
              className={`p-2 rounded ${device === 'mobile' ? 'bg-[#f5d10d] text-black' : 'text-gray-400 hover:text-white'}`}
            >
              <Smartphone size={20} />
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar preview"
          className="bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white p-2 rounded-full transition-all flex items-center gap-2 px-4"
        >
          <X size={20} /> <span className="font-bold text-sm">Fechar Preview</span>
        </button>
      </div>
      <div className="flex-1 w-full bg-[#333] flex justify-center items-center overflow-hidden p-4">
        <div className={`transition-all duration-500 bg-white shadow-2xl overflow-hidden ${device === 'mobile' ? 'w-[375px] h-[700px] rounded-[30px] border-8 border-black' : 'w-full h-full rounded-md border border-gray-700'}`}>
          <iframe src={url} title={`Preview de ${title}`} className="w-full h-full bg-white" frameBorder="0" />
        </div>
      </div>
    </div>
  );
};

export default SitePreviewModal;
