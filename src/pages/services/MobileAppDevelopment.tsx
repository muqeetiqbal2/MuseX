import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Zap, Users, Cloud, Lock, TrendingUp } from "lucide-react";

const MobileAppDevelopment = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere with React Native and Flutter.",
    },
    {
      icon: Zap,
      title: "Native Performance",
      description: "Optimized for speed with native compilation and performance.",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Intuitive interfaces that users love and understand instantly.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless backend connectivity with real-time sync capabilities.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "Enterprise-grade encryption and data protection standards.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Built-in",
      description: "Track user behavior and app performance in real-time.",
    },
  ];

  const techStack = [
    "React Native",
    "Flutter",
    "Swift",
    "Kotlin",
    "Firebase",
    "AWS Amplify",
    "GraphQL",
    "Redux",
  ];

  const process = [
    {
      step: "01",
      title: "Requirements",
      description: "Define app features, target platforms, and user personas.",
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Create wireframes and interactive prototypes for testing.",
    },
    {
      step: "03",
      title: "Development",
      description: "Build native or cross-platform apps with clean architecture.",
    },
    {
      step: "04",
      title: "Testing",
      description: "QA across devices, OS versions, and screen sizes.",
    },
    {
      step: "05",
      title: "App Store Launch",
      description: "Deploy to Apple App Store and Google Play Store.",
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Regular updates, bug fixes, and feature enhancements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-card border border-accent/20 rounded-full px-4 py-2 text-sm mb-4">
              <Smartphone className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">Mobile App Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Native & Cross-Platform Apps
            </h1>
            <p className="text-xl text-muted-foreground">
              Create engaging mobile experiences that users love on iOS and Android
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              End-to-end mobile app development for startups and enterprises
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
              Industry-leading mobile development technologies
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
                From concept to App Store launch
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
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-primary-foreground/90">
              Let's create a mobile experience your users will love
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

export default MobileAppDevelopment;
