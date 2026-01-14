import React from 'react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { projects } from '../../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <Section id="projects" className="bg-zinc-50 dark:bg-zinc-950/50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Featured Projects</h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A selection of my recent work, ranging from enterprise dashboards to scalable microservices.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="flex flex-col h-full overflow-hidden p-0 border-zinc-200 dark:border-zinc-800">
                            <div className="relative aspect-video overflow-hidden group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white dark:bg-zinc-900 rounded-full text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white dark:bg-zinc-900 rounded-full text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold uppercase tracking-wider rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
