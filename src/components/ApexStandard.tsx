import React, { useState } from 'react';
import { Dumbbell, Activity, Flame, Check, ArrowUpRight, Cpu, ShieldCheck, Sparkles, ChevronRight, X } from 'lucide-react';
import { APEX_PILLARS } from '../data/mockData';
import { ApexPillar } from '../types';

interface ApexStandardProps {
  onOpenFreePass: () => void;
}

export const ApexStandard: React.FC<ApexStandardProps> = ({ onOpenFreePass }) => {
  const [selectedPillar, setSelectedPillar] = useState<ApexPillar | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-7 h-7 text-[#FFD700]" />;
      case 'Activity':
        return <Activity className="w-7 h-7 text-[#FFD700]" />;
      case 'Flame':
        return <Flame className="w-7 h-7 text-[#FFD700]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#FFD700]" />;
    }
  };

  return (
    <section id="apex-standard" className="relative py-24 bg-[#0B0B0B] overflow-hidden border-t border-zinc-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            <Cpu className="w-3.5 h-3.5" />
            <span>Engineered Without Compromise</span>
          </div>
          
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            The Apex <span className="text-[#FFD700]">Standard.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Most commercial gyms are built to maximize member crowding and minimize overhead. 
            Apex Iron Athletics was reverse-engineered for serious athletes who demand calibrated load, clinical metrics, and accelerated recovery.
          </p>
        </div>

        {/* 3 Core Pillars Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APEX_PILLARS.map((pillar, index) => {
            return (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className="group relative rounded-sm bg-[#161616] border border-white/10 hover:border-[#FFD700]/50 p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,215,0,0.15)]"
              >
                {/* Top Gold Accent Bar */}
                <div className="w-10 h-1 bg-[#FFD700] mb-6"></div>

                {/* Top Pillar Accent Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-sm bg-black border border-white/10 flex items-center justify-center group-hover:border-[#FFD700]/50 transition-colors">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-[#FFD700] transition-colors">
                    0{index + 1} // PILLAR
                  </span>
                </div>

                {/* Pillar Header & Description */}
                <div className="space-y-2.5 mb-6">
                  <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tighter text-white group-hover:text-[#FFD700] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#FFD700]">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Imagery Preview */}
                <div className="relative rounded-sm overflow-hidden mb-6 aspect-video border border-white/10 group-hover:border-[#FFD700]/40 transition-colors">
                  <img
                    src={pillar.imageUrl}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap gap-1.5">
                    {pillar.specs.slice(0, 2).map((spec, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-mono uppercase bg-black/90 px-2 py-0.5 rounded-sm text-zinc-300 border border-white/10">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics Stats */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 bg-black/60 rounded-sm px-2 mb-6">
                  {pillar.stats.map((stat, sIndex) => (
                    <div key={sIndex} className="text-center">
                      <div className="font-impact text-xs sm:text-sm text-white tracking-wide">
                        {stat.value}
                      </div>
                      <div className="text-[9px] text-zinc-500 uppercase font-semibold leading-tight truncate">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullet Points Checklist */}
                <div className="space-y-2.5 mb-6 flex-grow">
                  {pillar.bulletPoints.map((point, pIndex) => (
                    <div key={pIndex} className="flex items-start gap-2 text-xs text-zinc-300 leading-normal">
                      <Check className="w-3.5 h-3.5 text-[#FFD700] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  id={`view-pillar-detail-${pillar.id}`}
                  onClick={() => setSelectedPillar(pillar)}
                  className="w-full py-2.5 px-4 rounded-sm bg-black hover:bg-[#FFD700] hover:text-black border border-white/15 hover:border-[#FFD700] text-xs font-bold uppercase tracking-wider text-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
                >
                  <span>Explore Technical Specs</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FFD700] group-hover/btn:text-black transition-colors" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with VIP Access Prompt */}
        <div className="mt-14 rounded-sm bg-[#161616] border border-white/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tighter text-white">
              Ready to experience calibrated iron and cryo-recovery?
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl">
              Book a complimentary VIP pass to test our Eleiko platforms, InBody scan, and infrared recovery suite firsthand.
            </p>
          </div>
          <button
            id="standard-banner-claim-pass"
            onClick={onOpenFreePass}
            className="shrink-0 px-8 py-3.5 text-xs sm:text-sm font-black uppercase tracking-tighter text-black bg-[#FFD700] hover:bg-white rounded-sm shadow-[0_0_20px_rgba(255,215,0,0.35)] transition-colors cursor-pointer flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Claim 1-Day All-Access Pass</span>
          </button>
        </div>

      </div>

      {/* Technical Deep Dive Modal */}
      {selectedPillar && (
        <div 
          id="pillar-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPillar(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-700 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPillar(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-zinc-900 border border-[#FFD700]/40">
                {getIcon(selectedPillar.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#FFD700]">The Apex Engineering</span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white">
                  {selectedPillar.title}
                </h3>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-video border border-zinc-800">
              <img
                src={selectedPillar.imageUrl}
                alt={selectedPillar.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-300">Technical Highlights & Standards</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedPillar.bulletPoints.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-200 flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-wrap gap-2">
              <span className="text-xs font-bold uppercase text-zinc-400 w-full mb-1">Equipment & Software Stack:</span>
              {selectedPillar.specs.map((sp, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-black text-[#FFD700] text-xs font-mono border border-zinc-800">
                  {sp}
                </span>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedPillar(null)}
                className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedPillar(null);
                  onOpenFreePass();
                }}
                className="px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-lg shadow-md"
              >
                Claim Pass To Test
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
