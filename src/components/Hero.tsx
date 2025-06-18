import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-pink-900/30 z-0" />

      {/* Enhanced Header with responsive navigation */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 z-20 bg-gray-900/50 backdrop-blur-md">
        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-white text-sm font-medium hover:text-purple-300 transition-all duration-300">Home</a>
          <a href="#projects" className="text-white text-sm font-medium hover:text-purple-300 transition-all duration-300">Projects</a>
          <a href="#skills" className="text-white text-sm font-medium hover:text-purple-300 transition-all duration-300">Skills</a>
          <a href="#contact" className="text-white text-sm font-medium hover:text-purple-300 transition-all duration-300">Contact</a>
        </nav>

        {/* Hamburger button for smaller screens */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </button>

        {/* Email and profile picture */}
        <div className="flex items-center gap-4">
          <p className="text-white text-sm hidden sm:block">mdmuzammil4303@gmail.com</p>
          <img
            onClick={() => setShowPopup(true)}
            src="/images/f148a4ac-84e0-4d74-81f3-1d9f16b5517a.jpeg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isSidebarOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-800/90 backdrop-blur-md z-30 flex flex-col p-6 md:hidden"
      >
        <button className="self-end text-white mb-6 focus:outline-none" onClick={toggleSidebar}>
          <X className="h-6 w-6" />
        </button>
        <nav className="flex flex-col space-y-4">
          <a
            href="#home"
            className="text-white text-lg font-medium hover:text-purple-300 transition-all duration-300"
            onClick={toggleSidebar}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-white text-lg font-medium hover:text-purple-300 transition-all duration-300"
            onClick={toggleSidebar}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-white text-lg font-medium hover:text-purple-300 transition-all duration-300"
            onClick={toggleSidebar}
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-white text-lg font-medium hover:text-purple-300 transition-all duration-300"
            onClick={toggleSidebar}
          >
            Contact
          </a>
        </nav>
      </motion.div>

      {/* Popup with full image */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-30">
          <div className="rounded-lg p-4 shadow-lg relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-white hover:text-red-500 text-xl"
            >
              ×
            </button>
            <img
              src="/images/f148a4ac-84e0-4d74-81f3-1d9f16b5517a.jpeg"
              alt="Profile Large"
              className="w-[400px] h-[400px] object-cover rounded-full"
            />
          </div>
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4"
          >
            Mohammed Muzammil
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 font-light"
          >
            BCA Graduate | Full Stack Developer
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/mdmuzammil0405/" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://mail.google.com/"
              className="p-3 bg-gray-800/50 rounded-full text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12"
          >
            <a href="#about" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;