import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Hetauda School of Management and Social Sciences",
    location: "Hetauda, Nepal",
    degree: "Bachelor of Computer Application (BCA)",
    date: "2020 - 2025",
    details: [
      "Graduated with a strong foundation in software engineering, database management, and programming.",
      "Completed multiple academic projects focusing on web development and backend architecture."
    ]
  },
  {
    id: 2,
    institution: "Hetauda School of Management",
    location: "Hetauda, Nepal",
    degree: "+2 Management",
    date: "2017 - 2019",
    details: [
      "Graduated with a strong foundation in management."
    ]
  }
];

const EducationTimeline = () => {
  return (
    <div className="relative mt-8">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden sm:block" />

      <div className="space-y-12">
        {educationData.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative sm:pl-20 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-[26px] top-6 w-3 h-3 rounded-full border-2 border-slate-900 bg-emerald-500 z-10 hidden sm:block shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            
            <div className="glass p-8 rounded-2xl group-hover:bg-white/5 transition-colors duration-300 shadow-2xl shadow-black/20 border border-white/5 hover:border-emerald-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono tracking-widest text-slate-500 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-1 text-white">
                  {item.degree}
                </h3>
                <p className="text-emerald-400 font-semibold tracking-wide flex items-center gap-2">
                  {item.institution} <span className="text-slate-600 font-normal">| {item.location}</span>
                </p>
              </div>

              {item.details && (
                <ul className="mt-6 space-y-3">
                  {item.details.map((detail, lIdx) => (
                    <li key={lIdx} className="text-sm md:text-base text-slate-400 leading-relaxed flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
