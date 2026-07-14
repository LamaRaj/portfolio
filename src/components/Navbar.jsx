import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Github } from 'lucide-react';

const Navbar = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '#skills'},
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="text-xl font-outfit font-bold tracking-tight hover:text-emerald-400 transition-colors">
              Raj Lama
          </Link>
        </div>

        {/* Center Menu */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            link.path === '/' ? (
              <button
                key={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm font-semibold tracking-wide hover:text-emerald-400 transition-colors text-slate-300"
              >
                {link.name}
              </button>
            ) : link.path.startsWith('#') ? (
              <a
                key={link.path}
                href={link.path}
                className="text-sm font-semibold tracking-wide hover:text-emerald-400 transition-colors text-slate-300"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide hover:text-emerald-400 transition-colors ${location.pathname === link.path ? 'text-emerald-500' : 'text-slate-300'}`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Right - GitHub Button */}
        <div className="hidden md:flex justify-end flex-1">
          <a 
            href="https://github.com/LamaRaj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg shadow-white/5"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 right-0 p-6 flex flex-col gap-4 border-t border-white/10"
        >
          {navLinks.map((link) => (
            link.path === '/' ? (
              <button
                key={link.path}
                onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-lg font-semibold text-left text-slate-300 hover:text-emerald-400"
              >
                {link.name}
              </button>
            ) : link.path.startsWith('#') ? (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-slate-300"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-semibold ${location.pathname === link.path ? 'text-emerald-500' : 'text-slate-300'}`}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <a 
            href="https://github.com/LamaRaj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center gap-2 py-3 bg-white text-slate-950 rounded-xl font-bold mt-4 hover:bg-emerald-50 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
