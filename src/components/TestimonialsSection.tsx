import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Quote, TrendingUp, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { TRANSFORMATION_STORIES } from '../data/mockData';

interface TestimonialsSectionProps {
  onOpenFreePass: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenFreePass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStory = () => {
    setCurrentIndex((prev) => (prev === 0 ? TRANSFORMATION_STORIES.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setCurrentIndex((prev) => (prev === TRANSFORMATION_STORIES.length - 1 ? 0 : prev + 1));
  };

  const activeStory = TRANSFORMATION_STORIES[currentIndex];

  return (
    <section id="transformations" className="relative py-24 bg-[#0B0B0B] border-t border-zinc-900 overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#FFD700]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Proven Human Performance</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              Transformations & <span className="text-[#FFD700]">Proof.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
              Real athletes. Real biometric data. Discover what happens when you combine calibrated barbell loading with clinical cryo-recovery.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              id="prev-story-btn"
              onClick={prevStory}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 text-white transition-all cursor-pointer"
              aria-label="Previous transformation story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="text-xs font-mono text-zinc-400 px-2">
              0{currentIndex + 1} / 0{TRANSFORMATION_STORIES.length}
            </div>
            <button
              id="next-story-btn"
              onClick={nextStory}
              className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 text-white transition-all cursor-pointer"
              aria-label="Next transformation story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Story Spotlight Carousel Card */}
        <div className="rounded-3xl bg-zinc-950 border border-zinc-800/90 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 relative transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Story Visual & Transformation Metrics Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-zinc-800 shadow-xl">
                <img
                  src={activeStory.beforeAfterImage}
                  alt={activeStory.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-110 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Float Badge with Result Headline */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#FFD700]/50 text-[11px] font-black uppercase tracking-wider text-[#FFD700]">
                  {activeStory.timeframe} Transformation
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800 space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white uppercase">{activeStory.name}, {activeStory.age}</span>
                    <span className="text-[10px] font-mono text-[#FFD700]">{activeStory.tier}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate">{activeStory.occupation}</div>
                </div>
              </div>
            </div>

            {/* Story Details, Quote & Quantified Metrics Grid */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Star Rating & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-[#FFD700]">
                  {[...Array(activeStory.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD700]" />
                  ))}
                  <span className="text-xs font-bold text-zinc-300 ml-2">Verified Athlete Review</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>InBody 770 Confirmed</span>
                </div>
              </div>

              {/* Big Transformation Headline */}
              <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
                "{activeStory.headline}"
              </h3>

              {/* Quote */}
              <div className="relative pl-6 border-l-2 border-[#FFD700]">
                <p className="text-sm sm:text-base text-zinc-300 italic leading-relaxed">
                  {activeStory.quote}
                </p>
              </div>

              {/* Verified Metrics Cards */}
              <div className="pt-2">
                <p className="text-xs font-mono uppercase tracking-widest text-[#FFD700] mb-3">
                  Documented Biometric Deltas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeStory.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/90 text-center space-y-1">
                      <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                        {m.metricName}
                      </div>
                      <div className="font-impact text-2xl text-white">
                        {m.after}
                      </div>
                      <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30">
                        {m.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Athlete Footer Callout */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="story-free-pass-cta"
                  onClick={onOpenFreePass}
                  className="px-6 py-3 text-xs font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Transformation</span>
                </button>
                <span className="text-xs text-zinc-400 text-center sm:text-left">
                  Includes Free InBody 770 Scan on Day 1
                </span>
              </div>

            </div>

          </div>

          {/* Bottom Thumbnails Navigation */}
          <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-center gap-3">
            {TRANSFORMATION_STORIES.map((story, sIdx) => (
              <button
                key={story.id}
                onClick={() => setCurrentIndex(sIdx)}
                className={`p-1 rounded-xl transition-all ${
                  currentIndex === sIdx
                    ? 'ring-2 ring-[#FFD700] scale-105 opacity-100'
                    : 'opacity-40 hover:opacity-80'
                }`}
              >
                <img
                  src={story.avatar}
                  alt={story.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-lg object-cover"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Member Review Grid Snippets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-1 text-[#FFD700] text-xs">
              {'★★★★★'} <span className="text-zinc-500 ml-1">• Google Reviews</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              "The 38°F cold plunges after heavy squat days are an absolute game changer. I'm hitting PRs at 38 that I couldn't hit in my twenties."
            </p>
            <div className="text-[11px] font-bold text-zinc-400 uppercase">— Marcus K. (Member since 2024)</div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-1 text-[#FFD700] text-xs">
              {'★★★★★'} <span className="text-zinc-500 ml-1">• Google Reviews</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              "Having 24/7 biometric access with zero crowds at 5:00 AM allows me to complete a full powerlifting session in 60 minutes flat. Best iron in the city."
            </p>
            <div className="text-[11px] font-bold text-zinc-400 uppercase">— Rachel T. (The Pro Tier)</div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
            <div className="flex items-center gap-1 text-[#FFD700] text-xs">
              {'★★★★★'} <span className="text-zinc-500 ml-1">• Google Reviews</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              "The coaching staff doesn't push generic bro-splits. Everything is backed by velocity tracking and body composition diagnostics."
            </p>
            <div className="text-[11px] font-bold text-zinc-400 uppercase">— David L. (The Elite Legend)</div>
          </div>
        </div>

      </div>
    </section>
  );
};
