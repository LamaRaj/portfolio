import { motion } from "framer-motion";
import {
  Server, Database, Code2, GitBranch, Globe,
  Cpu, Layers, Shield, Bell, Zap, Key, Smartphone, Rabbit
} from "lucide-react";

const skills = [
  { name: "TypeScript", icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { name: "C#", icon: Code2, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "PHP", icon: Code2, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "Node.js", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Express.js", icon: Globe, color: "text-slate-400", bg: "bg-slate-400/10" },
  { name: "Laravel", icon: Server, color: "text-red-500", bg: "bg-red-500/10" },
  { name: ".NET", icon: Layers, color: "text-violet-500", bg: "bg-violet-500/10" },
  { name: "GraphQL", icon: Layers, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "REST API", icon: Globe, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { name: "Drizzle ORM", icon: Database, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "JWT Auth", icon: Shield, color: "text-amber-400", bg: "bg-amber-400/10" },
  { name: "Firebase", icon: Bell, color: "text-orange-400", bg: "bg-orange-400/10" },
  { name: "Google OAuth", icon: Key, color: "text-red-400", bg: "bg-red-400/10" },
  { name: "Kafka", icon: Zap, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "RabbitMQ", icon: Rabbit, color: "text-red-500", bg: "bg-red-400/10" },
  { name: "Fission", icon: Cpu, color: "text-violet-400", bg: "bg-violet-400/10" },
  { name: "MySQL", icon: Database, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { name: "Docker", icon: Cpu, color: "text-blue-600", bg: "bg-blue-600/10" },
  { name: "GitHub", icon: GitBranch, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "GitLab", icon: GitBranch, color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Flutter", icon: Smartphone, color: "text-cyan-500", bg: "bg-cyan-500/10" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Skills = () => {
  return (
    <div className="py-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-slate-400">Tools and technologies I use to build scalable applications.</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/5 transition-all duration-300 cursor-default"
            >
              <div className={`p-2 rounded-lg ${skill.bg}`}>
                <Icon className={`w-5 h-5 ${skill.color}`} />
              </div>
              <span className="font-semibold text-sm text-slate-200 whitespace-nowrap">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
