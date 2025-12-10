import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ResearchPaper from '../components/ResearchPaper';

const Home = () => {
    // Featured projects (first 3)
    const featuredProjects = [
        {
            title: "AI-Interviewer Platform",
            tags: ["Next.js", "FastAPI", "OpenAI+Gemini", "Redis"],
            description: "Enterprise-grade conversational AI interview platform with Next.js 15 frontend, FastAPI microservices, and multimodal processing, reducing screening time by 70%.",
            image: "/assets/img/projects/LLM.png",
            links: {
                code: "https://github.com/Anik81"
            }
        },
        {
            title: "CV-Sorter AI Platform",
            tags: ["FastAPI", "OpenAI APIs", "MySQL", "AWS S3"],
            description: "AI-powered CV screening platform with async batch processing, intelligent candidate ranking, and real-time job tracking analytics, reducing manual review time by 80%.",
            image: "/assets/img/projects/webchat1.png",
            links: {
                code: "https://github.com/Anik81"
            }
        },
        {
            title: "LLM Fine-tuning for Text-to-SQL",
            tags: ["Meta-LLaMA 3.1", "QLoRA", "HuggingFace"],
            description: "Fine-tuned 8B parameter model using QLoRA with 4-bit quantization, achieving 85.48% exact match accuracy on SQL generation for ERP databases.",
            image: "/assets/img/projects/LLM.png",
            links: {
                demo: "https://huggingface.co/tranik/FineTuned-LLma3.1-text2sql"
            }
        }
    ];

    // Featured research (first 3)
    const featuredResearch = [
        {
            type: "Journal Paper",
            title: "A Systematic Review of Diffusion Models in Medical Imaging: Architectures, Taxonomies, Challenges, and Future Directions",
            abstract: "Systematic review of 68 studies on diffusion models in medical imaging and health informatics, analyzing model architectures, clinical applications, and explainability frameworks. (Under Peer Review - International Journal of Computer Vision)",
            link: "/research/diffusion-models"
        },
        {
            type: "Journal Paper",
            title: "Automated Diagnosis of Knee Osteoarthritis: A Stacked Ensemble Deep Learning Approach with Explainable AI Techniques",
            abstract: "Developed a stacked ensemble model combining Xception, EfficientNetB5, and InceptionV3 with explainable AI techniques, achieving 96.93% accuracy in multi-class classification. (IEEE Access)",
            link: "/research/koa-diagnosis"
        },
        {
            type: "Conference Paper",
            title: "Analysis of Automated Skin Disease Classification Exploiting Different Machine Learning Techniques",
            abstract: "One of the most serious and prevalent diseases in the world is skin disease. Due to the intricacy of humans' tone and texture and the visible proximity impact of the disorders, it can be quite difficult to pinpoint the exact type of condition at times. This paper presents a comprehensive analysis of various machine learning techniques for automated skin disease classification.",
            link: "/research/skin-disease"
        }
    ];

    return (
        <div>
            <Hero />

            {/* About Preview Section */}
            <section className="py-20 bg-gray-50 dark:bg-zinc-900/50">
                <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1920px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                I'm a Machine Learning Engineer at Interactive Cares and a Research Assistant specializing in Medical Image Analysis,
                                Explainable AI, and Multimodal Learning. My work focuses on developing intelligent healthcare systems and advancing
                                the field of AI-driven medical diagnostics.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                With expertise in Deep Learning, Natural Language Processing, and Generative AI, I bridge the gap between
                                cutting-edge research and practical applications in healthcare and enterprise solutions.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-mono group">
                                Read full bio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-colors">
                                <Brain className="w-8 h-8 text-purple-500 mb-4" />
                                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Machine Learning</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-500">Deep Learning, Neural Networks</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-colors">
                                <Code className="w-8 h-8 text-cyan-500 mb-4" />
                                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Development</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-500">Python, React, Full Stack</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-colors">
                                <Database className="w-8 h-8 text-green-500 mb-4" />
                                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Data Science</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-500">Analytics, Visualization</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-colors">
                                <Brain className="w-8 h-8 text-pink-500 mb-4" />
                                <h3 className="text-gray-900 dark:text-white font-bold mb-2">Research</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-500">Medical AI, XAI</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Research Section */}
            <section className="py-20 bg-white dark:bg-black">
                <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                    <div className="max-w-[1920px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Research</h2>
                                    <p className="text-gray-600 dark:text-gray-400">Recent publications in AI and Healthcare</p>
                                </div>
                                <Link
                                    to="/research"
                                    className="hidden md:flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-mono group"
                                >
                                    View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {featuredResearch.map((paper, index) => (
                                <ResearchPaper key={index} {...paper} delay={index * 0.1} />
                            ))}
                        </div>

                        <div className="text-center md:hidden">
                            <Link
                                to="/research"
                                className="inline-flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-mono group"
                            >
                                View All Research <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-20 bg-gray-50 dark:bg-zinc-900/50">
                <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                    <div className="max-w-[1920px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Projects</h2>
                                    <p className="text-gray-600 dark:text-gray-400">Showcasing my latest work in ML and Web Development</p>
                                </div>
                                <Link
                                    to="/projects"
                                    className="hidden md:flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-mono group"
                                >
                                    View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            {featuredProjects.map((project, index) => (
                                <ProjectCard key={index} {...project} delay={index * 0.1} />
                            ))}
                        </div>

                        <div className="text-center md:hidden">
                            <Link
                                to="/projects"
                                className="inline-flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-mono group"
                            >
                                View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
