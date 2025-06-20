
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import TorusModel from './3d/TorusModel';
import { Card, CardContent } from './ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "4+ years of Experience in tution and teaching",
    company: "Home Tution or Online Tution",
    period: "2021 - Present",
    description: "Provided personalized tutoring in mathematics, science, and computer science to students from grades 6 to 12. Developed customized lesson plans and resources to enhance student understanding and performance."
  },
  {
    title: "UI/UX Designer",
    company: "Personal Projects",
    period: "2024 - Present",
    description: "Created user interfaces and experiences for website and web applications. Conducted user research and usability testing to improve product design and user satisfaction."
  },
  {
    title: "Junior Web Developer",
    company: "Personal Projects",
    period: "2022 - 2024",
    description: "Built responsive websites and web applications using modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect interfaces."
  },
  {
    title: "Frontend Developer",
    company: "Personal Projects",
    period: "2022 - 2023",
    description: "Developed interactive web applications using React, Three.js, and WebGL. Collaborated with designers to transform concepts into functional prototypes with emphasis on performance optimization."
  },
  {
    title: "Digital Designing and Digital Marketing",
    company: "Universal Tribes",
    period: "2022 - Present",
    description: "Lead the 3D design team in creating immersive digital experiences for clients across various industries. Responsible for implementing cutting-edge visualization techniques and mentoring junior designers."
  }
];

const ExperienceSection = () => {
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
    <div id="experience" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute -right-20 top-40 w-80 h-80">
        <Scene3D>
          <TorusModel size={1.5} position={[0, 0, 0]} color="#0EA5E9" />
        </Scene3D>
      </div>

      <div className="absolute -left-20 bottom-40 w-80 h-80">
        <Scene3D>
          <TorusModel size={1.5} position={[0, 0, 0]} color="#D946EF" />
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
            Work <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey through the Roshan and technical landscape, where I've honed my skills and contributed to innovative projects.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 mt-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-gray-900 z-10">
                  <Briefcase size={16} className="text-white" />
                </div>

                {/* Timeline content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="overflow-hidden bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="flex items-center mb-3">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
