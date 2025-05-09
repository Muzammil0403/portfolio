import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Globe } from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            icon: Code2,
            title: 'Web Development',
            description: 'Building responsive and performant web applications using modern technologies.',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
        },
        {
            icon: Globe,
            title: 'Full Stack Solutions',
            description: 'End-to-end development from database design to front-end implementation.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-lg text-gray-600">
                    Enthusiastic and detail-oriented frontend developer with hands-on experience in building responsive web applications using React.js, TypeScript, and Tailwind CSS. Demonstrated ability to deliver real-time, scalable interfaces through project-based learning and internships. Strong in problem-solving, UI design, and collaboration. Passionate about building impactful user experiences and growing in high-performance environments like Google.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-gray-50 rounded-lg p-6 text-center"
                        >
                            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                                <service.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;