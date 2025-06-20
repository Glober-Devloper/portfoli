
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

const initialMessages = [
  { role: 'bot', content: 'Hello! How can I help you today?' },
];

const responseOptions = [
  {
    triggers: ['portfolio', 'work', 'projects'],
    response: "I'd be happy to discuss my portfolio! I specialize in 3D design, UI/UX, and interactive web development. Would you like to know about a specific project?"
  },
  {
    triggers: ['experience', 'worked', 'background'],
    response: "I have over 4 years of experience working with leading design firms and tech companies. My focus has been on creating immersive digital experiences through 3D visualization and interactive interfaces."
  },
  {
    triggers: ['contact', 'hire', 'email', 'reach'],
    response: "Great! You can reach me at roshanjsr5555@gmail.com or fill out the contact form at the bottom of this page. I'm currently available for freelance work and collaborations."
  },
  {
    triggers: ['skills', 'tools', 'technologies'],
    response: "My technical toolkit includes Three.js, WebGL, React, GSAP for animations, Blender for 3D modeling, and various design tools like Figma and Adobe Creative Suite."
  },
  {
    triggers: ['certifications', 'courses', 'learning'],
    response: "I have completed several certifications in AI, Data Science, and Web Development or more. These courses have equipped me with the latest skills and knowledge in the industry."
  },
  {
    triggers: ['education', 'study', 'school'],
    response: "I am learning Bachelor in Computer Applications (BCA) from Kolhan University, where I focused on software development and web technologies. I'm also continuously learning through online courses and certifications."
  },
  {
    triggers: ['future', 'goals', 'plans'],
    response: "In the future, I aim to deepen my expertise in AI-driven design and explore more immersive technologies like AR/VR. I'm also interested in mentoring aspiring designers and developers."
  },
  {
    triggers: ['hobbies', 'interests', 'fun'],
    response: "In my free time, I enjoy exploring new design trends, contributing to open-source projects, and experimenting with new technologies in the 3D space."
  },
  {
    triggers: ['hi', 'hello', 'hey'],
    response: "Hi there! Thanks for reaching out. I am developed by Roshan Kumar. How can I assist you today?"
  }
];

const fallbackResponse = "Thanks for your message! If you'd like to discuss something specific about my work or a potential collaboration, please let me know more details or contact me directly at roshanjsr5555@gmail.com.";

const ChatbotSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    
    // Simulate thinking
    setTimeout(() => {
      // Generate response
      const userInput = input.toLowerCase();
      const matchedOption = responseOptions.find(option => 
        option.triggers.some(trigger => userInput.includes(trigger))
      );
      
      const botResponse = matchedOption ? matchedOption.response : fallbackResponse;
      
      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    }, 1000);
    
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat button */}
      <div className="fixed right-6 bottom-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-white"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed right-6 bottom-24 z-50 w-[350px] sm:w-[400px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800"
          >
            {/* Chat header */}
            <div className="bg-gray-800 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mr-3">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Chat Assistant</h3>
                  <p className="text-gray-400 text-xs">Ask me anything</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-gray-300"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-4 py-3 rounded-lg max-w-[80%] ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-br-none' 
                        : 'bg-gray-800 text-white rounded-bl-none'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-grow bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary px-4 rounded-r-lg flex items-center justify-center text-white"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotSection;
