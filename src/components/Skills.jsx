import { motion } from "framer-motion";
import { Server, Database, Code2, GitBranch, Terminal, Globe, Cpu, Layers } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Node.js", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
    { name: "Express.js", icon: Globe, color: "text-gray-400", bg: "bg-gray-500/10" },
    { name: "TypeScript", icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "GraphQL", icon: Layers, color: "text-pink-500", bg: "bg-pink-500/10" },
    { name: "MySQL", icon: Database, color: "text-blue-400", bg: "bg-blue-400/10" },
    { name: "PostgreSQL", icon: Database, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { name: "Laravel", icon: Server, color: "text-red-500", bg: "bg-red-500/10" },
    { name: "Docker", icon: Cpu, color: "text-blue-600", bg: "bg-blue-600/10" },
    { name: "Git", icon: GitBranch, color: "text-orange-500", bg: "bg-orange-500/10" },
    { name : "Flutter", icon: Terminal, color: "text-green-500", bg: "bg-green-500/10" }
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-slate-400">Tools and technologies I use to build scalable applications.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors border border-white/5"
            >
              <div className={`p-4 rounded-xl ${skill.bg}`}>
                <Icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <span className="font-semibold text-slate-200">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
