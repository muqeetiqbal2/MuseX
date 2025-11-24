import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Camera, Clapperboard, Sparkles, Play, Users } from "lucide-react";

const ShortFilms = () => {
  const features = [
    {
      icon: Film,
      title: "Short Films",
      description: "Compelling narratives crafted for festivals and online platforms.",
    },
    {
      icon: Camera,
      title: "Cinematography",
      description: "Professional cinematography with cinematic color grading.",
    },
    {
      icon: Clapperboard,
      title: "Commercial Videos",
      description: "High-impact commercial videos that drive brand awareness.",
    },
    {
      icon: Sparkles,
      title: "Motion Graphics",
      description: "Dynamic motion graphics integrated with live footage.",
    },
    {
      icon: Play,
      title: "Brand Films",
      description: "Story-driven brand films that connect emotionally.",
    },
    {
      icon: Users,
      title: "Documentary",
      description: "Authentic documentary-style content and corporate videos.",
    },
  ];

  const techStack = [
    "RED Camera",
    "ARRI",
    "Blackmagic",
    "DaVinci Resolve",
    "Premiere Pro",
    "After Effects",
    "Final Cut Pro",
    "Avid",
  ];

  const process = [
    {
      step: "01",
      title: "Pre-Production",
      description: "Script development, storyboarding, and location scouting.",
    },
    {
      step: "02",
      title: "Casting",
      description: "Select actors and crew for your production needs.",
    },
    {
      step: "03",
      title: "Production",
      description: "Professional filming with cinema-grade equipment.",
    },
    {
      step: "04",
      title: "Editing",
      description: "Craft the narrative with expert editing and pacing.",
    },
    {
      step: "05",
      title: "Post-Production",
      description: "Color grading, VFX, sound design, and music composition.",
    },
    {
      step: "06",
      title: "Distribution",
      description: "Prepare final deliverables for various platforms and festivals.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-card border border-accent/20 rounded-full px-4 py-2 text-sm mb-4">
              <Film className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">Short Films & Motion Graphics</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Cinematic Storytelling
            </h1>
            <p className="text-xl text-muted-foreground">
              Create powerful short films and brand stories that captivate audiences
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              Professional film production from concept to distribution
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Production Tools</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Cinema-grade equipment and software
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
                Our Production Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From script to screen
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
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Tell Your Story?</h2>
            <p className="text-xl text-primary-foreground/90">
              Create cinematic content that resonates with your audience
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

export default ShortFilms;
