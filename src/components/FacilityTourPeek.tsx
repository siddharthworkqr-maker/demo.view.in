import React, { useState } from 'react';
import { Eye, Users, Shield, Sparkles, Flame, Dumbbell, Activity, Check } from 'lucide-react';
import { FACILITY_ZONES } from '../data/mockData';
import { FacilityZone } from '../types';

interface FacilityTourPeekProps {
  onOpenFreePass: () => void;
}

export const FacilityTourPeek: React.FC<FacilityTourPeekProps> = ({ onOpenFreePass }) => {
  const [selectedZone, setSelectedZone] = useState<FacilityZone>(FACILITY_ZONES[0]);

  return (
    <section id="facility-zones" className="relative py-24 bg-[#0B0B0B] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            <Eye className="w-3.5 h-3.5" />
            <span>Facility Telemetry & Zones</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            50,000 SQ FT OF <span className="text-[#FFD700]">PURE IRON.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Engineered with acoustic sound dampening, competition lighting, climate-controlled airflow, and discrete recovery chambers.
          </p>
        </div>

        {/* Zone Selector Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {FACILITY_ZONES.map((zone) => {
            const isSelected = selectedZone.id === zone.id;
            return (
              <button
                key={zone.id}
                id={`zone-tab-${zone.id}`}
                onClick={() => setSelectedZone(zone)}
                className={`p-4 rounded-xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 border-[#FFD700] shadow-[0_0_20px_rgba(255,215,0,0.2)]'
                    : 'bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono uppercase ${isSelected ? 'text-[#FFD700]' : 'text-zinc-500'}`}>
                    ZONE #{zone.id.slice(0, 3).toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{zone.currentOccupancy} Active</span>
                  </div>
                </div>
                <div className="font-heading font-black text-sm uppercase text-white tracking-wide">
                  {zone.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Zone Display Card */}
        <div className="rounded-3xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Box */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-video border border-zinc-800">
              <img
                src={selectedZone.image}
                alt={selectedZone.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-[#FFD700] font-mono font-bold border border-zinc-800">
                  {selectedZone.highlight}
                </span>
                <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-zinc-300 font-mono border border-zinc-800">
                  Live Cap: {selectedZone.currentOccupancy} / {selectedZone.capacity}
                </span>
              </div>
            </div>

            {/* Details Box */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono uppercase text-[#FFD700] font-bold">Featured Facility Sector</span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white mt-1">
                  {selectedZone.name}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mt-3">
                  {selectedZone.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-zinc-900">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Sector Amenities & Hardware:</div>
                {selectedZone.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                    <Check className="w-4 h-4 text-[#FFD700] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  id="zone-claim-trial-btn"
                  onClick={onOpenFreePass}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FFD700] hover:bg-[#ffe135] text-black font-black uppercase text-xs tracking-widest transition-all cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.3)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book VIP Walkthrough & Workout</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
