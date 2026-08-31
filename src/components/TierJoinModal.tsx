import React, { useState } from 'react';
import { X, Check, Sparkles, Shield, ArrowRight, Lock, CreditCard } from 'lucide-react';
import { MembershipTier } from '../types';
import confetti from 'canvas-confetti';

interface TierJoinModalProps {
  tier: MembershipTier | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TierJoinModal: React.FC<TierJoinModalProps> = ({ tier, isOpen, onClose }) => {
  const [step, setStep] = useState<'checkout' | 'confirmed'>('checkout');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    emergencyContact: '',
  });

  if (!isOpen || !tier) return null;

  const price = billingCycle === 'monthly' ? tier.priceMonthly : tier.priceAnnual;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    setStep('confirmed');
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#FFD700', '#FFFFFF', '#FFA500'],
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  return (
    <div
      id="tier-join-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="tier-join-modal-content"
        className="relative w-full max-w-xl bg-zinc-950 border border-zinc-700/90 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 gold-border-glow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'checkout' ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFD700] font-bold">
                Membership Enrollment
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase text-white mt-1">
                Join <span className="text-[#FFD700]">{tier.name}</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                24/7 biometric keyless access, zero long-term lockout contracts, and instant mobile credentialing.
              </p>
            </div>

            {/* Billing Cycle Pill */}
            <div className="p-1 rounded-xl bg-zinc-900 border border-zinc-800 flex">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                  billingCycle === 'monthly' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-400'
                }`}
              >
                Monthly (${tier.priceMonthly}/mo)
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 ${
                  billingCycle === 'annual' ? 'bg-[#FFD700] text-black shadow' : 'text-zinc-400'
                }`}
              >
                <span>Annual (${tier.priceAnnual}/mo)</span>
                <span className="px-1.5 py-0.2 text-[9px] font-black uppercase rounded bg-black/20 text-black">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Plan Summary Card */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3 text-xs">
              <div className="flex justify-between items-baseline border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Total Due Today:</span>
                <div className="text-right">
                  <span className="font-impact text-2xl text-[#FFD700]">${price}</span>
                  <span className="text-zinc-500 text-[10px] block">
                    {billingCycle === 'annual' ? 'Billed annually ($' + (price * 12) + ')' : 'Billed monthly • First month'}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                {tier.features.slice(0, 4).map((f, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-zinc-300 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-[#FFD700] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrollment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="athlete@apex.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Confirm & Activate 24/7 Membership</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400">
                <Lock className="w-3 h-3 text-[#FFD700]" />
                <span>256-Bit Encrypted • 30-Day Money-Back Performance Guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#FFD700] font-bold">Registration Complete</span>
              <h3 className="font-heading font-black text-3xl uppercase text-white">
                Welcome to Apex Iron, {formData.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Your <strong className="text-[#FFD700]">{tier.name}</strong> membership is now active. Your biometric profile has been provisioned for 24/7 access at 742 Industrial Parkway.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-xs space-y-2">
              <div className="flex justify-between text-zinc-400">
                <span>Member ID:</span>
                <span className="font-mono text-white font-bold">#APX-MEM-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Tier Plan:</span>
                <span className="text-[#FFD700] font-bold">{tier.name} ({billingCycle})</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Next Step:</span>
                <span className="text-zinc-200">Digital Key sent to {formData.email}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest hover:bg-[#ffe135] transition-all cursor-pointer"
            >
              Enter Member Arena
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
