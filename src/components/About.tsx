import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      icon: Code2,
      title: 'SDET Training Program',
      description: 'QSpiders, Basavanagudi',
    },
    {
      icon: Palette,
      title: 'TCS iON NQT 2025',
      description:
        'Assessed in aptitude, logical reasoning, and programming skills',
    },
  ];

  const education = [
    {
      icon: GraduationCap,
      title: 'BCA – Bengaluru North University',
      description: '2024 | CGPA: 7.46',
    },
    {
      icon: GraduationCap,
      title: 'PUC (EBACS)',
      description: '2021',
    },
    {
      icon: GraduationCap,
      title: 'SSLC',
      description: '2019',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Me */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            I’m a passionate Software Test Engineer who enjoys breaking
            applications to make them better. With experience in both Manual
            and Automation Testing, I focus on delivering reliable and
            high-quality software.
            <br />
            <br />
            I work with Selenium, Python, and PyTest, and I actively participate
            in Agile Scrum teams to ensure smooth releases and bug-free
            applications.
          </p>
        </motion.div>

        {/* Certification */}
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Certification
        </h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <h2 className="text-4xl font-bold text-gray-900 mt-20 mb-10 text-center">
          Education
        </h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                  <item.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
