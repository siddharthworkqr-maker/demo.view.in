import React, { useState } from 'react';
import { Calendar, Clock, Flame, Users, Zap, CheckCircle2, ChevronRight, Award, Shield, X, MapPin } from 'lucide-react';
import { SCHEDULE_CLASSES } from '../data/mockData';
import { ClassSession } from '../types';

interface ScheduleSectionProps {
  onOpenFreePass: () => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onOpenFreePass }) => {
  const days: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[] = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const [activeDay, setActiveDay] = useState<'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'>('Monday');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedClassToBook, setSelectedClassToBook] = useState<ClassSession | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [memberEmail, setMemberEmail] = useState('');
  const [memberName, setMemberName] = useState('');

  const categories = ['All', 'Metabolic', 'Hypertrophy', 'Mobility', 'Combat', 'Recovery'];

  const filteredClasses = SCHEDULE_CLASSES.filter((c) => {
    const matchesDay = c.day === activeDay;
    const matchesCat = activeCategory === 'All' || c.category === activeCategory;
    return matchesDay && matchesCat;
  });

  const getIntensityBadge = (intensity: 'Medium' | 'High' | 'Extreme') => {
    switch (intensity) {
      case 'Extreme':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-500/20 text-red-400 border border-red-500/40 flex items-center gap-1">
            <Flame className="w-3 h-3 text-red-400" />
            <span>Extreme Intensity</span>
          </span>
        );
      case 'High':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-[#FFD700] border border-[#FFD700]/40 flex items-center gap-1">
            <Zap className="w-3 h-3 text-[#FFD700]" />
            <span>High Load</span>
          </span>
        );
      case 'Medium':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Regenerative Flow</span>
          </span>
        );
    }
  };

  const handleBookClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName || !memberEmail) return;
    setBookingSuccess(true);
  };

  return (
    <section id="schedule-section" className="relative py-24 bg-[#0B0B0B] border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFD700]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-[0.2em] text-[#FFD700]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Live Class Timetable</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            Schedule & <span className="text-[#FFD700]">Classes.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            High-intensity masterclasses capped at 16 athletes per session. Taught by certified CSCS strength coaches and combat directors.
          </p>
        </div>

        {/* Days of the Week Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {days.map((d) => {
            const isActive = activeDay === d;
            return (
              <button
                key={d}
                id={`day-tab-${d.toLowerCase()}`}
                onClick={() => setActiveDay(d)}
                className={`px-4 sm:px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FFD700] text-black shadow-[0_0_20px_rgba(255,215,0,0.35)] font-black'
                    : 'bg-[#161616] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pt-4 pb-8">
          {categories.map((cat) => {
            const isCatActive = activeCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  isCatActive
                    ? 'bg-white text-black border border-white'
                    : 'bg-[#161616] text-zinc-400 hover:text-zinc-200 border border-white/10'
                }`}
              >
                {cat === 'All' ? 'All Classes' : cat}
              </button>
            );
          })}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredClasses.length > 0 ? (
            filteredClasses.map((item) => {
              return (
                <div
                  key={item.id}
                  id={`class-card-${item.id}`}
                  className="rounded-sm bg-[#161616] border border-white/10 hover:border-[#FFD700]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      {getIntensityBadge(item.intensity)}
                      <span className="text-[10px] font-mono uppercase text-zinc-400 bg-black px-2 py-0.5 rounded-sm border border-white/10">
                        {item.room}
                      </span>
                    </div>

                    {/* Class Title & Description */}
                    <h3 className="font-heading font-black text-xl uppercase tracking-tight text-white group-hover:text-[#FFD700] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {/* Time & Duration */}
                    <div className="p-3 rounded-sm bg-black/60 border border-white/10 space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1.5 text-white font-semibold">
                          <Clock className="w-3.5 h-3.5 text-[#FFD700]" />
                          {item.time}
                        </span>
                        <span className="text-zinc-400 font-mono">{item.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-white/10">
                        <span className="flex items-center gap-1 text-zinc-400">
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          <span>Burn: <strong className="text-zinc-200">{item.caloriesBurn}</strong></span>
                        </span>
                        <span className="text-xs font-bold text-[#FFD700]">
                          {item.spotsLeft} Spots Left
                        </span>
                      </div>
                    </div>

                    {/* Coach Profile */}
                    <div className="flex items-center gap-3 mb-6 p-2 rounded-sm bg-black/40 border border-white/5">
                      <img
                        src={item.coach.avatar}
                        alt={item.coach.name}
                        referrerPolicy="no-referrer"
                        className="w-10 h-10 rounded-sm object-cover ring-1 ring-white/10"
                      />
                      <div>
                        <div className="text-xs font-bold text-zinc-200">{item.coach.name}</div>
                        <div className="text-[10px] text-zinc-500 font-medium">{item.coach.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Reserve Class Action */}
                  <button
                    id={`book-class-btn-${item.id}`}
                    onClick={() => {
                      setSelectedClassToBook(item);
                      setBookingSuccess(false);
                    }}
                    className="w-full py-3 rounded-sm bg-black hover:bg-[#FFD700] text-zinc-200 hover:text-black border border-white/15 hover:border-[#FFD700] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                  >
                    <span>Reserve Guest / Member Spot</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center rounded-sm bg-[#161616] border border-white/10 space-y-3">
              <Calendar className="w-10 h-10 text-zinc-600 mx-auto" />
              <h3 className="text-lg font-bold text-white uppercase">Open Floor Access Available</h3>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                No scheduled group masterclass in this specific category for {activeDay}. 
                The 50,000 sq ft main iron yard and recovery suites remain 24/7 accessible.
              </p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-2 text-xs font-bold uppercase tracking-wider text-[#FFD700] hover:underline"
              >
                View All {activeDay} Classes →
              </button>
            </div>
          )}
        </div>

        {/* Bottom Booking Notice */}
        <div className="mt-12 text-center text-xs text-zinc-500">
          <span>* All classes are included with The Pro Tier and The Elite Legend memberships. Non-members can book via the VIP 1-Day Trial Pass.</span>
        </div>

      </div>

      {/* Interactive Class Reservation Modal */}
      {selectedClassToBook && (
        <div
          id="class-reservation-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedClassToBook(null)}
        >
          <div
            className="relative w-full max-w-lg bg-zinc-950 border border-zinc-700 rounded-2xl p-6 sm:p-8 shadow-2xl text-left space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClassToBook(null)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#FFD700] uppercase tracking-wider">
                    {selectedClassToBook.day} • {selectedClassToBook.room}
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase text-white">
                    {selectedClassToBook.title}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Lead by {selectedClassToBook.coach.name} ({selectedClassToBook.time})
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Session Duration:</span>
                    <span className="text-white font-bold">{selectedClassToBook.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Target Caloric Output:</span>
                    <span className="text-[#FFD700] font-bold">{selectedClassToBook.caloriesBurn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Class Capacity Cap:</span>
                    <span className="text-emerald-400 font-bold">{selectedClassToBook.spotsLeft} spots available</span>
                  </div>
                </div>

                <form onSubmit={handleBookClass} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={memberName}
                      onChange={(e) => setMemberName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="athlete@domain.com"
                      value={memberEmail}
                      onChange={(e) => setMemberEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-[#FFD700]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 text-xs font-black uppercase tracking-widest text-black bg-[#FFD700] hover:bg-[#ffe135] rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.35)] transition-all cursor-pointer"
                    >
                      Confirm Session Reservation
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl uppercase text-white">
                  Spot Confirmed, {memberName}!
                </h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Your reservation for <strong className="text-[#FFD700]">{selectedClassToBook.title}</strong> on {selectedClassToBook.day} at {selectedClassToBook.time} has been secured. Biometric gate instructions sent to <strong className="text-white">{memberEmail}</strong>.
                </p>
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 font-mono">
                  RESERVATION TICKET: #APX-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  onClick={() => setSelectedClassToBook(null)}
                  className="px-6 py-2.5 rounded-lg bg-[#FFD700] text-black font-bold uppercase text-xs tracking-wider"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
