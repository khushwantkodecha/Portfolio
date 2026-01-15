import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
    const words = [
        "matter.",
        "scale.",
        "inspire.",
        "succeed.",
        "perform.",
        "convert.",
        "impact.",
        "grow.",
        "ship.",
        "evolve.",
        "innovate.",
        "lead.",
        "optimize.",
        "deliver.",
        "transform."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2300);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        index == words.length && setIndex(0);
    }, [index])

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-zinc-50 dark:bg-zinc-950">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-50 dark:opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 border border-indigo-200 dark:border-indigo-800">
                        Available for freelance & full-time roles
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
                        Building digital products that
                        <div className="h-20 md:h-24 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={words[index]}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -50, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="block text-indigo-600 dark:text-indigo-500 mt-2"
                                >
                                    {words[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
                        Senior Full Stack Developer specializing in the MERN stack, building accessible, pixel-perfect, and high-performance web applications
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Projects
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6">
                        {[
                            { icon: Github, href: "https://github.com/khushwantkodecha" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/khushwant-kodecha/" },
                            { icon: Mail, href: "mailto:khush.kodecha@gmail.com" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <social.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
