import React from 'react';
import { Sparkles, Shield, ArrowRight, CheckCircle, Activity, Flame, Users, Play, Clock, Zap } from 'lucide-react';

interface HeroProps {
  onOpenFreePass: () => void;
  onNavigateToTiers: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenFreePass,
  onNavigateToTiers,
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#0B0B0B] pt-8 pb-16">
      {/* Dramatic Moody Background Imagery with Dark Vignette Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="Athlete training with heavy barbell in moody dark industrial gym with cinematic spotlight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter contrast-125 brightness-75"
        />
        {/* Layered Obsidian & Radial Lighting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FFD700]/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* Subtle Industrial Grid Overlay */}
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & High-Converting Direct Pitch */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Top Elite Badge */}
            <div>
              <span className="text-[#FFD700] font-bold tracking-[0.3em] uppercase text-sm inline-block">
                Neo Metropolis | 24/7 Access
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tighter text-white uppercase leading-[0.9] drop-shadow-md">
              Forge Your <br />
              <span className="text-[#FFD700]">
                Ultimate
              </span> <br />
              Physique
            </h1>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg sm:text-xl md:text-2xl font-normal max-w-2xl leading-relaxed">
              State-of-the-art equipment, elite coaching, and a facility engineered for results. Your transformation begins now.
            </p>

            {/* Core Value Props Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
              <div className="flex items-center gap-2 bg-[#161616] border border-white/10 px-3.5 py-2.5 rounded-sm">
                <CheckCircle className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>Eleiko & Prime Steel</span>
              </div>
              <div className="flex items-center gap-2 bg-[#161616] border border-white/10 px-3.5 py-2.5 rounded-sm">
                <CheckCircle className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>Infrared & Cold Plunges</span>
              </div>
              <div className="flex items-center gap-2 bg-[#161616] border border-white/10 px-3.5 py-2.5 rounded-sm">
                <CheckCircle className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>Zero Lock-In Contracts</span>
              </div>
            </div>

            {/* Primary & Secondary Call To Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-cta-free-pass"
                onClick={onOpenFreePass}
                className="bg-[#FFD700] text-black font-black uppercase px-8 py-4 tracking-tighter hover:bg-white transition-colors rounded-sm shadow-[0_0_20px_rgba(255,215,0,0.3)] cursor-pointer flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Claim Free Pass</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-cta-tiers"
                onClick={onNavigateToTiers}
                className="border border-white/20 hover:border-[#FFD700] uppercase px-8 py-4 tracking-tighter transition-colors text-white rounded-sm cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Membership Tiers</span>
              </button>
            </div>

            {/* Trust Proof Micro-Bar */}
            <div className="pt-3 flex items-center gap-4 text-xs text-zinc-400">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0B0B]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Member" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0B0B]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Member" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0B0B]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Member" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0B0B]" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=100&q=80" alt="Member" />
              </div>
              <div>
                <p className="text-zinc-300 font-semibold">400+ Dedicated Members Training</p>
                <div className="flex items-center gap-1 text-[#FFD700] text-[11px]">
                  {'★★★★★'} <span className="text-zinc-400 ml-1">4.98 / 5 Verified Rating</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Card & Live Facility Status Display */}
          <div className="lg:col-span-4 relative">
            
            {/* Live Facility Card */}
            <div className="relative rounded-sm bg-[#161616] border border-white/10 p-5 shadow-2xl space-y-5">
              
              {/* Card Header with Live Beacon */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <h2 className="text-xs font-black uppercase tracking-wider text-white">Live Floor Telemetry</h2>
                  </div>
                  <p className="text-[11px] text-zinc-400">Sector 4 Facility • Automated Biometrics</p>
                </div>
                <div className="px-2.5 py-1 rounded-sm bg-black border border-white/10 text-[10px] font-mono text-[#FFD700]">
                  24:00:00 OPEN
                </div>
              </div>

              {/* Live Floor Density Meter */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-zinc-400 font-medium">Current Floor Capacity</span>
                  <span className="text-[#FFD700] font-bold font-mono">34% (Optimal Lifting)</span>
                </div>
                <div className="w-full bg-black rounded-none h-2.5 overflow-hidden border border-white/10">
                  <div className="bg-gradient-to-r from-emerald-500 via-[#FFD700] to-[#FFD700] h-full w-[34%] shadow-[0_0_10px_rgba(255,215,0,0.5)]"></div>
                </div>
                <p className="text-[10px] text-zinc-500 italic">
                  * zero wait times for squat racks, benches, and saunas right now.
                </p>
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-sm bg-black/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>Cold Plunge Temp</span>
                  </div>
                  <div className="font-impact text-xl text-white">38.0° F</div>
                  <div className="text-[10px] text-emerald-400">Ozone Filter Active</div>
                </div>

                <div className="p-3 rounded-sm bg-black/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-1">
                    <Activity className="w-3.5 h-3.5 text-[#FFD700]" />
                    <span>Infrared Sauna</span>
                  </div>
                  <div className="font-impact text-xl text-white">185.0° F</div>
                  <div className="text-[10px] text-amber-400">Full Spectrum Heat</div>
                </div>
              </div>

              {/* Instant Pass CTA Box inside telemetry card */}
              <div className="pt-2">
                <button
                  id="telemetry-claim-btn"
                  onClick={onOpenFreePass}
                  className="w-full py-3 rounded-sm bg-[#FFD700] text-black font-black uppercase text-xs tracking-tighter hover:bg-white transition-colors cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.25)] flex items-center justify-center gap-2"
                >
                  <span>Claim Complimentary VIP Pass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Industrial Marquee Ticker */}
      <div className="absolute bottom-0 inset-x-0 bg-[#090909] border-y border-zinc-800/60 py-2.5 overflow-hidden z-10">
        <div className="flex whitespace-nowrap animate-marquee gap-8 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> 50,000 SQ FT INDUSTRIAL IRON TEMPLE
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> 100% IPF-CERTIFIED ELEIKO SWEDISH STEEL
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> ARSENAL STRENGTH & PRIME FITNESS
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> 38°F CHILLED COLD PLUNGE TROUGHS
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> 185°F FINNISH CEDAR INFRARED SAUNA
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> INBODY 770 CLINICAL BODY COMPOSITION
          </span>
          <span className="flex items-center gap-2">
            <span className="text-[#FFD700]">★</span> 24/7 ENCRYPTED BIOMETRIC ACCESS
          </span>
        </div>
      </div>
    </section>
  );
};
