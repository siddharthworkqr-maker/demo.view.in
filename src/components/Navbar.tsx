import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, Menu, X, Clock, MapPin, ChevronRight, Phone, Dumbbell, Award } from 'lucide-react';

interface NavbarProps {
  onOpenFreePass: () => void;
  onOpenTierModal: (tierId?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenFreePass,
  onOpenTierModal,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Urgent Bar */}
      <aside 
        id="top-announcement-bar"
        aria-label="Membership capacity status"
        className="w-full bg-[#111111] border-b border-zinc-800/80 py-1.5 px-4 text-xs font-medium text-zinc-300"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD700]"></span>
            </span>
            <span className="font-semibold text-white tracking-wider uppercase text-[11px]">
              24/7 Biometric Access
            </span>
            <span className="hidden sm:inline text-zinc-500">•</span>
            <span className="hidden sm:inline text-zinc-400">
              Facility Capacity Cap: <strong className="text-zinc-200">88% (42 Spots Left)</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-400">
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#FFD700]" />
              742 Industrial Pkwy, Sector 4
            </span>
            <span className="flex items-center gap-1 text-zinc-300 hover:text-[#FFD700] transition-colors cursor-pointer" onClick={onOpenFreePass}>
              <Award className="w-3 h-3 text-[#FFD700]" />
              <span>Complimentary 1-Day VIP Pass</span>
            </span>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0B0B]/98 backdrop-blur-md border-b border-[#FFD700]/20 shadow-2xl py-3'
            : 'bg-[#0B0B0B] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-1 focus:ring-[#FFD700] rounded-sm p-1 cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#FFD700] flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-transform group-hover:scale-105">
              <span className="text-black font-black text-xl">A</span>
            </div>
            <div>
              <div className="font-heading text-xl sm:text-2xl font-black tracking-tighter uppercase text-white leading-none">
                Apex Iron <span className="text-[#FFD700]">Athletics</span>
              </div>
              <p className="text-[9px] tracking-[0.3em] text-zinc-400 uppercase font-bold mt-0.5">
                Neo Metropolis | 24/7 Access
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-zinc-300">
            <button
              id="nav-standard-btn"
              onClick={() => handleLinkClick('apex-standard')}
              className="hover:text-[#FFD700] transition-colors py-1 cursor-pointer focus:outline-none focus:text-[#FFD700]"
            >
              The Facility
            </button>
            <button
              id="nav-tiers-btn"
              onClick={() => handleLinkClick('membership-tiers')}
              className="hover:text-[#FFD700] transition-colors py-1 cursor-pointer focus:outline-none focus:text-[#FFD700]"
            >
              Coaching
            </button>
            <button
              id="nav-schedule-btn"
              onClick={() => handleLinkClick('schedule-section')}
              className="hover:text-[#FFD700] transition-colors py-1 cursor-pointer focus:outline-none focus:text-[#FFD700]"
            >
              Schedule
            </button>
            <button
              id="nav-stories-btn"
              onClick={() => handleLinkClick('transformations')}
              className="hover:text-[#FFD700] transition-colors py-1 cursor-pointer focus:outline-none focus:text-[#FFD700]"
            >
              Results
            </button>
            <button
              id="nav-calculator-btn"
              onClick={() => handleLinkClick('physique-calculator')}
              className="hover:text-[#FFD700] transition-colors py-1 cursor-pointer focus:outline-none focus:text-[#FFD700] text-zinc-400"
            >
              Volume Tool
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-tiers-outline-btn"
              onClick={() => handleLinkClick('membership-tiers')}
              className="border border-white/20 hover:border-[#FFD700] text-white uppercase px-4 py-2 text-xs font-bold tracking-tighter transition-colors rounded-sm cursor-pointer"
            >
              Membership Tiers
            </button>
            <button
              id="header-free-pass-btn"
              onClick={onOpenFreePass}
              className="bg-[#FFD700] text-black font-black uppercase px-5 py-2 text-xs tracking-tighter hover:bg-white transition-colors rounded-sm shadow-[0_0_20px_rgba(255,215,0,0.35)] cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-black" />
              <span>Claim Free Pass</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-claim-quick-btn"
              onClick={onOpenFreePass}
              className="sm:hidden px-3 py-1.5 text-[11px] font-black uppercase tracking-tighter text-black bg-[#FFD700] rounded-sm"
            >
              Free Pass
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg border border-zinc-800 bg-zinc-900/60 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FFD700]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-nav-drawer"
            className="lg:hidden border-t border-zinc-800 bg-[#0B0B0B]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200"
          >
            <div className="flex flex-col space-y-2 text-sm font-bold uppercase tracking-wider text-zinc-300">
              <button
                id="mobile-link-standard"
                onClick={() => handleLinkClick('apex-standard')}
                className="text-left px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-[#FFD700] transition-colors flex items-center justify-between"
              >
                <span>The Apex Standard</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
              <button
                id="mobile-link-tiers"
                onClick={() => handleLinkClick('membership-tiers')}
                className="text-left px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-[#FFD700] transition-colors flex items-center justify-between"
              >
                <span>Membership Tiers</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
              <button
                id="mobile-link-schedule"
                onClick={() => handleLinkClick('schedule-section')}
                className="text-left px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-[#FFD700] transition-colors flex items-center justify-between"
              >
                <span>Classes & Schedule</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
              <button
                id="mobile-link-results"
                onClick={() => handleLinkClick('transformations')}
                className="text-left px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-[#FFD700] transition-colors flex items-center justify-between"
              >
                <span>Member Transformations</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
              <button
                id="mobile-link-facility"
                onClick={() => handleLinkClick('facility-zones')}
                className="text-left px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-[#FFD700] transition-colors flex items-center justify-between"
              >
                <span>Facility & Recovery Tour</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
              <button
                id="mobile-link-calc"
                onClick={() => handleLinkClick('physique-calculator')}
                className="text-left px-3 py-2.5 rounded-lg hover:bg-zinc-900 hover:text-[#FFD700] transition-colors flex items-center justify-between"
              >
                <span>Training & Volume Calculator</span>
                <ChevronRight className="w-4 h-4 text-zinc-600" />
              </button>
            </div>

            <div className="pt-4 border-t border-zinc-800/80 space-y-2">
              <button
                id="mobile-drawer-claim-pass"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenFreePass();
                }}
                className="w-full py-3 text-center text-sm font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.35)]"
              >
                Claim Free VIP Pass
              </button>
              <button
                id="mobile-drawer-view-tiers"
                onClick={() => handleLinkClick('membership-tiers')}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-widest text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg"
              >
                View Membership Plans
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
