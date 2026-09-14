import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, GraduationCap, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PHRASES = [
    'Software Engineer @ Shottify',
    'AI Research Collaborator',
    'LLM & RAG Engineer',
    'Medical AI Researcher',
];

const Hero = () => {
    const { theme } = useTheme();

    // Typewriter effect: type a phrase, pause, delete, move to the next.
    const [text, setText] = useState('');
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = PHRASES[phraseIdx];
        let timeout;

        if (!deleting) {
            if (text.length < current.length) {
                timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
            } else {
                timeout = setTimeout(() => setDeleting(true), 1800);
            }
        } else {
            if (text.length > 0) {
                timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
            } else {
                setDeleting(false);
                setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, phraseIdx]);

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background Gradient Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center max-w-[1920px] mx-auto">
                    {/* Left Side - Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-xl md:text-2xl text-purple-600 dark:text-cyan-400 font-mono">Hello, I'm</h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                            Tanvir Rahman Anik
                        </h1>

                        <div className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-mono min-h-[3.5rem] md:min-h-[2.5rem]">
                            <span>{text}</span>
                            <span className="border-r-2 border-purple-600 dark:border-cyan-400 animate-pulse ml-0.5">&#8203;</span>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl">
                            Building AI systems people can actually trust, from research to production.
                        </p>

                        <div className="flex gap-6 pt-4">
                            <a
                                href="https://github.com/Anik81"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-purple-600 dark:hover:border-cyan-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-all text-gray-700 dark:text-white"
                                aria-label="GitHub Profile"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/anik81-tra/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-purple-600 dark:hover:border-cyan-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-all text-gray-700 dark:text-white"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://scholar.google.com/citations?user=gAUo-O4AAAAJ&hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-purple-600 dark:hover:border-cyan-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-all text-gray-700 dark:text-white"
                                aria-label="Google Scholar Profile"
                            >
                                <GraduationCap size={24} />
                            </a>
                            <a
                                href="/assets/pdfs/CV_Tanvir_Rahman_Anik.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-purple-600 dark:hover:border-cyan-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-all text-gray-700 dark:text-white font-mono text-sm"
                                aria-label="Download CV"
                            >
                                <FileText size={20} /> Download CV
                            </a>
                            {/* <
                                href="https://www.researchgate.net/profile/Tanvir-Anik-7/research"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 hover:border-purple-600 dark:hover:border-cyan-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-all text-gray-700 dark:text-white"
                                aria-label="ResearchGate Profile"
                            >
                                <FileText size={24} />
                            </a> */}
                        </div>
                    </motion.div>

                    {/* Right Side - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
                            {/* Glowing border effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-75 animate-pulse"></div>

                            {/* Image container */}
                            <div className="relative bg-white dark:bg-black rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10">
                                <img
                                    src="/assets/img/profile-img.jpg"
                                    alt="Tanvir Rahman Anik"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
