import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SkillsType = {
  [category: string]: string[];
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: SkillsType = {
    'Testing Types': [
      'Manual Testing',
      'Automation Testing',
      'Smoke Testing',
      'Sanity Testing',
      'Functional Testing',
      'Integration Testing',
      'System Testing',
      'Regression Testing',
    ],

    'Automation Tools': [
      'Selenium WebDriver',
      'Python',
      'PyTest',
      'Test Automation Framework',
      'Data Driven Testing',
      'Dynamic Locators',
      'Page Object Model',
      'Assertions',
    ],

    'Testing Concepts': [
      'SDLC',
      'STLC',
      'Test Planning',
      'Test Case Design',
      'Test Execution',
      'Defect Life Cycle',
      'Severity & Priority',
    ],

    'Technical & Process': [
      'Python (Core, OOPS)',
      'SQL (CRUD, Joins)',
      'Jira',
      'GitHub',
      'Agile',
      'Scrum',
    ],
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I specialize in Manual and Automation Testing with strong knowledge of
            QA processes and test automation frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
