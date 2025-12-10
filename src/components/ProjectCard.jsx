import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ title, tags, description, image, links, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-all group h-full flex flex-col"
        >
            <div className="relative overflow-hidden h-48">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {links.demo && (
                        <a
                            href={links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-cyan-500 rounded-full text-black hover:bg-cyan-400 transition-colors"
                            title="View Live"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                    {links.code && (
                        <a
                            href={links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-black hover:bg-gray-200 transition-colors"
                            title="View Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-200 dark:border-white/5">
                    {links.demo && (
                        <a href={links.demo} className="text-sm text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-white flex items-center gap-1">
                            <ExternalLink size={14} /> Live Demo
                        </a>
                    )}
                    {links.code && (
                        <a href={links.code} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1">
                            <Code size={14} /> Source Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
