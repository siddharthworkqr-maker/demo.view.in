import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Download, Copy, Calendar, Clock, MapPin, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FreePassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    focus: 'Hypertrophy & Heavy Iron',
  });
  const [passNumber, setPassNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    // Generate unique pass number
    const uniqueId = `APX-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassNumber(uniqueId);
    setStep('success');

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFD700', '#FFFFFF', '#FFA500'],
      });
    } catch (e) {
      console.log('Confetti effect triggered');
    }
  };

  const copyPassCode = () => {
    navigator.clipboard.writeText(passNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="free-pass-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="free-pass-modal-content"
        className="relative w-full max-w-lg bg-zinc-950 border border-zinc-700/90 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8 gold-border-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-free-pass-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer"
          aria-label="Close free pass dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>1-Day All-Access Guest Privileges</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                Claim Your Free <span className="text-[#FFD700]">VIP Pass.</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                Test drive our 50,000 sq ft facility, Eleiko platforms, and recovery cold plunge tubs with zero financial commitments.
              </p>
            </div>

            {/* Included in Pass Pill List */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800 text-[11px] text-zinc-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Full Gym Floor Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>Infrared Sauna & Plunge</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>InBody 770 Body Scan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#FFD700]" />
                <span>No High-Pressure Sales</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                  Full Name *
                </label>
                <input
                  id="pass-input-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="pass-input-email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Mobile Phone (For Biometric Gate SMS)
                  </label>
                  <input
                    id="pass-input-phone"
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Target Visit Date
                  </label>
                  <input
                    id="pass-input-date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-[#FFD700]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                    Primary Focus
                  </label>
                  <select
                    id="pass-input-focus"
                    value={formData.focus}
                    onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white text-xs focus:outline-none focus:border-[#FFD700]"
                  >
                    <option value="Hypertrophy & Heavy Iron">Hypertrophy & Heavy Iron</option>
                    <option value="Contrast Recovery & Cold Plunge">Contrast Recovery & Cold Plunge</option>
                    <option value="Metabolic Conditioning">Metabolic Conditioning</option>
                    <option value="Combat & Striking">Combat & Striking</option>
                    <option value="Full Facility Tour & InBody Scan">Full Facility Tour & InBody Scan</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="submit-free-pass-btn"
                  type="submit"
                  className="w-full py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-xl shadow-[0_0_25px_rgba(255,215,0,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Generate Instant VIP Access Pass</span>
                </button>
              </div>

              <div className="text-center text-[10px] text-zinc-500">
                🔒 Encrypted SSL Pass Generation • Valid for 14 days from issuance
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen with Digital VIP Pass */
          <div className="space-y-6 text-center">
            
            {/* Success Heading */}
            <div>
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                VIP Access Pass <span className="text-[#FFD700]">Activated!</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Welcome to Apex Iron Athletics, <strong className="text-white">{formData.fullName}</strong>. Present this digital pass at our Sector 4 entrance.
              </p>
            </div>

            {/* Glowing Digital VIP Card */}
            <div className="relative rounded-2xl bg-gradient-to-b from-zinc-900 via-black to-zinc-950 border-2 border-[#FFD700] p-6 shadow-[0_0_35px_rgba(255,215,0,0.3)] text-left space-y-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div>
                  <div className="font-heading font-black text-sm uppercase text-white tracking-wider flex items-center gap-1.5">
                    <span className="text-[#FFD700]">▲</span> APEX IRON ATHLETICS
                  </div>
                  <div className="text-[10px] font-mono text-zinc-500">OFFICIAL 1-DAY VIP CREDENTIAL</div>
                </div>
                <div className="px-2 py-0.5 rounded bg-[#FFD700] text-black font-black text-[10px] uppercase">
                  ACTIVE
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">GUEST ATHLETE</span>
                  <strong className="text-white text-sm">{formData.fullName}</strong>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">TARGET VISIT</span>
                  <span className="text-[#FFD700] font-bold font-mono">{formData.date}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">FOCUS SECTOR</span>
                  <span className="text-zinc-300">{formData.focus}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">FACILITY</span>
                  <span className="text-zinc-300">Sector 4, 742 Industrial</span>
                </div>
              </div>

              {/* Barcode & Pass ID Box */}
              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-zinc-500">CREDENTIAL ID</div>
                  <div className="font-mono text-sm font-bold text-white tracking-widest">{passNumber}</div>
                </div>
                <button
                  onClick={copyPassCode}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

            </div>

            {/* Arrival Instructions */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-left text-xs space-y-2 text-zinc-300">
              <div className="font-bold text-white uppercase text-[11px]">How To Enter The Facility:</div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                1. Arrive at 742 Industrial Parkway, Sector 4.<br />
                2. Tap your confirmation email on the contactless guest biometric tablet at Entrance A.<br />
                3. A staff member or automated locker dispenser will assign your day locker and towel.
              </p>
            </div>

            {/* Finish Actions */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
              >
                Close & Return To Site
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};
