import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyWomenOnly } from './components/WhyWomenOnly';
import { Programs } from './components/Programs';
import { FitnessCalculator } from './components/FitnessCalculator';
import { Trainers } from './components/Trainers';
import { Transformations } from './components/Transformations';
import { Pricing } from './components/Pricing';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactFooter } from './components/ContactFooter';
import { TrialModal } from './components/TrialModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState<boolean>(false);
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<string>(
    'Gói Tập Thử 3 Ngày Miễn Phí (Gym + Yoga + Pilates)'
  );

  const handleOpenTrialModal = (programName?: string) => {
    if (programName) {
      setSelectedProgramForModal(programName);
    } else {
      setSelectedProgramForModal('Gói Tập Thử 3 Ngày Miễn Phí (Gym + Yoga + Pilates)');
    }
    setIsTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-400 selection:text-neutral-950 antialiased">
      {/* Navigation Bar */}
      <Navbar onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Hero Section */}
      <Hero onOpenTrialModal={(prog) => handleOpenTrialModal(prog)} />

      {/* Why Women Only Section */}
      <WhyWomenOnly onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Training Programs */}
      <Programs onSelectProgram={(progName) => handleOpenTrialModal(progName)} />

      {/* Interactive Women's Fitness Calculator */}
      <FitnessCalculator onOpenTrialModal={(rec) => handleOpenTrialModal(rec)} />

      {/* Certified Female Trainers */}
      <Trainers onOpenTrialModal={(trainer) => handleOpenTrialModal(trainer)} />

      {/* Real Transformations & Social Proof */}
      <Transformations onOpenTrialModal={() => handleOpenTrialModal()} />

      {/* Class Schedule & Booking */}
      <Schedule onBookClass={(clsName) => handleOpenTrialModal(clsName)} />

      {/* Membership Pricing Plans */}
      <Pricing onSelectPlan={(planName) => handleOpenTrialModal(`Đăng ký ${planName}`)} />

      {/* Studio Facilities Gallery */}
      <Gallery />

      {/* Member Testimonials */}
      <Testimonials />

      {/* Contact & Footer */}
      <ContactFooter />

      {/* Free Trial / Registration Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialProgram={selectedProgramForModal}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenTrialModal={() => handleOpenTrialModal()} />
    </div>
  );
}
