import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Code2, Database, Brain, Terminal, FileText } from 'lucide-react';

const About = () => {
    const experiences = [
        {
            role: "Machine Learning Engineer",
            company: "Interactive Cares",
            location: "Dhaka, Bangladesh",
            period: "May 2025 - Present",
            description: [
                "Developed an enterprise-grade conversational AI interview platform with Next.js App Router (SSR, WebRTC recording), FastAPI backend, role-based authentication, state management (Zustand, React Query), and multimodal AI processing via OpenAI+Gemini with Redis caching, reducing screening time by 70%.",
                "Built a scalable CV screening platform leveraging FastAPI microservices, OpenAI Assistant APIs with rate limiting controls, and intelligent batch processing, automatically scoring and ranking 500+ candidates while reducing manual review time by 80%.",
                "Implemented a job recommendation and resume optimization module with a Flask-based backend, retrieving the most relevant job matches for each candidate and generating embedding-based feedback to improve semantic alignment between CV content and job descriptions."
            ]
        },
        {
            role: "Research Assistant",
            company: "College of Computer and Information Sciences, Jouf University",
            location: "Saudi Arabia (Remote)",
            period: "November 2024 - Present",
            description: [
                "Conducted a systematic review of 68 studies on diffusion models in medical imaging and health informatics. Analyzed model architectures, clinical applications, and explainability frameworks; identified gaps in XAI adoption (22%) and clinician collaboration (57%). Also contributed 10 evidence-based future research recommendations for the field.",
                "Developed a stacked ensemble model for knee osteoarthritis diagnosis combining pre-trained transfer learning models (Xception, EfficientNetB5, and InceptionV3) with explainable AI techniques (Grad-CAM, Faster Score-CAM, LIME), achieving 96.93% accuracy in multi-class classification and 86.29% accuracy in binary classification.",
                "Contributed to a review article on deep learning applications in knee osteoarthritis imaging, analyzing pre-processing techniques, model architectures, and explainable AI frameworks."
            ]
        },
        {
            role: "Machine Learning Engineer",
            company: "Bista Solutions Inc.",
            location: "Dhaka, Bangladesh",
            period: "July 2023 - April 2025",
            description: [
                "Fine-tuned Meta-LLaMA 3.1 (8B) using QLoRA with 4-bit quantization, achieving 85.48% exact match accuracy on text-to-SQL generation for ERP databases; demonstrating expertise in high-performance computation and large model optimization.",
                "Architected and deployed Retrieval-Augmented Generation (RAG) pipelines using Django, LangChain, and ChromaDB, integrating embeddings, vector databases, and retrieval workflows to automate ERP tasks such as inventory, order, and finance management.",
                "Developed and integrated LSTM-based forecasting modules (R² = 0.87) for sales trend prediction and business analytics within Odoo's Copilot dashboards, improving inventory planning and decision-making efficiency.",
                "Executed end-to-end data extraction and automation workflows for PDF and image invoices including annotation, preprocessing, model training, and evaluation; ensuring robust vendor data processing pipelines."
            ]
        },
        {
            role: "Instructor",
            company: "Aid Academy, Science Coaching Center",
            location: "Dhaka, Bangladesh",
            period: "2018 - 2022",
            description: [
                "Delivered structured lectures in biology and chemistry to high school and college students.",
                "Provided personal academic assistance and guidance to students preparing for board exams.",
                "Designed curricula, created exam materials, conducted assessments, and evaluated student performance."
            ]
        }
    ];

    const education = [
        {
            degree: "B.Sc in Computer Science & Engineering",
            school: "Ahsanullah University of Science & Technology",
            location: "Dhaka, Bangladesh",
            period: "April 2018 - January 2023",
            details: "Relevant Courses: AI, Algorithms, Database, Software Engineering."
        },
        {
            degree: "Higher Secondary Certificate",
            school: "Dhaka College",
            location: "Dhaka, Bangladesh",
            period: "August 2015 - June 2017",
            details: "GPA: 5.00/5.00"
        }
    ];

    const skills = [
        { category: "Languages", items: ["Python", "C", "C++", "Java", "SQL", "HTML", "CSS", "JavaScript"] },
        { category: "Generative AI & LLM", items: ["LangChain", "LangSmith", "HuggingFace Transformers", "OpenAI APIs", "RAG", "Vector databases"] },
        { category: "ML/AI Frameworks", items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV", "Transformers", "FastAPI", "Django", "Flask"] },
        { category: "Databases", items: ["MySQL", "PostgreSQL", "Oracle", "ChromaDB"] },
        { category: "Cloud & DevOps", items: ["Git/GitHub", "Docker", "CI/CD Pipelines", "Nginx", "AWS", "Linux"] }
    ];

    return (
        <div className="bg-white dark:bg-black min-h-screen py-20 transition-colors duration-300">
            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-[1920px] mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">About Me</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            I am a Machine Learning Engineer and Research Assistant specializing in AI-driven solutions.
                            My expertise spans Medical Image Analysis, Explainable AI, Multimodal Learning, Generative AI, and Natural Language Processing.
                            Currently working at Interactive Cares developing conversational AI platforms, while conducting research at Jouf University on diffusion models and knee osteoarthritis diagnosis.
                        </p>
                    </motion.div>

                    {/* Experience Section */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-mono text-purple-600 dark:text-cyan-400 mb-8 flex items-center gap-2">
                            <Briefcase size={24} /> Professional Experience
                        </h2>
                        <div className="space-y-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/30 transition-colors"
                                >
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                            <p className="text-purple-600 dark:text-purple-400 font-mono">{exp.company}</p>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-500 font-mono text-sm mt-2 md:mt-0 text-right">
                                            <div className="flex items-center gap-2 justify-end">
                                                <Calendar size={14} /> {exp.period}
                                            </div>
                                            <div className="flex items-center gap-2 justify-end mt-1">
                                                <MapPin size={14} /> {exp.location}
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-400">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Education Section */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-mono text-purple-600 dark:text-cyan-400 mb-8 flex items-center gap-2">
                            <GraduationCap size={24} /> Education
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                                    <p className="text-purple-600 dark:text-purple-400 mb-2">{edu.school}</p>
                                    <p className="text-gray-600 dark:text-gray-500 text-sm mb-4">{edu.period} | {edu.location}</p>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm">{edu.details}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Standardized Tests Section */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-mono text-purple-600 dark:text-cyan-400 mb-8 flex items-center gap-2">
                            <FileText size={24} /> Standardized Tests
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 max-w-md"
                        >
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">IELTS (December 2024)</h3>
                            <p className="text-purple-600 dark:text-purple-400 mb-4">Overall Score: 7.0</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-gray-700 dark:text-gray-400">Listening:</span>
                                    <span className="text-cyan-600 dark:text-cyan-300 ml-2 font-mono">8.0</span>
                                </div>
                                <div>
                                    <span className="text-gray-700 dark:text-gray-400">Reading:</span>
                                    <span className="text-cyan-600 dark:text-cyan-300 ml-2 font-mono">6.0</span>
                                </div>
                                <div>
                                    <span className="text-gray-700 dark:text-gray-400">Writing:</span>
                                    <span className="text-cyan-600 dark:text-cyan-300 ml-2 font-mono">7.0</span>
                                </div>
                                <div>
                                    <span className="text-gray-700 dark:text-gray-400">Speaking:</span>
                                    <span className="text-cyan-600 dark:text-cyan-300 ml-2 font-mono">6.5</span>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Skills Section */}
                    <section>
                        <h2 className="text-2xl font-mono text-purple-600 dark:text-cyan-400 mb-8 flex items-center gap-2">
                            <Terminal size={24} /> Technical Skills
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {skills.map((skillGroup, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-gray-200 dark:border-white/5"
                                >
                                    <h3 className="text-gray-900 dark:text-white font-bold mb-4 border-b border-gray-200 dark:border-white/10 pb-2">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-white/5 text-purple-600 dark:text-cyan-300 text-xs rounded-full font-mono border border-purple-200 dark:border-cyan-500/20">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default About;
