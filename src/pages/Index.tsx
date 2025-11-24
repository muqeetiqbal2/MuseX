import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  TestTube,
  Bot,
  Video,
  Cloud,
  Database,
  Sparkles,
  Users,
  Award,
  Zap,
  Quote,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge frameworks and best practices.",
      link: "/services/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
      link: "/services/mobile-development",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs and technical requirements.",
    },
    {
      icon: Palette,
      title: "UI/UX Designing",
      description: "Beautiful, intuitive interfaces that users love and brands can be proud of.",
    },
    {
      icon: TestTube,
      title: "QA & Testing",
      description: "Comprehensive quality assurance ensuring flawless performance and reliability.",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation solutions powered by advanced AI and machine learning.",
      link: "/services/ai-automation",
    },
    {
      icon: Video,
      title: "AI Video Ads",
      description: "Create compelling video content with AI-powered tools and creative expertise.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure with AWS, Azure, and modern DevOps practices.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "MuseX transformed our legacy system into a modern microservices architecture. The results exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content:
        "Their AI automation solutions saved us countless hours. The team's expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, Innovation Labs",
      content:
        "From design to deployment, MuseX delivered excellence at every stage. Highly recommended!",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "500+", label: "Projects Delivered" },
    { icon: Zap, value: "99.9%", label: "Uptime Guaranteed" },
    { icon: Sparkles, value: "50+", label: "Team Experts" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions for modern digital challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card border border-border/50 rounded-lg p-8 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-accent" />
                <p className="text-muted-foreground italic">{testimonial.content}</p>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted via-background to-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's build something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
