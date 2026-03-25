import { Link } from 'react-router-dom';
import { Linkedin, Heart, ExternalLink, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, path: 'https://github.com/LamaRaj' },
    { icon: Linkedin, path: 'https://www.linkedin.com/in/rajlama/' },
  ];

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md pt-20 pb-10 mt-20 relative overflow-hidden">
      {/* Nature Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-outfit font-bold tracking-tight mb-6 block">
              Portfolio<span className="text-emerald-500">.</span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              Combining the art of modern web development with the spirit of Himalayan adventure. Built for reliability, designed for speed.
            </p>
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.path}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-emerald-500/50 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold mb-8">Navigation</h4>
            <div className="flex flex-col gap-4 text-slate-400 font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/experience/it" className="hover:text-white transition-colors">IT Experience</Link>
              <Link to="/experience/trekking" className="hover:text-white transition-colors">Trekking Guide</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold mb-8">Contact</h4>
            <div className="flex flex-col gap-4 text-slate-400 font-medium">
              <a href="mailto:lamaraj0007@gmail.com" className="hover:text-white transition-colors">lamaraj0007@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
