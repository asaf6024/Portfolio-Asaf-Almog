import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { experiences } from '@/data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            My professional journey in software development and engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                  index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow ${
                  index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
                }`} />

                <div className={`card-gradient border border-border rounded-xl p-6 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <span className="inline-block text-sm font-display text-primary mb-2">
                    {exp.period}
                  </span>
                  
                  <h3 className="text-xl font-bold font-display text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3 justify-start md:justify-inherit">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{exp.company}</span>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-1.5 ${
                    index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground font-display"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
