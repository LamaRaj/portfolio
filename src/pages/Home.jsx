import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import { Terminal, Mountain } from 'lucide-react';

/**
 * ASSET IMPORTS
 */
import ap1 from '../assets/AnnapurnaCircuit/IMG_3865.JPG';
import ap2 from '../assets/AnnapurnaCircuit/IMG_3872.JPG';
import ap3 from '../assets/AnnapurnaCircuit/IMG_8400.JPG';
import ap4 from '../assets/AnnapurnaCircuit/IMG_8711.JPG';
import ap5 from '../assets/AnnapurnaCircuit/IMG_8713.JPG';
import ap6 from '../assets/AnnapurnaCircuit/IMG_8714.JPG';


// Gosaikunda
import gk1 from '../assets/GosaiKunda/20211018_030921110_iOS.jpg';
import gk2 from '../assets/GosaiKunda/20211018_032348205_iOS.heic';
import gk3 from '../assets/GosaiKunda/20211018_060053553_iOS.heic';
import gk4 from '../assets/GosaiKunda/20211018_072116665_iOS.heic';

// Kori
import kr1 from '../assets/Kori/IMG_0271.JPG';
import kr2 from '../assets/Kori/IMG_0441.JPG';
import kr3 from '../assets/Kori/IMG_0496.JPG';
import kr4 from '../assets/Kori/IMG_0498.JPG';

// Langtang
import lt1 from '../assets/Langtang/20221015_102133145_iOS.jpg';
import lt2 from '../assets/Langtang/IMG_5520.HEIC';
import lt3 from '../assets/Langtang/IMG_5521.HEIC';
import lt4 from '../assets/Langtang/IMG_5523.HEIC';

// Mardi
import md1 from '../assets/Mardi/20201209_043004469_iOS.jpg';
import md2 from '../assets/Mardi/20201210_005105373_iOS.jpg';
import md3 from '../assets/Mardi/IMG_1553.JPG';
import md4 from '../assets/Mardi/IMG_1560.JPG';
import md5 from '../assets/Mardi/IMG_1388.JPG';

// Panch Pokhari
import pp1 from '../assets/PanchPokhari/IMG_0473.HEIC';
import pp2 from '../assets/PanchPokhari/IMG_0487.HEIC';
import pp3 from '../assets/PanchPokhari/IMG_0512.HEIC';
import pp4 from '../assets/PanchPokhari/IMG_0520.HEIC';
import pp5 from '../assets/PanchPokhari/IMG_0634.HEIC';

const Home = () => {
  const experiences = [
    {
      id: 'it',
      title: 'IT Experience',
      description: 'Senior React developer with years of experience building scalable, performant web applications and intuitive user interfaces.',
      icon: Terminal,
      tag: 'Development',
      link: '/experience/it',
      images: [] // Keeping IT experience without images as requested
    },
    {
      id: 'trekking',
      title: 'Trekking Experience',
      description: 'A personal journey across the high Himalayas, focused on mental resilience, endurance, and discovering life lessons on the trail.',
      icon: Mountain,
      tag: 'Adventure',
      link: '/experience/trekking',
      images: [ap1, ap2, ap3, ap4, ap5, ap6, gk1, gk2, gk3, gk4, kr1, kr2, kr3, kr4, lt1, lt2, lt3, lt4, md1, md2, md3, md4, md5, pp1, pp2, pp3, pp4, pp5] // Added your uploaded photos
    }
  ];

  return (
    <div className="relative isolate pt-14 pb-20 px-6 sm:pt-24 lg:pt-32">
      {/* Background Gradients */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-outfit font-bold tracking-tight text-white sm:text-7xl mb-6"
          >
            Digital Craft & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300">
              Mountain Peaks
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-xl leading-8 text-slate-400 max-w-2xl mx-auto"
          >
            Senior React developer by day, Himalayan adventurer by heart. Explore my journey across two very different but equally challenging worlds.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
