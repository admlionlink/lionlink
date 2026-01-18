import React, { useState, useEffect } from 'react';
import {
  Camera,
  MapPin,
  Globe,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Instagram,
  Play,
  ChevronDown,
  Menu,
  X,
  Phone,
  Layout,
  Palette,
  ArrowLeft,
  Image as ImageIcon,
  Rocket,
  Megaphone,
  Video,
  BarChart3,
  Crown,
  Target,
  Users,
  PenTool,
  FileText,
  Search,
  Quote,
  Star,
  ExternalLink,
  Monitor,
  Smartphone,
  Loader2,
  Check,
  AlertCircle,
  QrCode // Importando icone QrCode se disponível, ou usando fallback
} from 'lucide-react';

// --- CONFIGURAÇÃO DO SUPABASE ---
const supabaseUrl = 'https://djvxjgmyzfhxmtcoxzjg.supabase.co';
// Nota: Certifique-se de que esta é sua chave 'anon' pública correta
const supabaseKey = 'sb_publishable_cUp2W9x1MZ0_cMfa8FIo1A_nkY_y9yK';

// --- SUB-COMPONENT: Site Preview Modal ---
const SitePreviewModal = ({ url, title, onClose }) => {
  const [device, setDevice] = useState('desktop');

  return (
    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex flex-col animate-fade-in">
      <div className="h-16 bg-[#181818] border-b border-gray-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <h3 className="text-white font-title hidden md:block">Visualizando: <span className="text-[#f5d10d]">{title}</span></h3>
          <div className="flex bg-black rounded-lg p-1 border border-gray-700">
            <button onClick={() => setDevice('desktop')} className={`p-2 rounded ${device === 'desktop' ? 'bg-[#f5d10d] text-black' : 'text-gray-400 hover:text-white'}`}><Monitor size={20} /></button>
            <button onClick={() => setDevice('mobile')} className={`p-2 rounded ${device === 'mobile' ? 'bg-[#f5d10d] text-black' : 'text-gray-400 hover:text-white'}`}><Smartphone size={20} /></button>
          </div>
        </div>
        <button onClick={onClose} className="bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white p-2 rounded-full transition-all flex items-center gap-2 px-4"><X size={20} /> <span className="font-bold text-sm">Fechar Preview</span></button>
      </div>
      <div className="flex-1 w-full bg-[#333] flex justify-center items-center overflow-hidden p-4">
        <div className={`transition-all duration-500 bg-white shadow-2xl overflow-hidden ${device === 'mobile' ? 'w-[375px] h-[700px] rounded-[30px] border-8 border-black' : 'w-full h-full rounded-md border border-gray-700'}`}>
          <iframe src={url} title={`Preview de ${title}`} className="w-full h-full bg-white" frameBorder="0"/>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: Privacy Policy Modal ---
const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10 shrink-0">
          <h3 className="text-2xl font-bold font-title text-[#020202]">Política de Privacidade</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="p-8 space-y-6 font-body text-gray-600 overflow-y-auto">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Última atualização: Janeiro de 2026</p>
          <p>A Lion Link Serviços Digitais ("nós", "nosso") respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta política descreve como coletamos, usamos e protegemos suas informações.</p>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">1. Coleta de Dados</h4>
            <p>Coletamos apenas as informações estritamente necessárias para o contato comercial inicial, especificamente: <strong>Nome da Empresa</strong> e <strong>número de WhatsApp</strong>, fornecidos voluntariamente através do nosso formulário de contato.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">2. Uso das Informações</h4>
            <p>Utilizamos seus dados exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Retornar seu contato com a proposta solicitada.</li>
              <li>Agendar reuniões de consultoria estratégica.</li>
              <li>Enviar informações relevantes sobre nossos serviços de marketing digital.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">3. Compartilhamento de Dados</h4>
            <p>Nós <strong>não vendemos, alugamos ou compartilhamos</strong> seus dados pessoais com terceiros para fins de marketing. Seus dados são armazenados em nosso banco de dados seguro e utilizados apenas pela nossa equipe interna.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">4. Segurança</h4>
            <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">5. Seus Direitos</h4>
            <p>Você tem o direito de solicitar a exclusão dos seus dados de nossa base a qualquer momento. Para isso, basta responder a qualquer um de nossos contatos solicitando a remoção.</p>
          </div>
        </div>
        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl shrink-0">
          <button onClick={onClose} className="w-full py-3 bg-[#020202] text-white rounded-xl font-bold hover:bg-[#181818] transition-all font-title shadow-lg">Entendi e Concordo</button>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: QR Code Modal ---
const QrCodeModal = ({ onClose, link }) => {
  return (
    <div className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-sm w-full p-8 text-center relative shadow-2xl transform transition-all scale-100">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-xl font-bold font-title text-[#020202] mb-2">Fale conosco no WhatsApp</h3>
        <p className="text-sm text-gray-500 mb-6 font-body">Escaneie o QR Code com seu celular</p>
        
        <div className="bg-white p-2 rounded-xl mb-6 inline-block border-2 border-gray-100 shadow-inner">
          <img 
            src="https://lionlink-nine.vercel.app/qrcode.jpg" 
            alt="QR Code WhatsApp" 
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
          <Monitor size={20} className="group-hover:scale-110 transition-transform"/> Abrir WhatsApp Web
        </a>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: Floating WhatsApp Button ---
const FloatingWhatsAppButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce-slow"
    aria-label="Falar no WhatsApp"
  >
    <svg 
      viewBox="0 0 24 24" 
      width="32" 
      height="32" 
      fill="currentColor" 
      className="w-8 h-8"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-white text-[#020202] px-3 py-1 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
      Fale Conosco
    </span>
  </button>
);

// --- SUB-COMPONENT: Case Study Page ---
const CaseStudyPage = ({ onBack, onCta, data }) => {
  const [showPreview, setShowPreview] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  if (!data) return null;

  return (
    <div className="animate-fade-in bg-white">
      {showPreview && <SitePreviewModal url={data.siteUrl} title={data.title} onClose={() => setShowPreview(false)} />}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-12 overflow-hidden">
        <div className="absolute inset-0"><img src={data.img} alt={data.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent"></div></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <button onClick={onBack} className="flex items-center gap-2 text-[#f5d10d] font-bold mb-6 hover:underline font-title tracking-wide"><ArrowLeft size={20} /> Voltar para Portfólio</button>
          <span className="inline-block px-3 py-1 bg-[#f5d10d] text-[#020202] rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-title">{data.tag}</span>
          <h1 className="text-4xl md:text-6xl font-bold font-title text-white mb-4 leading-tight">{data.title}</h1>
          <p className="text-xl text-gray-300 font-body max-w-2xl mb-8">{data.summary}</p>
          {data.siteUrl && (<button onClick={() => setShowPreview(true)} className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-full font-bold transition-all backdrop-blur-sm group"><Globe size={20} className="text-[#f5d10d]" />Ver Site ao Vivo<ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity"/></button>)}
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div><h2 className="text-2xl font-bold text-[#020202] mb-4 font-title border-l-4 border-[#f5d10d] pl-4">O Desafio</h2><p className="text-gray-600 font-body leading-relaxed text-lg">{data.challenge}</p></div>
              <div><h2 className="text-2xl font-bold text-[#020202] mb-6 font-title border-l-4 border-[#f5d10d] pl-4">A Solução Lion Link</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{data.services.map((item, idx) => (<div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100"><div className="text-[#d8b10e]">{item.icon}</div><span className="font-bold text-[#181818] font-title text-sm">{item.name}</span></div>))}</div></div>
              <div className="bg-[#181818] p-8 rounded-2xl text-white shadow-xl"><h2 className="text-2xl font-bold text-[#f5d10d] mb-4 font-title flex items-center gap-2"><TrendingUp /> Resultados Alcançados</h2><p className="text-gray-300 font-body leading-relaxed mb-6">{data.resultText}</p><div className="flex gap-4"><div className="bg-[#333] px-4 py-2 rounded-lg text-center border border-gray-700"><span className="block text-2xl font-bold font-title text-white">Top 1</span><span className="text-xs text-gray-400 uppercase">Google Maps</span></div><div className="bg-[#333] px-4 py-2 rounded-lg text-center border border-gray-700"><span className="block text-2xl font-bold font-title text-white">+300%</span><span className="text-xs text-gray-400 uppercase">Leads/Mês</span></div></div></div>
              {data.testimonial && (
                <div className="bg-[#fff9c4] p-8 rounded-2xl border-l-8 border-[#f5d10d] shadow-lg relative mt-12 overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-10 pointer-events-none"><Quote size={80} className="text-[#f5d10d] rotate-180" /></div>
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">{[1,2,3,4,5].map((i) => (<Star key={i} size={24} className="text-[#f5d10d] fill-[#f5d10d]" />))}</div>
                    <p className="text-lg text-[#020202] font-body italic leading-relaxed mb-8">"{data.testimonial.text}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-[#f5d10d]/30">
                      {data.testimonial.avatar && (<img src={data.testimonial.avatar} alt={data.testimonial.author} className="w-16 h-16 rounded-full object-cover border-2 border-[#f5d10d] shadow-md"/>)}
                      <div><p className="font-bold text-[#020202] font-title text-lg">{data.testimonial.author}</p><p className="text-sm text-gray-700 font-body font-medium flex items-center gap-1"><CheckCircle2 size={14} className="text-green-600" /> {data.testimonial.role}</p></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-1"><div className="sticky top-28 bg-gray-50 p-8 rounded-2xl border border-gray-200"><h3 className="font-bold text-xl mb-2 font-title">Quer resultados assim?</h3><p className="text-sm text-gray-600 mb-6 font-body">Agende uma consultoria gratuita e vamos desenhar a estratégia para o seu negócio.</p><button onClick={onCta} className="w-full py-4 bg-[#f5d10d] text-[#020202] rounded-xl font-bold hover:bg-[#d8b10e] transition-all shadow-lg flex justify-center items-center gap-2 font-title tracking-wide">Quero um Orçamento</button></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENT: Start Digital Page ---
const StartDigitalPage = ({ onBack, onCta }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="animate-fade-in">
      <section className="relative pt-32 pb-20 bg-[#181818] text-white overflow-hidden"><div className="absolute top-0 right-0 w-1/3 h-full bg-[#f5d10d]/5 -skew-x-12 hidden lg:block"></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><button onClick={onBack} className="flex items-center gap-2 text-[#f5d10d] font-bold mb-8 hover:underline font-title tracking-wide"><ArrowLeft size={20} /> Voltar para Home</button><div className="max-w-3xl"><span className="inline-block px-3 py-1 bg-[#333] rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-title text-gray-300">Pacote de Entrada</span><h1 className="text-4xl md:text-6xl font-bold font-title mb-6 leading-tight">Start Digital <span className="text-[#f5d10d]">360</span></h1><p className="text-xl text-gray-300 font-body leading-relaxed max-w-2xl">A solução definitiva para profissionalizar a imagem da sua empresa em até 30 dias. Site, Google, Fotos e Marca em um único pacote.</p></div></div></section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12"><div><h2 className="text-3xl font-bold text-[#020202] mb-8 font-title">O que você recebe:</h2><div className="space-y-8"><div className="flex gap-4"><div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0 text-green-600"><Layout size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Site One-Page Otimizado</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Não usamos templates lentos. Criamos uma página de alta conversão (Landing Page) focada em levar o cliente para o seu WhatsApp. Rápida, bonita e funciona em qualquer celular.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-[#f5d10d]/20 rounded-xl flex items-center justify-center shrink-0 text-[#d8b10e]"><Camera size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Sessão Fotográfica Presencial</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Nosso fotógrafo vai até sua empresa. Entregamos <strong>15 a 20 fotos profissionais</strong> editadas da sua fachada, equipe, produtos e ambiente. Adeus fotos escuras de celular.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600"><MapPin size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Google Meu Negócio VIP</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Configuração completa da sua ficha no Maps. Cadastro de produtos, horários, área de cobertura e resposta às primeiras avaliações para ativar o algoritmo local.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 text-purple-600"><Palette size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Identidade Visual & Instagram</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Criação de Logo profissional (se não tiver), definição de paleta de cores e tipografia. Além disso, deixamos seu Instagram pronto: Bio estratégica, foto de perfil e capas de destaque.</p></div></div></div></div></div>
            <div className="sticky top-28"><div className="bg-[#f9f9f9] border border-gray-200 rounded-2xl p-8 shadow-xl"><h3 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-4 font-title">Resumo do Investimento</h3><div className="flex items-end gap-2 mb-6"><span className="text-5xl font-extrabold text-[#020202] font-title">R$ 1.700</span><span className="text-gray-500 font-medium mb-2 font-body">/único</span></div><div className="space-y-3 mb-8 border-t border-b border-gray-200 py-6"><div className="flex justify-between text-sm"><span className="text-gray-600">Desenvolvimento Site</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-600">Fotógrafo (Visita)</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-600">Pack Identidade</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-600">Taxa Mensal</span><span className="font-bold text-green-600">R$ 0,00</span></div></div><button onClick={onCta} className="w-full py-4 bg-[#f5d10d] text-[#020202] rounded-xl font-bold hover:bg-[#d8b10e] transition-all shadow-lg text-lg flex justify-center items-center gap-2 font-title tracking-wide mb-4">Contratar Agora <ArrowRight size={20} /></button><p className="text-center text-xs text-gray-400 font-body">Parcelamento disponível em até 3x sem juros.<br/>Prazo médio de entrega: 20 dias úteis.</p></div><div className="mt-6 bg-[#181818] rounded-xl p-6 text-white relative overflow-hidden"><div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp size={60} /></div><h4 className="font-bold font-title text-[#f5d10d] mb-2">Por que vale a pena?</h4><p className="text-sm text-gray-300 font-body leading-relaxed">Contratar um Web Designer, um Fotógrafo e um Designer Gráfico separadamente custaria mais de <strong>R$ 3.500</strong>. Com a Lion Link, você economiza tempo e dinheiro centralizando tudo.</p></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENT: Lion Growth Page ---
const LionGrowthPage = ({ onBack, onCta }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="animate-fade-in bg-white">
      <section className="relative pt-32 pb-20 bg-[#f5d10d] text-[#020202] overflow-hidden"><div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#020202 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><button onClick={onBack} className="flex items-center gap-2 text-[#020202] font-bold mb-8 hover:opacity-70 font-title tracking-wide"><ArrowLeft size={20} /> Voltar para Home</button><div className="max-w-3xl"><span className="inline-block px-4 py-1 bg-[#020202] text-[#f5d10d] rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-title shadow-lg">Plano Mais Vendido 🚀</span><h1 className="text-4xl md:text-6xl font-bold font-title mb-6 leading-tight">Lion <span className="text-white text-shadow-md">Growth</span></h1><p className="text-xl text-[#181818] font-body leading-relaxed max-w-2xl font-medium">Transforme seu negócio em uma máquina de vendas. Tráfego pago, redes sociais ativas e produção de vídeo trimestral para nunca parar de crescer.</p></div></div></section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12"><div className="bg-[#fff9c4] p-6 rounded-2xl border border-[#f5d10d]"><h3 className="text-lg font-bold font-title mb-2 flex items-center gap-2"><CheckCircle2 className="text-green-600"/> Setup Incluso e Diluído</h3><p className="font-body text-gray-700 text-sm">Neste plano, você <strong>não paga R$ 1.700</strong> de entrada pelo Site e Identidade Visual. Nós diluímos esse custo nas mensalidades do contrato de 6 meses. Você começa pagando apenas a mensalidade.</p></div><div><h2 className="text-3xl font-bold text-[#020202] mb-8 font-title">Sua Rotina Mensal:</h2><div className="space-y-8"><div className="flex gap-4"><div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 text-orange-600"><Rocket size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Gestão de Tráfego Pago</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Gerenciamos suas campanhas no <strong>Google Ads</strong> (para quem busca seu serviço) e <strong>Meta Ads</strong> (para gerar desejo no Instagram). Foco total em trazer leads qualificados no WhatsApp.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center shrink-0 text-pink-600"><Megaphone size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Redes Sociais Ativas</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">8 posts estratégicos por mês (2x por semana) no Feed. Design profissional e legendas persuasivas para manter sua audiência engajada.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-[#181818] rounded-xl flex items-center justify-center shrink-0 text-[#f5d10d]"><Video size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Produção de Criativos (Trimestral)</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">A cada 3 meses, nossa equipe visita sua empresa para gravar <strong>vídeos curtos (Reels)</strong> e fotos novas focadas em anúncios. Isso impede que seus anúncios fiquem "velhos" e parem de funcionar.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600"><BarChart3 size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Relatório de Performance</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Todo mês apresentamos os números: quanto foi investido, quantos cliques, quantas chamadas e quantas conversas foram iniciadas. Transparência total.</p></div></div></div></div></div>
            <div className="sticky top-28"><div className="bg-white border-2 border-[#f5d10d] rounded-2xl p-8 shadow-2xl relative overflow-hidden"><div className="absolute top-0 right-0 bg-[#f5d10d] text-[#020202] text-xs font-bold px-3 py-1 rounded-bl-lg font-title">MELHOR CUSTO-BENEFÍCIO</div><h3 className="text-gray-500 font-bold text-sm uppercase tracking-widest mb-4 font-title">Investimento Mensal</h3><div className="flex items-end gap-2 mb-2"><span className="text-5xl font-extrabold text-[#020202] font-title">R$ 1.900</span><span className="text-gray-500 font-medium mb-2 font-body">/mês</span></div><p className="text-xs text-gray-400 mb-6 font-body">+ Verba de mídia (pago às plataformas)</p><div className="space-y-3 mb-8 border-t border-b border-gray-100 py-6"><div className="flex justify-between text-sm items-center"><span className="text-gray-600">Criação Site + Marca</span><span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded text-xs">R$ 0 (Diluído)</span></div><div className="flex justify-between text-sm"><span className="text-gray-600">Gestão Tráfego</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-600">Social Media (8 posts)</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-600">Visita Trimestral</span><span className="font-bold">Incluso</span></div></div><button onClick={onCta} className="w-full py-4 bg-[#f5d10d] text-[#020202] rounded-xl font-bold hover:bg-[#d8b10e] transition-all shadow-lg text-lg flex justify-center items-center gap-2 font-title tracking-wide mb-4">Assinar Plano Growth <ArrowRight size={20} /></button><p className="text-center text-xs text-gray-400 font-body">Contrato de fidelidade de 6 meses.<br/>Garante a diluição dos custos de setup.</p></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SUB-COMPONENT: Lion Authority Page ---
const LionAuthorityPage = ({ onBack, onCta }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="animate-fade-in bg-white">
      <section className="relative pt-32 pb-20 bg-[#020202] text-white overflow-hidden"><div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#181818] to-[#020202]"></div><div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5d10d]/10 rounded-bl-[200px]"></div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><button onClick={onBack} className="flex items-center gap-2 text-[#f5d10d] font-bold mb-8 hover:underline font-title tracking-wide"><ArrowLeft size={20} /> Voltar para Home</button><div className="max-w-3xl"><span className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#f5d10d]/30 text-[#f5d10d] rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-title"><Crown size={14} /> Solução Premium VIP</span><h1 className="text-4xl md:text-6xl font-bold font-title mb-6 leading-tight">Lion <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5d10d] to-[#d8b10e]">Authority</span></h1><p className="text-xl text-gray-400 font-body leading-relaxed max-w-2xl">Domine sua região com presença digital massiva. A união perfeita entre tráfego pago agressivo e produção de conteúdo audiovisual recorrente.</p></div></div></section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12"><div className="bg-[#181818] p-6 rounded-2xl border border-[#f5d10d] text-white"><h3 className="text-lg font-bold font-title mb-2 flex items-center gap-2 text-[#f5d10d]"><Video size={20} /> Content Factory Mensal</h3><p className="font-body text-gray-300 text-sm">Diferente do plano Growth, aqui nossa equipe de filmagem visita sua empresa <strong>TODO MÊS</strong>. Garantimos conteúdo novo, fresco e profissional o ano todo. Seu Instagram nunca ficará repetitivo.</p></div><div><h2 className="text-3xl font-bold text-[#020202] mb-8 font-title">Poder Total de Fogo:</h2><div className="space-y-8"><div className="flex gap-4"><div className="w-12 h-12 bg-[#f5d10d] rounded-xl flex items-center justify-center shrink-0 text-[#020202]"><Target size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Tráfego Avançado + Remarketing</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Não apenas mostramos seu anúncio. Nós "perseguimos" o cliente interessado (Remarketing) em todas as redes até ele fechar com você. Estratégias de Google, Meta e YouTube Ads inclusas.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0 text-purple-600"><Instagram size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Social Media Premium</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">12 postagens mensais no Feed (3x por semana) + Apoio na estratégia de Stories. Design de alto padrão para posicionar sua marca acima da concorrência.</p></div></div><div className="flex gap-4"><div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 text-blue-600"><Users size={24} /></div><div><h3 className="text-xl font-bold text-[#020202] font-title">Consultoria Estratégica</h3><p className="text-gray-600 mt-2 font-body text-sm leading-relaxed">Reunião mensal de alinhamento com nossos estrategistas. Analisamos o que funcionou, ajustamos a rota e planejamos as campanhas do próximo mês.</p></div></div></div></div></div>
            <div className="sticky top-28"><div className="bg-[#181818] border border-gray-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden text-white"><div className="absolute top-0 right-0 bg-[#333] text-white text-xs font-bold px-3 py-1 rounded-bl-lg font-title border-l border-b border-gray-600">VIP</div><h3 className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-4 font-title">Investimento Mensal</h3><div className="flex items-end gap-2 mb-2"><span className="text-5xl font-extrabold text-white font-title">R$ 2.600</span><span className="text-gray-400 font-medium mb-2 font-body">/mês</span></div><p className="text-xs text-gray-500 mb-6 font-body">+ Verba de mídia</p><div className="space-y-3 mb-8 border-t border-b border-gray-700 py-6"><div className="flex justify-between text-sm items-center"><span className="text-gray-300">Criação Site + Marca</span><span className="font-bold text-[#f5d10d] bg-[#f5d10d]/10 px-2 py-1 rounded text-xs">R$ 0 (Diluído)</span></div><div className="flex justify-between text-sm"><span className="text-gray-300">Gestão Tráfego Full</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-300">Social Media (12 posts)</span><span className="font-bold">Incluso</span></div><div className="flex justify-between text-sm"><span className="text-gray-300">Visita Mensal (Vídeo)</span><span className="font-bold text-[#f5d10d]">Incluso</span></div></div><button onClick={onCta} className="w-full py-4 bg-transparent border-2 border-[#f5d10d] text-[#f5d10d] rounded-xl font-bold hover:bg-[#f5d10d] hover:text-[#020202] transition-all shadow-lg text-lg flex justify-center items-center gap-2 font-title tracking-wide mb-4"><Crown size={20} /> Quero Dominar a Região</button><p className="text-center text-xs text-gray-500 font-body">Contrato de fidelidade de 6 meses.<br/>Atendimento prioritário.</p></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- MAIN COMPONENT ---
const LionLinkLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCase, setSelectedCase] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', whatsapp: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  
  // States for QR Code Modal
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [qrLink, setQrLink] = useState('');

  // Effect to set the Favicon
  useEffect(() => {
    const setFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/svg+xml';
      link.rel = 'icon';
      link.href = 'https://lionlink-nine.vercel.app/lionicon.svg';
      document.getElementsByTagName('head')[0].appendChild(link);
    };
    setFavicon();
  }, []);

  const handleContactChange = (e) => {
    let { name, value } = e.target;
    
    // Autoformat whatsapp field
    if (name === 'whatsapp') {
      // Remove all non-digits
      value = value.replace(/\D/g, '');
      
      // Limit to 11 digits
      if (value.length > 11) value = value.slice(0, 11);
      
      // Apply mask (XX) XXXXX-XXXX
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
      value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }

    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    // Dados para envio
    const leadData = {
      name: contactForm.name,
      whatsapp: contactForm.whatsapp,
      origin: "Landing Page Lion Link"
    };

    try {
      // 1. ENVIO PARA O SUPABASE
      // (Tentamos salvar no banco primeiro)
      const responseSupabase = await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: leadData.name,
          whatsapp: leadData.whatsapp
        })
      });

      if (!responseSupabase.ok) {
        console.warn("Aviso: Falha ao salvar no banco de dados (Supabase), mas tentaremos enviar o e-mail.");
      } else {
        console.log("Sucesso: Lead salvo no Supabase.");
      }

      // 2. ENVIO PARA O EMAILJS (Via API REST para evitar erros de importação)
      // Esta é a configuração mais robusta para arquivos únicos (Single File Components)
      const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          service_id: 'service_e0kw7gg',
          template_id: 'template_cid4zkr',
          user_id: 'f8Yy2e-TUd-514vTf', // Sua Public Key
          template_params: {
              name: leadData.name,
              whatsapp: leadData.whatsapp,
              origin: leadData.origin
          }
        })
      });

      if (!emailJsResponse.ok) {
        const errorText = await emailJsResponse.text();
        console.error("Erro detalhado do EmailJS:", errorText);
        // Não lançamos erro fatal aqui se o Supabase já tiver salvo, para não frustrar o usuário
        if (!responseSupabase.ok) {
             throw new Error(`Erro ao enviar e-mail: ${emailJsResponse.statusText} - ${errorText}`);
        }
      } else {
        console.log("Sucesso: E-mail enviado via EmailJS.");
      }

      // Sucesso Total
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

  // --- Portfolio Data ---
  const portfolioItems = {
    shekinah: {
      title: "Clínica Shekinah",
      tag: "SAÚDE",
      summary: "Do zero à lotação. Estruturamos toda a presença digital e captação, preenchendo as vagas da residência.",
      img: "https://lionlink-nine.vercel.app/Clinica-Shekinah.webp",
      siteUrl: "https://clinicashekinah.com.br",
      challenge: "A clínica precisava inaugurar sua presença digital do zero. Não havia site, redes sociais ou identidade visual consolidada, e o objetivo principal era preencher as vagas da residência terapêutica rapidamente.",
      resultText: "Em poucos meses, a casa alcançou sua lotação máxima através das campanhas de Google Ads e da credibilidade passada pelo novo site e materiais institucionais.",
      services: [
        { name: "Fotos Profissionais", icon: <Camera size={20}/> },
        { name: "Identidade Visual (Logo)", icon: <Palette size={20}/> },
        { name: "Site Institucional", icon: <Layout size={20}/> },
        { name: "Tráfego Pago (Google Ads)", icon: <Target size={20}/> },
        { name: "Blog de Conteúdo", icon: <PenTool size={20}/> }
      ],
      testimonial: {
        text: "Antes da Lion Link, nossa casa era invisível na internet. Em poucos meses de trabalho, não só preenchemos todas as vagas, como hoje temos fila de espera. O carinho e o profissionalismo da equipe em captar a essência da Shekinah nas fotos e no site fizeram toda a diferença. Gratidão eterna!",
        author: "Rosalice Carneiro",
        role: "Proprietária, Clínica Shekinah",
        avatar: "https://placehold.co/100x100/f5d10d/020202?text=RC"
      }
    },
    diferencial: {
      title: "Diferencial Contabilidade",
      tag: "SERVIÇOS",
      summary: "Reposicionamento total. Nova identidade visual e site moderno que atraíram uma carteira de clientes mais qualificada.",
      img: "https://lionlink-nine.vercel.app/Diferencial-Contabilidade.webp",
      siteUrl: "https://dcontabil.com",
      challenge: "A Diferencial Contabilidade tinha uma carteira sólida, mas sua imagem não refletia a qualidade do serviço. O desafio era modernizar a marca e atrair clientes maiores através do digital, saindo da guerra de preços.",
      resultText: "O rebranding completo elevou o nível do jogo. Com a nova identidade e um site de alta performance, a percepção de valor aumentou drasticamente. As campanhas de tráfego trouxeram leads qualificados, renovando a base de clientes.",
      services: [
        { name: "Fotos Profissionais", icon: <Camera size={20}/> },
        { name: "Identidade Visual", icon: <Palette size={20}/> },
        { name: "Site Institucional", icon: <Layout size={20}/> },
        { name: "Tráfego Pago", icon: <Target size={20}/> },
        { name: "Consultoria", icon: <Users size={20}/> }
      ],
      testimonial: {
        text: "O trabalho da Lion Link foi um divisor de águas para nós. Estávamos estagnados e hoje nossa marca impõe respeito. A consultoria nos ajudou a enxergar oportunidades que antes passavam batido. Recomendo de olhos fechados.",
        author: "Dejanira do Nascimento Leme",
        role: "Sócia-Diretora",
        avatar: "https://placehold.co/100x100/f5d10d/020202?text=DL"
      }
    },
    arouca: {
      title: "Dr. André Arouca",
      tag: "SAÚDE",
      summary: "Expansão para o digital. Implementamos um funil de captação que resultou em agenda lotada de atendimentos online.",
      img: "https://lionlink-nine.vercel.app/Psicologo-Andre-Arouca.webp",
      siteUrl: "https://andrearouca.com",
      challenge: "O Dr. André é um excelente profissional, mas sua agenda dependia exclusivamente do 'boca a boca' local e atendimentos presenciais. O objetivo era romper a barreira geográfica e lotar a agenda com atendimentos online, mantendo o valor da consulta.",
      resultText: "Criamos um posicionamento de autoridade e um funil de vendas direto. O resultado foi imediato: a procura por terapia online aumentou 300% e hoje ele tem liberdade geográfica para atender de onde quiser, com a agenda fechada.",
      services: [
        { name: "Landing Page Otimizada", icon: <Layout size={20}/> },
        { name: "Google Ads (Pesquisa)", icon: <Target size={20}/> },
        { name: "Fotos Profissionais", icon: <Camera size={20}/> },
        { name: "Identidade Visual", icon: <Palette size={20}/> },
        { name: "Roteiro de Vendas", icon: <FileText size={20}/> }
      ],
      testimonial: {
        text: "Eu tinha receio de me expor na internet, mas a Lion Link conduziu tudo com muita elegância. Hoje atendo pacientes do Brasil todo e minha agenda está fechada para novos pacientes pelos próximos 2 meses. Incrível.",
        author: "Dr. André Arouca",
        role: "Psicólogo Clínico",
        avatar: "https://placehold.co/100x100/f5d10d/020202?text=AA"
      }
    }
  };

  const scrollToSection = (id) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCtaClick = (plan) => {
    let message = "Olá! Gostaria de saber mais sobre os serviços da Lion Link.";
    if (plan === 'start') message = "Olá! Tenho interesse no pacote Start Digital 360 (Pagamento Único).";
    if (plan === 'growth') message = "Olá! Tenho interesse no plano Lion Growth (Aceleração Mensal).";
    if (plan === 'authority') message = "Olá! Tenho interesse no plano Lion Authority (Dominação Total).";
    
    // Constrói o link do WhatsApp
    const waLink = `https://wa.me/5511997519233?text=${encodeURIComponent(message)}`;

    // Verifica a largura da janela para detectar "desktop"
    if (window.innerWidth > 768) {
      setQrLink(waLink);
      setIsQrOpen(true);
    } else {
      // Mobile: abre direto
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
     
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
              <img src="https://lionlink-nine.vercel.app/Logo-colorido.png" alt="Lion Link Logo" className="h-16 w-auto object-contain" />
            </div>
            <div className="hidden md:flex items-center space-x-8 font-body">
              <button onClick={() => scrollToSection('metodo')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">Nosso Método</button>
              <button onClick={() => scrollToSection('servicos')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">Planos</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-[#181818] hover:text-[#d8b10e] font-medium transition-colors">Portfólio</button>
              <button onClick={() => scrollToSection('contato')} className="bg-[#020202] text-[#f5d10d] px-6 py-2.5 rounded-full font-bold hover:bg-[#181818] transition-all shadow-lg hover:shadow-[#f5d10d]/20 flex items-center gap-2 border border-[#f5d10d]/20 font-title tracking-wide">Agendar Consultoria</button>
            </div>
            <div className="md:hidden flex items-center"><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#020202]">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button></div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl font-body">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('metodo')} className="block w-full text-left px-3 py-4 text-base font-medium text-[#020202] hover:bg-[#f5d10d]/10 rounded-lg">Nosso Método</button>
              <button onClick={() => scrollToSection('servicos')} className="block w-full text-left px-3 py-4 text-base font-medium text-[#020202] hover:bg-[#f5d10d]/10 rounded-lg">Planos</button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-center mt-4 bg-[#f5d10d] text-[#020202] px-3 py-4 rounded-lg font-bold font-title">Falar com Especialista</button>
            </div>
          </div>
        )}
      </nav>

      {/* Renderização do Popup de Privacidade */}
      {isPrivacyOpen && <PrivacyPolicyModal onClose={() => setIsPrivacyOpen(false)} />}
      
      {/* Renderização do Popup de QR Code (WhatsApp) */}
      {isQrOpen && <QrCodeModal onClose={() => setIsQrOpen(false)} link={qrLink} />}

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsAppButton onClick={() => handleCtaClick('general')} />

      {currentView === 'start-digital' ? (
        <StartDigitalPage onBack={() => setCurrentView('home')} onCta={() => handleCtaClick('start')} />
      ) : currentView === 'lion-growth' ? (
        <LionGrowthPage onBack={() => setCurrentView('home')} onCta={() => handleCtaClick('growth')} />
      ) : currentView === 'lion-authority' ? (
        <LionAuthorityPage onBack={() => setCurrentView('home')} onCta={() => handleCtaClick('authority')} />
      ) : currentView === 'case-study' ? (
        <CaseStudyPage onBack={() => setCurrentView('home')} onCta={() => handleCtaClick('general')} data={selectedCase} />
      ) : (
        <>
          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f5d10d]/5 rounded-bl-[100px] -z-10 hidden lg:block"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5d10d]/10 text-[#020202] rounded-full text-sm font-bold border border-[#f5d10d]/20 font-title tracking-wider"><span className="w-2 h-2 bg-[#f5d10d] rounded-full animate-pulse"></span>Especialistas em Negócios Locais</div>
                  <h1 className="text-5xl lg:text-7xl font-title font-black text-[#020202] leading-[1.1]">Do Bairro para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b10e] to-[#f5d10d]">Topo do Google.</span></h1>
                  <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-body">Nós transformamos empresas locais com sites rápidos, tráfego pago e <span className="font-bold text-[#020202] bg-[#f5d10d]/20 px-1">produção audiovisual presencial.</span> Pare de ser ignorado na sua região.</p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 font-title">
                    <button onClick={() => scrollToSection('servicos')} className="bg-[#f5d10d] text-[#020202] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d8b10e] transition-all shadow-xl hover:shadow-[#f5d10d]/30 flex items-center justify-center gap-2 group tracking-wide">Ver Planos de Aceleração <ArrowRight className="group-hover:translate-x-1 transition-transform" /></button>
                    <button onClick={() => scrollToSection('portfolio')} className="bg-white text-[#020202] border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#f5d10d] hover:bg-[#f5d10d]/5 transition-all flex items-center justify-center gap-2 tracking-wide"><Play size={20} className="fill-current text-[#d8b10e]" /> Ver Cases</button>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 font-body"><div className="flex -space-x-2">{[1,2,3,4].map((i) => (<div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden"><img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" /></div>))}</div><p>Junte-se a +30 empresas locais aceleradas.</p></div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#f5d10d] to-[#d8b10e] rounded-2xl blur-2xl opacity-20"></div>
                  <img src="https://lionlink-nine.vercel.app/lion%20link%20-%20homem%20ao%20celular.webp" alt="Homem ao celular - Lion Link" className="relative rounded-2xl shadow-2xl border-4 border-white w-full object-cover h-[500px]" />
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-slow font-title"><div className="bg-green-100 p-3 rounded-full text-green-600"><TrendingUp size={24} /></div><div><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Resultados</p><p className="text-lg font-bold text-[#020202]">+145% Leads/Mês</p></div></div>
                  <div className="absolute top-10 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce-delayed hidden md:flex font-title"><div className="bg-[#f5d10d]/20 p-3 rounded-full text-[#020202]"><MapPin size={24} /></div><div><p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Google Maps</p><p className="text-lg font-bold text-[#020202]">1º Lugar Local</p></div></div>
                </div>
              </div>
            </div>
          </section>

          <section id="metodo" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#020202] mb-6 font-title">O problema da “Agência Tradicional”</h2>
                <div className="text-lg text-gray-600 font-body space-y-4">
                  <p><strong>Instagram com post bonitinho não paga boleto.</strong></p>
                  <p>Se você não tiver <strong>Google forte, anúncio bem feito e uma página que vende,</strong> você até aparece… mas <strong>não fecha.</strong></p>
                  <p>A Lion Link resolve isso com <strong>3 pilares</strong> pra gerar <strong>resultado: novos clientes, novas vendas e crescimento todo mês.</strong></p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1: Google Forte */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#f5d10d] hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#f5d10d] group-hover:text-[#020202] transition-colors text-[#d8b10e]">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#020202] mb-3 font-title">Google Forte</h3>
                  <p className="text-gray-600 mb-4 font-body">Quem não aparece no Google, perde cliente pro concorrente.</p>
                  <ul className="text-sm text-gray-500 space-y-2 font-body font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Google Business configurado e otimizado</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Fotos profissionais e estratégicas</li>
                  </ul>
                </div>

                {/* Card 2: Anúncios Que Vendem (Nosso Segredo) */}
                <div className="bg-[#020202] p-8 rounded-2xl border border-[#181818] shadow-xl relative overflow-hidden transform md:-translate-y-4">
                  <div className="absolute top-0 right-0 bg-[#f5d10d] text-[#020202] text-xs font-bold px-3 py-1 rounded-bl-lg font-title tracking-wider">NOSSO SEGREDO</div>
                  <div className="w-14 h-14 bg-[#f5d10d] rounded-xl flex items-center justify-center shadow-lg mb-6 text-[#020202]">
                    <Megaphone size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-title">Anúncios Que Vendem</h3>
                  <p className="text-gray-300 mb-4 font-body">Sem anúncio bem feito, você depende de sorte e indicação.</p>
                  <ul className="text-sm text-gray-400 space-y-2 font-body font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#f5d10d]"/> Anúncios no Instagram/Facebook</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#f5d10d]"/> Anúncios no Google/YouTube</li>
                  </ul>
                </div>

                {/* Card 3: Site Profissional */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#f5d10d] hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-[#f5d10d] group-hover:text-[#020202] transition-colors text-[#d8b10e]">
                    <Layout size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-[#020202] mb-3 font-title">Site Profissional</h3>
                  <p className="text-gray-600 mb-4 font-body">Não adianta só ter um site. Precisa ser profissional e feito pra converter visitante em cliente.</p>
                  <ul className="text-sm text-gray-500 space-y-2 font-body font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Página que leva o cliente pro WhatsApp</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500"/> Textos persuasivos focados em conversão</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="servicos" className="py-20 bg-[#020202] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16"><h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-title">Planos Descomplicados</h2><p className="text-xl text-gray-400 font-body">Sem taxas escondidas. Escolha entre organizar a casa ou acelerar as vendas.</p></div>
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="bg-[#181818] rounded-2xl p-8 border border-[#333] hover:border-gray-500 transition-all">
                  <div className="mb-4"><span className="bg-[#333] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-title">Pontual</span></div><h3 className="text-2xl font-bold mb-2 font-title">Start Digital 360</h3><p className="text-gray-400 text-sm mb-6 font-body">A base perfeita para quem está começando ou precisa se profissionalizar.</p><div className="mb-6 font-title"><span className="text-4xl font-bold">R$ 1.700</span><span className="text-gray-400 block text-sm mt-1 font-body">Pagamento Único (3x sem juros)</span></div><div className="space-y-4 mb-8 font-body text-sm"><div className="flex gap-3 text-gray-300"><CheckCircle2 className="text-green-500 shrink-0" size={18} /><span><strong>Site One-Page</strong> (Alta Conversão)</span></div><div className="flex gap-3 text-gray-300"><CheckCircle2 className="text-green-500 shrink-0" size={18} /><span><strong>Sessão de Fotos</strong> (15-20 fotos)</span></div><div className="flex gap-3 text-gray-300"><CheckCircle2 className="text-green-500 shrink-0" size={18} /><span><strong>Google Meu Negócio</strong> Otimizado</span></div><div className="flex gap-3 text-gray-300"><CheckCircle2 className="text-green-500 shrink-0" size={18} /><span><strong>Identidade Visual</strong> Básica</span></div></div><button onClick={() => setCurrentView('start-digital')} className="w-full py-3 border-2 border-white rounded-xl font-bold hover:bg-white hover:text-[#020202] transition-all font-title tracking-wide">Quero Organizar a Casa</button>
                </div>
                <div className="bg-white rounded-2xl p-8 border-4 border-[#f5d10d] relative transform lg:-translate-y-4 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f5d10d] text-[#020202] px-4 py-1 rounded-full text-sm font-bold shadow-lg font-title tracking-wider">MAIS VENDIDO 🦁</div><div className="mb-4"><span className="bg-[#f5d10d]/20 text-[#020202] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-title">Recorrente (6 meses)</span></div><h3 className="text-2xl font-bold text-[#020202] mb-2 font-title">Lion Growth</h3><p className="text-gray-500 text-sm mb-6 font-body">Tráfego pago constante e renovação visual para vender todo dia.</p><div className="mb-6 font-title"><span className="text-5xl font-extrabold text-[#020202]">R$ 1.900</span><span className="text-gray-500 block text-sm mt-1 font-body">/mês + Verba de Mídia</span></div><div className="space-y-4 mb-8 border-t border-b border-gray-100 py-6 font-body text-sm"><div className="flex gap-3 text-gray-700 bg-green-50 p-2 rounded-lg"><CheckCircle2 className="text-green-600 shrink-0" size={18} /><span className="font-bold">Setup Incluso (Site + ID Visual) ✅</span></div><div className="flex gap-3 text-gray-700"><CheckCircle2 className="text-[#d8b10e] shrink-0" size={18} /><span><strong>Tráfego:</strong> Google Ads + Meta Ads</span></div><div className="flex gap-3 text-gray-700"><CheckCircle2 className="text-[#d8b10e] shrink-0" size={18} /><span><strong>Social:</strong> 8 Posts (2x/semana)</span></div><div className="flex gap-3 text-gray-700 font-semibold"><Camera className="text-[#f5d10d] shrink-0" size={18} /><span>Produção de Criativos Trimestral</span></div></div><button onClick={() => setCurrentView('lion-growth')} className="w-full py-4 bg-[#f5d10d] text-[#020202] rounded-xl font-bold hover:bg-[#d8b10e] transition-all shadow-lg text-lg flex justify-center items-center gap-2 font-title tracking-wide mb-4">Assinar Plano Growth <ArrowRight size={20} /></button><p className="text-center text-xs text-gray-400 mt-3 font-body">Economia de R$ 3.300 na entrada</p>
                </div>
                <div className="bg-[#181818] rounded-2xl p-8 border border-[#333] hover:border-[#f5d10d] transition-all">
                  <div className="mb-4"><span className="bg-[#333] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-title">VIP</span></div><h3 className="text-2xl font-bold mb-2 font-title">Lion Authority</h3><p className="text-gray-400 text-sm mb-6 font-body">Domine o mercado com vídeos e presença massiva nas redes.</p><div className="mb-6 font-title"><span className="text-4xl font-bold">R$ 2.600</span><span className="text-gray-400 block text-sm mt-1 font-body">/mês + Verba de Mídia</span></div><div className="space-y-4 mb-8 font-body text-sm"><div className="flex gap-3 text-gray-300 bg-white/5 p-2 rounded-lg"><CheckCircle2 className="text-green-500 shrink-0" size={18} /><span className="font-bold">Setup Incluso (Site + ID Visual)</span></div><div className="flex gap-3 text-gray-300"><CheckCircle2 className="text-[#f5d10d] shrink-0" size={18} /><span><strong>Tráfego:</strong> Avançado + Remarketing</span></div><div className="flex gap-3 text-gray-300"><CheckCircle2 className="text-[#f5d10d] shrink-0" size={18} /><span><strong>Social:</strong> 12 Posts + Stories</span></div><div className="flex gap-3 text-[#f5d10d] font-semibold"><Camera className="text-[#d8b10e] shrink-0" size={18} /><span>Content Factory: Visita MENSAL</span></div></div><button onClick={() => setCurrentView('lion-authority')} className="w-full py-3 border-2 border-[#f5d10d] text-[#f5d10d] rounded-xl font-bold hover:bg-[#f5d10d] hover:text-[#020202] transition-all font-title tracking-wide">Quero Dominar a Região</button>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                  <h2 className="text-3xl font-extrabold text-[#020202] mb-2 font-title">Resultados que Falam</h2>
                  <p className="text-gray-600 font-body">Não vendemos likes. Vendemos faturamento.</p>
                </div>
                {/* Botão removido conforme solicitado */}
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div onClick={() => openCaseStudy('shekinah')} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300"><div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div><img src="https://lionlink-nine.vercel.app/Clinica-Shekinah.webp" alt="Clínica Shekinah" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute bottom-6 left-6 z-20 text-white"><p className="text-xs font-bold bg-[#f5d10d] text-[#020202] px-2 py-1 rounded mb-2 w-fit font-title">SAÚDE</p><h3 className="text-xl font-bold font-title flex items-center gap-2">Clínica Shekinah <ArrowRight size={16} className="text-[#f5d10d]"/></h3><p className="text-sm text-gray-200 mt-1 font-body">Do zero à lotação. Estruturamos toda a presença digital...</p></div></div>
                <div onClick={() => openCaseStudy('diferencial')} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300"><div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div><img src="https://lionlink-nine.vercel.app/Diferencial-Contabilidade.webp" alt="Diferencial Contabilidade" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute bottom-6 left-6 z-20 text-white"><p className="text-xs font-bold bg-blue-600 px-2 py-1 rounded mb-2 w-fit font-title">SERVIÇOS</p><h3 className="text-xl font-bold font-title flex items-center gap-2">Diferencial Contabilidade <ArrowRight size={16} className="text-[#f5d10d]"/></h3><p className="text-sm text-gray-200 mt-1 font-body">Reposicionamento total. Nova identidade visual e site moderno...</p></div></div>
                <div onClick={() => openCaseStudy('arouca')} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300"><div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div><img src="https://lionlink-nine.vercel.app/Psicologo-Andre-Arouca.webp" alt="Dr. André Arouca" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"/><div className="absolute bottom-6 left-6 z-20 text-white"><p className="text-xs font-bold bg-green-600 px-2 py-1 rounded mb-2 w-fit font-title">SAÚDE</p><h3 className="text-xl font-bold font-title">Dr. André Arouca <ArrowRight size={16} className="text-[#f5d10d]"/></h3><p className="text-sm text-gray-200 mt-1 font-body">Expansão para o digital. Implementamos um funil de captação...</p></div></div>
              </div>
            </div>
          </section>

          <footer id="contato" className="bg-[#020202] text-white pt-20 pb-10 border-t border-[#181818]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div><h2 className="text-4xl font-extrabold mb-4 font-title">Pronto para virar referência?</h2><p className="text-gray-400 text-lg mb-8 font-body">Agende uma conversa de 15 minutos. Vamos analisar seu negócio e te mostrar onde você está perdendo dinheiro.</p><button onClick={() => handleCtaClick('general')} className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg flex items-center gap-3 w-full md:w-auto justify-center font-title tracking-wide"><div className="bg-white text-green-600 rounded-full p-1"><Phone size={20} /></div>Chamar no WhatsApp</button></div>
                <div className="bg-[#181818] p-8 rounded-2xl border border-[#333]">
                  <form onSubmit={handleContactSubmit} className="space-y-4 font-body">
                    <div><label className="block text-sm font-medium text-gray-400 mb-1">Nome da Empresa</label><input type="text" name="name" value={contactForm.name} onChange={handleContactChange} required className="w-full bg-[#020202] border border-[#333] rounded-lg p-3 text-white focus:ring-2 focus:ring-[#f5d10d] outline-none" placeholder="Ex: Clinica Primazi" /></div>
                    <div><label className="block text-sm font-medium text-gray-400 mb-1">Seu WhatsApp</label><input type="text" name="whatsapp" value={contactForm.whatsapp} onChange={handleContactChange} required className="w-full bg-[#020202] border border-[#333] rounded-lg p-3 text-white focus:ring-2 focus:ring-[#f5d10d] outline-none" placeholder="(00) 00000-0000" /></div>
                    {submitError && <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg flex items-center gap-2 text-red-200 text-sm"><AlertCircle size={16} />{submitError}</div>}
                    <button type="submit" disabled={isSubmitting || submitSuccess} className={`w-full font-bold py-3 rounded-lg transition-all font-title flex justify-center items-center gap-2 ${submitSuccess ? 'bg-green-500 text-white hover:bg-green-600 cursor-default' : 'bg-[#f5d10d] text-[#020202] hover:bg-[#d8b10e]'}`}>{isSubmitting ? (<><Loader2 className="animate-spin" size={20} /> Enviando...</>) : submitSuccess ? (<><Check size={20} /> Recebido com Sucesso!</>) : ("Solicitar Proposta Grátis")}</button>
                  </form>
                </div>
              </div>
              <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-body">
                <div className="flex items-center gap-3 mb-4 md:mb-0"><img src="https://lionlink-nine.vercel.app/Logo-Branco.png" alt="Lion Link Logo" className="h-12 w-auto object-contain" /></div>
                <div className="flex gap-6">
                  <a href="https://www.instagram.com/lionlinkbr/" target="_blank" rel="nofollow" className="hover:text-[#f5d10d] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#f5d10d] transition-colors">LinkedIn</a>
                  <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-[#f5d10d] transition-colors bg-transparent border-none p-0 cursor-pointer text-left">Política de Privacidade</button>
                </div>
                <p className="mt-4 md:mt-0">© 2026 Lion Link Serviços Digitais.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default LionLinkLanding;
