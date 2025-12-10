import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-white/10 mt-auto bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
            <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                            © {new Date().getFullYear()} Tanvir Rahman Anik. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Anik81" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/anik81-tra/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:tranik.cse@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
