import { Phone, Mail, Github, Heart, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Phone, href: "tel:+972502820405", label: "Phone" },
  { icon: Mail, href: "mailto:asafalmog119@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/asaf6024", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/asaf-almog-b94904117/", label: "LinkedIn" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center font-display font-bold text-primary">
              AA
            </div>
            <span className="font-display font-semibold text-foreground">
              Asaf Almog
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary hover:border-primary"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> by
            Asaf Almog
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
