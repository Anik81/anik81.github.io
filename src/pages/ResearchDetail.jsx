import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText, Calendar, Users } from 'lucide-react';

const ResearchDetail = () => {
    const { slug } = useParams();

    // Research papers data
    const papers = {
        'diffusion-models': {
            title: "A Systematic Review of Diffusion Models for Medical Image-Based Diagnosis: Methods, Taxonomies, Clinical Integration, Explainability, and Future Directions",
            type: "Journal Paper",
            status: "Published in Diagnostics (MDPI)",
            date: "2026",
            journal: "Diagnostics (MDPI)",
            link: "https://www.mdpi.com/2075-4418/16/2/211",
            authors: ["Dr. Mohammad Azad", "Tanvir Rahman Anik"],
            abstract: "Diffusion models, as the advanced evolvement of generative models, have been adopted across various domains and demonstrate remarkable performance in a wide range of applications. In health informatics, diffusion models have shown great potential in medical image synthesis, disease diagnosis, and treatment planning. This systematic review examines 68 studies on diffusion models in medical imaging and health informatics, analyzing model architectures, clinical applications, and explainability, with a particular focus on explainable AI techniques and the involvement of clinicians in the development and validation process.",
            keywords: ["Diffusion Models", "Medical Image Diagnosis", "Health Informatics", "Explainable AI", "Generative Models", "Deep Learning"],
            methodology: "We conducted a systematic review of 68 studies on diffusion models applied to medical imaging and health informatics. Papers were selected from major databases and analyzed across model architectures, clinical applications, taxonomies, clinical integration, and explainability frameworks.",
            results: "Our analysis identified significant gaps in explainable AI adoption (present in only 22% of studies) and clinician collaboration (57%), while diffusion models consistently outperformed traditional generative models in medical image synthesis and diagnosis tasks.",
            conclusion: "Diffusion models represent a promising direction for medical image-based diagnosis. We propose 10 evidence-based future research directions, emphasizing explainability, clinical integration, and clinician feedback loops."
        },
        'koa-diagnosis': {
            title: "Automated Knee Osteoarthritis Diagnosis: A Stacked Ensemble Deep Learning Approach with Explainable AI Techniques",
            type: "Journal Paper",
            status: "Published in IEEE Access",
            date: "November 11, 2024",
            journal: "IEEE Access",
            volume: "13",
            pages: "194862 - 194883",
            doi: "10.1109/ACCESS.2025.3631513",
            issn: "2169-3536",
            publisher: "IEEE",
            link: "https://ieeexplore.ieee.org/document/11239041",
            authors: ["Tanvir Rahman Anik", "Dr. Mohammad Azad", "et al."],
            abstract: "Knee osteoarthritis (KOA) is a prevalent degenerative joint disease that affects people all over the world. Because diagnosis and treatment are often delayed, KOA frequently causes severe disability. This research proposes an automated KOA diagnosis system using a stacked ensemble deep learning approach combined with explainable AI techniques to provide transparent and interpretable predictions.",
            keywords: ["Knee Osteoarthritis", "Deep Learning", "Ensemble Learning", "Explainable AI", "Medical Diagnosis"],
            methodology: "We developed a stacked ensemble model combining transfer-learning architectures (Xception, EfficientNetB5, and InceptionV3), with explainability achieved through Grad-CAM, Faster Score-CAM, and LIME.",
            results: "Our proposed model achieved 96.93% accuracy in multi-class KOA classification and 86.29% accuracy in binary classification, outperforming individual models. Explainable AI visualizations highlighted key anatomical regions contributing to predictions.",
            conclusion: "The stacked ensemble approach with explainable AI provides both high accuracy and interpretability, making it suitable for clinical deployment."
        },
        'koa-review': {
            title: "Deep Learning in Knee Osteoarthritis: A Comprehensive Review of Imaging Modalities, Model Architectures, Grading Systems, and Explainable AI",
            type: "Journal Paper",
            status: "Submitted for Review",
            date: "2025",
            authors: ["Tanvir Rahman Anik", "Dr. Mohammad Azad", "et al."],
            abstract: "Knee osteoarthritis (KOA) is one of the most prevalent musculoskeletal disorders worldwide, affecting millions of individuals and significantly impacting quality of life. This comprehensive review systematically analyzes the application of deep learning techniques in knee osteoarthritis imaging, examining various imaging modalities, model architectures, grading systems, and the integration of explainable AI frameworks. We provide an in-depth analysis of pre-processing techniques, feature extraction methods, and the latest advancements in automated KOA diagnosis and severity assessment.",
            keywords: ["Knee Osteoarthritis", "Deep Learning", "Medical Imaging", "Explainable AI", "Computer-Aided Diagnosis", "Review"],
            methodology: "We conducted a systematic literature review of deep learning applications in knee osteoarthritis imaging from 2015-2024. Papers were systematically selected from PubMed, IEEE Xplore, Scopus, and Web of Science databases. We analyzed imaging modalities (X-ray, MRI, CT), model architectures (CNN, Vision Transformers, Hybrid models), grading systems (KL grading, OARSI), and explainability techniques (Grad-CAM, LIME, SHAP).",
            results: "Our review identified 150+ studies applying deep learning to KOA imaging. CNN-based architectures dominate the field (78%), with increasing adoption of Vision Transformers (15%) and hybrid approaches (7%). X-ray imaging remains the most common modality (65%), followed by MRI (30%). Explainable AI techniques are employed in only 22% of studies, highlighting a significant gap in clinical interpretability. The best-performing models achieve 95%+ accuracy in KL grade classification.",
            conclusion: "Deep learning has demonstrated remarkable success in automated KOA diagnosis and severity assessment. However, significant challenges remain in explainability, multi-modal integration, and clinical validation. Future research should focus on developing interpretable models, incorporating multi-modal imaging data, and conducting large-scale clinical trials to facilitate real-world deployment."
        },
        'skin-disease': {
            title: "Analysis of Automated Skin Disease Classification Exploiting Different Machine Learning Techniques",
            type: "Conference Paper",
            status: "Published",
            date: "March 2023",
            conference: "IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)",
            location: "Las Vegas, USA",
            doi: "10.1109/CCWC57344.2023.10099354",
            publisher: "IEEE",
            link: "https://ieeexplore.ieee.org/document/10099354",
            authors: ["Tanvir Rahman Anik", "Purnendu Talukder", "Ishrak Faruki", "Ibn Rahman", "Emam Hossain"],
            abstract: "One of the most serious and prevalent diseases in the world is skin disease. Due to the intricacy of humans' tone and texture and the visible proximity impact of the disorders, it can be quite difficult to pinpoint the exact type of condition at times. This paper presents a comprehensive analysis of various machine learning techniques for automated skin disease classification.",
            keywords: ["Skin Disease", "Machine Learning", "Classification", "Computer Vision", "Healthcare"],
            methodology: "We compared multiple ML algorithms including SVM, Random Forest, and CNN-based approaches on a dataset of 10,000+ dermatological images across 7 disease categories.",
            results: "CNN-based models achieved the highest accuracy (89.3%), with ResNet50 showing the best performance. Traditional ML methods achieved 76-82% accuracy.",
            conclusion: "Deep learning approaches significantly outperform traditional ML for skin disease classification, though ensemble methods show promise for improving robustness."
        },
        'news-classification': {
            title: "An Empirical Study on Bengali News Headline Categorization Leveraging Different Machine Learning Techniques",
            type: "Conference Paper",
            status: "Published",
            date: "December 2022",
            conference: "25th International Conference on Computer and Information Technology (ICCIT)",
            location: "Cox's Bazar, Bangladesh",
            doi: "10.1109/ICCIT57492.2022.10055276",
            publisher: "IEEE",
            link: "https://ieeexplore.ieee.org/document/10055276",
            authors: ["Aysha Gazi Mouri", "Purnendu Talukder", "Tanvir Rahman Anik", "Ifti Sam Ibn Rahman", "Sajib Kumar Saha Joy", "Md Tanvir Rouf Shawon"],
            abstract: "Bengali News Headline Categorization Using Machine Learning aims to categorize Bengali online news headlines into six distinct categories using Natural Language Processing. Researchers in different application fields have recently paid great attention to the fantastic accomplishments of Machine Learning Models in Natural Language Processing.",
            keywords: ["NLP", "Bengali Language", "Text Classification", "Machine Learning", "News Categorization"],
            methodology: "We applied various ML techniques including Naive Bayes, SVM, and LSTM networks on a corpus of 50,000 Bengali news headlines across 6 categories.",
            results: "LSTM-based models achieved 91.7% accuracy, outperforming traditional ML approaches. Word embeddings significantly improved classification performance.",
            conclusion: "Deep learning with proper Bengali language preprocessing provides superior performance for news headline categorization tasks."
        }
    };

    const paper = papers[slug];

    if (!paper) {
        return (
            <div className="bg-white dark:bg-black min-h-screen py-20 transition-colors duration-300">
                <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                    <div className="max-w-[1920px] mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Paper Not Found</h1>
                        <Link to="/research" className="text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-white">
                            ← Back to Research
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-black min-h-screen py-20 transition-colors duration-300">
            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-[1920px] mx-auto">
                    {/* Back Button */}
                    <Link
                        to="/research"
                        className="inline-flex items-center text-purple-600 dark:text-cyan-400 hover:text-purple-700 dark:hover:text-white mb-8 group"
                    >
                        <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Research
                    </Link>

                    {/* Paper Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className={`inline-block px-4 py-1 rounded-full text-sm font-mono ${paper.type === 'Journal Paper'
                                ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                }`}>
                                {paper.type}
                            </span>

                            {/* Publication Badge with Link (Journal or Conference) */}
                            {(paper.journal || paper.conference) && paper.link && (
                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-mono text-white transition-colors border ${paper.type === 'Journal Paper'
                                            ? 'bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 border-purple-700 dark:border-purple-400'
                                            : 'bg-cyan-600 dark:bg-cyan-500 hover:bg-cyan-700 dark:hover:bg-cyan-600 border-cyan-700 dark:border-cyan-400'
                                        }`}
                                >
                                    {paper.journal || 'IEEE Xplore'}
                                    <ExternalLink size={14} />
                                </a>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                            {paper.title}
                        </h1>

                        {/* Publication Link - if available */}
                        {paper.link && (
                            <div className={`mb-6 p-4 border rounded-lg ${paper.type === 'Journal Paper'
                                ? 'bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-500/20'
                                : 'bg-cyan-50 dark:bg-cyan-900/10 border-cyan-200 dark:border-cyan-500/20'
                                }`}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-start gap-2">
                                        <ExternalLink size={16} className={`mt-1 flex-shrink-0 ${paper.type === 'Journal Paper'
                                            ? 'text-purple-600 dark:text-purple-400'
                                            : 'text-cyan-600 dark:text-cyan-400'
                                            }`} />
                                        <div className="flex-1">
                                            <a
                                                href={paper.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`font-medium underline ${paper.type === 'Journal Paper'
                                                    ? 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300'
                                                    : 'text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300'
                                                    }`}
                                            >
                                                {paper.journal ? `View Publication in ${paper.journal}` : 'View Publication on IEEE Xplore'}
                                            </a>

                                            {/* Journal Information */}
                                            {paper.journal && (
                                                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                                    <p><strong>Journal:</strong> {paper.journal} {paper.volume && `(Volume: ${paper.volume})`}</p>
                                                    {paper.pages && <p><strong>Pages:</strong> {paper.pages}</p>}
                                                    {paper.doi && <p><strong>DOI:</strong> {paper.doi}</p>}
                                                    {paper.issn && <p><strong>ISSN:</strong> {paper.issn}</p>}
                                                </div>
                                            )}

                                            {/* Conference Information */}
                                            {paper.conference && (
                                                <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                                                    <p><strong>Conference:</strong> {paper.conference}</p>
                                                    {paper.location && <p><strong>Location:</strong> {paper.location}</p>}
                                                    {paper.doi && <p><strong>DOI:</strong> {paper.doi}</p>}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                {paper.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText size={16} />
                                {paper.status}
                            </div>
                        </div>

                        <div className="flex items-start gap-2 text-gray-700 dark:text-gray-400 mb-6">
                            <Users size={16} className="mt-1" />
                            <div>
                                <strong className="text-gray-900 dark:text-white">Authors:</strong> {paper.authors.join(', ')}
                            </div>
                        </div>
                    </motion.div>

                    {/* Abstract */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-purple-600 dark:text-cyan-400 mb-4">Abstract</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                            {paper.abstract}
                        </p>
                    </motion.section>

                    {/* Keywords */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-purple-600 dark:text-cyan-400 mb-4">Keywords</h2>
                        <div className="flex flex-wrap gap-2">
                            {paper.keywords.map((keyword, i) => (
                                <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-white/5 text-purple-600 dark:text-cyan-300 text-sm rounded-full border border-purple-200 dark:border-cyan-500/20">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </motion.section>

                    {/* Methodology */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-purple-600 dark:text-cyan-400 mb-4">Methodology</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                            {paper.methodology}
                        </p>
                    </motion.section>

                    {/* Results */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-purple-600 dark:text-cyan-400 mb-4">Results</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                            {paper.results}
                        </p>
                    </motion.section>

                    {/* Conclusion */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-purple-600 dark:text-cyan-400 mb-4">Conclusion</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                            {paper.conclusion}
                        </p>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default ResearchDetail;
