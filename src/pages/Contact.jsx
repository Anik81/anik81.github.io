import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white dark:bg-black min-h-screen py-20 transition-colors duration-300">
            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">Get In Touch</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Interested in collaborating or have a question? Feel free to reach out.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-bold mb-1">Email</h3>
                                        <a href="mailto:tranik.cse@gmail.com" className="text-gray-700 dark:text-gray-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">
                                            tranik.cse@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-bold mb-1">Phone</h3>
                                        <p className="text-gray-700 dark:text-gray-400">+880 152 156 9748</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white font-bold mb-1">Location</h3>
                                        <p className="text-gray-700 dark:text-gray-400">Dhaka, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl border border-gray-200 dark:border-white/10"
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-mono text-gray-700 dark:text-gray-400 mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-mono text-gray-700 dark:text-gray-400 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-mono text-gray-700 dark:text-gray-400 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-mono text-gray-700 dark:text-gray-400 mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-gray-100 dark:bg-black/50 border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:border-purple-600 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="Your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
