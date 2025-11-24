import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Code2, Smartphone, Zap, Shield, TrendingUp } from "lucide-react";

const WebDevelopment = () => {
  const features = [
    {
      icon: Code2,
      title: "Modern Frameworks",
      description: "Built with React, Vue, Angular, and Next.js for optimal performance.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Seamless experience across all devices and screen sizes.",
    },
    {
      icon: Zap,
      title: "Fast Loading",
      description: "Optimized for speed with lazy loading and code splitting.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee.",
    },
    {
      icon: TrendingUp,
      title: "SEO Optimized",
      description: "Built with search engine optimization best practices.",
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Microservices-based design that grows with your business.",
    },
  ];

  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Redis",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your requirements, target audience, and business goals.",
    },
    {
      step: "02",
      title: "Design",
      description: "Creating wireframes and high-fidelity mockups for approval.",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your application with clean, maintainable code.",
    },
    {
      step: "04",
      title: "Testing",
      description: "Comprehensive QA to ensure everything works perfectly.",
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploying to production with monitoring and analytics.",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and feature updates.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-card border border-accent/20 rounded-full px-4 py-2 text-sm mb-4">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">Web Development Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Modern Web Development
            </h1>
            <p className="text-xl text-muted-foreground">
              Build powerful, scalable web applications that drive business growth
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive web development solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-border/50 rounded-lg p-6 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Tech Stack</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We use cutting-edge technologies to build your web applications
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-card border border-border/50 rounded-lg text-primary font-semibold hover:border-accent/50 hover:shadow-lg transition-all cursor-default animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Development Process
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven workflow that delivers exceptional results
              </p>
            </div>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className="flex items-start space-x-6 p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-accent">{step.step}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Your Web Application?</h2>
            <p className="text-xl text-primary-foreground/90">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-dark-bg px-8">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-primary-foreground hover:text-primary px-8"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
