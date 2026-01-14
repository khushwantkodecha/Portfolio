import React from 'react';
import Section from '../ui/Section';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <Section id="about" className="bg-white dark:bg-zinc-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="space-y-4 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                        <p>
                            I am a results-driven Senior Full Stack Developer with over 6 years of experience building high-performance web applications. My journey started with a curiosity for how things work on the web, which evolved into a passion for creating seamless user experiences.
                        </p>
                        <p>
                            I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) but I'm always exploring new technologies to solve problems more efficiently. I pride myself on writing clean, maintainable code and architecting scalable solutions.
                        </p>
                        <p>
                            When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring the latest trends in UI/UX design.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {[
                        { label: "Years Experience", value: "6+" },
                        { label: "Projects Completed", value: "50+" },
                        { label: "Companies Worked", value: "3" },
                        { label: "Happy Clients", value: "100%" }
                    ].map((stat, index) => (
                        <div key={index} className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                            <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default About;
