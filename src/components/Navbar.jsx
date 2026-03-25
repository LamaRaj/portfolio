import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Terminal, Mountain } from 'lucide-react';

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
    { name: 'IT Experience', path: '/experience/it' },
    { name: 'Trekking', path: '/experience/trekking' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-emerald-500 rounded-lg group-hover:rotate-12 transition-transform">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-outfit font-bold tracking-tight">
            Portfolio<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wide hover:text-emerald-400 transition-colors ${location.pathname === link.path ? 'text-emerald-500' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onOpenContact}
            className="px-6 py-2 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-emerald-50 transition-colors shadow-lg shadow-white/5"
          >
            Contact Me
          </button>
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
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold ${location.pathname === link.path ? 'text-emerald-500' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => { setIsOpen(false); onOpenContact(); }}
            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold mt-4"
          >
            Contact Me
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
