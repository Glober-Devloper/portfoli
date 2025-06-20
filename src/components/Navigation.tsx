
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'py-2 md:py-3 bg-black/80 backdrop-blur-md' : 'py-3 md:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-lg md:text-2xl font-bold text-white z-50">
            <span className="text-primary">Roshan</span>Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-primary font-medium transition-colors relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 z-50"
            aria-label="Menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              className="w-5 h-0.5 bg-white mb-1 block"
            ></motion.span>
            <motion.span
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="w-5 h-0.5 bg-white mb-1 block"
            ></motion.span>
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              className="w-5 h-0.5 bg-white block"
            ></motion.span>
          </button>

          {/* Mobile Navigation - Compact Version */}
          <motion.nav
            className="md:hidden fixed top-16 right-4 left-4 bg-black/95 backdrop-blur-md rounded-lg z-40 border border-gray-800"
            initial={{ opacity: 0, y: -20, display: 'none' }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : -20,
              display: isOpen ? 'block' : 'none'
            }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isOpen ? 1 : 0, 
                    x: isOpen ? 0 : -20 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: isOpen ? index * 0.05 : 0 
                  }}
                >
                  <a
                    href={item.href}
                    className="block px-6 py-2 text-white hover:text-primary hover:bg-gray-800/50 transition-all font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
