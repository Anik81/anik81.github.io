import React from 'react';
import { motion } from 'framer-motion';
import ResearchPaper from '../components/ResearchPaper';

const Research = () => {
    const papers = [
        {
            type: "Journal Paper",
            title: "Automated Knee Osteoarthritis Diagnosis: A Stacked Ensemble Deep Learning Approach with Explainable AI Techniques",
            abstract: "Knee osteoarthritis (KOA) is a prevalent degenerative joint disease that affects people all over the world. Because diagnosis and treatment are often delayed, KOA frequently causes severe disability.",
            link: "/research/koa-diagnosis",
            journal: "IEEE Access",
            journalLink: "https://ieeexplore.ieee.org/document/11239041"
        },
        {
            type: "Journal Paper",
            title: "A Systematic Review on Impact of Diffusion Models in Health Informatics: The Role of Explainable AI and Clinician Involvement",
            abstract: "Diffusion models, as the advanced evolvement of generative models, have been adopted across various domains and demonstrate remarkable performance in a wide range of applications.",
            link: "/research/diffusion-models"
        },

        {
            type: "Journal Paper",
            title: "Deep Learning in Knee Osteoarthritis: A Comprehensive Review of Imaging Modalities, Model Architectures, Grading Systems, and Explainable AI",
            abstract: "A comprehensive review analyzing deep learning applications in knee osteoarthritis imaging, examining pre-processing techniques, model architectures, and explainable AI frameworks. (Manuscript in Preparation)",
            link: "/research/koa-review"
        },
        {
            type: "Conference Paper",
            title: "Analysis of Automated Skin Disease Classification Exploiting Different Machine Learning Techniques",
            abstract: "One of the most serious and prevalent diseases in the world is skin disease. Due to the intricacy of humans' tone and texture and the visible proximity impact of the disorders, it can be quite difficult to pinpoint the exact type of condition at times.",
            link: "/research/skin-disease",
            conference: "IEEE Xplore",
            conferenceLink: "https://ieeexplore.ieee.org/document/10099354"
        },
        {
            type: "Conference Paper",
            title: "An Empirical Study on Bengali News Headline Categorization Leveraging Different Machine Learning Techniques",
            abstract: "Bengali News Headline Categorization Using Machine Learning aims to categorize Bengali online news headlines into six distinct categories using Natural Language Processing.",
            link: "/research/news-classification",
            conference: "IEEE Xplore",
            conferenceLink: "https://ieeexplore.ieee.org/document/10055276"
        }
    ];

    return (
        <div className="bg-white dark:bg-black min-h-screen py-20 transition-colors duration-300">
            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">Research Works</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Exploring the frontiers of AI in healthcare and natural language processing.
                            Here are my contributions to the scientific community.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {papers.map((paper, index) => (
                            <ResearchPaper
                                key={index}
                                {...paper}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;
