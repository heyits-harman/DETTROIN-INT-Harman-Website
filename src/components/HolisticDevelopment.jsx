import React, { useState, useEffect, useRef } from 'react';
import { Dumbbell, Music, User, Bus } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const HolisticDevelopment = () => {
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

  const programs = [
    {
      title: 'Sports & Physical Education',
      icon: Dumbbell,
      color: 'from-red-500 to-orange-500',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      description: 'Sports activities help students develop discipline, teamwork, and physical fitness.',
      activities: ['Outdoor sports', 'Indoor games', 'Physical fitness activities', 'Sports competitions', 'Yoga programs'],
    },
    {
      title: 'Cultural & Creative Activities',
      icon: Music,
      color: 'from-purple-500 to-indigo-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'Cultural activities encourage creativity, expression, and confidence.',
      activities: ['Dance', 'Music', 'Drama', 'Art and craft', 'Debate competitions'],
    },
    {
      title: 'Personality Development',
      icon: User,
      color: 'from-teal-500 to-green-500',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      description: 'Building essential life skills that help students succeed in the future.',
      activities: ['Public speaking', 'Leadership development', 'Discipline training', 'Teamwork', 'Moral education'],
    },
    {
      title: 'Transportation Facility',
      icon: Bus,
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'Safe and convenient transportation for students.',
      activities: ['Maintained buses', 'Experienced drivers', 'Fixed routes', 'Supervised travel', 'Safety measures'],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Holistic Development Approach</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We focus on overall development of students through various programs and activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-6">
                    <div className={`aspect-square bg-gradient-to-br ${program.color} rounded-xl mb-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                          <div className="w-16 h-16 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Icon size={32} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`w-12 h-12 ${program.iconBg} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className={program.iconColor} size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{program.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">{program.description}</p>

                    <ul className="space-y-2 text-sm">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className={`${program.iconColor} mr-2 mt-0.5`}>•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
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

export default HolisticDevelopment;