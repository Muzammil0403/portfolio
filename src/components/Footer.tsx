import React from 'react';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-white py-12 relative border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          {/* QA Tagline */}
          <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Ensuring Quality, Reliability & Bug-Free Software
          </p>

          {/* Job Role */}
          <p className="text-sm text-gray-400 mb-6">
            Open to Software Test Engineer / QA Automation Roles
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-6">
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a> */}

            <a
              href="https://www.linkedin.com/in/hemanth-kumar-492673326/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:mdmuzammil4303@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Hemanth Kumar N. All rights reserved.
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="absolute right-6 bottom-6 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full shadow-lg transition"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
