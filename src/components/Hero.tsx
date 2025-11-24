import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-accent/20 rounded-full px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-foreground/80">Innovation in Every Line of Code</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-primary">Building Scalable</span>
            <br />
            <span className="text-foreground">Digital Futures</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Through <span className="text-accent font-semibold">Microservices</span> & Intelligent Solutions
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            MuseX transforms complex challenges into elegant solutions with cutting-edge technology,
            expert engineering, and a commitment to excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group"
            >
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Tech Stack Strip */}
          <div className="pt-16">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
              Powered by Industry-Leading Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {["React", "Node.js", "Python", "Django", "Flutter", "AWS", "Docker", "Kubernetes"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-lg font-semibold text-foreground hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-24"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
