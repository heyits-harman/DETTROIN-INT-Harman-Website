import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQSection = () => {
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

  const faqs = [
    {
      question: 'Where is Excellence International School located?',
      answer: 'Excellence International School is located in Aligarh and provides quality education in a supportive learning environment.',
    },
    {
      question: 'Which classes are available for admission?',
      answer: 'Admissions are available for multiple academic levels depending on seat availability.',
    },
    {
      question: 'Does the school provide extracurricular activities?',
      answer: 'Yes, students participate in sports, cultural activities, arts, and personality development programs.',
    },
    {
      question: 'Is transportation available for students?',
      answer: 'Yes, the school offers safe and convenient transportation facilities with well-maintained buses and experienced drivers.',
    },
    {
      question: 'What makes Excellence International School one of the best schools in Aligarh?',
      answer: 'The school focuses on academic excellence, modern teaching methods, student development, and value-based education.',
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our school
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;