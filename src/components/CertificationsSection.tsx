import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Award, FileImage } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const certifications = [
  {
    title: "Artificial Intelligence using Python",
    issuer: "Great Learning",
    date: "2024",
    description: "Gained a comprehensive understanding of AI concepts and their applications using Python.",
    image: "/roshan-uploads/a0608b65-2256-462c-806c-ec565ade0387.png",
    link: "https://drive.google.com/open?id=1khqV00975ZxwcEYlNN6lOKJgd2UjwL_U&usp=drive_fs"
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "Great Learning",
    date: "2024",
    description: "Mastered data structures and algorithms with a focus on Java programming, enhancing problem-solving skills.",
    image: "/roshan-uploads/b29d115a-9cbf-4abf-8916-7cb3a050cf0c.png",
    link: "https://drive.google.com/open?id=1EKvDGGFhCWkJu7MNPBCK93jLlMrT8_yb&usp=drive_fs"
  },
  {
    title: "Data Science and using Python",
    issuer: "Great Learning",
    date: "2024",
    description: "Gained a comprehensive understanding of data science concepts and their applications using Python.",
    image: "/roshan-uploads/29b0b50a-2588-4014-b8db-92bdb8aaac0d.png",
    link: "https://drive.google.com/open?id=11V8epqKf2_yJDWcsF3wwaPiXxXOxXNWA&usp=drive_fs"
  },
  {
    title: "Cloud Foundation Advanced",
    issuer: "Great Learning",
    date: "2023",
    description: "Gained a comprehensive understanding of cloud computing concepts and their applications.",
    image: "/roshan-uploads/29b0b50a-2588-4014-b8db-92bdb8aaac0d.png",
    link: "https://drive.google.com/open?id=1a6NPoN89uyXMEJULkscPkqvffYVF4MXW&usp=drive_fs"
  },
  {
    title: "Web Development with HTML, CSS, and JavaScript",
    issuer: "Great Learning",
    date: "2023",
    description: "Comprehensive training in web development technologies including HTML, CSS, and JavaScript.",
    image: "/roshan-uploads/b51820df-4cc5-4974-9dbb-37c711760c30.png",
    link: "https://drive.google.com/open?id=1a_T0EpTbinNCU5zueMqoraASzwzcv45G&usp=drive_fs"
  },
  {
    title: "My all Certifications",
    issuer: "Great Learning",
    date: "2023-2025",
    description: "A collection of all my certifications showcasing my skills and expertise in various domains. This includes certifications in AI, Data Science, Web Development, and more.",
    image: "/roshan-uploads/29b0b50a-2588-4014-b8db-92bdb8aaac0d.png",
    link: "https://drive.google.com/open?id=1yNQHW3JLbO-oCP43ovls3NG6HTW-MEM4&usp=drive_fs"
  }
];

const CertificationsSection = () => {
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
    <div id="certifications" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_rgba(217,70,239,0.15),_transparent_50%)]"></div>
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
            Professional <span className="text-primary">Certifications</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-16 h-1 bg-primary mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-300 text-lg max-w-2xl mx-auto">
            Credentials that validate my expertise and commitment to continuous learning in design and development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                        <Badge variant="premium" className="ml-2">{cert.date}</Badge>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-primary font-medium">{cert.issuer}</span>
                      </div>
                      <p className="text-gray-300 mb-6">{cert.description}</p>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        <FileImage size={16} />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
