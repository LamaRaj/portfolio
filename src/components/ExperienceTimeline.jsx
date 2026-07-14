import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Terminal } from "lucide-react";

const experienceData = [
  {
    id: 2,
    company: "Truenary Solutions",
    location: "Hetauda, Nepal",
    role: "Backend Developer",
    date: "May 2025 - Mar 2026",
    learnings: [
      "Built and optimized RESTful and GraphQL APIs using Express.js, TypeScript, and Drizzle ORM.",
      "Implemented secure user authentication using JWT, Google Sign-In, and role-based access control.",
      "Designed real-time notification systems using GraphQL Subscriptions, FCM, and email services.",
      "Implemented event-driven serverless workflows using Fission Functions and Kafka for delayed processing.",
      "Collaborated in Agile development cycles, participating in daily stand-ups and code reviews."
    ],
    icon: "Briefcase"
  },
  {
    id: 1,
    company: "Prabidhee Innovations",
    location: "Hetauda, Nepal",
    role: "Backend Intern",
    date: "Dec 2024 - Apr 2025",
    learnings: [
      "Collaborated closely with team members to design and develop robust backend APIs.",
      "Refactored existing codebases to improve performance, accuracy, and maintainability.",
      "Gained hands-on experience with MVC architecture using Laravel.",
      "Worked on ERP desktop applications using Flutter and Laravel."
    ],
    icon: "GraduationCap"
  }
];

const iconMap = {
  Terminal,
  Briefcase,
  GraduationCap
};

const ExperienceTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-emerald-500/20 to-transparent hidden sm:block" />

      <div className="space-y-12">
        {experienceData.map((item, index) => {
          const ItemIcon = iconMap[item.icon] || Briefcase;
          
          return (
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
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono tracking-widest text-slate-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-1 text-white">
                    {item.role}
                  </h3>
                  <p className="text-emerald-400 font-semibold tracking-wide flex items-center gap-2">
                    {item.company} <span className="text-slate-600 font-normal">| {item.location}</span>
                  </p>
                </div>

                {item.learnings && (
                  <ul className="mt-6 space-y-3">
                    {item.learnings.map((learning, lIdx) => (
                      <li key={lIdx} className="text-sm md:text-base text-slate-400 leading-relaxed flex gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
