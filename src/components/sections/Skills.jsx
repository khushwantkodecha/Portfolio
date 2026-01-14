import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { skills } from '../../data/skills';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <Section id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Technical Proficiency</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills and tools I use to build robust applications.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <Card className="h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                                    <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <h3 className="font-bold text-lg text-zinc-900 dark:text-white">{skill.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium border border-zinc-200 dark:border-zinc-700"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
