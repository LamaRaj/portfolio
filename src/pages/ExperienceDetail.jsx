import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Terminal, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const experienceData = {
  it: {
    title: 'Backend Developer',
    subtitle: 'Crafting digital experiences with precision and heart.',
    icon: Terminal,
    color: 'emerald',
    description: 'Specializing in Node.js, Express.js, and high-performance backend architectures. I build intuitive user interfaces and scalable web applications.',
    details: [  
      {
        "id": 1,
        "company": "Prabidhee Innovations",
        "location": "Hetauda, Nepal",
        "role": "Backend Intern",
        "date": "Dec 2024 - Apr 2025",
        "projects": [
          {
            "name": "Content Management System (CMS)",
            "techStack": ["Laravel", "AdminLTE", "REST API", "MVC Architecture"],
            "responsibilities": [
              "Refactored existing code to improve performance and accuracy",
              "Collaborated with team members to design and develop backend APIs"
            ]
          },
          {
            "name": "ERP Desktop Application",
            "techStack": ["Flutter", "Laravel"],
            "responsibilities": [
              "Collaborated closely with team members to develop backend APIs",
              "Worked with team members to develop application pages and features"
            ]
          }
        ],
        "icon": "GraduationCap"
      },
      {
        "id": 2,
        "company": "Truenary Solutions",
        "location": "Hetauda, Nepal",
        "role": "Backend Developer",
        "date": "May 2025 - Mar 2026",
        "projects": [
          {
            "name": "POS Application (Point of Sale System)",
            "techStack": [
              "Express.js",
              "TypeScript",
              "GraphQL",
              "Drizzle ORM",
              "Kafka",
              "Firebase Cloud Messaging",
              "Fission Functions"
            ],
            "responsibilities": [
              "Implemented secure user authentication using JWT, Google Sign-In, and role-based access control",
              "Designed real-time and asynchronous notification systems using GraphQL Subscriptions, FCM, and email services",
              "Built and optimized RESTful and GraphQL APIs using Express.js, TypeScript, and Drizzle ORM",
              "Developed and optimized database interactions including complex queries and CRUD operations",
              "Implemented event-driven and serverless workflows using Fission Functions for background processing",
              "Integrated Kafka-based event streaming for delayed processing and reliable inter-service communication",
              "Collaborated in Agile development cycles including code reviews, daily stand-ups, and Git-based version control"
            ]
          }
        ],
        "icon": "Briefcase"
      }
    ],
    skills: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'MySQL', 'Laravel','Docker', 'Git', 'PostgreSQL']
  }
};

const iconMap = {
  Terminal,
  Briefcase,
  GraduationCap
};

const ExperienceDetail = () => {
  const { id } = useParams();
  const data = experienceData[id];

  if (!data) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Experience not found</h2>
      <Link to="/" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2">
        <ArrowLeft className="w-5 h-5" /> Back to Home
      </Link>
    </div>
  );

  const { title, subtitle, icon: Icon, description, details, skills, color } = data;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-6 py-20 lg:py-32"
    >
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Overview
      </Link>
      
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left Column - Hero */}
        <div className="lg:col-span-12 xl:col-span-5">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="xl:sticky xl:top-32"
          >
            <div className={`inline-flex p-4 rounded-2xl mb-8 ${color === 'teal' ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'} border`}>
              <Icon className="w-10 h-10" />
            </div>
            <h1 className="text-6xl font-outfit font-bold mb-6 tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-2xl text-slate-300 mb-8 font-medium italic">
              &quot;{subtitle}&quot;
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${color === 'teal' ? 'border-teal-500/20 bg-teal-500/5 text-teal-400' : 'border-emerald-500/20 bg-emerald-500/5 text-emerald-400'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column - Timeline */}
        <div className="lg:col-span-12 xl:col-span-7">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12 relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden sm:block" />

            {details.map((item) => {
              const ItemIcon = iconMap[item.icon] || Briefcase;
              
              return (
              <div key={item.id} className="relative sm:pl-20 group">
                {/* Timeline dot */}
                <div className={`absolute left-[26px] top-6 w-3 h-3 rounded-full border-2 border-slate-900 z-10 hidden sm:block ${color === 'teal' ? 'bg-teal-500' : 'bg-emerald-500'}`} />
                
                <div className="glass p-8 rounded-2xl group-hover:bg-white/5 transition-colors duration-300 shadow-2xl shadow-black/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 rounded-lg ${color === 'teal' ? 'bg-teal-500/10 text-teal-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono tracking-widest text-slate-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-1">
                      {item.role || item.title}
                    </h3>
                    {(item.company || item.location) && (
                      <p className="text-emerald-400 font-semibold tracking-wide flex items-center gap-2">
                        {item.company} {item.location && <span className="text-slate-600 font-normal">| {item.location}</span>}
                      </p>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* IT Projects Slider */}
                  {item.projects && (
                    <div className="mt-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Key Projects</h4>
                        {item.projects.length > 1 && <span className="text-[10px] text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Swipe for more</span>}
                      </div>

                      <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x">
                        {item.projects.map((project, pIdx) => (
                          <div 
                            key={pIdx} 
                            className="flex-shrink-0 w-[280px] sm:w-[400px] glass p-6 rounded-xl border-white/5 snap-start shadow-xl shadow-black/10"
                          >
                            <h5 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              {project.name}
                            </h5>
                            
                            <div className="flex flex-wrap gap-1.5 mb-6">
                              {project.techStack.map(tech => (
                                <span key={tech} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-slate-400">
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <ul className="space-y-3">
                              {project.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="text-sm text-slate-400 leading-relaxed flex gap-3">
                                  <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}


                </div>
              </div>
            );})}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
