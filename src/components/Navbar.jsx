import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Research', path: '/research' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-opacity-90 backdrop-blur-md border-b border-white/10 dark:border-white/10 transition-colors duration-300" style={{ background: theme === 'dark' ? 'rgba(10, 10, 10, 0.8)' : 'rgba(255, 255, 255, 0.8)' }}>
      <div className="w-full px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-6">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-4xl font-bold font-mono flex items-center gap-3 text-gray-900 dark:text-white">
            <Code2 className="text-purple-600 dark:text-cyan-400" size={36} />
            <span>TR.Anik</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-lg font-bold transition-colors duration-300 ${isActive(link.path) ? 'text-purple-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-700" />
              )}
            </button>

            <button
              className="text-gray-900 dark:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 absolute w-full"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-mono text-2xl font-bold ${isActive(link.path) ? 'text-purple-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
