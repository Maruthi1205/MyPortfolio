import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target } from 'lucide-react';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      count: '2+',
      title: 'Hackathons Led',
      description: 'Successfully organized and led multiple hackathon teams',
    },
    {
      icon: <Target className="w-8 h-8" />,
      count: '5+',
      title: 'Projects Managed',
      description: 'Led cross-functional teams in technical projects',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="leadership" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">Leadership & Activities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card flex flex-col items-center text-center"
            >
              <motion.div
                className="text-accent mb-4"
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-text-heading mb-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 * index }}
              >
                {item.count}
              </motion.h3>
              <h4 className="text-xl font-semibold text-accent mb-2">{item.title}</h4>
              <p className="text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;