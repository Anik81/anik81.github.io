import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Code2, Sparkles, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import ResearchPaper from '../components/ResearchPaper';

const Home = () => {
    // Featured projects (first 3)
    const featuredProjects = [
        {
            title: "NewsDocument-Classifier",
            tags: ["PyTorch", "Bi-LSTM", "GloVe", "Multi-Head Attention"],
            description: "Hierarchical Attention Network for multi-class text classification with dual-stage attention, residual connections, and a gating mechanism.",
            image: "/assets/img/projects/gen/news-classifier.svg",
            links: {
                code: "https://github.com/Anik81/News-Document-Classifier"
            }
        },
        {
            title: "2D-to-3D Model Generator",
            tags: ["Python", "PyTorch", "Transformers", "Computer Vision"],
            description: "Converts 2D images into 3D models using Stability AI's TripoSR with automated mesh generation and .glb model export.",
            image: "/assets/img/projects/gen/2d-to-3d.svg",
            links: {
                code: "https://github.com/anik81/2D-Image-to-3D-model-Generator"
            }
        },
        {
            title: "Knee Osteoarthritis Severity Prediction",
            tags: ["TensorFlow", "Keras", "OpenCV", "Explainable AI"],
            description: "Stacked ensemble model for KOA classification from X-rays with explainability via Grad-CAM, Score-CAM, and LIME, reaching 96.93% multi-class accuracy.",
            image: "/assets/img/publication/KOA_display.jpg",
            links: {
                demo: "https://ieeexplore.ieee.org/document/11239041",
                code: "https://github.com/Anik81/KOA-Diagnosis-and-Severity-Prediction"
            }
        }
    ];

    // Capability cards
    const capabilities = [
        {
            icon: Code2,
            color: "text-cyan-500",
            title: "Software Engineering",
            desc: "Production backends and full-stack systems built to scale and stay secure.",
            tags: ["FastAPI", "Django", "Next.js", "Microservices", "PostgreSQL", "Redis", "Docker", "AWS", "CI/CD"]
        },
        {
            icon: Sparkles,
            color: "text-purple-500",
            title: "LLM & Generative AI",
            desc: "Shipping LLM-powered products, from retrieval to agents to fine-tuned models.",
            tags: ["RAG", "LangChain", "LangGraph Agents", "Fine-tuning (QLoRA)", "Text-to-SQL", "Vector DBs", "Evaluation & Tracing"]
        },
        {
            icon: Brain,
            color: "text-green-500",
            title: "Machine Learning",
            desc: "Deep learning for vision and language, with a focus on robustness.",
            tags: ["Deep Learning", "CNNs", "Transformers", "Transfer Learning", "Ensemble Learning", "PyTorch", "TensorFlow"]
        },
        {
            icon: FlaskConical,
            color: "text-pink-500",
            title: "Research",
            desc: "Peer-reviewed work on trustworthy, explainable AI for healthcare.",
            tags: ["Medical Image Analysis", "Explainable AI (XAI)", "Diffusion Models", "Trustworthy AI", "NLP"]
        }
    ];

    // Featured research (first 3)
    const featuredResearch = [
        {
            type: "Journal Paper",
            title: "A Systematic Review of Diffusion Models for Medical Image-Based Diagnosis: Methods, Taxonomies, Clinical Integration, Explainability, and Future Directions",
            abstract: "Systematic review of 68 studies on diffusion models in medical imaging and health informatics, analyzing model architectures, clinical applications, and explainability frameworks, and proposing 10 evidence-based future research directions. (Published in Diagnostics, MDPI)",
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
                                I'm a Software Engineer at Shottify and an AI Research Collaborator with Jouf University. I build production-grade
                                AI and full-stack systems, including data pipelines, LLM/RAG applications, and secure backends, while researching
                                intelligent medical diagnostics.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                My work bridges applied engineering and research: designing Retrieval-Augmented Generation pipelines, fine-tuning
                                large language models, and engineering conversational AI, alongside deep learning research in Medical Image Analysis,
                                Explainable AI, and Multimodal Learning.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-cyan-300 font-mono group">
                                Read full bio <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {capabilities.map((cap, i) => {
                                const Icon = cap.icon;
                                return (
                                    <div key={i} className="p-6 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-colors flex flex-col">
                                        <Icon className={`w-8 h-8 ${cap.color} mb-4`} />
                                        <h3 className="text-gray-900 dark:text-white font-bold mb-2">{cap.title}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">{cap.desc}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-auto">
                                            {cap.tags.map((tag, j) => (
                                                <span key={j} className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
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
