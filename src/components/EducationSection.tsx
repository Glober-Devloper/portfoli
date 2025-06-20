
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import SphereModel from './3d/SphereModel';
import { Card, CardContent } from './ui/card';
import { Book } from 'lucide-react';

const educations = [
  {
    degree: "Bachelor in Computer Applications (BCA)",
    institution: "Kolhan University",
    period: "2022 - 2026",
    description: "Focused on software development, algorithms, and web technologies. Graduating with honors and received the Outstanding Graduate Award."
  },
  {
    degree: " Intermediate in Commerce ( XII )",
    institution: "Kolhan University",
    period: "2020 - 2022",
    description: "Focused on marketing, design principles, and business communication. Analyzed market trends and consumer behavior."
  },
  {
    degree: "Matriculation ( X )",
    institution: "ST. Roberts High School",
    period: "2020",
    description: "Studied fundamentals of visual communication, computer fundamentals, and design templates. Developed a strong behavioral understanding of design principles."
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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

  return (
    <div id="education" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15),_transparent_50%)]"></div>
      </div>

      <div className="absolute top-40 left-20 w-64 h-64">
        <Scene3D>
          <SphereModel size={1.2} position={[0, 0, 0]} color="#9b87f5" />
        </Scene3D>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white mb-4">
            <span className="text-primary">Education</span> Background
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-2xl mx-auto">
            My academic journey that has equipped me with the knowledge and skills necessary for success in digital design and development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="h-full overflow-hidden bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <Book size={20} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <div className="flex items-center mb-4">
                      <span className="text-primary font-medium">{edu.institution}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-400 text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-auto">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
