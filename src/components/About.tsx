import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const skillCards = [
    { icon: <Brain className="w-8 h-8" />, title: 'AI & ML', description: 'Deep learning, Neural Networks, Computer Vision' },
    { icon: <Database className="w-8 h-8" />, title: 'Data Analytics', description: 'Statistical Analysis, Data Visualization, Big Data' },
    { icon: <Code className="w-8 h-8" />, title: 'Programming', description: 'Python, JavaScript, C++' },
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Problem Solving', description: 'Analytical Thinking, Creative Solutions' },
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">About Me</h2>
        <motion.p className="text-lg mb-12 text-text-secondary text-justify"> {/* Added text-justify */}
          I am Maruthi Ganesh, a highly motivated AI enthusiast, innovative engineer, and proactive tech leader dedicated to leveraging cutting-edge technology for real-world problem-solving. I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering at Sreenidhi Institute of Science and Technology. I excel in dynamic environments, possess a strong aptitude for tackling complex challenges, and am committed to continuous learning and innovation.

          Beyond my technical pursuits, I actively contribute to the IEEE Hyderabad Section Student Network, where I collaborate with student branches to organize impactful technology initiatives. As a team leader and hackathon participant, I am passionate about mentoring peers, driving impactful projects, and fostering communities that promote innovation.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCards.map((skill, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              className="card flex flex-col items-center text-center p-6"
            >
              <div className="text-accent mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">{skill.title}</h3>
              <p className="text-text-secondary">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;