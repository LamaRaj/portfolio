import { motion } from 'framer-motion';
import { Trophy, Database, Code2 } from 'lucide-react';

const training = [
  {
    title: "Intermediate SQL",
    description: [
      "Built a solid understanding of intermediate SQL concepts on DataCamp.",
      "Mastered joins, subqueries, window functions, and data manipulation."
    ],
    icon: Database,
    tag: "DataCamp",
    date: "Nov 2022"
  },
  {
    title: "Hackathon I",
    description: [
      "Participated in Khudkila at Hetauda School of Management.",
      "Designed a UI/UX prototype in Figma for a Food Waste Management System.",
      "Led the team to victory as the overall winner."
    ],
    icon: Trophy,
    tag: "Winner!",
    date: "Nov 2022"
  },
  {
    title: "Hackathon II",
    description: [
      "Participated in BIC Hackathon at Boston International College.",
      "Designed the database and deployed front-end for a Food Waste Management System.",
      "Secured a position as a finalist."
    ],
    icon: Code2,
    tag: "Finalist!",
    date: "Dec 2024"
  }
];

const TrainingAndCertificates = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-outfit font-bold mb-4 tracking-tight text-white sm:text-5xl">Training & Certificates</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-emerald-400/50 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {training.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            className="glass group p-8 rounded-3xl hover:border-teal-500/40 transition-all duration-300 relative flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 px-4 py-1.5 rounded-full bg-teal-500/10 mb-auto">
                {item.tag}
              </span>
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              
              <ul className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow space-y-3 list-none">
                {item.description.map((point, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {item.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrainingAndCertificates;
