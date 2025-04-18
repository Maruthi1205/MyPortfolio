import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Maruthi1205' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/maruthi-ganesh-929988258/' },
    { icon: <Instagram className="w-6 h-6" />, href: 'https://www.instagram.com/tsmg_125/' },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://x.com/MaruthiGanesh05' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left md:max-w-xl">
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-text-heading mb-4"
            >
              Hello, I'm Maruthi Ganesh
            </motion.h1>
            <TypeAnimation
              sequence={[
                'Engineer',
                1000,
                'AI Enthusiast',
                1000,
                'Problem Solver',
                1000,
                'Critical Thinker',
                1000,
                'Leader',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-2xl text-accent font-semibold mb-8"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl mb-12 md:max-w-2xl text-text-secondary"
            >
              B.Tech Electronics and Communication Student Passionate about AI and Data Science
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex justify-center md:justify-start space-x-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-tertiary hover:text-accent transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 md:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-accent/20 blur-xl animate-pulse"></div>
              <motion.img
                src="/myprofileimg.jpg"
                alt="Maruthi Ganesh"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-accent shadow-xl"
                whileHover={{ scale: 1.05 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.1}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;