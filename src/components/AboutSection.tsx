import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import SphereModel from './3d/SphereModel';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  Star, 
  Globe, 
  Layers, 
  Heart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Rocket,
  Zap,
  Gem,
  Award,
  Trophy
} from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and animation effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.8]);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const [activeSkillCategory, setActiveSkillCategory] = useState('development');

  const skills = {
    development: [
      { name: 'React', level: 42, icon: <Code size={18} /> },
      { name: 'TypeScript', level: 60, icon: <Code size={18} /> },
      
      { name: 'Python', level: 65, icon: <Code size={18} /> },
      { name: 'Java', level: 59, icon: <Code size={18} /> },
      { name: 'Node.js', level: 48, icon: <Code size={18} /> },
      { name: 'C/C++', level: 70, icon: <Code size={18} /> },
      
      // { name: 'JavaScript', level: 80, icon: <Code size={18} /> },
      // { name: 'Github', level: 90, icon: <Code size={18} /> },
      // { name: 'MySQL/DSA', level: 40, icon: <Code size={18} /> },
      // { name: 'DBMS', level: 45, icon: <Code size={18} /> }
    ],
    design: [
      { name: 'UI/UX Design', level: 74, icon: <Layers size={18} /> },
      { name: '3D Modeling', level: 30, icon: <Layers size={18} /> },
      { name: 'Motion Design', level: 37, icon: <Layers size={18} /> },
      { name: 'Illustration', level: 35, icon: <Layers size={18} /> },
      { name: 'HTML/CSS/Js', level: 90, icon: <Code size={18} /> },
      { name: 'Three.js', level: 55, icon: <Code size={18} /> },
      // { name: 'Kali Linux', level: 32, icon: <Layers size={18} /> },
      // { name: 'Visual Studio', level: 90, icon: <Layers size={18} /> },
    ],
    other: [
      { name: 'Project Management', level: 88, icon: <Star size={18} /> },
      { name: 'Team Leadership', level: 64, icon: <Star size={18} /> },
      { name: 'Client Communication', level: 65, icon: <Star size={18} /> },
      { name: 'Problem Solving', level: 92, icon: <Star size={18} /> },
      // { name: 'Canva', level: 50, icon: <Layers size={18} /> },
      // { name: 'Cursor AI', level: 65, icon: <Layers size={18} /> },
    //   { name: 'Adaptability', level: 80, icon: <Star size={18} /> },
    //   { name: 'Creativity', level: 85, icon: <Star size={18} /> },
    //   { name: 'Critical Thinking', level: 90, icon: <Star size={18} /> },
     ]
  };

  const tools = [
     'Photoshop', 'Kali Linux', 'Cursor AI', 'Canva',
    'Illustrator', 'VS Code', 'git', 'GitHub', 'DBMS',
    'Google Tools', 'Firebase', 'Tailwind CSS', 'ChatGPT',
    'API/CDN', 'CDN', '3d Designing', 'Turmux', 'Microsoft Tools',
  ];

  const achievements = [
    { 
      number: '95+', 
      text: 'Projects Completed', 
      icon: <Award size={20} className="text-white" /> 
    },
    { 
      number: '4+', 
      text: 'Years Experience', 
      icon: <Star size={20} className="text-white" /> 
    },
    { 
      number: '5+', 
      text: 'Happy Clients', 
      icon: <Heart size={20} className="text-white" /> 
    },
    { 
      number: '8', 
      text: 'Industry Awards', 
      icon: <Trophy size={20} className="text-white" /> 
    },
  ];

  return (
    <div id="about" ref={containerRef} className="min-h-screen py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(155,135,245,0.15),_transparent_70%)]"></div>
        <motion.div 
          style={{ y }}
          className="absolute -bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute top-40 right-20 w-56 h-56 bg-primary/10 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            style={{ opacity }}
            className="w-full lg:w-1/2 flex flex-col items-center"
          >
            {/* Updated profile photo with luxury frame */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-purple-500/50 to-primary/70 rounded-lg transform rotate-6 scale-[1.03] blur-sm"></div>
              <div className="w-64 h-80 md:w-80 md:h-96 rounded-lg border-2 border-primary/30 p-2 relative z-10 overflow-hidden backdrop-blur-sm bg-black/30">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-full overflow-hidden rounded-md"
                >
                  <img 
                    src="/roshan-uploads/45b85894-f8dc-40f3-aa6c-600a8306e7ff.png" 
                    alt="Profile Photo" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-primary/10 blur-[100px]"></div>
            </div>
            
            {/* Enhanced social media links with different URLs */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <SocialIcon icon={<Github />} href="https://github.com/The-Roshan" />
              <SocialIcon icon={<Linkedin />} href="https://in.linkedin.com/in/roshan07" />
              <SocialIcon icon={<Mail />} href="mailto:roshanjsr5555@gmail.com" />
              <SocialIcon icon={<Instagram />} href="https://www.instagram.com/roshan_etc?igsh=ZGUzMzM3NWJiOQ==" />
              <SocialIcon icon={<Facebook />} href="https://www.facebook.com/share/vn56QwSwznvaprXL/?mibextid=qi2Omg" />
              <SocialIcon icon={<Twitter />} href="https://twitter.com/" />
              <SocialIcon icon={<Youtube />} href="https://youtube.com/@Glober_Devloper" />
            </div>

           <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="flex items-center space-x-2 bg-gradient-to-r from-primary/80 to-purple-600/80 hover:from-primary hover:to-purple-600 text-white border-none shadow-lg shadow-primary/20">
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </Button>
            </motion.div>

            {/* Enhanced achievements section with icons */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-10"
            >
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 p-5 rounded-lg text-center relative z-10 h-full flex flex-col items-center justify-center hover:border-primary/30 transition-colors duration-300">
                    <div className="bg-primary/10 p-2 rounded-full mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-1">{item.number}</h3>
                    <p className="text-gray-300 text-sm">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full lg:w-1/2"
          >
            <motion.h2 
              variants={itemVariants} 
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              About <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
              <Gem size={16} className="text-primary" />
              <div className="h-[1px] w-12 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg mb-6"
            >
              I'm Roshan Kumar Prajapati developer and designer with a passion for building immersive digital experiences that push the boundaries of web technology. With over 4 years of experience in the Self Projects, I am capable of creating award-winning websites and interactive applications.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-lg mb-8"
            >
              I believe that great digital products are born at the intersection of art, technology, and human psychology. My approach combines cutting-edge web technologies with thoughtful design principles to create experiences that not only look impressive but feel intuitive and engaging to users.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Rocket size={14} className="text-primary" />
                </div>
                My Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {['3D Development', 'Roshan Coding', 'UI/UX Design', 'Frontend Development', 'Interactive Experiences', 'WebGL', 'Animation', 'Responsive Design'].map((tag, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(155, 135, 245, 0.3)' }}
                  >
                    <Badge key={i} variant="outline" className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 text-primary border-primary/30 px-3 py-1.5">
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Completely redesigned skills section with circular gauge pattern */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap size={14} className="text-primary" />
                  </div>
                  Professional Skills
                </h3>
                <div className="flex gap-2">
                  <SkillTab 
                    active={activeSkillCategory === 'development'}
                    onClick={() => setActiveSkillCategory('development')}
                    label="Development"
                  />
                  <SkillTab 
                    active={activeSkillCategory === 'design'}
                    onClick={() => setActiveSkillCategory('design')}
                    label="Design"
                  />
                  <SkillTab 
                    active={activeSkillCategory === 'other'}
                    onClick={() => setActiveSkillCategory('other')}
                    label="Other"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills[activeSkillCategory].map((skill, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative"
                  >
                    <CircularSkill 
                      name={skill.name}
                      percentage={skill.level}
                      icon={skill.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                  <Globe size={14} className="text-primary" />
                </div>
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge key={i} className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 py-1.5 px-3 border border-gray-700 hover:border-primary/30">
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <FeatureCard 
            number="01"
            title="3D Development"
            icon={<Globe size={24} className="text-primary" />}
            description="Creating immersive 3D experiences for web using Three.js, WebGL, and React Three Fiber. From product configurators to interactive storytelling."
          />
          
          <FeatureCard 
            number="02"
            title="UI/UX Design"
            icon={<Layers size={24} className="text-primary" />}
            description="Designing intuitive and visually appealing interfaces focused on user experience, with expertise in Figma, Adobe XD and modern design systems."
          />
          
          <FeatureCard 
            number="03"
            title="Roshan Coding"
            icon={<Heart size={24} className="text-primary" />}
            description="Building interactive animations and visual experiences using GSAP, Framer Motion, Canvas and SVG for eye-catching, performant web applications."
          />
        </motion.div>

        {/* Personal story and philosophy section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-24"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-6"
          >
            My Story & <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Philosophy</span>
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 mb-4">
                My journey began with a deep fascination for both art and technology. As a child, I was equally drawn to painting and disassembling computers to understand how they worked. This dual passion eventually led me to pursue a career where I could blend Roshan expression with technical problem-solving.
              </p>
              <p className="text-gray-300 mb-4">
                In my degree in Computer Applications and Design, I spent several years at digital agencies, working on projects for clients ranging from startups to Fortune 5 companies. These experiences taught me the importance of balancing aesthetic beauty with functional purpose and business goals.
              </p>
              <p className="text-gray-300">
                Today, I approach each project with a commitment to pushing boundaries while maintaining focus on the end user. I believe that truly impactful digital experiences happen when innovation meets intuitive design and flawless execution.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl blur-sm"></div>
                <Card className="bg-gray-900/30 border-gray-800/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 h-full relative">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-4">Design Philosophy</h4>
                    <ScrollArea className="h-[200px] rounded-md">
                      <div className="space-y-4 pr-4">
                        <div>
                          <h5 className="text-primary font-medium mb-1 flex items-center gap-2">
                            <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                              <Star size={10} className="text-primary" />
                            </div>
                            User-Centered Approach
                          </h5>
                          <p className="text-gray-400 text-sm">
                            Every decision I make starts with understanding the user's needs, goals, and context. Empathy drives my design process.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-primary font-medium mb-1">
                            Balance Form & Function
                          </h5>
                          <p className="text-gray-400 text-sm">
                            Beautiful aesthetics should never compromise usability; likewise, functional interfaces shouldn't sacrifice visual appeal.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-primary font-medium mb-1">
                            Thoughtful Animation
                          </h5>
                          <p className="text-gray-400 text-sm">
                            Motion and animation should serve a purpose—providing feedback, guiding attention, or expressing brand personality.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-primary font-medium mb-1">
                            Performance Matters
                          </h5>
                          <p className="text-gray-400 text-sm">
                            Creating visually rich experiences that maintain smooth performance across all devices is essential for a quality user experience.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-primary font-medium mb-1">
                            Accessible By Design
                          </h5>
                          <p className="text-gray-400 text-sm">
                            Digital experiences should be inclusive and accessible to people of all abilities and backgrounds.
                          </p>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Enhanced Feature card component for services
const FeatureCard = ({ number, title, description, icon }) => {
  return (
    <motion.div 
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: { 
          y: 0, 
          opacity: 1, 
          transition: { duration: 0.5 }
        }
      }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-all duration-300"></div>
      <Card className="bg-gray-900/70 backdrop-blur-sm border border-gray-800/50 h-full relative z-10 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
            {icon ? icon : <span className="text-2xl font-bold text-primary">{number}</span>}
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// SocialIcon component with href prop
const SocialIcon = ({ icon, href }) => {
  return (
    <motion.a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1, backgroundColor: 'rgba(155, 135, 245, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-gradient-to-br from-gray-900 to-gray-800 hover:from-primary/20 hover:to-purple-600/20 rounded-full transition-all duration-300 border border-gray-800 hover:border-primary/30"
    >
      {React.cloneElement(icon, { size: 18, className: "text-white" })}
    </motion.a>
  );
};

// New Skill Tab component
const SkillTab = ({ active, onClick, label }) => {
  return (
    <Button 
      variant={active ? 'default' : 'outline'}
      size="sm"
      onClick={onClick}
      className={active ? 
        'bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none shadow-md shadow-primary/20' : 
        'border-gray-700 hover:border-primary/50'
      }
    >
      {label}
    </Button>
  );
};

// New Circular Skill component
const CircularSkill = ({ name, percentage, icon }) => {
  const circumference = 2 * Math.PI * 35;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-2">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="35"
            className="stroke-gray-800"
            strokeWidth="6"
            fill="none"
          />
          
          {/* Progress circle with gradient */}
          <circle
            cx="50"
            cy="50"
            r="35"
            className="stroke-primary"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              stroke: "url(#skillGradient)",
              transition: "stroke-dashoffset 1s ease"
            }}
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9b87f5" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-lg font-bold text-primary">{percentage}%</div>
        </div>
        
        {/* Icon badge */}
        <div className="absolute -right-1 -bottom-1 bg-gradient-to-br from-primary to-purple-600 p-1.5 rounded-full">
          {icon}
        </div>
      </div>
      <span className="text-sm text-gray-300 text-center">{name}</span>
    </div>
  );
};

export default AboutSection;