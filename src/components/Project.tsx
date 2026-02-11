import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Web Application',
      description:
        'Comprehensive manual testing project involving requirement analysis, test case design, and execution of functional, smoke, and regression testing cycles.',
      image:
        'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
      tech: ['Manual Testing', 'Test Cases', 'Regression'],
    },
    {
      title: 'Gym Management System',
      description:
        'Web-based system for managing members, trainers, schedules, and secure data handling with real-time updates.',
      image:
        'https://5.imimg.com/data5/AH/BM/YS/SELLER-96796771/gym-management-software-500x500.png',
      tech: ['Testing', 'Requirement Analysis'],
    },
  ];

  const experiences = [
    {
      role: 'AIML Test Engineer / Software Test Engineer',
      company: 'Alto AI',
      location: 'Bangalore, India',
      type: 'Intern',
      points: [
        'Designed and executed Manual and Automation Test Cases using Selenium WebDriver with Python & PyTest',
        'Performed Smoke, Sanity, Functional, Integration, System, and Regression Testing',
        'Built and maintained automated regression suites using reusable components',
        'Logged and tracked defects in Jira and followed complete defect life cycle',
        'Collaborated with developers for root cause analysis and fix verification',
        'Participated in Agile Scrum ceremonies and prepared QA documentation',
      ],
    },
    {
      role: 'Software Test Engineer Trainee',
      company: 'Q-Spiders',
      location: 'Basavanagudi',
      type: 'Training',
      points: [
        'Developed automation scripts using Selenium, Python, and PyTest',
        'Designed a test automation framework reducing regression execution time by ~60%',
        'Performed manual and automation test cycles, defect reporting, and re-testing',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* PROJECTS */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manual Testing Projects & Academic Projects showcasing my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Internship Experience
          </h2>
          <p className="text-lg text-gray-600">
            Hands-on experience in Manual & Automation Testing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-500"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-xs px-3 py-1 bg-teal-100 text-teal-700 rounded-full">
                  {exp.type}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-4">
                {exp.company} · {exp.location}
              </p>

              <ul className="space-y-2 text-gray-600 text-sm list-disc pl-5">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
