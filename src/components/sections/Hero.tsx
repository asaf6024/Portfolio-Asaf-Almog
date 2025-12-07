import { motion } from 'framer-motion';
import { ChevronDown, Briefcase, BookOpen, Users, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import asafPhoto from '@/assets/asaf-photo.png';

const highlights = [
  { icon: Briefcase, title: '4 Years of', subtitle: 'Experience' },
  { icon: BookOpen, title: 'Great', subtitle: 'Self-Learning' },
  { icon: Users, title: 'A Team', subtitle: 'Player' },
  { icon: ThumbsUp, title: 'Willing to', subtitle: 'Work Hard' },
];

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-display text-muted-foreground mb-2"
            >
              Hi, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4"
            >
              <span className="gradient-text">Asaf!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl text-foreground mb-6"
            >
              I'm a <span className="text-primary font-semibold">Front End Developer.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Well-versed in numerous programming languages including{' '}
              <span className="text-foreground italic">React JS, Vue.js, JavaScript, CSS</span> and more..
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.subtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-sm text-muted-foreground font-display">{item.title}</p>
                  <p className="text-sm font-semibold text-foreground">{item.subtitle}</p>
                  <item.icon className="w-8 h-8 mx-auto mt-2 text-primary" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio" className="gap-2">
                  Let's Start
                  <ChevronDown className="w-5 h-5 animate-bounce" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/10 blur-3xl rounded-full transform scale-75 animate-pulse-glow" />
              
              <motion.img
                src={asafPhoto}
                alt="Asaf Almog - Front End Developer"
                className="relative z-10 max-h-[500px] object-contain animate-float"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:text-primary transition-colors"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce hover:text-primary" />
      </motion.a>
    </section>
  );
};
