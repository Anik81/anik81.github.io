import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "AI-Interviewer",
            tags: ["Next.js", "TypeScript", "FastAPI", "OpenAI+Gemini", "Redis", "Docker"],
            description: "Conversational interview platform with a microservices architecture and multimodal processing via OpenAI+Gemini APIs, reducing candidate screening time by 70%.",
            image: "/assets/img/projects/gen/ai-interviewer.svg",
            category: "AI/ML",
            links: {
                code: "https://github.com/Anik81/AI-Interviewer-Documentation"
            }
        },
        {
            title: "CV-Sorter",
            tags: ["FastAPI", "OpenAI APIs", "MySQL", "AWS S3"],
            description: "AI-powered CV screening platform with async batch processing and intelligent candidate ranking, scoring and ranking 500+ candidates in minutes.",
            image: "/assets/img/projects/gen/cv-sorter.svg",
            category: "AI/ML",
            links: {
                code: "https://github.com/Anik81/CV-Sorter-Documentation"
            }
        },
        {
            title: "2D-to-3D Model Generator",
            tags: ["Python", "PyTorch", "Transformers", "Computer Vision"],
            description: "Converts 2D images into 3D models using Stability AI's TripoSR with automated mesh generation and .glb model export.",
            image: "/assets/img/projects/gen/2d-to-3d.svg",
            category: "AI/ML",
            links: {
                code: "https://github.com/anik81/2D-Image-to-3D-model-Generator"
            }
        },
        {
            title: "NewsDocument-Classifier",
            tags: ["PyTorch", "Bi-LSTM", "GloVe", "Multi-Head Attention"],
            description: "Hierarchical Attention Network for multi-class text classification with dual-stage attention, residual connections, and a gating mechanism.",
            image: "/assets/img/projects/gen/news-classifier.svg",
            category: "AI/ML",
            links: {
                code: "https://github.com/Anik81/News-Document-Classifier"
            }
        },
        {
            title: "Fine Tuned LLaMA 3.1 (Text-to-SQL)",
            tags: ["Meta-LLaMA 3.1", "QLoRA", "HuggingFace"],
            description: "Fine-tuned an 8B parameter model using QLoRA with 4-bit quantization, achieving 85.48% exact match accuracy on text-to-SQL generation for ERP databases.",
            image: "/assets/img/projects/gen/llama-text2sql.svg",
            category: "AI/ML",
            links: {
                demo: "https://huggingface.co/tranik/FineTuned-LLma3.1-text2sql",
                code: "https://huggingface.co/tranik/FineTuned-LLma3.1-text2sql"
            }
        },
        {
            title: "Odoo-Copilot",
            tags: ["Django", "OpenAI Assistants API", "LangChain", "ChromaDB"],
            description: "Agentic ERP chatbot enabling natural-language queries and workflow automation through multi-LLM orchestration.",
            image: "/assets/img/projects/gen/odoo-copilot.svg",
            category: "AI/ML",
            links: {
                demo: "https://www.youtube.com/watch?v=IZPemPdBVHs"
            }
        },
        {
            title: "Acumen HelpBot",
            tags: ["Django", "ChromaDB", "Sentence Transformers"],
            description: "RAG-based chatbot with vector search and embeddings-based retrieval for document Q&A, streamlining inventory and financial tasks for book publishers.",
            image: "/assets/img/projects/Acumen1.png",
            category: "AI/ML",
            links: {
                demo: "https://acumen-help.bistasolutions.com/chatbot"
            }
        },
        {
            title: "Knee Osteoarthritis Severity Prediction",
            tags: ["TensorFlow", "Keras", "OpenCV", "Explainable AI"],
            description: "Stacked ensemble model for KOA classification from X-rays with explainability via Grad-CAM, Score-CAM, and LIME, reaching 96.93% multi-class accuracy.",
            image: "/assets/img/publication/KOA_display.jpg",
            category: "AI/ML",
            links: {
                demo: "https://ieeexplore.ieee.org/document/11239041",
                code: "https://github.com/Anik81/KOA-Diagnosis-and-Severity-Prediction"
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
                                    className={`px-4 py-2 rounded-full font-mono text-sm transition-all border ${filter === cat
                                        ? 'bg-purple-600 text-white border-purple-600 dark:bg-cyan-500 dark:text-black dark:border-cyan-500 font-bold'
                                        : 'bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:border-white/5 dark:hover:bg-white/10'
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
