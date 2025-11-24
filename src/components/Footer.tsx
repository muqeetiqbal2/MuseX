import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, Facebook } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoDark} alt="MuseX Logo" className="h-10 w-10" />
              <span className="text-2xl font-bold text-accent">MuseX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Microservices Unified Solutions Experience
            </p>
            <p className="text-sm text-muted-foreground">
              Building scalable digital futures through intelligent solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Services</h3>

            <ul className="grid grid-cols-2 gap-y-3 gap-x-6">
              {[
                { name: "Web Development", link: "/services/web-development" },
                { name: "Mobile Development", link: "/services/mobile-development" },
                { name: "UI/UX Designing", link: "/services/ui-ux-designing" },
                { name: "QA & Testing", link: "/services/qa-testing" },
                { name: "AI Automations", link: "/services/ai-automations" },
                { name: "AI Video Ads", link: "/services/ai-video-ads" },
                { name: "Animations", link: "/services/animations" },
                { name: "Short Films", link: "/services/short-films" },
                { name: "Cloud & DevOps", link: "/services/cloud-devops" },
                { name: "API Development", link: "/services/api-development" },
                { name: "Microservices", link: "/services/microservices" },
                { name: "AI Chatbots", link: "/services/ai-chatbots" },
                { name: "Enterprise Applications", link: "/services/enterprise-applications" },
                { name: "Software Development", link: "/services/software-development" },
                { name: "Data Engineering", link: "/services/data-engineering" },
              ].map((service) => (
                <li key={service.link}>
                  <Link
                    to={service.link}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">contact@musex.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Tech Street, Innovation Hub
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-dark-bg transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-dark-bg transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-dark-bg transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-dark-bg transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} MuseX. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
