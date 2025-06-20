import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Scene3D from './3d/Scene3D';
import TorusModel from './3d/TorusModel';
import SphereModel from './3d/SphereModel';
import CubeModel from './3d/CubeModel';
import TextModel from './3d/TextModel';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Star, Rocket, Layers, Diamond } from 'lucide-react';

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const decorLineRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (textRef.current && subtitleRef.current && decorLineRef.current && statCardsRef.current) {
      tl.fromTo(
        textRef.current.children, 
        { y: 100, opacity: 0 },
        // { y: 0, opacity: 1, duration: 1, stagger: 0.1 } 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
      ).fromTo(
        subtitleRef.current, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1 }, 
        '-=0.5'
      ).fromTo(
        decorLineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8 },
        '-=0.3'
      ).fromTo(
        statCardsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        '-=0.4'
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0">
        <Scene3D>
          <TorusModel size={3} position={[-5, 2, -5]} color="#9b87f5" />
          <TorusModel size={2} position={[5, -2, -3]} color="#0EA5E9" />
          <TorusModel size={4} position={[0, -3, -8]} color="#D946EF" />
          <SphereModel size={1.5} position={[4, 3, -6]} color="#f59b87" />
          <CubeModel size={1.2} position={[-3, -1, -4]} color="#87f5e9" />
          <TextModel text="Roshan" position={[0, 4, -10]} size={0.8} color="#ffffff" />
        </Scene3D>
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70"></div>
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-primary/50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Main content - Adjusted for mobile */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 md:px-8 pt-20 md:pt-0">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 md:mb-6"
        >
          <Badge variant="premium" className="py-1 px-4 md:py-1.5 md:px-6 text-xs md:text-sm backdrop-blur-xl">
            <Diamond size={12} className="mr-1 md:mr-2 animate-pulse" /> Premium Portfolio
          </Badge>
        </motion.div>
        
        {/* Main heading - Responsive sizing */}
        <h1 ref={textRef} className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-3 md:mb-4 text-center tracking-tight leading-tight">
          {Array.from("Roshan Portfolio").map((char, index) => (
            <span key={index} className="inline-block relative">
              {char === " " ? "\u00A0" : char}
              {Math.random() > 0.7 && char !== " " && (
                <motion.span
                  className="absolute -top-1 -right-1 w-1 h-1 md:w-2 md:h-2 bg-primary rounded-full"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: Math.random() * 3 }}
                />
              )}
            </span>
          ))}
        </h1>
        
        {/* Decorative line */}
        <motion.div 
          ref={decorLineRef}
          className="w-16 h-0.5 md:w-24 md:h-1 bg-gradient-to-r from-purple-500 via-primary to-blue-500 rounded-full mb-4 md:mb-6"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
        
        {/* Subtitle - More compact on mobile */}
        <p 
          ref={subtitleRef} 
          className="text-sm md:text-xl lg:text-2xl text-gray-300 max-w-xs md:max-w-2xl text-center mb-6 md:mb-10 px-4 leading-relaxed"
        >
          Designing and building immersive digital experiences
        </p>
        
        {/* Stats/Features Cards - Now visible on mobile with better layout */}
        <div 
          ref={statCardsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12 w-full max-w-5xl px-2 md:px-4"
        >
          {[
            { icon: Star, title: "Roshan Design", value: "Premium" },
            { icon: Rocket, title: "Performance", value: "Optimized" },
            { icon: Layers, title: "Projects", value: "85+" },
            { icon: Diamond, title: "Experience", value: "4+ Yrs" }
          ].map((stat, index) => (
            <Card key={index} className="border-0 bg-black/30 backdrop-blur-xl hover:bg-black/40 transition-all group">
              <CardContent className="p-2 md:p-4 flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="mb-1 md:mb-0 md:mr-4 p-2 md:p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <stat.icon size={16} className="md:w-5 md:h-5 text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs md:text-sm">{stat.title}</p>
                  <p className="text-white font-bold text-sm md:text-xl">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Button - Fixed styling for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative mb-8 md:mb-0"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse"></div>
          
          <a 
            href="#about" 
            className="relative inline-block px-6 py-3 md:px-8 md:py-4 bg-primary text-white rounded-full font-bold text-sm md:text-base hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 transform hover:scale-105 active:scale-95"
          >
            Explore My Work
          </a>
        </motion.div>
        
        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center"
        >
          <div className="flex flex-col items-center">
            <p className="text-primary text-xs md:text-sm font-medium tracking-wide mb-2">Scroll Down</p>
            <motion.div 
              animate={{ y: [0, 8, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <svg width="20" height="20" className="md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/30 blur-lg"
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
