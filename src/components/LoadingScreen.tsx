
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => prev + 1);
      } else {
        onLoadingComplete();
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (progress === 100) onLoadingComplete();
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      <div className="relative mb-10 h-32 w-32">
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="h-full w-full rounded-xl border-4 border-primary opacity-70"></div>
        </motion.div>
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="h-full w-full rounded-xl border-4 border-blue-500 opacity-70"></div>
        </motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 h-full w-full"
        >
          <div className="h-full w-full rounded-xl border-4 border-purple-500 opacity-70"></div>
        </motion.div>
      </div>
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-white font-display">
        <span className="text-primary">Roshan</span> PORTFOLIO
      </h1>
      <div className="relative h-2 w-64 overflow-hidden rounded-full bg-gray-800">
        <motion.div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-2 text-white">{progress}%</div>
    </motion.div>
  );
};

export default LoadingScreen;
