import React, { useState, useEffect, useRef } from 'react';
import { Heart, ShieldCheck, Handshake, Scale, Smile, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ValuesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    { title: 'Honesty', icon: Heart, color: 'from-red-400 to-pink-500' },
    { title: 'Integrity', icon: ShieldCheck, color: 'from-blue-400 to-indigo-500' },
    { title: 'Respect', icon: Handshake, color: 'from-green-400 to-teal-500' },
    { title: 'Discipline', icon: Scale, color: 'from-purple-400 to-pink-500' },
    { title: 'Compassion', icon: Smile, color: 'from-orange-400 to-red-500' },
    { title: 'Responsibility', icon: Award, color: 'from-cyan-400 to-blue-500' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Value-Based Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We strongly believe in developing moral values along with academic excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`aspect-square bg-gradient-to-br ${value.color} rounded-2xl mb-4 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          <Icon size={48} />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-center font-bold text-gray-800 text-lg">{value.title}</h3>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;