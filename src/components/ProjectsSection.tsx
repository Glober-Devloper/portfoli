import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Star, Award, Eye, Trophy, Diamond } from 'lucide-react';

const projects = [
  {
    title: "3D Cityscape Animation",
    description: "An interactive 3D cityscape animation showcasing urban development",
    image: "/roshan-uploads/pro1.png",
    tags: ["Three.js", "Canvas", "React", "JavaScript"],
    viewLink: "https://the-roshan.github.io/3dcity/",
    externalLink: "https://github.com/The-Roshan/3dcity",
    featured: true
  },
  {
    title: "Personal AI Assistant App",
    description: "A personal AI assistant that helps with daily tasks and reminders by using your voice commands",
    image: "/roshan-uploads/pro2.png",
    tags: ["HTML", "APIs", "Python Library", "Python"],
    viewLink: "https://github.com/The-Roshan/assistanceai",
    externalLink: "https://github.com/The-Roshan/assistanceai",
    featured: false
  },
  {
    title: "Interactive Project Showcase",
    description: "A dynamic showcase of projects with interactive elements",
    image: "/roshan-uploads/pro3.png",
    tags: ["TypeScript", "Three.js", "React", "Node.js"],
    viewLink: "https://github.com/The-Roshan/showcase",
    externalLink: "https://github.com/The-Roshan/showcase",
    featured: true
  },
  {
    title: "Multifunctional Telegram Bots",
    description: "A Telegram bot with various utilities and interactive features",
    image: "/roshan-uploads/pro4.png",
    tags: ["Python", "Java", "Telegram API", "Flask"],
    viewLink: "https://github.com/The-Roshan/telebot",
    externalLink: "https://github.com/The-Roshan/telebot",
    featured: false
  }
];

const ProjectsSection = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div id="projects" className="min-h-screen py-20 bg-black relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/roshan-uploads/b29d115a-9cbf-4abf-8916-7cb3a050cf0c.png')] bg-cover bg-center opacity-5"></div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_center,_rgba(155,135,245,0.15),_transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.15),_transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 filter blur-[120px]"></div>
        <div className="absolute top-20 w-full h-20 bg-gradient-to-b from-purple-500/10 to-transparent blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="mb-3 inline-block">
            <Badge variant="premium" className="text-sm font-medium px-4 py-1.5 mb-4">EXCLUSIVE SHOWCASE</Badge>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-6xl font-bold font-display text-white mb-4" style={{fontFamily: 'Arial, sans-serif'}}>
            <span className="text-white">Signature</span> <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-8">
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <Award size={22} className="text-primary" />
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            A curated collection of my most innovative and Roshan projects that showcase my expertise in 3D design, 
            animation, and interactive development. Each project represents a unique solution to complex challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 rounded-2xl opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-500"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-30"></div>
              
              <Card className="relative h-full overflow-hidden bg-gray-900/80 border-0 backdrop-blur-sm shadow-2xl rounded-xl z-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden z-20">
                  <div className="absolute top-0 right-0 rotate-45 transform origin-top-right w-[180%] bg-gradient-to-r from-primary/80 to-purple-600/80 h-5"></div>
                </div>
                
                {project.featured && (
                  <div className="absolute top-3 right-0 z-30">
                    <div className="bg-black/80 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10 px-4 py-1 text-xs font-semibold rounded-l-full flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">FEATURED</span>
                    </div>
                  </div>
                )}

                <div className="relative h-80 overflow-hidden group-hover:h-80 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-20"></div>
                  
                  <div className="absolute top-6 left-6 flex gap-2 z-30">
                    <div className="flex items-center gap-2 bg-black/70 px-5 py-2.5 rounded-full backdrop-blur-md text-sm font-semibold text-white border border-primary/30 shadow-lg shadow-primary/20 overflow-hidden relative">
                      <Diamond className="w-4 h-4 text-primary/90" />
                      <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Luxury</span>
                      <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-45 animate-[shine_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6 z-30">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/80 backdrop-blur-md border border-primary/20 shadow-inner shadow-primary/10">
                      <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-primary/5 to-transparent"></div>
                      <span className="text-2xl font-bold text-white font-display relative">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8 pt-6 relative">
                  <div className="absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-primary/90 to-transparent shadow-sm shadow-primary/30"></div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-primary/90 transition-colors flex items-center gap-2 mt-1" style={{fontFamily: 'Arial, sans-serif'}}>
                    {project.title}
                    <Trophy size={18} className="text-yellow-400/80 hidden group-hover:inline-block transition-all" />
                  </h3>
                  
                  <p className="text-gray-300 mb-6 line-clamp-2 text-lg">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <Badge 
                        key={idx} 
                        variant="glow" 
                        className="px-4 py-2 text-xs font-bold rounded-md uppercase tracking-wider"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-8">
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white flex-1 flex items-center justify-center gap-2 py-6 shadow-lg shadow-primary/20 rounded-md border border-white/10"
                      onClick={() => window.open(project.viewLink, "_blank")}
                    >
                      <Eye className="w-5 h-5" />
                      <span className="font-medium text-base">View Details</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 shadow-sm py-6 px-5 rounded-md"
                      onClick={() => window.open(project.externalLink, "_blank")}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-20 flex justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 px-10 py-8 text-lg rounded-full shadow-lg shadow-primary/5"
            onClick={() => window.open("https://the-roshan.github.io/websites/", "_blank")}
          >
            Explore All Projects
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
