import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, Shield } from 'lucide-react';
import { FREQUENT_QUESTIONS } from '../data/mockData';

interface FAQSectionProps {
  onOpenFreePass: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenFreePass }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#0B0B0B] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear Answers</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Frequently <span className="text-[#FFD700]">Asked.</span>
          </h2>

          <p className="text-base text-zinc-400 font-normal leading-relaxed">
            Everything you need to know about our 24/7 security protocol, crowd caps, and facility standards.
          </p>
        </div>

        {/* Questions Accordion */}
        <div className="space-y-4">
          {FREQUENT_QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-950 border-[#FFD700]/50 shadow-[0_0_20px_rgba(255,215,0,0.1)]'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-wide">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 transition-transform ${isOpen ? 'text-[#FFD700] rotate-180' : 'text-zinc-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800/90 space-y-4">
          <h3 className="font-heading font-black text-xl text-white uppercase">Still have specific questions?</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Our head strength coaches and facility directors are on site daily. Experience the floor firsthand.
          </p>
          <button
            id="faq-free-pass-btn"
            onClick={onOpenFreePass}
            className="px-6 py-3 text-xs font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Claim Complimentary VIP Day Pass</span>
          </button>
        </div>

      </div>
    </section>
  );
};
