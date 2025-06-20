import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Scene3D from './3d/Scene3D';
import TorusModel from './3d/TorusModel';
import { Facebook, Github, Instagram, Linkedin, Mail, MessageSquare, Phone, Twitter } from 'lucide-react';

const FooterSection = () => {
  const formRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: false, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://in.linkedin.com/in/roshan07", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/The-Roshan", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/roshan_etc?igsh=ZGUzMzM3NWJiOQ==", label: "Instagram" },
    { icon: Mail, href: "mailto:roshanjsr5555@gmail.com", label: "Email" },
    // { icon: Phone, href: "tel:+917061126213", label: "Phone" },
    { icon: MessageSquare, href: "https://wa.me/917061126213", label: "WhatsApp" },
    { icon: Facebook, href: "https://www.facebook.com/share/vn56QwSwznvaprXL/?mibextid=qi2Omg", label: "Facebook" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_rzq5ukq',
      'template_phar57z',
      formRef.current,
      'IvvqNIQ0Y1RToDgC7'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <footer id="contact" className="py-16 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(155,135,245,0.2),_transparent_70%)]"></div>
      </div>

      <div className="absolute -bottom-10 -right-10 w-64 h-64">
        <Scene3D>
          <TorusModel size={1.5} position={[0, 0, 0]} color="#D946EF" />
        </Scene3D>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={inViewRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div variants={itemVariants} className="md:col-span-1">
              <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-8">
                Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new opportunities and Roshan collaborations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <Mail size={18} className="text-primary mr-3" />
                  <span>roshanjsr5555@gmail.com</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Phone size={18} className="text-primary mr-3" />
                  <span>+91 70611-26213</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <MessageSquare size={18} className="text-primary mr-3" />
                  <span>@RoshanKumar</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="from_name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="from_name"
                      className="w-full bg-gray-900/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="from_email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="from_email"
                      className="w-full bg-gray-900/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    className="w-full bg-gray-900/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    className="w-full bg-gray-900/60 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-8 py-3 bg-primary rounded-lg text-white font-medium hover:bg-opacity-90 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Roshan Portfolio. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
