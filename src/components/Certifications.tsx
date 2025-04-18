import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      provider: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      certs: [
        { name: 'Cloud Foundations', url: 'https://drive.google.com/file/d/1LeF15EdncYAuEU-KN1dc-lXCHa8qf1xd/view?usp=sharing' },
        { name: 'Data Engineering', url: 'https://drive.google.com/file/d/1bRkEbPY9IjIotfK-FgPW-YDQzif527rL/view?usp=sharing' },
      ],
    },
    {
      provider: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg',
      certs: [
        { name: 'Computer Hardware Basics', url: 'https://drive.google.com/file/d/1MyZXfcsFytaGzM9a2vVjeh12spQWrde2/view?usp=sharing' },
        { name: 'English for IT-1', url: 'https://drive.google.com/file/d/1R881ZBtantK3qHIC79bF14pChxGOHthw/view?usp=sharing' },
        { name: 'Introduction to Data Science', url: 'https://drive.google.com/file/d/1NzW4Q7GakK1W6_LUHUv3e6K5Gf9Kd79U/view?usp=sharing' },
        { name: 'JavaScript Essentials', url: 'https://drive.google.com/file/d/1Yc_IW0nXNyh9z0R-adJjM5nGdPnetg39/view?usp=sharing' },
        { name: 'Python Essentials', url: 'https://drive.google.com/file/d/1PseD46ta40n9-43aQTYMT8B4v5h4gf-x/view?usp=sharing' },
      ],
    },
    {
      provider: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg',
      certs: [
        { name: 'Welcome to ServiceNow', url: 'https://drive.google.com/file/d/1HXU-jpKdqKy9oe5E5ehFyJqa56VfCS3p/view?usp=sharing' },
        { name: 'Flow Designer', url: 'https://drive.google.com/file/d/1q9mTs8FDUWMgdbWR_95upswDknRH0Nxs/view?usp=sharing' },
      ],
    },
    {
      provider: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
      certs: [
        { name: 'Prompt Engineering', url: 'https://drive.google.com/file/d/1a8SnIlZTmx85X5QiLc_R8VBcJjv-ESZX/view?usp=sharing' },
        { name: 'SQL and RDBMS', url: 'https://drive.google.com/file/d/19h29nKrF8EtSbPvC6VCm7k9HeJslKt0G/view?usp=sharing' },
        { name: 'AI Foundations', url: 'https://drive.google.com/file/d/1X9w36j-nbOLe0t_CrQYHFDgg1kn9MYu_/view?usp=sharing' },
      ],
    },
    {
      provider: '',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/2560px-Hewlett_Packard_Enterprise_logo.svg.png',
      certs: [
        { name: 'AI and ML', url: '#' },
      ],
    },
    {
      provider: '',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Logo.png',
      certs: [
        { name: 'Excel Skills by JP Morgan Chase', url: 'https://drive.google.com/file/d/13G6av3ghdv2hsMBX0Pd7iA0Sr-L9csj7/view?usp=sharing' },
      ],
    },
    {
      provider: '',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnGY2DhER0IPKrKxq5IFZOpX9VSll56KMGQ&s',
      certs: [
        { name: 'Cybersecurity Job Simulation', url: 'https://drive.google.com/file/d/12_XzFT3CovPWyrNCs_p5ZnJ05dVOTnZm/view?usp=sharing' },
      ],
    },
    {
      provider: '',
      logo: 'https://cdn.worldvectorlogo.com/logos/pwc.svg',
      certs: [
        { name: 'Power BI', url: 'https://drive.google.com/file/d/1nSUnlC-_9jA8NDc--3w0YlAeIHLewZjS/view?usp=sharing' },
      ],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="certifications" className="py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card"
            >
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 mr-4 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={category.logo}
                    alt={`${category.provider} logo`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                {category.provider && (
                  <h3 className="text-xl font-semibold text-text-heading">{category.provider}</h3>
                )}
              </div>
              <ul className="space-y-3">
                {category.certs.map((cert, certIndex) => (
                  <motion.li
                    key={certIndex}
                    variants={itemVariants}
                    className="flex items-center text-text-secondary"
                  >
                    <CheckCircle className="text-accent w-4 h-4 mr-2 flex-shrink-0" />
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors duration-300"
                    >
                      {cert.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;