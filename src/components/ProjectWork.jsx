import { motion } from 'framer-motion';
import { Github, Database, Layout } from 'lucide-react';

const projects = [
  {
    title: "Tour Manager",
    description: "Developed and designed database and created a desktop application using Java Swing. Implemented features like booking, sorting, and role-based access control.",
    tech: ["Java Swing", "MySQL", "Database Design"],
    link: "https://github.com/LamaRaj/GuideAndTourist.git",
    icon: Layout
  },
  {
    title: "Trek-Mate",
    description: "Designed and implemented RESTful APIs to support frontend integration, including basic authentication, email verification, and core CRUD operations. Managed database interactions with MySQL.",
    tech: ["REST API", "Basic Auth", "MySQL", "CRUD Operations"],
    link: "https://github.com/LamaRaj/TrekMate.git",
    icon: Database
  }
];

const ProjectWork = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-outfit font-bold mb-4 tracking-tight">Project Work</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass group p-8 rounded-3xl hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
                <project.icon className="w-6 h-6" />
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/5 rounded-full text-slate-500">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectWork;
