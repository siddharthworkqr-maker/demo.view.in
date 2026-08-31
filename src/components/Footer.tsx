import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Instagram, Youtube, Twitter, Disc as Discord, Sparkles, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenFreePass: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenFreePass }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer id="footer" className="relative bg-[#070707] border-t border-zinc-800/80 text-zinc-400 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FFD700]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & VIP Perks Bar */}
        <div className="rounded-sm bg-[#161616] border border-white/10 p-8 sm:p-10 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-[#FFD700] text-xs font-bold uppercase tracking-widest">
              <span>Exclusive Athletic Intel</span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tighter text-white">
              Unlock VIP Protocols & First Access
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Receive weekly hypertrophy programming notes, recovery science breakdowns, and early invitations to masterclasses.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {!subscribed ? (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  placeholder="Enter your email"
                  maxLength={100}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-4 py-3.5 rounded-sm bg-black border border-white/15 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-[#FFD700] flex-grow min-w-[260px]"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="px-6 py-3.5 rounded-sm bg-[#FFD700] hover:bg-white text-black font-black uppercase text-xs tracking-tighter transition-colors cursor-pointer shadow-[0_0_20px_rgba(255,215,0,0.3)] shrink-0 flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-3.5 rounded-sm bg-black border border-[#FFD700] text-[#FFD700] text-xs font-bold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>VIP Access Granted! Check your inbox for your welcome dossier.</span>
              </div>
            )}
          </div>
        </div>

        {/* 4-Column Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info & Physical Location */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-[#FFD700] flex items-center justify-center font-impact font-black text-lg text-[#FFD700]">
                ▲
              </div>
              <span className="font-heading font-black tracking-widest text-lg text-white uppercase">
                APEX IRON <span className="text-[#FFD700] font-light">ATHLETICS</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              The premier 24/7 industrial performance sanctuary. Engineered with IPF-calibrated Eleiko steel, full-spectrum thermal recovery, and clinical InBody diagnostics.
            </p>

            {/* Official Address */}
            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="font-medium">742 Industrial Parkway, Sector 4, Neo Metropolis</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Clock className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>24/7/365 Keyless Biometric Entrance Active</span>
              </div>
              <div className="flex items-center gap-2.5 text-zinc-300">
                <Phone className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>+1 (800) 555-APEX / Staffed: 06:00 - 22:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('apex-standard')} className="hover:text-[#FFD700] transition-colors cursor-pointer">
                  The Apex Standard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('membership-tiers')} className="hover:text-[#FFD700] transition-colors cursor-pointer">
                  Membership Tiers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('schedule-section')} className="hover:text-[#FFD700] transition-colors cursor-pointer">
                  Class Timetable
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-[#FFD700] transition-colors cursor-pointer">
                  Member Results
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('facility-zones')} className="hover:text-[#FFD700] transition-colors cursor-pointer">
                  Facility Zones
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('physique-calculator')} className="hover:text-[#FFD700] transition-colors cursor-pointer">
                  Macro & Volume Tool
                </button>
              </li>
            </ul>
          </div>

          {/* Membership & Privileges */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Membership Tiers
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between text-zinc-300">
                <span>The Ignition Tier</span>
                <span className="font-mono text-zinc-500">$79/mo</span>
              </li>
              <li className="flex items-center justify-between text-[#FFD700] font-semibold">
                <span>The Pro Tier (Popular)</span>
                <span className="font-mono">$149/mo</span>
              </li>
              <li className="flex items-center justify-between text-zinc-300">
                <span>The Elite Legend</span>
                <span className="font-mono text-zinc-500">$249/mo</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenFreePass}
                  className="text-xs text-[#FFD700] font-bold uppercase tracking-wider hover:underline flex items-center gap-1"
                >
                  <span>Claim 1-Day VIP Trial Pass</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Community Handles */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Connect & Community
            </h4>
            <p className="text-xs text-zinc-400">
              Join 12,000+ strength athletes in our daily workout logs, PR broadcasts, and technique analysis.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="#instagram"
                id="social-instagram"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#FFD700] text-zinc-400 hover:text-black border border-zinc-800 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram @apexironathletics"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                id="social-youtube"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#FFD700] text-zinc-400 hover:text-black border border-zinc-800 flex items-center justify-center transition-all cursor-pointer"
                aria-label="YouTube @apexiron"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                id="social-twitter"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#FFD700] text-zinc-400 hover:text-black border border-zinc-800 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Twitter / X @apexiron"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#discord"
                id="social-discord"
                className="w-9 h-9 rounded-lg bg-zinc-900 hover:bg-[#FFD700] text-zinc-400 hover:text-black border border-zinc-800 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Discord Athlete Community"
              >
                <Discord className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] font-mono text-zinc-500">
              @apexironathletics • #ForgeYourUltimatePhysique
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Security Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Apex Iron Athletics LLC. All rights reserved. 742 Industrial Parkway, Sector 4, Neo Metropolis.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-zinc-200 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-200 transition-colors">Terms of Performance</a>
            <a href="#biometrics" className="hover:text-zinc-200 transition-colors">Biometric Security Standard</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
