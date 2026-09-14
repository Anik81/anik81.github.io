import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchPaper = ({ title, type, link, delay, journal, journalLink, conference, conferenceLink }) => {
    const badgeLabel = journal || conference;
    const badgeLink = journalLink || conferenceLink;

    const card = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-600 dark:hover:border-cyan-400/50 transition-all group h-full flex flex-col cursor-pointer"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono border ${type === 'Journal Paper'
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
                        : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
                        }`}>
                        {type}
                    </span>

                    {/* Publication Badge with Link (Journal or Conference) */}
                    {badgeLabel && badgeLink && (
                        <a
                            href={badgeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono text-white transition-colors border ${type === 'Journal Paper'
                                    ? 'bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 border-purple-700 dark:border-purple-400'
                                    : 'bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 border-cyan-700 dark:border-cyan-400'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {badgeLabel}
                            <ExternalLink size={12} />
                        </a>
                    )}
                </div>
                <FileText className="text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                {title}
            </h3>

            {link && (
                <span className="inline-flex items-center text-sm font-mono text-purple-600 dark:text-cyan-400 group-hover:text-purple-700 dark:group-hover:text-white transition-colors mt-auto">
                    Read More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
            )}
        </motion.div>
    );

    return link ? (
        <Link to={link} className="block h-full">
            {card}
        </Link>
    ) : card;
};

export default ResearchPaper;
