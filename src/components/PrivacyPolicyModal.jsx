import React from 'react';
import { X } from 'lucide-react';

const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex justify-center items-center p-4 animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl flex flex-col">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex justify-between items-center z-10 shrink-0">
          <h3 id="privacy-title" className="text-2xl font-bold font-title text-[#020202]">Política de Privacidade</h3>
          <button
            onClick={onClose}
            aria-label="Fechar política de privacidade"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>
        <div className="p-8 space-y-6 font-body text-gray-600 overflow-y-auto">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Última atualização: Janeiro de 2026</p>
          <p>A Lion Link Soluções Digitais ("nós", "nosso") respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta política descreve como coletamos, usamos e protegemos suas informações.</p>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">1. Coleta de Dados</h4>
            <p>Coletamos apenas as informações estritamente necessárias para o contato comercial inicial, especificamente: <strong>Nome da Empresa</strong> e <strong>número de WhatsApp</strong>, fornecidos voluntariamente através do nosso formulário de contato.</p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#020202] mb-2">2. Uso das Informações</h4>
            <p>Utilizamos seus dados exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Retornar seu contato com a proposta solicitada.</li>
              <li>Agendar reuniões de consultoria estratégica e diagnóstico digital.</li>
              <li>Enviar informações relevantes sobre nossos serviços de infraestrutura e marketing.</li>
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
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#020202] text-white rounded-xl font-bold hover:bg-[#181818] transition-all font-title shadow-lg"
          >
            Entendi e Concordo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
