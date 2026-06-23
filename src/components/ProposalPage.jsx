import React, { useEffect } from 'react';
import {
  SearchX,
  BotOff,
  Instagram,
  Microscope,
  Gem,
  Globe,
  MapPin,
  Star,
  ShieldCheck,
  FileText,
  Search,
  LayoutGrid,
  BarChart3,
  Headset,
  Check,
} from 'lucide-react';

const ICONS = {
  SearchX,
  BotOff,
  Instagram,
  Microscope,
  Gem,
  Globe,
  MapPin,
  Star,
  ShieldCheck,
  FileText,
  Search,
  LayoutGrid,
  BarChart3,
  Headset,
};

// Permite **negrito** dentro dos textos vindos dos dados da proposta.
const renderBold = (text) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white/70 font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );

const SectionLabel = ({ children }) => (
  <div className="text-[9px] tracking-[3px] uppercase text-[#C9A227] font-bold mb-6">{children}</div>
);

const ProposalPage = ({ data }) => {
  useEffect(() => {
    document.title = data.pageTitle;
    window.scrollTo(0, 0);
  }, [data]);

  const waLink = `https://wa.me/${data.whatsapp.number}?text=${encodeURIComponent(data.whatsapp.message)}`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-10 px-5 font-body">
      <div className="max-w-[820px] mx-auto bg-[#0E0E0E] rounded-[20px] overflow-hidden border border-[#1e1e1e]">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 sm:px-12 py-8 border-b border-[#1e1e1e]">
          <img src="https://lionlink-nine.vercel.app/Logo-Branco.png" alt="Lion Link Soluções Digitais" className="h-9" />
          <div className="bg-[#1A1A1A] border border-[#2e2e2e] rounded-lg px-4 py-2 text-[10px] text-[#C9A227] tracking-[2.5px] uppercase font-bold">
            {data.badge}
          </div>
        </div>

        {/* HERO */}
        <div className="px-6 sm:px-12 pt-12 pb-11 border-b border-[#1a1a1a]">
          <div className="text-[10px] tracking-[3px] uppercase text-[#C9A227] font-bold mb-4">{data.heroLabel}</div>
          <h1 className="font-title text-3xl sm:text-[40px] font-bold leading-[1.15] mb-[18px] text-white">
            {data.heroTitleMain}
            <br />
            <span className="text-[#F0C93A]">{data.heroTitleHighlight}</span>
          </h1>
          <p className="text-[15px] text-white/50 leading-[1.75] max-w-[600px]">{data.heroSub}</p>
        </div>

        {/* META */}
        <div className="flex flex-wrap bg-[#111] border-b border-[#1a1a1a]">
          {data.meta.map(({ label, value }) => (
            <div key={label} className="flex-1 basis-1/2 sm:basis-0 px-6 py-[18px] border-r border-b sm:border-b-0 border-[#1e1e1e] last:border-r-0">
              <div className="text-[9px] uppercase tracking-[2px] text-white/30 font-bold mb-[5px]">{label}</div>
              <div className="text-[13px] text-white/80 font-medium">{value}</div>
            </div>
          ))}
        </div>

        {/* DIAGNÓSTICO */}
        <div className="px-6 sm:px-12 py-10 border-b border-[#1a1a1a]">
          <SectionLabel>O diagnóstico</SectionLabel>
          <div className="grid sm:grid-cols-3 gap-3.5">
            {data.diagnostico.map(({ icon, title, desc }) => {
              const Icon = ICONS[icon];
              return (
                <div key={title} className="bg-[#1A1A1A] border border-[#272727] rounded-xl p-5">
                  <Icon className="text-[#C9A227] mb-3" size={22} />
                  <div className="text-[13px] font-semibold text-white mb-1.5">{title}</div>
                  <p className="text-xs text-white/40 leading-[1.55]">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* PILARES */}
        <div className="px-6 sm:px-12 py-10 border-b border-[#1a1a1a]">
          <SectionLabel>Como trabalhamos</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {data.pilares.map(({ num, title, desc }) => (
              <div key={num} className="relative overflow-hidden bg-[#1A1A1A] border border-[#272727] rounded-xl p-6">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-[#C9A227]" />
                <div className="text-[10px] tracking-[2px] uppercase text-[#C9A227] font-bold mb-2.5">{num}</div>
                <div className="text-[15px] font-bold text-white mb-2.5 leading-[1.3]">{title}</div>
                <p className="text-[13px] text-white/45 leading-[1.65]">{renderBold(desc)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PROMESSA */}
        <div className="px-6 sm:px-12 py-10 border-b border-[#1a1a1a]">
          <div className="bg-[#161300] border border-[#C9A227] rounded-2xl px-7 py-8 text-center">
            <ShieldCheck className="text-[#F0C93A] mx-auto mb-3.5" size={32} />
            <div className="font-title text-[24px] font-bold text-white mb-3 leading-[1.3]">
              {data.promessa.titleMain}
              <br />
              <span className="text-[#F0C93A]">{data.promessa.titleHighlight}</span>
            </div>
            <p className="text-sm text-white/50 leading-[1.75] max-w-[560px] mx-auto">{data.promessa.desc}</p>
          </div>
        </div>

        {/* O QUE VAMOS CONSTRUIR */}
        <div className="px-6 sm:px-12 py-10 border-b border-[#1a1a1a]">
          <SectionLabel>O que vamos construir</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: 'Setup Inicial', color: '#F0C93A', list: data.services.setup },
              { label: 'Mensalidade', color: '#C9A227', list: data.services.mensal },
            ].map(({ label, color, list }) => (
              <div key={label}>
                <div className="text-[9px] tracking-[2.5px] uppercase font-bold mb-3 pb-2.5 border-b border-[#222]" style={{ color }}>
                  {label}
                </div>
                {list.map(({ icon, name, desc }) => {
                  const Icon = ICONS[icon];
                  return (
                    <div key={name} className="flex items-start gap-3 py-[13px] border-b border-[#1e1e1e] last:border-b-0">
                      <Icon className="text-[#C9A227] mt-0.5 shrink-0" size={16} />
                      <div>
                        <div className="text-[13px] font-semibold text-white mb-0.5 leading-[1.3]">{name}</div>
                        <div className="text-[11px] text-white/35 leading-[1.5]">{desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* INVESTIMENTO */}
        <div className="px-6 sm:px-12 py-10 border-b border-[#1a1a1a]">
          <SectionLabel>Investimento</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { type: 'Setup Inicial', highlight: true, ...data.pricing.setup },
              { type: 'Mensalidade', highlight: false, ...data.pricing.mensal },
            ].map(({ type, highlight, value, suffix, items }) => (
              <div
                key={type}
                className={`rounded-2xl p-6 border ${highlight ? 'border-[#C9A227] bg-[#161300]' : 'border-[#272727] bg-[#1A1A1A]'}`}
              >
                <div className="text-[9px] uppercase tracking-[2.5px] text-white/35 font-bold mb-2.5">{type}</div>
                <div className="font-title text-[34px] font-bold text-[#F0C93A] leading-none mb-1.5">{value}</div>
                <div className="text-xs text-white/35 mb-5 leading-[1.4]">{suffix}</div>
                <div className="flex flex-col">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs py-[9px] border-b border-[#252525] last:border-b-0">
                      <Check className="text-[#C9A227] shrink-0 mt-0.5" size={13} />
                      <span className="text-white/65 leading-[1.4]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {data.pricing.obs && (
            <div className="mt-4 bg-[#111] border border-[#222] border-l-[3px] border-l-[#C9A227] rounded-lg px-5 py-4 text-xs text-white/45 leading-[1.7]">
              {renderBold(data.pricing.obs)}
            </div>
          )}
        </div>

        {/* PRÓXIMOS PASSOS */}
        <div className="px-6 sm:px-12 py-10 border-b border-[#1a1a1a]">
          <SectionLabel>Próximos passos</SectionLabel>
          <div className="flex flex-col gap-[18px]">
            {data.steps.map(({ title, desc }, i) => (
              <div key={title} className="flex gap-[18px] items-start">
                <div className="w-[30px] h-[30px] rounded-full bg-[#C9A227] text-[#0E0E0E] text-xs font-extrabold flex items-center justify-center shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">{title}</div>
                  <p className="text-xs text-white/40 leading-[1.55]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 sm:px-12 py-7 flex flex-col sm:flex-row gap-4 items-center justify-between bg-[#080808]">
          <div className="text-[11px] text-white/25">
            Lion Link <span className="text-[#C9A227]">Soluções Digitais</span> · lionlink.com.br
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#F0C93A] text-[#0E0E0E] font-bold text-sm rounded-lg px-[22px] py-3 transition-colors"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fechar parceria
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
