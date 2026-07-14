import { motion } from 'framer-motion';

const contacts = [
  {
    label: "GitHub",
    handle: "LamaRaj",
    href: "https://github.com/LamaRaj",
    hoverColor: "group-hover:text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40",
    iconBg: "bg-slate-800 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 text-slate-300",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Raj Lama",
    href: "https://www.linkedin.com/in/rajlama/",
    hoverColor: "group-hover:text-blue-400",
    hoverBorder: "hover:border-blue-500/40",
    iconBg: "bg-blue-900/30 group-hover:bg-blue-500/10 group-hover:text-blue-400 text-blue-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "lamaraj0007@gmail.com",
    href: "mailto:lamaraj0007@gmail.com",
    hoverColor: "group-hover:text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-900/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 text-emerald-400",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "Send a message",
    href: "https://wa.me/9779767490575",
    hoverColor: "group-hover:text-green-400",
    hoverBorder: "hover:border-green-500/40",
    iconBg: "bg-green-900/30 group-hover:bg-green-500/10 group-hover:text-green-400 text-green-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full mx-auto mb-4" />
      <p className="text-slate-400 max-w-lg mx-auto mb-12">
        Have a project in mind or just want to say hi? Feel free to reach out through any of the platforms below.
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-left">
        {contacts.map((contact, index) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith('mailto') ? undefined : '_blank'}
            rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`glass group flex items-center gap-5 p-6 rounded-2xl border border-white/5 ${contact.hoverBorder} hover:bg-white/5 transition-all duration-300`}
          >
            <div className={`p-3 rounded-xl transition-all duration-300 ${contact.iconBg}`}>
              {contact.icon}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-0.5">{contact.label}</p>
              <p className={`font-semibold text-white transition-colors ${contact.hoverColor}`}>{contact.handle}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
