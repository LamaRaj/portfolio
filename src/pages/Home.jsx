import { motion } from 'framer-motion';
import ProjectWork from '../components/ProjectWork';
import TrainingAndCertificates from '../components/TrainingAndCertificates';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';
import EducationTimeline from '../components/EducationTimeline';
import Contact from '../components/Contact';

import profileImg from '../assets/1735539174006.jpg';

const Home = () => {
  return (
    <div className="relative isolate pt-14 pb-20 px-6 sm:pt-24 lg:pt-32">
      {/* Nature-inspired background gradients */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-500/20 to-teal-400/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-emerald-500/20 relative z-10 shadow-2xl">
              <img 
                src={profileImg} 
                alt="Raj Lama" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-outfit font-bold tracking-tight text-white sm:text-7xl mb-6 leading-[1.1]"
          >
            Raj Lama<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-300 text-3xl sm:text-5xl mt-2 block">
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl leading-8 text-slate-400 max-w-4xl mx-auto px-4"
          >
            Software developer with 2+ years of experience building clean and scalable applications.<br className="hidden md:block" />
            Specialized in Express, TypeScript, REST API & GraphQL.<br className="hidden md:block" />
            Based in Hetauda, Nepal.
          </motion.p>
        </div>

        {/* Skills Section */}
        <div id="skills" className="scroll-mt-28">
          <Skills />
        </div>

        {/* Experience & Education Section */}
        <div id="experience" className="mt-32 max-w-5xl mx-auto border-t border-white/5 pt-10 scroll-mt-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mb-4" />
            <p className="text-slate-400">My professional and academic journey.</p>
          </div>

          <div className="space-y-20">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-emerald-400 border-b border-white/10 pb-3 inline-block">
                Professional Experience
              </h3>
              <ExperienceTimeline />
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-emerald-400 border-b border-white/10 pb-3 inline-block">
                Education
              </h3>
              <EducationTimeline />
            </div>
          </div>
        </div>

        {/* Detailed Project Work */}
        <div id="projects" className="mt-32 max-w-5xl mx-auto border-t border-white/5 pt-10 scroll-mt-28">
          <ProjectWork />
        </div>

        {/* Training & Certifications */}
        <div className="mt-16 max-w-7xl mx-auto border-t border-white/5 pt-10">
          <TrainingAndCertificates />
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-32 max-w-5xl mx-auto border-t border-white/5 pt-10 scroll-mt-28 pb-20">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
