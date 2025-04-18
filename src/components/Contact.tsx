import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        ref={ref}
        variants={formVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-3xl mx-auto">
          <div className="card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-text-heading mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-[#14213D] border border-accent focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-text-heading mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-[#14213D] border border-accent focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-text-heading mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#14213D] border border-accent focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-text-heading mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-[#14213D] border border-accent focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 h-32 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(252,163,17,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-accent text-black font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
            <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
              <motion.a
                href="mailto:22311a0469@ece.sreenidhi.edu.in"
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-text-secondary hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>22311a0469@ece.sreenidhi.edu.in</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-text-secondary"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Available for opportunities</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;