import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import {
  Globe,
  Smartphone,
  Code,
  Palette,
  TestTube,
  Bot,
  Video,
  Film,
  Cloud,
  Database,
  Plug,
  Network,
  MessageSquare,
  BarChart,
  Building,
} from "lucide-react";

const Services = () => {
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
      link: "/services/software-development",
    },
    {
      icon: Palette,
      title: "UI/UX Designing",
      description: "Beautiful, intuitive interfaces that users love and brands can be proud of.",
      link: "/services/ui-ux-designing",
    },
    {
      icon: TestTube,
      title: "QA & Software Testing",
      description: "Comprehensive quality assurance ensuring flawless performance and reliability.",
      link: "/services/qa-testing",
    },
    {
      icon: Bot,
      title: "AI Automations",
      description: "Intelligent automation solutions powered by advanced AI and machine learning.",
      link: "/services/ai-automations",
    },
    {
      icon: Video,
      title: "AI Video Ads",
      description: "Create compelling video content with AI-powered tools and creative expertise.",
      link: "/services/ai-video-ads",
    },
    {
      icon: Film,
      title: "2D/3D Animations",
      description: "Stunning visual storytelling through advanced animation techniques.",
      link: "/services/animations",
    },
    {
      icon: Film,
      title: "Short Films & Motion Graphics",
      description: "Professional video production from concept to final delivery.",
      link: "/services/short-films",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure with AWS, Azure, and modern DevOps practices.",
      link: "/services/cloud-devops",
    },
    {
      icon: Plug,
      title: "API Development & Integration",
      description: "Robust APIs and seamless third-party integrations for connected systems.",
      link: "/services/api-development",
    },
    {
      icon: Network,
      title: "Microservices Architecture",
      description: "Design and implement scalable microservices-based systems.",
      link: "/services/microservices",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Agents",
      description: "Conversational AI that enhances customer engagement and support.",
      link: "/services/ai-chatbots",
    },
    {
      icon: BarChart,
      title: "Data Engineering & Analytics",
      description: "Transform raw data into actionable insights with advanced analytics.",
      link: "/services/data-engineering",
    },
    {
      icon: Building,
      title: "Enterprise Applications",
      description: "Large-scale enterprise solutions built for performance and reliability.",
      link: "/services/enterprise-applications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions for the modern enterprise
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From ideation to deployment, we provide end-to-end services that transform your vision
              into scalable, secure, and intelligent digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Process</h2>
              <p className="text-lg text-muted-foreground">
                A proven methodology that delivers results
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Planning",
                  description: "We understand your goals, challenges, and requirements in depth.",
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description: "Creating intuitive designs and interactive prototypes for validation.",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building robust solutions using best practices and modern technology.",
                },
                {
                  step: "04",
                  title: "Testing & QA",
                  description: "Rigorous testing to ensure quality, performance, and security.",
                },
                {
                  step: "05",
                  title: "Deployment",
                  description: "Smooth launch with minimal disruption to your operations.",
                },
                {
                  step: "06",
                  title: "Support & Maintenance",
                  description: "Ongoing support to keep your solution running at peak performance.",
                },
              ].map((process, index) => (
                <div
                  key={process.step}
                  className="flex items-start space-x-6 p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-accent">{process.step}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
