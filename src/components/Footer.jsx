import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                EIS
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Excellence International</span>
                <span className="text-xs text-gray-400">School, Aligarh</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Shaping future leaders through quality education, discipline, and holistic development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#academics" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Academics
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6">Academic Programs</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Pre-Primary School</li>
              <li className="text-gray-400">Primary School</li>
              <li className="text-gray-400">Middle School</li>
              <li className="text-gray-400">Daycare Facility</li>
              <li className="text-gray-400">Sports & Activities</li>
              <li className="text-gray-400">Cultural Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  Excellence International School<br />
                  Aligarh, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  +91 12345 67890<br />
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  info@excellenceschool.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Excellence International School, Aligarh. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with excellence for future leaders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;