import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, HelpCircle, Star, ArrowRight, Clock, Award } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '../data/mockData';
import { MembershipTier } from '../types';

interface MembershipTiersProps {
  onSelectTier: (tier: MembershipTier) => void;
  onOpenFreePass: () => void;
}

export const MembershipTiers: React.FC<MembershipTiersProps> = ({
  onSelectTier,
  onOpenFreePass,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showFullComparison, setShowFullComparison] = useState(false);

  return (
    <section id="membership-tiers" className="relative py-24 bg-[#0B0B0B] border-t border-zinc-900 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#FFD700]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            <Award className="w-3.5 h-3.5" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            Membership <span className="text-[#FFD700]">Tiers.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            No initiation hidden fees. No 12-month lock-in traps. Just world-class training infrastructure and luxury recovery whenever you are ready.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <div className="inline-flex p-1.5 rounded-xl bg-zinc-950 border border-zinc-800">
              <button
                id="billing-monthly-btn"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-zinc-800 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                id="billing-annual-btn"
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-[#FFD700] text-black shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>Annual Pass</span>
                <span className="px-1.5 py-0.5 text-[10px] font-black uppercase rounded bg-black/20 text-black">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isHighlighted = tier.highlighted;
            const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceAnnual;

            return (
              <div
                key={tier.id}
                id={`tier-card-${tier.id}`}
                className={`relative rounded-sm flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#1a1a1a] border-2 border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.2)] lg:scale-105 z-20'
                    : 'bg-[#161616] border border-white/10 hover:border-white/25 shadow-xl'
                } p-8 sm:p-9`}
              >
                {/* Top Badge for Most Popular or VIP */}
                {isHighlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FFD700] text-black text-[10px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5 rounded-none">
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-heading font-black text-2xl uppercase tracking-tighter text-white">
                        {tier.name}
                      </h3>
                      <p className="text-[#FFD700] font-bold text-2xl mt-1 mb-3">
                        ${price}<span className="text-xs text-zinc-400 font-normal ml-1 uppercase opacity-75">/MO</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 font-medium mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Included Privileges:</p>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-200 uppercase tracking-wide opacity-85">
                        <span className="text-[#FFD700] font-bold">•</span>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Exclusive Perks */}
                  {tier.exclusivePerks.length > 0 && (
                    <div className="pt-4 border-t border-white/10 mb-8 space-y-2">
                      <p className="text-[10px] font-mono uppercase tracking-widest text-[#FFD700] font-bold">Tier Specialties:</p>
                      {tier.exclusivePerks.map((perk, pIdx) => (
                        <div key={pIdx} className="text-xs text-zinc-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#FFD700]"></span>
                          <span>{perk}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Primary Tier CTA */}
                <div>
                  <button
                    id={`tier-select-btn-${tier.id}`}
                    onClick={() => onSelectTier(tier)}
                    className={`w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-[#FFD700] hover:bg-white text-black font-black shadow-[0_0_20px_rgba(255,215,0,0.3)]'
                        : 'bg-transparent hover:bg-white hover:text-black text-white border border-white/20 hover:border-white'
                    }`}
                  >
                    <span>{isHighlighted ? 'Join Now' : tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="mt-3 text-center">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                      24/7 Keyless Biometrics • 0 Contracts
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Drawer Toggle */}
        <div className="mt-12 text-center">
          <button
            id="toggle-tier-comparison-btn"
            onClick={() => setShowFullComparison(!showFullComparison)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            <span>{showFullComparison ? 'Hide Comprehensive Tier Matrix' : 'View Full Feature Comparison Matrix'}</span>
          </button>
        </div>

        {/* Full Comparison Matrix */}
        {showFullComparison && (
          <div id="tier-comparison-table-wrapper" className="mt-8 rounded-2xl bg-zinc-950 border border-zinc-800 p-6 overflow-x-auto animate-in fade-in duration-300">
            <table className="w-full text-left text-xs text-zinc-300 min-w-[600px]">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-400 font-bold uppercase tracking-wider">
                  <th className="py-3 px-4">Amenity / Privilege</th>
                  <th className="py-3 px-4 text-center">The Ignition ($79)</th>
                  <th className="py-3 px-4 text-center text-[#FFD700]">The Pro Tier ($149)</th>
                  <th className="py-3 px-4 text-center">The Elite Legend ($249)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">24/7 Biometric Gym Access</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">✓</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">✓</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Infrared Sauna & 38°F Cold Plunge</td>
                  <td className="py-3 px-4 text-center text-zinc-600">—</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Unlimited</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Unlimited VIP</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">1-on-1 Personal Training Consultation</td>
                  <td className="py-3 px-4 text-center text-zinc-600">—</td>
                  <td className="py-3 px-4 text-center text-zinc-200">1x Monthly</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Weekly (4x/mo)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">InBody 770 Clinical Body Scans</td>
                  <td className="py-3 px-4 text-center text-zinc-600">Add-on ($35)</td>
                  <td className="py-3 px-4 text-center text-zinc-200">Monthly Included</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Unlimited Bi-Weekly</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">High-Intensity Class Access</td>
                  <td className="py-3 px-4 text-center text-zinc-600">Drop-in ($20)</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Unlimited</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Unlimited + VIP Priority</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Private Dedicated Locker</td>
                  <td className="py-3 px-4 text-center text-zinc-600">Day-Use Only</td>
                  <td className="py-3 px-4 text-center text-zinc-600">Day-Use Only</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Dedicated Private Stall</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white">Guest Passes</td>
                  <td className="py-3 px-4 text-center text-zinc-600">—</td>
                  <td className="py-3 px-4 text-center text-zinc-200">1x Monthly</td>
                  <td className="py-3 px-4 text-center text-[#FFD700]">Unlimited VIP Guests</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Money Back Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-[#FFD700]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-zinc-200 uppercase tracking-wider block text-sm">30-Day Ironclad Performance Guarantee</strong>
              <span>If you don't feel stronger, faster, and more energized in your first 30 days, we'll refund your membership in full.</span>
            </div>
          </div>
          <button
            id="pricing-guarantee-pass-btn"
            onClick={onOpenFreePass}
            className="shrink-0 text-[#FFD700] hover:underline font-bold uppercase tracking-wider text-xs"
          >
            Claim 1-Day Trial First →
          </button>
        </div>

      </div>
    </section>
  );
};
