import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const EnquiryForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: 'Enquiry Submitted!',
      description: 'Thank you for your interest. We will contact you soon.',
    });
    setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
  };

  const grades = [
    'Play Group',
    'Nursery',
    'Kindergarten',
    'Daycare',
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            Admissions Open for 2026-2027. Contact us today to secure your child's future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-white/90 leading-relaxed mb-8">
                  Reach out to us for admissions, queries, or to schedule a campus visit. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-white/90">+91 12345 67890</p>
                      <p className="text-white/90">+91 98765 43210</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-white/90">info@excellenceschool.com</p>
                      <p className="text-white/90">admissions@excellenceschool.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Address</h4>
                      <p className="text-white/90">Excellence International School</p>
                      <p className="text-white/90">Aligarh, Uttar Pradesh, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <Card className="bg-white shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Enquiry</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Grade *
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a grade</option>
                      {grades.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any specific queries or requirements..."
                      rows={4}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold transition-all duration-300 hover:shadow-xl"
                  >
                    Submit Enquiry
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;