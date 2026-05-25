import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Target,
  Loader2,
  Check,
  AlertCircle,
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

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER;

const LionLinkLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', whatsapp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [qrLink, setQrLink] = useState('');

  useEffect(() => {
    const existing = document.querySelector("link[rel*='icon']");
    const link = existing || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'https://lionlink-nine.vercel.app/lionicon.svg';
    if (!existing) document.head.appendChild(link);
  }, []);

  const handleContactChange = (e) => {
    let { name, value } = e.target;
    if (name === 'whatsapp') {
      value = value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const leadData = {
      name: contactForm.name,
      whatsapp: contactForm.whatsapp,
      origin: "Landing Page Lion Link",
    };

    try {
      const responseSupabase = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ name: leadData.name, whatsapp: leadData.whatsapp }),
      });

      if (!responseSupabase.ok) console.warn("Aviso: Falha ao salvar no Supabase, tentando EmailJS.");

      const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_USER_ID,
          template_params: {
            name: leadData.name,
            whatsapp: leadData.whatsapp,
            origin: leadData.origin,
          },
        }),
      });

      if (!emailJsResponse.ok && !responseSupabase.ok) {
        const errorText = await emailJsResponse.text();
        throw new Error(`Erro ao enviar: ${emailJsResponse.statusText} - ${errorText}`);
      }

      setSubmitSuccess(true);
      setContactForm({ name: '', whatsapp: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Erro no processo de envio:", error);
      setSubmitError("Erro ao processar. Tente novamente ou chame no WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif", color: "#020202" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@700;900&display=swap');
        .font-title { font-family: 'Outfit', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}</style>

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
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5d10d]/5 rounded-bl-[100px] -z-10 hidden lg:block"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5d10d]/10 text-[#020202] rounded-full text-sm font-bold border border-[#f5d10d]/20 font-title tracking-wider">
                    <span className="w-2 h-2 bg-[#f5d10d] rounded-full animate-pulse"></span>Especialistas em Escalar Negócios
                  </div>
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-title font-black text-[#020202] leading-[1.1]">
                    Sua empresa completa no <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b10e] to-[#f5d10d]">digital.</span><br />
                    <span className="text-3xl lg:text-4xl text-gray-800">Infraestrutura, automação e marketing integrados.</span>
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed font-body">
                    Não somos só agência. Somos partners que analisam seu negócio como um todo e implementam soluções digitais que automatizam processos, centralizam operações e geram resultados mensuráveis.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 font-title">
                    <button onClick={() => scrollToSection('contato')} className="bg-[#f5d10d] text-[#020202] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8b10e] transition-all shadow-xl hover:shadow-[#f5d10d]/30 flex items-center justify-center gap-2 group tracking-wide">
                      Agendar uma Análise Gratuita <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => scrollToSection('solucoes')} className="bg-white text-[#020202] border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#f5d10d] hover:bg-[#f5d10d]/5 transition-all flex items-center justify-center gap-2 tracking-wide">
                      Ver Soluções
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 font-body">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <p>Junte-se a +30 empresas aceleradas.</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#f5d10d] to-[#d8b10e] rounded-2xl blur-2xl opacity-20"></div>
                  <img
                    src="https://lionlink-nine.vercel.app/lion%20link%20-%20homem%20ao%20celular.webp"
                    alt="Profissional utilizando celular — Lion Link"
                    loading="lazy"
                    className="relative rounded-2xl shadow-2xl border-4 border-white w-full object-cover h-[500px]"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-[#181818] p-4 rounded-2xl shadow-2xl border border-gray-800 flex items-center gap-4 animate-bounce-slow font-title">
                    <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Crescimento</p>
                      <p className="text-lg font-bold text-white">Escala Previsível</p>
                    </div>
                  </div>
                  <div className="absolute top-10 -right-8 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 animate-bounce-delayed hidden md:flex font-title">
                    <div className="bg-[#f5d10d]/20 p-3 rounded-full text-[#020202]">
                      <Settings size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Operação</p>
                      <p className="text-lg font-bold text-[#020202]">100% Automatizada</p>
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
                  { icon: <Globe size={24} />, color: "blue", title: "Criação de Site Moderno", desc: "Sua vitrine 24h projetada para alta conversão.", items: ["Landing Pages ultra rápidas", "Copywriting focado em vendas", "100% otimizado para celulares"], ideal: "Captar leads e gerar autoridade" },
                  { icon: <Target size={24} />, color: "red", title: "Anúncios Que Viram Clientes", desc: "Tráfego pago direto para quem quer comprar.", items: ["Google Ads (Busca por intenção)", "Meta Ads (Instagram e Facebook)", "Campanhas de Remarketing"], ideal: "Escala rápida e previsível" },
                  { icon: <MapPin size={24} />, color: "green", title: "Apareça no Google Maps", desc: "Domine as buscas e seja a primeira escolha.", items: ["Ficha do Google otimizada", "Posicionamento no topo (SEO Local)", "Gestão de avaliações estratégicas"], ideal: "Clínicas, escritórios e negócios físicos" },
                  { icon: <MessageCircle size={24} />, color: "whatsapp", title: "WhatsApp & Chatbots", desc: "Atendimento ágil, organizado e 24/7.", items: ["Vários atendentes no mesmo número", "Robôs de qualificação de leads", "Distribuição automática"], ideal: "Equipes de vendas e recepção" },
                  { icon: <Database size={24} />, color: "purple", title: "CRM Integrado", desc: "Nunca mais perca o histórico de um lead.", items: ["Funil de vendas 100% visual", "Histórico salvo (WhatsApp e E-mail)", "Lembretes de follow-up"], ideal: "Gestão comercial e controle" },
                  { icon: <Settings size={24} />, color: "orange", title: "Automações Customizadas", desc: "Máquinas trabalhando no piloto automático.", items: ["Fluxos personalizados para sua rotina", "Integração entre sistemas", "E-mails automatizados"], ideal: "Ganho de tempo e escala" },
                ].map(({ icon, color, title, desc, items, ideal }) => {
                  const colors = {
                    blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600",
                    red: "bg-red-100 text-red-600 group-hover:bg-red-600",
                    green: "bg-green-100 text-green-600 group-hover:bg-green-600",
                    whatsapp: "bg-[#25D366]/20 text-[#128C7E] group-hover:bg-[#25D366]",
                    purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600",
                    orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600",
                  };
                  return (
                    <div key={title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:text-white transition-colors ${colors[color]}`}>{icon}</div>
                      <h3 className="text-xl font-bold text-[#020202] mb-2 font-title">{title}</h3>
                      <p className="text-sm font-semibold text-gray-500 mb-4">{desc}</p>
                      <ul className="text-sm text-gray-600 space-y-2 mb-6 font-body">
                        {items.map((i) => <li key={i}>• {i}</li>)}
                      </ul>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Ideal para: {ideal}</p>
                    </div>
                  );
                })}
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#f5d10d] to-[#d8b10e] rounded-2xl blur-2xl opacity-20"></div>
                  <div className="bg-[#181818] p-8 md:p-10 rounded-3xl border border-[#333] relative shadow-2xl">
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
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { id: 'diferencial', tag: 'SERVIÇOS', tagColor: 'bg-blue-100 text-blue-800', img: "https://lionlink-nine.vercel.app/Diferencial-Contabilidade.webp", alt: "Diferencial Contábil", title: "Diferencial Contábil", desc: "Implementação de WhatsApp Centralizado + CRM para equipe de 15 pessoas.", metric: "80% das msgs < 2h" },
                  { id: 'shekinah', tag: 'SAÚDE', tagColor: 'bg-green-100 text-green-800', img: "https://lionlink-nine.vercel.app/Clinica-Shekinah.webp", alt: "Clínica Shekinah", title: "Clínica Shekinah", desc: "Chatbot + CRM + Campanhas Integradas para clínica de saúde.", metric: "+145% leads/mês" },
                  { id: 'arouca', tag: 'SAÚDE', tagColor: 'bg-green-100 text-green-800', img: "https://lionlink-nine.vercel.app/Psicologo-Andre-Arouca.webp", alt: "Dr. André Arouca", title: "Dr. André Arouca", desc: "Expansão Digital + Automação de Follow-up para consultório.", metric: "10x mais pacientes" },
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
