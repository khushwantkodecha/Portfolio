import React from 'react';
import Section from '../ui/Section';
import { experience } from '../../data/experience';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <Section id="experience">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Experience</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Over 6 years of professional software engineering experience in various domains.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

                <div className="space-y-12">
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-2 h-2 rounded-full bg-indigo-600 ring-4 ring-white dark:ring-zinc-950" />

                            <div className="md:w-1/2">
                                <div className={`p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm transition-all hover:border-indigo-500/50 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                    }`}>
                                    <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full mb-3">
                                        {item.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{item.role}</h3>
                                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-3">{item.company}</p>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
