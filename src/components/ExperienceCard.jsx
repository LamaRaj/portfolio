import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SmartImage from './SmartImage';

const ExperienceCard = ({ title, description, images = [], link, icon: Icon, tag }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`glass group relative overflow-hidden rounded-2xl flex flex-col items-start shadow-2xl shadow-indigo-500/5 hover:border-indigo-500/40 transition-all duration-300 ${images.length > 0 ? 'min-h-[500px]' : 'h-full'}`}
    >
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Image Slider - only if images exists */}
      {images.length > 0 && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-slate-900 mb-6 group/slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <SmartImage
                src={images[currentIdx]}
                alt={`${title} photo ${currentIdx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Slider Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />

          {/* Controls */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevSlide}
              className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/30 backdrop-blur-md rounded-full">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIdx ? 'bg-indigo-400 w-4' : 'bg-white/40'}`} 
              />
            ))}
          </div>
        </div>
      )}

      <div className={`p-8 pt-6 flex flex-col flex-grow w-full ${images.length === 0 ? 'mt-0' : 'mt-2'}`}>
        <div className="flex items-start justify-between w-full mb-6">
          <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/30 group-hover:border-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
            <Icon className="w-8 h-8" />
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full bg-indigo-500/5">
            {tag}
          </span>
        </div>

        <h3 className="text-3xl font-outfit font-bold mb-4 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 text-lg leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <Link
          to={link}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold rounded-full hover:bg-slate-200 transition-all duration-300 mt-auto md:w-fit"
        >
          View Experience
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
