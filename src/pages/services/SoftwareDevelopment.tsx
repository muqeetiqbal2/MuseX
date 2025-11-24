import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Layers, GitBranch, Shield, Zap, Users } from "lucide-react";

const SoftwareDevelopment = () => {
  const features = [
    {
      icon: Code2,
      title: "Custom Solutions",
      description: "Tailored software built specifically for your business needs.",
    },
    {
      icon: Layers,
      title: "Microservices",
      description: "Scalable architecture with independent, deployable services.",
    },
    {
      icon: GitBranch,
      title: "Agile Development",
      description: "Iterative approach with continuous feedback and improvements.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with industry standards.",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized code that handles millions of operations efficiently.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in tools for seamless team workflows and communication.",
    },
  ];

  const techStack = [
    "Python",
    "Django",
    "Node.js",
    "Java",
    "C#",
    ".NET",
    "PostgreSQL",
    "MongoDB",
  ];

  const process = [
    {
      step: "01",
      title: "Analysis",
      description: "Deep dive into your business processes and technical requirements.",
    },
    {
      step: "02",
      title: "Architecture",
      description: "Design scalable system architecture and data models.",
    },
    {
      step: "03",
      title: "Development",
      description: "Agile sprints with continuous integration and deployment.",
    },
    {
      step: "04",
      title: "Quality Assurance",
      description: "Automated testing, code reviews, and security audits.",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth rollout with zero-downtime deployment strategies.",
    },
    {
      step: "06",
      title: "Evolution",
      description: "Ongoing feature development and system optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-card border border-accent/20 rounded-full px-4 py-2 text-sm mb-4">
              <Code2 className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">Software Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Enterprise Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Custom software that scales with your business and drives efficiency
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Full-cycle software development from concept to deployment
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

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Tech Stack</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Enterprise-grade technologies for robust software
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Development Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Proven methodology for successful software delivery
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

      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Custom Software?</h2>
            <p className="text-xl text-primary-foreground/90">
              Transform your business with tailored software solutions
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

export default SoftwareDevelopment;
