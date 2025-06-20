
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationsSection';
import FooterSection from '@/components/FooterSection';
import ChatbotSection from '@/components/ChatbotSection';
import Navigation from '@/components/Navigation';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/roshan-uploads/45b85894-f8dc-40f3-aa6c-600a8306e7ff.png';
      link.type = 'image/png';
      document.head.appendChild(link);
    }
    
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Simulate loading time for a smoother experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Remove roshan badge - comprehensive approach
    const hideBadge = () => {
      // Try to find the badge with multiple selectors to ensure we catch it
      const selectors = [
        '.gpte-badge', 
        '[class*="roshan"]', 
        '[class*="badge"]',
        '[class*="gpt-badge"]', 
        '[class*="love-badge"]',
        '[class*="edit-with"]',
        '[class^="love"]',
        '[id*="roshan"]',
        '[id*="badge"]',
        '[data-roshan]',
        'div[style*="position: fixed"][style*="bottom"]',
        'div[style*="position:fixed"][style*="bottom"]',
        'div[style*="z-index: 999"]',
        'div[style*="z-index:999"]'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        
        elements.forEach(element => {
          const el = element as HTMLElement;
          if (el) {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
            el.style.pointerEvents = 'none';
            el.style.height = '0';
            el.style.width = '0';
            el.style.maxHeight = '0';
            el.style.maxWidth = '0';
            el.style.overflow = 'hidden';
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.top = '-9999px';
            el.style.zIndex = '-9999';
          }
        });
      });
      
      // Additional direct approach for iframe-based badges
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        if (iframe.src && (
          iframe.src.includes('roshan') || 
          iframe.src.includes('gpt') || 
          iframe.src.includes('badge')
        )) {
          const el = iframe as HTMLElement;
          el.style.display = 'none';
          el.style.opacity = '0';
          el.style.visibility = 'hidden';
        }
      });
    };
    
    // Run badge hiding at different intervals to catch any dynamically added badges
    hideBadge();
    const intervals = [100, 500, 1000, 2000, 3000, 5000];
    
    const intervalIds = intervals.map(interval => {
      return setInterval(hideBadge, interval);
    });
    
    // Create and inject a style to hide the badge via CSS as well
    const style = document.createElement('style');
    style.textContent = `
      .gpte-badge, [class*="roshan"], [class*="badge"], [class*="gpt-badge"], [class*="love-badge"], [class*="edit-with"], [class^="love"], [id*="roshan"], [id*="badge"], [data-roshan], div[style*="position: fixed"][style*="bottom"], div[style*="position:fixed"][style*="bottom"], div[style*="z-index: 999"], div[style*="z-index:999"] { 
        display: none !important; 
        opacity: 0 !important; 
        visibility: hidden !important; 
        pointer-events: none !important;
        height: 0 !important;
        width: 0 !important;
        max-height: 0 !important;
        max-width: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
        z-index: -9999 !important;
      }
    `;
    document.head.appendChild(style);
    
    // Run a MutationObserver to catch any dynamically added badges
    const observer = new MutationObserver((mutations) => {
      hideBadge();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    });
    
    return () => {
      clearTimeout(timer);
      // Reset scroll behavior when component unmounts
      document.documentElement.style.scrollBehavior = '';
      // Clean up intervals
      intervalIds.forEach(id => clearInterval(id));
      // Disconnect observer
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navigation />
          <main className="bg-black text-white">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <FooterSection />
            <ChatbotSection />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
