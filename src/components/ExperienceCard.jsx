import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Layout, Database, Terminal, Code } from 'lucide-react';
import SmartImage from './SmartImage';

const ExperienceCard = ({ title, description, images = [], skills = [], link, icon: Icon, tag, accent = 'emerald' }) => {
  const colorClass = accent === 'emerald' ? 'emerald' : 'teal';
  const [currentIdx, setCurrentIdx] = useState(0);

  const getSkillIcon = (skill) => {
    const s = skill.toLowerCase();
    if (s.includes('node') || s.includes('express') || s.includes('api') || s.includes('laravel') || s.includes('php') || s.includes('graphql') || s.includes('git')) return <Terminal className="w-4 h-4" />;
    if (s.includes('sql') || s.includes('database') || s.includes('mongo') || s.includes('postgres') || s.includes('drizzle') || s.includes('workbench')) return <Database className="w-4 h-4" />;
    if (s.includes('react') || s.includes('layout') || s.includes('view') || s.includes('ui')) return <Layout className="w-4 h-4" />;
    if (s.includes('java') || s.includes('logic') || s.includes('system') || s.includes('flutter')) return <Code className="w-4 h-4" />;
    return <Layout className="w-4 h-4" />;
  };

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
      className={`glass group relative overflow-hidden rounded-3xl flex flex-col items-start shadow-2xl shadow-${colorClass}-500/5 hover:border-${colorClass}-500/40 transition-all duration-300 min-h-[500px] h-full`}
    >
      {/* Background Decor */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 bg-${colorClass}-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Image Slider - only if images exists */}
      {images.length > 0 && (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-3xl bg-slate-900 group/slider border-b border-white/5">
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
              className={`p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-${colorClass}-500 border border-white/10 transition-all`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-${colorClass}-500 border border-white/10 transition-all`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentIdx ? `bg-${colorClass}-400 w-4` : 'bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="p-8 pt-10 flex flex-col flex-grow w-full">
        <div className="flex items-center justify-between w-full mb-8">
          {images.length === 0 ? (
            <div className={`p-3 bg-${colorClass}-500/10 rounded-xl border border-${colorClass}-500/30 group-hover:border-${colorClass}-500 group-hover:bg-${colorClass}-500 group-hover:text-white transition-all duration-300`}>
              <Icon className="w-8 h-8" />
            </div>
          ) : (
            <span className={`text-xs font-bold uppercase tracking-[0.2em] text-${colorClass}-400 border border-${colorClass}-500/20 px-4 py-1.5 rounded-full bg-${colorClass}-500/5`}>
              {tag}
            </span>
          )}
          <div className={`h-px bg-gradient-to-r from-${colorClass}-500/50 to-transparent flex-grow ml-4 mr-10`} />
          {images.length === 0 && (
            <span className={`text-xs font-bold uppercase tracking-[0.2em] text-${colorClass}-400 border border-${colorClass}-500/20 px-4 py-1.5 rounded-full bg-${colorClass}-500/5`}>
              {tag}
            </span>
          )}
        </div>

        <h3 className={`text-4xl font-outfit font-bold mb-6 tracking-tight group-hover:text-${colorClass}-400 transition-colors duration-300 leading-tight`}>
          {title}
        </h3>

        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          {description}
        </p>

        {/* Tech Stack for IT card */}
        {skills.length > 0 && (
          <div className="mb-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Core Technologies</h4>
            <div className="grid grid-cols-2 gap-3">
              {skills.slice(0, 8).map((s, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-${colorClass}-500/20 hover:bg-white/10 transition-all duration-300 group/item`}>
                  <div className={`p-2 rounded-lg bg-${colorClass}-500/10 text-${colorClass}-400 group-hover/item:bg-${colorClass}-500 group-hover/item:text-white transition-colors`}>
                    {getSkillIcon(s)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-300 tracking-wide uppercase truncate">{s}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Link
          to={link}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-slate-200 hover:scale-105 active:scale-95 transition-all duration-300 mt-auto w-full sm:w-fit group/btn"
        >
          Explore More
          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
