import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, Workflow, Zap, Brain, Target, TrendingUp } from "lucide-react";

const AIAutomations = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Intelligent agents that automate complex business workflows.",
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "End-to-end automation of repetitive tasks and processes.",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant data processing and decision-making with AI.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "ML models that learn and improve from your data.",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored AI automation for your specific business needs.",
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      description: "Measurable efficiency gains and cost reductions.",
    },
  ];

  const techStack = [
    "LangChain",
    "OpenAI",
    "Claude",
    "TensorFlow",
    "PyTorch",
    "Hugging Face",
    "n8n",
    "Zapier",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Identify automation opportunities and business pain points.",
    },
    {
      step: "02",
      title: "Design",
      description: "Map workflows and design AI-powered automation solutions.",
    },
    {
      step: "03",
      title: "Development",
      description: "Build and train AI models with your business data.",
    },
    {
      step: "04",
      title: "Integration",
      description: "Connect AI agents with existing systems and workflows.",
    },
    {
      step: "05",
      title: "Testing",
      description: "Validate automation accuracy and performance metrics.",
    },
    {
      step: "06",
      title: "Optimization",
      description: "Continuous monitoring and improvement of AI models.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-card border border-accent/20 rounded-full px-4 py-2 text-sm mb-4">
              <Bot className="w-4 h-4 text-accent" />
              <span className="text-foreground/80">AI Automations</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Intelligent Process Automation
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your business with AI-powered automation solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">What We Offer</h2>
            <p className="text-lg text-muted-foreground">
              AI-driven automation that revolutionizes your workflows
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
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">AI Tech Stack</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Cutting-edge AI and automation technologies
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
                Our Automation Process
              </h2>
              <p className="text-lg text-muted-foreground">
                From manual tasks to intelligent automation
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
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Automate with AI?</h2>
            <p className="text-xl text-primary-foreground/90">
              Let's transform your business processes with intelligent automation
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

export default AIAutomations;
