import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import AcademicStages from './components/AcademicStages';
import WhyExcellence from './components/WhyExcellence';
import HolisticDevelopment from './components/HolisticDevelopment';
import ModernInfrastructure from './components/ModernInfrastructure';
import TestimonialsSection from './components/TestimonialsSection';
import ValuesSection from './components/ValuesSection';
import FAQSection from './components/FAQSection';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <AboutSection />
      <AcademicStages />
      <WhyExcellence />
      <HolisticDevelopment />
      <ModernInfrastructure />
      <TestimonialsSection />
      <ValuesSection />
      <FAQSection />
      <EnquiryForm />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;