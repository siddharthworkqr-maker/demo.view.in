import React, { useState } from 'react';
import { Calculator, Sparkles, Activity, Dumbbell, Zap, ArrowRight } from 'lucide-react';

interface PhysiqueTargetCalculatorProps {
  onOpenFreePass: () => void;
  onSelectTier: (tierId: string) => void;
}

export const PhysiqueTargetCalculator: React.FC<PhysiqueTargetCalculatorProps> = ({
  onOpenFreePass,
  onSelectTier,
}) => {
  const [weightLbs, setWeightLbs] = useState<number>(180);
  const [goal, setGoal] = useState<'Hypertrophy' | 'FatLoss' | 'StrengthPower' | 'Longevity'>('Hypertrophy');
  const [daysPerWeek, setDaysPerWeek] = useState<number>(4);
  const [experience, setExperience] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

  // Diagnostic calculations
  const calculateDailyProtein = () => {
    switch (goal) {
      case 'FatLoss':
        return Math.round(weightLbs * 1.05);
      case 'Hypertrophy':
        return Math.round(weightLbs * 0.95);
      case 'StrengthPower':
        return Math.round(weightLbs * 0.9);
      case 'Longevity':
        return Math.round(weightLbs * 0.8);
    }
  };

  const calculateWeeklySets = () => {
    switch (experience) {
      case 'Beginner':
        return '12 - 14 Hard Sets / Muscle / Wk';
      case 'Intermediate':
        return '16 - 20 Hard Sets / Muscle / Wk';
      case 'Advanced':
        return '20 - 26 Periodized Sets / Wk';
    }
  };

  const calculateRecommendedTier = () => {
    if (daysPerWeek >= 4 || goal === 'StrengthPower' || goal === 'Hypertrophy') {
      return {
        id: 'pro-tier',
        name: 'The Pro Tier ($149/mo)',
        reason: 'Optimal for regular lifting with unlimited cold plunge recovery to support 4+ sessions/week without systemic fatigue.',
      };
    }
    if (experience === 'Advanced' || daysPerWeek >= 5) {
      return {
        id: 'elite-legend',
        name: 'The Elite Legend ($249/mo)',
        reason: 'Includes weekly 1-on-1 coaching, velocity tracking, and private locker access.',
      };
    }
    return {
      id: 'ignition',
      name: 'The Ignition ($79/mo)',
      reason: 'Perfect for focused independent lifting and 24/7 access.',
    };
  };

  const rec = calculateRecommendedTier();

  return (
    <section id="physique-calculator" className="relative py-24 bg-[#0B0B0B] border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            Physique & Volume <span className="text-[#FFD700]">Calculator.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Determine your weekly training density, target protein intake, and optimal recovery protocol based on your specific biometrics.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Inputs Panel */}
          <div className="lg:col-span-6 rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 space-y-6">
            <h3 className="font-heading font-black text-xl uppercase tracking-wider text-white">
              1. Input Your Baseline Metrics
            </h3>

            {/* Current Bodyweight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-300">
                <span>Current Bodyweight</span>
                <span className="text-[#FFD700] font-mono text-sm">{weightLbs} LBS ({Math.round(weightLbs * 0.453)} KG)</span>
              </div>
              <input
                type="range"
                min="100"
                max="320"
                step="2"
                value={weightLbs}
                onChange={(e) => setWeightLbs(Number(e.target.value))}
                className="w-full h-2 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-[#FFD700]"
              />
            </div>

            {/* Primary Goal Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                Primary Performance Goal
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'Hypertrophy', label: 'Maximum Muscle (Hypertrophy)' },
                  { id: 'FatLoss', label: 'Rapid Fat Shred (-15-25 lbs)' },
                  { id: 'StrengthPower', label: 'Powerlifting / Max Strength' },
                  { id: 'Longevity', label: 'Athleticism & Recovery' },
                ].map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setGoal(g.id as any)}
                    className={`p-3 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                      goal === g.id
                        ? 'bg-zinc-900 border-[#FFD700] text-white shadow-sm'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Training Frequency */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-300">
                <span>Weekly Training Frequency</span>
                <span className="text-[#FFD700] font-mono">{daysPerWeek} Days / Week</span>
              </div>
              <div className="flex gap-2">
                {[2, 3, 4, 5, 6].map((days) => (
                  <button
                    key={days}
                    onClick={() => setDaysPerWeek(days)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-bold font-mono transition-all border cursor-pointer ${
                      daysPerWeek === days
                        ? 'bg-[#FFD700] text-black border-[#FFD700] font-black'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                    }`}
                  >
                    {days}x
                  </button>
                ))}
              </div>
            </div>

            {/* Experience Level */}
            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300">
                Lifting Experience
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setExperience(lvl as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      experience === lvl
                        ? 'bg-zinc-800 text-[#FFD700] border-[#FFD700]/50'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results & Recommendation Panel */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-2 border-[#FFD700]/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#FFD700] tracking-widest font-bold">
                    Apex Biometric Engine Output
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase text-white">
                    Your Tailored Protocol
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#FFD700]">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase">Target Daily Protein</span>
                  <div className="font-impact text-3xl text-white mt-1">
                    {calculateDailyProtein()}g <span className="text-xs text-[#FFD700] font-sans font-semibold">/ day</span>
                  </div>
                  <span className="text-[10px] text-zinc-500">For optimal nitrogen retention</span>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase">Recommended Volume</span>
                  <div className="font-impact text-lg text-white mt-1 leading-tight">
                    {calculateWeeklySets()}
                  </div>
                  <span className="text-[10px] text-zinc-500">Volume matched to recovery index</span>
                </div>
              </div>

              {/* Recommended Tier Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/70 border border-[#FFD700]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-[#FFD700] font-bold">Suggested Membership Match:</span>
                  <span className="px-2 py-0.5 rounded bg-black text-[#FFD700] text-[10px] font-mono border border-zinc-800">
                    Calculated Best Value
                  </span>
                </div>

                <div className="font-heading font-black text-xl text-white uppercase">
                  {rec.name}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {rec.reason}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              <button
                id="calc-claim-pass-btn"
                onClick={onOpenFreePass}
                className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Test This Protocol With Free VIP Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] text-zinc-500 uppercase tracking-wider">
                Includes complimentary InBody 770 scan + 1-on-1 consultation upon arrival
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
