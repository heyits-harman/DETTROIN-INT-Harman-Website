import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Excellence International School',
      subtitle: 'Shaping Future Leaders Through Quality Education',
      description: 'Best School in Aligarh, Uttar Pradesh',
      bgColor: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Holistic Development',
      subtitle: 'Nurturing Young Minds with Knowledge & Values',
      description: 'Building Confident & Responsible Individuals',
      bgColor: 'from-indigo-600 to-purple-700',
    },
    {
      title: 'Quality Education',
      subtitle: 'Modern Learning for a Bright Future',
      description: 'Where Excellence Meets Innovation',
      bgColor: 'from-blue-700 to-cyan-600',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home" className="relative h-screen mt-16 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4 lg:px-8 text-center text-white">
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  index === currentSlide
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
              >
                <p className="text-lg md:text-xl mb-4 font-medium uppercase tracking-wider">
                  {slide.description}
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    Admissions Open 2026-2027
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-10' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;