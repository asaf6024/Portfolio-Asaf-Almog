import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import navLogo from "@/assets/navLogo.png";

const navItems = [
  { label: "About Me", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const socialLinks = [
  { icon: Phone, href: "tel:+972502820405", label: "Phone" },
  { icon: Mail, href: "mailto:asafalmog119@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/asaf6024", label: "GitHub" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(`#${section}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-card" : "bg-transparent"
      } h-16 md:h-24`}
    >
      <div className="container mx-auto h-full flex items-center px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#about" className="flex items-center gap-3 group">
            <img
              src={navLogo}
              alt="AA"
              className="h-12 sm:h-10 md:h-15 w-auto group-hover:border-primary transition-all duration-300"
            />
            {/* <span className="font-display font-semibold text-foreground hidden sm:block">
              Asaf Almog
            </span> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="nav"
                size="sm"
                asChild
                className={
                  activeSection === item.href ? "font-bold text-primary" : ""
                }
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary"
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border mt-3"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="nav"
                  asChild
                  className="justify-start"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
              <div className="flex items-center gap-2 pt-4 border-t border-border mt-2">
                {socialLinks.map((link) => (
                  <Button key={link.label} variant="ghost" size="icon" asChild>
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
