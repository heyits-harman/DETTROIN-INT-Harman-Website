import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar } from './ui/avatar';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      name: 'Sanjay Patel',
      relation: 'Parent of Krish Patel, Class 6',
      text: 'The school gives my children a global view of the world. They learn about different cultures, teamwork, and respect while developing skills that prepare them for the future academically and personally.',
      avatar: 'SP',
    },
    {
      name: 'Anita Singh',
      relation: 'Parent of Aarohi Singh, Class 2',
      text: 'Excellence International School makes learning exciting with hands-on activities, group projects, and creative lessons. My child is developing critical thinking, confidence, and problem-solving skills.',
      avatar: 'AS',
    },
    {
      name: 'Kavita Agarwal',
      relation: 'Parent of Diya Agarwal, Class 1',
      text: 'The school not only focuses on academics but also builds strong values. My child is learning responsibility, honesty, respect, and teamwork while having fun and making friends.',
      avatar: 'KA',
    },
    {
      name: 'Rakesh Sharma',
      relation: 'Parent of Aarav Sharma, Class 5',
      text: 'Excellence International School has been amazing for my child. The teachers are caring, lessons are fun, and my child is growing in confidence, learning new skills, and enjoying school every day.',
      avatar: 'RS',
    },
    {
      name: 'Neha Verma',
      relation: 'Parent of Anaya Verma, Class 3',
      text: 'I love how safe and welcoming the school is. The staff know every student well, encourage them to do their best, and create a positive environment where learning and friendship thrive.',
      avatar: 'NV',
    },
    {
      name: 'Amit Gupta',
      relation: 'Parent of Vivaan Gupta, Class 7',
      text: 'My daughter enjoys learning, playing sports, and exploring her creativity here. The school balances academics with fun activities, helping children grow socially and emotionally.',
      avatar: 'AG',
    },
    {
      name: 'Pooja Mehta',
      relation: 'Parent of Riya Mehta, Class 4',
      text: 'Teachers at Excellence International School are patient, kind, and dedicated. They make sure every child understands lessons, encourage questions, and support students to reach their full potential.',
      avatar: 'PM',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Parents Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from the families who trust us with their children's education
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center mb-6">
                      <Quote className="text-blue-600" size={40} />
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.relation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;