import React, { useState, useEffect } from 'react';
import { Globe, ArrowLeft, ExternalLink, TrendingUp, CheckCircle2 } from 'lucide-react';
import SitePreviewModal from './SitePreviewModal';

const CaseStudyPage = ({ onBack, onCta, data }) => {
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!data) return null;

  return (
    <div className="animate-fade-in bg-white">
      {showPreview && (
        <SitePreviewModal url={data.siteUrl} title={data.title} onClose={() => setShowPreview(false)} />
      )}

      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={data.img}
            alt={data.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#f5d10d] font-bold mb-6 hover:underline font-title tracking-wide"
          >
            <ArrowLeft size={20} /> Voltar para Portfólio
          </button>
          <span className="inline-block px-3 py-1 bg-[#f5d10d] text-[#020202] rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-title">
            {data.tag}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-title text-white mb-4 leading-tight">{data.title}</h1>
          <p className="text-xl text-gray-300 font-body max-w-2xl mb-8">{data.summary}</p>
          {data.siteUrl && (
            <button
              onClick={() => setShowPreview(true)}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-full font-bold transition-all backdrop-blur-sm group"
            >
              <Globe size={20} className="text-[#f5d10d]" />
              Ver Site ao Vivo
              <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </button>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-[#020202] mb-4 font-title border-l-4 border-[#f5d10d] pl-4">O Desafio</h2>
                <p className="text-gray-600 font-body leading-relaxed text-lg">{data.challenge}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#020202] mb-4 font-title border-l-4 border-[#f5d10d] pl-4">A Solução Lion Link</h2>
                <p className="text-gray-600 font-body leading-relaxed text-lg mb-6">{data.solution}</p>
              </div>

              <div className="bg-[#181818] p-8 rounded-2xl text-white shadow-xl">
                <h2 className="text-2xl font-bold text-[#f5d10d] mb-6 font-title flex items-center gap-2">
                  <TrendingUp /> Resultados Alcançados
                </h2>
                <ul className="space-y-4">
                  {data.resultsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 mt-1 shrink-0" size={20} />
                      <span className="text-gray-200 font-body leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="sticky top-28 bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-xl mb-2 font-title">Quer resultados assim?</h3>
                <p className="text-sm text-gray-600 mb-6 font-body">Nós ajudamos você a faturar mais. Vamos bater um papo e entender sua empresa.</p>
                <button
                  onClick={onCta}
                  className="w-full py-4 bg-[#f5d10d] text-[#020202] rounded-xl font-bold hover:bg-[#d8b10e] transition-all shadow-lg flex justify-center items-center gap-2 font-title tracking-wide"
                >
                  Agendar Análise Gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
