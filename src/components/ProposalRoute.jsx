import React from 'react';
import { useParams, Link } from 'react-router-dom';
import proposals from '../data/proposals';
import ProposalPage from './ProposalPage';

const ProposalRoute = () => {
  const { slug } = useParams();
  const data = proposals[slug];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-white/50">Proposta não encontrada.</p>
        <Link to="/" className="text-[#C9A227] hover:text-[#F0C93A] font-semibold">
          Voltar para o site
        </Link>
      </div>
    );
  }

  return <ProposalPage data={data} />;
};

export default ProposalRoute;
