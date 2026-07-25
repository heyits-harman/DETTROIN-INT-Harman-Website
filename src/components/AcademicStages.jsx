import React, { useState, useEffect, useRef } from 'react';
import { Baby, BookOpen, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const AcademicStages = () => {
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

  const stages = [
    {
      title: 'Pre-Primary School',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      description: 'Early childhood education focuses on nurturing curiosity, creativity, and basic learning abilities in a joyful environment.',
      features: ['Play-based learning', 'Language development', 'Basic numeracy skills', 'Social interaction', 'Creative exploration'],
      imagePosition: 'left',
    },
    {
      title: 'Primary School',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'Primary education is designed to strengthen core academic skills while encouraging curiosity and independent learning.',
      features: ['Reading and writing skills', 'Fundamental mathematics', 'Basic science concepts', 'Moral values and good habits', 'Classroom discipline'],
      imagePosition: 'right',
    },
    {
      title: 'Middle School',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      description: 'Middle school prepares students for advanced academic learning while developing analytical thinking and responsibility.',
      features: ['Advanced reading and writing', 'Concept-based mathematics', 'Science exploration', 'Social studies', 'Communication skills'],
      imagePosition: 'left',
    },
    {
      title: 'Daycare',
      icon: Heart,
      color: 'from-orange-500 to-amber-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      description: 'The Daycare facility provides a safe, caring, and supportive environment for young children while their parents are at work.',
      features: ['Safe supervised environment', 'Play-based activities', 'Rest and relaxation', 'Interactive learning', 'Social interaction'],
      imagePosition: 'right',
    },
  ];

  return (
    <section id="academics" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Academic Stages</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Excellence International School, the academic journey is structured to support students at
            every stage of their development.
          </p>
        </div>

        <div className="space-y-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isLeft = stage.imagePosition === 'left';

            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className={`grid md:grid-cols-2 gap-0 ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
                      {/* Image */}
                      <div className={`relative ${!isLeft ? 'md:order-2' : ''}`}>
                        <div className={`aspect-[4/3] bg-gradient-to-br ${stage.color} relative overflow-hidden group`}>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-white">
                            <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                              <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                <Icon size={48} />
                              </div>
                              <p className="text-xl font-semibold">Image Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isLeft ? 'md:order-1' : ''}`}>
                        <div className={`flex items-center space-x-4 mb-6`}>
                          <div className={`w-16 h-16 ${stage.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <Icon className={stage.iconColor} size={32} />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-800">{stage.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">{stage.description}</p>
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-800 mb-3">Key focus areas:</p>
                          <ul className="space-y-2">
                            {stage.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start text-gray-600">
                                <span className={`${stage.iconColor} mr-3 mt-1`}>•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default AcademicStages;