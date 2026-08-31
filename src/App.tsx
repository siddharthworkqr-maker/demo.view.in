/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ApexStandard } from './components/ApexStandard';
import { MembershipTiers } from './components/MembershipTiers';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FacilityTourPeek } from './components/FacilityTourPeek';
import { PhysiqueTargetCalculator } from './components/PhysiqueTargetCalculator';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FreePassModal } from './components/FreePassModal';
import { TierJoinModal } from './components/TierJoinModal';
import { MembershipTier } from './types';
import { MEMBERSHIP_TIERS } from './data/mockData';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isFreePassModalOpen, setIsFreePassModalOpen] = useState(false);
  const [selectedTierForModal, setSelectedTierForModal] = useState<MembershipTier | null>(null);
  const [isTierModalOpen, setIsTierModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (tier: MembershipTier) => {
    setSelectedTierForModal(tier);
    setIsTierModalOpen(true);
  };

  const handleOpenTierById = (tierId?: string) => {
    const targetTier = MEMBERSHIP_TIERS.find((t) => t.id === tierId) || MEMBERSHIP_TIERS[1];
    setSelectedTierForModal(targetTier);
    setIsTierModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-zinc-100 selection:bg-[#FFD700] selection:text-black flex flex-col">
      {/* Top Navbar */}
      <Navbar
        onOpenFreePass={() => setIsFreePassModalOpen(true)}
        onOpenTierModal={handleOpenTierById}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
          onNavigateToTiers={() => scrollToSection('membership-tiers')}
        />

        {/* 2. About / The Apex Standard */}
        <ApexStandard
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
        />

        {/* 3. Membership Tiers */}
        <MembershipTiers
          onSelectTier={handleSelectTier}
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
        />

        {/* 4. Schedule & Classes Preview */}
        <ScheduleSection
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
        />

        {/* 5. Social Proof / Testimonials */}
        <TestimonialsSection
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
        />

        {/* Interactive Facility Explorer */}
        <FacilityTourPeek
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
        />

        {/* Interactive Training Volume Diagnostic Tool */}
        <PhysiqueTargetCalculator
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
          onSelectTier={handleOpenTierById}
        />

        {/* FAQ Section */}
        <FAQSection
          onOpenFreePass={() => setIsFreePassModalOpen(true)}
        />
      </main>

      {/* 6. Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenFreePass={() => setIsFreePassModalOpen(true)}
      />

      {/* Free 1-Day VIP Pass Claim Modal */}
      <FreePassModal
        isOpen={isFreePassModalOpen}
        onClose={() => setIsFreePassModalOpen(false)}
      />

      {/* Membership Tier Checkout / Join Modal */}
      <TierJoinModal
        tier={selectedTierForModal}
        isOpen={isTierModalOpen}
        onClose={() => setIsTierModalOpen(false)}
      />

      {/* Floating Action Button for Mobile Users */}
      <div className="fixed bottom-5 right-5 z-30 sm:hidden">
        <button
          id="mobile-floating-pass-btn"
          onClick={() => setIsFreePassModalOpen(true)}
          className="px-4 py-3 bg-[#FFD700] text-black font-black uppercase text-xs tracking-wider rounded-full shadow-[0_0_25px_rgba(255,215,0,0.5)] flex items-center gap-2 active:scale-95 transition-transform"
        >
          <Sparkles className="w-4 h-4 fill-black" />
          <span>Claim VIP Pass</span>
        </button>
      </div>
    </div>
  );
}
