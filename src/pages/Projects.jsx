import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "Fine Tuned LLaMA 3.1",
            tags: ["LLM", "SQL", "NLP", "Python"],
            description: "Fine-tuned LLaMA 3.1 8B on a custom dataset of natural language and SQL queries to improve text-to-SQL generation.",
            image: "/assets/img/projects/LLM.png",
            category: "AI/ML",
            links: {
                demo: "https://huggingface.co/tranik/FineTuned-LLma3.1-text2sql",
                code: "https://huggingface.co/tranik/FineTuned-LLma3.1-text2sql"
            }
        },
        {
            title: "Django Chatbot",
            tags: ["Python", "Django", "GPT-3.5"],
            description: "A Django web application incorporating OpenAI's GPT-3.5 for real-time natural language communication.",
            image: "/assets/img/projects/webchat1.png",
            category: "Web App",
            links: {
                code: "https://github.com/Anik81/Django-Chatbot"
            }
        },
        {
            title: "Acumen HelpBot",
            tags: ["Official", "Chatbot", "Business Logic"],
            description: "Customizable business management software chatbot for book publishers, streamlining inventory and financial tasks.",
            image: "/assets/img/projects/Acumen1.png",
            category: "AI/ML",
            links: {
                demo: "https://acumen-help.bistasolutions.com/chatbot"
            }
        },
        {
            title: "Tech Review Point",
            tags: ["ASP.NET", "C#", "MSSQL", "Bootstrap"],
            description: "A web application for sharing feedback and reviews of tech products with an integrated community platform.",
            image: "/assets/img/projects/trpoint.png",
            category: "Web App",
            links: {
                demo: "https://www.youtube.com/watch?v=ABr4bxwFmVA",
                code: "https://github.com/ptsourav21/TechReviewPoint"
            }
        },
        {
            title: "Smartphone Lagbe",
            tags: ["SQL", "Oracle", "Database"],
            description: "Distributed database system allowing users to search for smartphones within budget using complex SQL triggers.",
            image: "/assets/img/projects/smartphonelagbe.jpg",
            category: "Database",
            links: {
                code: "https://github.com/Anik81/Smartphone-Lagbe-"
            }
        },
        {
            title: "MedStore",
            tags: ["PHP", "HTML", "MSSQL"],
            description: "Online medical store handling user registration, product search, and secure transactions.",
            image: "/assets/img/projects/medstore.png",
            category: "Web App",
            links: {
                code: "https://github.com/Anik81/MedStore.git"
            }
        }
    ];

    const categories = ["All", "AI/ML", "Web App", "Database"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="bg-white dark:bg-black min-h-screen py-20 transition-colors duration-300">
            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">Featured Projects</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
                            A collection of my work in Machine Learning, Web Development, and Database Systems.
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${filter === cat
                                        ? 'bg-cyan-500 text-black font-bold'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                {...project}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
