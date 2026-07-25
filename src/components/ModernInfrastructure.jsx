import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Users, Telescope, Atom, Palette, Activity } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const ModernInfrastructure = () => {
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

  const facilities = [
    {
      title: 'Skill Based Learning',
      icon: Lightbulb,
      color: 'from-yellow-400 to-orange-500',
      description: 'Helps students think creatively and logically, encouraging practical application.',
    },
    {
      title: 'Community Service',
      icon: Users,
      color: 'from-green-400 to-teal-500',
      description: 'Develops social responsibility, empathy, and interpersonal skills.',
    },
    {
      title: 'Experiential Learning',
      icon: Telescope,
      color: 'from-blue-400 to-indigo-500',
      description: 'Connects classroom knowledge with real-life experiences.',
    },
    {
      title: 'STREAM Education',
      icon: Atom,
      color: 'from-purple-400 to-pink-500',
      description: 'Integrates science, technology, reading, engineering, arts, and mathematics.',
    },
    {
      title: 'Visual & Performing Arts',
      icon: Palette,
      color: 'from-pink-400 to-rose-500',
      description: 'Music, dance, drama, and creative expression for imagination development.',
    },
    {
      title: 'Physical Development',
      icon: Activity,
      color: 'from-red-400 to-orange-500',
      description: 'Sports and activities building physical strength and healthy lifestyle.',
    },
  ];

  return (
    <section id="facilities" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Modern Infrastructure for Effective Learning
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A well-planned campus environment enhances the learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  <div className={`h-48 bg-gradient-to-br ${facility.color} relative`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Icon size={40} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
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

export default ModernInfrastructure;