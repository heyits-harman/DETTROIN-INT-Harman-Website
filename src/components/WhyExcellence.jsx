import React, { useState, useEffect, useRef } from 'react';
import { BookCheck, Lightbulb, Users, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const WhyExcellence = () => {
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

  const features = [
    {
      title: 'Strong Academic System',
      icon: BookCheck,
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      description: 'Excellence International School follows a structured and well-planned academic approach to ensure effective learning.',
      points: ['Well-planned daily lessons', 'Concept-focused teaching', 'Regular revision sessions', 'Periodic assessments', 'Continuous monitoring'],
    },
    {
      title: 'Concept-Based Learning',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      description: 'Education focuses on understanding concepts rather than memorizing information.',
      points: ['Analytical thinking', 'Problem-solving abilities', 'Logical reasoning', 'Practical knowledge', 'Real-world application'],
    },
    {
      title: 'Experienced Faculty',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      description: 'Teachers are qualified, experienced, and committed to providing quality education.',
      points: ['Interactive discussions', 'Activity-based learning', 'Real-life examples', 'Student participation', 'Technology-supported learning'],
    },
    {
      title: 'Safe & Secure Campus',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      description: 'A secure learning environment helps students focus on their education and development.',
      points: ['CCTV monitoring', 'Supervised areas', 'Discipline policies', 'Staff supervision', 'Safe entry systems'],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Excellence International School
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what makes us the best school in Aligarh
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    {/* Image Placeholder */}
                    <div className={`aspect-video bg-gradient-to-br ${feature.color} rounded-xl mb-6 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                          <div className="w-20 h-20 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Icon size={40} />
                          </div>
                          <p className="text-sm font-medium">Feature Image</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-14 h-14 ${feature.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon className={feature.iconColor} size={28} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className={`${feature.iconColor} mr-3 mt-1`}>✓</span>
                          <span>{point}</span>
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

export default WhyExcellence;