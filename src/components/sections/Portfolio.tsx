import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { projects, type Project } from '@/data/projects';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasHoverMedia = !!(project.gif || project.video);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-xl card-gradient border border-border shadow-card hover:shadow-card-hover transition-all duration-500">
          {/* Image/GIF/Video */}
          <div className="relative aspect-video overflow-hidden">
            {/* Static Image - always rendered */}
            <img
              src={project.image}
              alt={project.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered && hasHoverMedia
                  ? 'opacity-0 scale-110'
                  : 'opacity-100 group-hover:scale-110'
              }`}
            />

            {/* Video - fades in on hover */}
            {hasHoverMedia && project.video && (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}

            {/* GIF - fades in on hover (if no video) */}
            {hasHoverMedia && project.gif && !project.video && (
              <img
                src={project.gif}
                alt={`${project.title} demo`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

            {/* Overlay buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {hasHoverMedia && (
                <Button
                  variant="glass"
                  size="sm"
                  onClick={() => setShowDemoDialog(true)}
                >
                  <Play className="w-4 h-4" />
                  Watch Demo
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="glass" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Open
                  </a>
                </Button>
              )}
              {project.sourceUrl && (
                <Button variant="glass" size="sm" asChild>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Badge variant={project.type === 'professional' ? 'default' : 'secondary'} className="text-xs">
              {project.type === 'professional' ? 'Work' : 'Personal'}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {project.period} — {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {(isExpanded ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground font-display"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground font-display hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
              >
                {isExpanded ? 'Show Less' : `+${project.technologies.length - 4}`}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>

    {/* Demo Dialog */}
    <Dialog open={showDemoDialog} onOpenChange={setShowDemoDialog}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{project.title} - Demo</DialogTitle>
          <DialogDescription>
            Watch the UI flow demonstration
          </DialogDescription>
        </DialogHeader>
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-secondary/20">
          {project.video ? (
            <video
              src={project.video}
              controls
              autoPlay
              loop
              className="w-full h-full object-contain"
            />
          ) : project.gif ? (
            <img
              src={project.gif}
              alt={`${project.title} demo`}
              className="w-full h-full object-contain"
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  </>
  );
};

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of personal projects and professional work showcasing my skills in modern web development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
