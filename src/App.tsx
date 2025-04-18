import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Share2 } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white dark:from-[#14213D] dark:to-black text-text-primary dark:text-text-primary transition-colors duration-300">
        <Navbar />
        <ThemeToggle />
        <main className="container mx-auto px-4">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Leadership />
          <Contact />
        </main>
        <footer className="bg-slate-100 dark:bg-black py-8 mt-20 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-6">
              <SocialLink href="https://github.com/Maruthi1205" icon={<Github />} />
              <SocialLink href="https://www.linkedin.com/in/maruthi-ganesh-929988258/" icon={<Linkedin />} />
              <SocialLink href="https://www.instagram.com/tsmg_125/" icon={<Instagram />} />
              <SocialLink href="https://www.threads.net/@tsmg_125" icon={<Share2 />} />
              <SocialLink href="https://x.com/MaruthiGanesh05" icon={<Twitter />} />
            </div>
            <p className="text-center mt-6 text-text-secondary">© 2024 Maruthi Ganesh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-secondary hover:text-accent transition-colors duration-300"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default App;