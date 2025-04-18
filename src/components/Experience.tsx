import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Student Intern',
      organization: 'Bharat Dynamics Limited',
      period: 'Summer 2023',
      location: 'Hyderabad, India',
      description: 'Gained hands-on experience in defense technology systems and manufacturing processes.',
      logo: 'https://www.bdl-india.in/sites/default/files/BDL%20Logo_9%20%282%29.jpg',
    },
    {
      title: 'Student Network Team Member',
      organization: 'IEEE Hyderabad Section',
      period: '2022 - Present',
      location: 'Hyderabad, India',
      description: 'Collaborate with student branches across the region to organize technical events and workshops.',
      logo: 'https://ieeehyd.org/sac/images/SN_Logo_Circular.png',
    },
    {
      title: 'Chair-Person',
      organization: 'IEEE Sensors Council',
      period: '2023 - Present',
      location: 'Hyderabad, India',
      description: 'Lead initiatives related to sensor technologies and organize technical sessions and workshops.',
      logo: 'https://ieee-aess.org/files/ieeeaess/styles/responsive_4_3_760w/public/images/media/photos/sensors_council.png?h=26a8ddfe&itok=3leomf0r',
    },
    {
      title: 'Secretary',
      organization: 'IEEE Nanotechnology Council',
      period: '2023 - Present',
      location: 'Hyderabad, India',
      description: 'Coordinate administrative activities and maintain documentation for the council.',
      logo: 'https://ieeenano.org/wp-content/uploads/2012/02/Nano-logo.jpg',
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
    <section id="experience" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card flex md:flex-row gap-6 items-center" // Added items-center
            >
              <div className="flex-shrink-0 w-24 h-16 flex items-center justify-center"> {/* Fixed size for logo container */}
                <img
                  src={exp.logo}
                  alt={`${exp.organization} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-text-heading">{exp.title}</h3>
                <h4 className="text-lg font-medium text-accent mb-2">{exp.organization}</h4>
                <div className="flex flex-wrap gap-4 mb-3 text-text-tertiary">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="text-text-secondary">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;