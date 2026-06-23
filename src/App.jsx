import React, { useState } from 'react';
import {
  MapPin,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Target,
  MessageCircle,
  Database,
  Settings,
  XCircle,
  CheckSquare,
  Handshake,
} from 'lucide-react';

import SitePreviewModal from './components/SitePreviewModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import QrCodeModal from './components/QrCodeModal';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import CaseStudyPage from './components/CaseStudyPage';
import portfolioItems from './data/portfolioItems';

const WHATSAPP_NUMBER = '5511912157087';

const LionLinkLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [qrLink, setQrLink] = useState('');

  const scrollToSection = (id) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCtaClick = () => {
    const message = "Olá! Gostaria de bater um papo sobre como a Lion Link pode ser a parceira de crescimento da minha empresa.";
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    if (window.innerWidth > 768) {
      setQrLink(waLink);
      setIsQrOpen(true);
    } else {
      window.open(waLink, '_blank');
    }
  };

  const openCaseStudy = (caseId) => {
    if (portfolioItems[caseId]) {
      setSelectedCase(portfolioItems[caseId]);
      setCurrentView('case-study');
    }
  };

  return (
    <div className="bg-white font-body" style={{ color: "#020202" }}>

      {/* NAV */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <img
                src="https://lionlink-nine.vercel.app/Logo-colorido.png"
                alt="Lion Link Logo"
                loading="lazy"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8 font-body">
              <button onClick={() => scrollToSection('problema')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">O Problema</button>
              <button onClick={() => scrollToSection('processo')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">Como Funciona</button>
              <button onClick={() => scrollToSection('solucoes')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">Infraestrutura</button>
              <button onClick={() => scrollToSection('parceria')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">A Parceria</button>
              <button onClick={() => scrollToSection('contato')} className="bg-[#020202] text-[#f5d10d] px-6 py-2.5 rounded-full font-bold hover:bg-[#181818] transition-all shadow-lg hover:shadow-[#f5d10d]/20 flex items-center gap-2 border border-[#f5d10d]/20 font-title tracking-wide">
                Agendar Análise
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                className="text-[#020202]"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl font-body">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('problema')} className="block w-full text-left px-3 py-4 text-base font-medium text-[#020202] hover:bg-[#f5d10d]/10 rounded-lg">O Problema</button>
              <button onClick={() => scrollToSection('processo')} className="block w-full text-left px-3 py-4 text-base font-medium text-[#020202] hover:bg-[#f5d10d]/10 rounded-lg">Como Funciona</button>
              <button onClick={() => scrollToSection('solucoes')} className="block w-full text-left px-3 py-4 text-base font-medium text-[#020202] hover:bg-[#f5d10d]/10 rounded-lg">Infraestrutura</button>
              <button onClick={() => scrollToSection('parceria')} className="block w-full text-left px-3 py-4 text-base font-medium text-[#020202] hover:bg-[#f5d10d]/10 rounded-lg">A Parceria</button>
            </div>
          </div>
        )}
      </nav>

      {isPrivacyOpen && <PrivacyPolicyModal onClose={() => setIsPrivacyOpen(false)} />}
      {isQrOpen && <QrCodeModal onClose={() => setIsQrOpen(false)} link={qrLink} />}
      <FloatingWhatsAppButton onClick={handleCtaClick} />

      {currentView === 'case-study' ? (
        <CaseStudyPage onBack={() => setCurrentView('home')} onCta={handleCtaClick} data={selectedCase} />
      ) : (
        <>
          {/* HERO */}
          <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-[#fafaf8] overflow-hidden">
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(2,2,2,0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            ></div>
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#020202] via-[#f5d10d] to-[#020202]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
                <div className="space-y-7">
                  <div className="animate-fade-in-up flex items-center gap-3 font-body">
                    <span className="h-px w-10 bg-[#020202]"></span>
                    <span className="text-xs font-bold uppercase tracking-[3px] text-[#020202]">Especialistas em Escalar Negócios</span>
                  </div>
                  <h1 className="font-title text-[#020202]" style={{ animationDelay: '0.1s' }}>
                    <span className="animate-fade-in-up block text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-black leading-[1.05]" style={{ animationDelay: '0.1s' }}>
                      Sua empresa completa
                    </span>
                    <span className="animate-fade-in-up block text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] font-black leading-[1.05]" style={{ animationDelay: '0.18s' }}>
                      no{' '}
                      <span className="relative inline-block text-[#020202]">
                        digital.
                        <svg className="absolute left-0 -bottom-1 w-full h-3 origin-left animate-draw-line" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M2 9 C 50 2, 150 2, 198 9" stroke="#f5d10d" strokeWidth="6" fill="none" strokeLinecap="round" />
                        </svg>
                      </span>
                    </span>
                    <span className="animate-fade-in-up font-body block text-xl lg:text-2xl font-normal text-gray-600 mt-4" style={{ animationDelay: '0.26s' }}>
                      Infraestrutura, automação e marketing integrados — sem pular nenhuma etapa.
                    </span>
                  </h1>
                  <p className="animate-fade-in-up text-lg text-gray-600 max-w-lg leading-relaxed font-body" style={{ animationDelay: '0.34s' }}>
                    Não somos só agência. Somos parceiros que analisam seu negócio como um todo e implementam soluções digitais que automatizam processos, centralizam operações e geram resultados mensuráveis.
                  </p>
                  <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 pt-2 font-title" style={{ animationDelay: '0.42s' }}>
                    <button onClick={() => scrollToSection('contato')} className="bg-[#f5d10d] text-[#020202] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8b10e] transition-all shadow-xl hover:shadow-[#f5d10d]/30 flex items-center justify-center gap-2 group tracking-wide">
                      Agendar uma Análise Gratuita <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => scrollToSection('solucoes')} className="bg-white text-[#020202] border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#f5d10d] hover:bg-[#f5d10d]/5 transition-all flex items-center justify-center gap-2 tracking-wide">
                      Ver Soluções
                    </button>
                  </div>
                </div>

                <div className="relative animate-frame-reveal">
                  <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#020202] rounded-2xl -z-10 hidden sm:block"></div>
                  <img
                    src="https://lionlink-nine.vercel.app/lion%20link%20-%20homem%20ao%20celular.webp"
                    alt="Profissional utilizando celular — Lion Link"
                    loading="lazy"
                    className="relative rounded-2xl shadow-xl border-4 border-[#f5d10d] w-full object-cover h-[440px] lg:h-[540px]"
                  />
                  {/* Badge inferior — dentro da imagem em mobile, fora em desktop */}
                  <div className="absolute bottom-4 left-4 lg:-bottom-7 lg:-right-7 lg:left-auto bg-[#020202] p-3 lg:p-4 rounded-xl shadow-xl border-2 border-[#f5d10d] flex items-center gap-3 font-title">
                    <TrendingUp className="text-[#f5d10d] shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[2px]">Crescimento</p>
                      <p className="text-sm lg:text-base font-bold text-white">Escala Previsível</p>
                    </div>
                  </div>
                  {/* Badge superior — oculto em mobile, visível em tablet/desktop */}
                  <div className="absolute top-4 right-4 lg:top-8 lg:-left-7 bg-[#f5d10d] p-3 lg:p-4 rounded-xl shadow-xl border-2 border-[#020202] items-center gap-3 hidden md:flex font-title">
                    <Settings className="text-[#020202] shrink-0" size={20} />
                    <div>
                      <p className="text-[10px] text-[#020202]/60 font-bold uppercase tracking-[2px]">Operação</p>
                      <p className="text-sm lg:text-base font-bold text-[#020202]">100% Automatizada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* O PROBLEMA */}
          <section id="problema" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[#020202] mb-6 font-title leading-tight">
                    Negócios fragmentados não crescem. <span className="text-[#d8b10e]">Eles sobrevivem.</span>
                  </h2>
                  <p className="text-lg text-gray-600 font-body mb-6 leading-relaxed">
                    Você tem WhatsApp pessoal da recepção, do vendedor, do gestor. Emails se perdem na caixa. Clientes não sabem se você respondeu ou não. Dados espalhados em planilhas. Sem automação, você só trabalha para manter as luzes acesas — não para escalar.
                  </p>
                  <p className="text-lg text-gray-600 font-body mb-8 font-semibold">
                    A maioria das agências oferece campanha bonita. Mas esquece da infraestrutura que faz o negócio funcionar.
                  </p>
                </div>
                <div className="bg-[#f9f9f9] p-8 md:p-10 rounded-3xl border border-gray-200 shadow-lg">
                  <ul className="space-y-6 font-body text-gray-700">
                    {[
                      "Múltiplas linhas de WhatsApp (caótico)",
                      "Sem histórico centralizado de clientes",
                      "Processos manuais que consomem tempo",
                      "Dados fragmentados (planilhas, emails, chats)",
                      "Marketing sem integração com a operação",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-4">
                        <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* COMO FUNCIONA */}
          <section id="processo" className="py-24 bg-[#020202] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-title">3 Etapas para transformar seu negócio</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-12 relative">
                <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#333] via-[#f5d10d] to-[#333] z-0"></div>

                {[
                  {
                    num: "1",
                    title: "Diagnóstico & Estratégia",
                    desc: "Não saímos executando sem direção. Primeiro, mapeamos:",
                    items: ["Auditoria da sua Presença Digital", "Mapeamento do Funil de Vendas", "Identificação de gargalos na operação", "Planejamento de Metas e KPIs"],
                    result: "Resultado: Plano de Ação focado em lucro",
                  },
                  {
                    num: "2",
                    title: "Construção da Máquina",
                    desc: "Implementamos a infraestrutura que atende e vende:",
                    items: ["Sites e Landing Pages de alta conversão", "Setup de WhatsApp Centralizado e CRM", "Robôs de Autoatendimento (Chatbots)", "Configuração avançada de Google Maps", "Automações para eliminar tarefas manuais"],
                    result: "Resultado: Operação integrada, sem vazamento de leads",
                  },
                  {
                    num: "3",
                    title: "Tração & Escala Contínua",
                    desc: "Aceleramos as vendas e otimizamos os resultados:",
                    items: ["Tráfego Pago (Google Ads & Meta Ads)", "Produção Audiovisual (Vídeos/Fotos)", "E-mail Marketing e Campanhas de Retenção", "Consultoria Estratégica e Análise de Dados"],
                    result: "Resultado: Crescimento com previsibilidade de caixa",
                  },
                ].map(({ num, title, desc, items, result }) => (
                  <div key={num} className="relative z-10 bg-[#181818] p-8 rounded-3xl border border-[#333] hover:border-[#f5d10d] transition-all flex flex-col">
                    <div className="w-16 h-16 bg-[#020202] border-2 border-[#f5d10d] rounded-full flex items-center justify-center text-[#f5d10d] font-bold text-2xl font-title mx-auto mb-6 shadow-[0_0_20px_rgba(245,209,13,0.3)]">{num}</div>
                    <h3 className="text-2xl font-bold font-title text-center mb-4 text-[#f5d10d]">{title}</h3>
                    <p className="text-gray-400 font-body text-center mb-6">{desc}</p>
                    <ul className="text-sm text-gray-300 space-y-3 font-body mb-6">
                      {items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <CheckSquare size={16} className="text-[#f5d10d] shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#f5d10d]/10 p-3 rounded-lg text-[#f5d10d] text-sm font-semibold text-center border border-[#f5d10d]/20 mt-auto">{result}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOLUÇÕES */}
          <section id="solucoes" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#020202] mb-6 font-title">Soluções completas para escalar seu negócio</h2>
                <p className="text-lg text-gray-600 font-body">Integramos o marketing que atrai com a infraestrutura que atende e vende.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: <Globe size={22} />, title: "Criação de Site Moderno", desc: "Sua vitrine 24h projetada para alta conversão.", items: ["Landing Pages ultra rápidas", "Copywriting focado em vendas", "100% otimizado para celulares"], ideal: "Captar leads e gerar autoridade" },
                  { icon: <Target size={22} />, title: "Anúncios Que Viram Clientes", desc: "Tráfego pago direto para quem quer comprar.", items: ["Google Ads (Busca por intenção)", "Meta Ads (Instagram e Facebook)", "Campanhas de Remarketing"], ideal: "Escala rápida e previsível" },
                  { icon: <MapPin size={22} />, title: "Apareça no Google Maps", desc: "Domine as buscas e seja a primeira escolha.", items: ["Ficha do Google otimizada", "Posicionamento no topo (SEO Local)", "Gestão de avaliações estratégicas"], ideal: "Clínicas, escritórios e negócios físicos" },
                  { icon: <MessageCircle size={22} />, title: "WhatsApp & Chatbots", desc: "Atendimento ágil, organizado e 24/7.", items: ["Vários atendentes no mesmo número", "Robôs de qualificação de leads", "Distribuição automática"], ideal: "Equipes de vendas e recepção" },
                  { icon: <Database size={22} />, title: "CRM Integrado", desc: "Nunca mais perca o histórico de um lead.", items: ["Funil de vendas 100% visual", "Histórico salvo (WhatsApp e E-mail)", "Lembretes de follow-up"], ideal: "Gestão comercial e controle" },
                  { icon: <Settings size={22} />, title: "Automações Customizadas", desc: "Máquinas trabalhando no piloto automático.", items: ["Fluxos personalizados para sua rotina", "Integração entre sistemas", "E-mails automatizados"], ideal: "Ganho de tempo e escala" },
                ].map(({ icon, title, desc, items, ideal }, idx) => (
                  <div key={title} className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#f5d10d]/50 transition-all overflow-hidden group">
                    <span className="absolute -top-4 -right-2 font-title text-[5.5rem] font-black leading-none text-gray-50 group-hover:text-[#f5d10d]/10 transition-colors select-none pointer-events-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#f5d10d] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#020202] text-[#f5d10d]">{icon}</div>
                    <h3 className="relative text-xl font-bold text-[#020202] mb-2 font-title">{title}</h3>
                    <p className="relative text-sm font-semibold text-gray-500 mb-4">{desc}</p>
                    <ul className="relative text-sm text-gray-600 space-y-2 mb-6 font-body">
                      {items.map((i) => <li key={i}>• {i}</li>)}
                    </ul>
                    <p className="relative text-xs font-bold text-gray-400 uppercase tracking-wide">Ideal para: {ideal}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* A PARCERIA */}
          <section id="parceria" className="py-24 bg-[#020202] text-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-title leading-tight">
                    Não vendemos planos.<br /> <span className="text-[#f5d10d]">Construímos parcerias.</span>
                  </h2>
                  <p className="text-lg text-gray-300 font-body mb-6 leading-relaxed">
                    O nosso foco não é te empurrar um pacote pronto ou um número de posts engessado. Nosso objetivo é sentar na cadeira ao seu lado, ter um <strong>olhar clínico sobre cada área da sua empresa</strong> e descobrir exatamente onde o dinheiro está ficando na mesa para que possamos agir.
                  </p>
                  <p className="text-lg text-gray-300 font-body mb-8 leading-relaxed">
                    Pense na Lion Link como aquele <strong>amigo experiente que pega na sua mão</strong> para te ajudar a atravessar uma rua movimentada. Tiramos o peso do digital das suas costas, automatizamos o que precisa ser rápido e criamos caminhos para você faturar mais.
                  </p>
                  <button onClick={handleCtaClick} className="bg-[#f5d10d] text-[#020202] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8b10e] transition-all shadow-lg flex items-center gap-2 font-title tracking-wide w-fit">
                    Tomar um café com a gente <ArrowRight size={20} />
                  </button>
                </div>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#f5d10d] rounded-3xl -z-0 hidden sm:block"></div>
                  <div className="bg-[#181818] p-8 md:p-10 rounded-3xl border border-[#333] relative z-10 shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-8 font-title flex items-center gap-3">
                      <Handshake className="text-[#f5d10d]" size={32} /> O que um verdadeiro parceiro faz:
                    </h3>
                    <ul className="space-y-6 font-body text-gray-300">
                      {[
                        { title: "Mergulho profundo", desc: "Entendemos seu fluxo de vendas antes de propor qualquer solução tecnológica." },
                        { title: "Foco no Lucro", desc: "Toda ação tem um único objetivo: colocar mais dinheiro no caixa da sua empresa." },
                        { title: "Papo Reto", desc: "Sem termos difíceis ou métricas de vaidade. Mostramos a realidade de forma clara." },
                        { title: "Crescimento Previsível", desc: "Construímos máquinas de vendas que operam 24 horas por dia." },
                      ].map(({ title, desc }) => (
                        <li key={title} className="flex items-start gap-4">
                          <div className="bg-green-500/20 p-2 rounded-lg text-green-500 shrink-0"><CheckCircle2 size={24} /></div>
                          <div><strong className="text-white block mb-1">{title}</strong> {desc}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CASES */}
          <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-2 font-title">Resultados que vão além de marketing</h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { id: 'diferencial', tag: 'SERVIÇOS', tagColor: 'bg-blue-100 text-blue-800', img: "https://lionlink-nine.vercel.app/Diferencial-Contabilidade.webp", alt: "Diferencial Contábil", title: "Diferencial Contábil", desc: "Implementação de WhatsApp Centralizado + CRM para equipe de 15 pessoas.", metric: "80% das msgs < 2h" },
                  { id: 'shekinah', tag: 'SAÚDE', tagColor: 'bg-green-100 text-green-800', img: "https://lionlink-nine.vercel.app/Clinica-Shekinah.webp", alt: "Clínica Shekinah", title: "Clínica Shekinah", desc: "Chatbot + CRM + Campanhas Integradas para clínica de saúde.", metric: "+145% leads/mês" },
                  { id: 'arouca', tag: 'SAÚDE', tagColor: 'bg-green-100 text-green-800', img: "https://lionlink-nine.vercel.app/Psicologo-Andre-Arouca.webp", alt: "Dr. André Arouca", title: "Dr. André Arouca", desc: "Expansão Digital + Automação de Follow-up para consultório.", metric: "10x mais pacientes" },
                  { id: 'credicliente', tag: 'FINANCEIRO', tagColor: 'bg-yellow-100 text-yellow-800', img: "https://credicliente.com.br/assets/hero-family-DPeLNPt_.jpg", alt: "CrediCliente", title: "CrediCliente", desc: "Site de alta conversão + tráfego pago para empresa de crédito pessoal.", metric: "+100% leads/mês" },
                ].map(({ id, tag, tagColor, img, alt, title, desc, metric }) => (
                  <div
                    key={id}
                    onClick={() => openCaseStudy(id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver case de sucesso: ${title}`}
                    onKeyDown={(e) => e.key === 'Enter' && openCaseStudy(id)}
                    className="bg-white rounded-3xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                      <img src={img} alt={alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className={`text-xs font-bold px-2 py-1 rounded mb-3 w-fit font-title ${tagColor}`}>{tag}</span>
                      <h3 className="text-xl font-bold font-title text-[#020202] mb-2 flex justify-between items-center">
                        {title} <ArrowRight size={20} className="text-[#f5d10d] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      <p className="text-sm text-gray-600 font-body mb-4 line-clamp-2">{desc}</p>
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="text-sm font-bold text-[#020202] flex items-center gap-2">
                          <TrendingUp size={16} className="text-green-500" /> {metric}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer id="contato" className="bg-[#020202] text-white pt-20 pb-10 border-t border-[#181818]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl font-extrabold mb-4 font-title leading-tight">Pronto para transformar seu negócio?</h2>
                <p className="text-gray-400 text-lg mb-8 font-body">Agende uma análise digital gratuita com nosso time. Vamos entender seu negócio, identificar oportunidades e traçar um plano concreto de crescimento lado a lado.</p>
                <button
                  onClick={handleCtaClick}
                  className="w-full bg-[#f5d10d] text-[#020202] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8b10e] transition-all shadow-lg flex items-center justify-center font-title tracking-wide"
                >
                  Agendar Análise Gratuita
                </button>
              </div>
              <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-body">
                <div className="flex items-center gap-3 mb-4 md:mb-0">
                  <img src="https://lionlink-nine.vercel.app/Logo-Branco.png" alt="Lion Link Logo" loading="lazy" className="h-12 w-auto object-contain" />
                </div>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/lionlinkbr/" target="_blank" rel="nofollow noreferrer" className="hover:text-[#f5d10d] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#f5d10d] transition-colors">LinkedIn</a>
                  <button
                    onClick={() => setIsPrivacyOpen(true)}
                    className="hover:text-[#f5d10d] transition-colors bg-transparent border-none p-0 cursor-pointer"
                  >
                    Política de Privacidade
                  </button>
                </div>
                <p className="mt-4 md:mt-0">© 2026 Lion Link Soluções Digitais.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default LionLinkLanding;
