import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Filter } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  results: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Global E-Commerce Platform",
    category: "Web Development",
    description: "Built a scalable e-commerce platform handling 10M+ monthly visitors with real-time inventory management and AI-powered recommendations.",
    techStack: ["React", "Node.js", "MongoDB", "AWS", "Redis"],
    results: ["300% increase in conversion rate", "99.99% uptime", "2s average page load"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "FinTech Mobile Banking App",
    category: "Mobile App Development",
    description: "Developed a secure mobile banking application with biometric authentication, instant transfers, and investment portfolio management.",
    techStack: ["Flutter", "Firebase", "Node.js", "PostgreSQL"],
    results: ["500K+ downloads", "4.8 App Store rating", "Zero security breaches"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Software Development",
    description: "Enterprise healthcare platform for patient records, appointment scheduling, telemedicine, and billing integration.",
    techStack: ["Django", "React", "PostgreSQL", "Docker", "AWS"],
    results: ["50+ hospitals deployed", "1M+ patient records", "HIPAA compliant"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "SaaS Design System",
    category: "UI/UX Designing",
    description: "Complete design system with 200+ components, accessibility standards, and multi-brand theming for enterprise SaaS product.",
    techStack: ["Figma", "Storybook", "React", "Tailwind CSS"],
    results: ["70% faster design-to-dev", "AAA accessibility", "5 brands supported"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Automated Testing Framework",
    category: "QA & Testing",
    description: "Built comprehensive automated testing framework covering unit, integration, and E2E tests with CI/CD pipeline integration.",
    techStack: ["Selenium", "Jest", "Cypress", "GitHub Actions"],
    results: ["95% code coverage", "80% faster testing", "Zero production bugs"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "AI-Powered Document Processing",
    category: "AI Automations",
    description: "Automated document extraction and classification system processing 100K+ documents daily using GPT-4 and custom ML models.",
    techStack: ["Python", "LangChain", "GPT-4", "FastAPI", "PostgreSQL"],
    results: ["99.3% accuracy", "90% time savings", "£2M cost reduction"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Brand Video Ad Campaign",
    category: "AI Video Ads",
    description: "AI-generated personalized video ads with dynamic content, voiceover synthesis, and multi-language support for global campaign.",
    techStack: ["Runway ML", "ElevenLabs", "After Effects", "Python"],
    results: ["500+ video variations", "45% higher engagement", "12 languages"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Product Launch Animation",
    category: "Animations",
    description: "3D product visualization and launch animation with particle effects, realistic physics, and cinematic camera movements.",
    techStack: ["Blender", "Cinema 4D", "After Effects", "Three.js"],
    results: ["2M+ views", "Featured on design awards", "Client rebrand success"],
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    title: "Corporate Brand Film",
    category: "Short Films",
    description: "2-minute corporate brand story combining live action, motion graphics, and sound design for international tech company.",
    techStack: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    results: ["Industry award winner", "5M+ views", "85% brand recall"],
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=600&fit=crop",
  },
  {
    id: 10,
    title: "Multi-Cloud Infrastructure",
    category: "Cloud & DevOps",
    description: "Kubernetes-based multi-cloud infrastructure with auto-scaling, disaster recovery, and zero-downtime deployments.",
    techStack: ["Kubernetes", "Terraform", "AWS", "Azure", "Prometheus"],
    results: ["99.99% uptime", "60% cost reduction", "3min deployments"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
  },
  {
    id: 11,
    title: "Payment Gateway Integration",
    category: "API Development",
    description: "RESTful API platform integrating 15+ payment providers with unified interface, fraud detection, and reconciliation.",
    techStack: ["Node.js", "Express", "Redis", "MongoDB", "Stripe"],
    results: ["$50M+ processed", "150ms avg response", "99.97% success rate"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
  },
  {
    id: 12,
    title: "Event-Driven Architecture",
    category: "Microservices",
    description: "Migrated monolithic system to 40+ microservices with event-driven architecture, API gateway, and service mesh.",
    techStack: ["Docker", "Kubernetes", "Kafka", "gRPC", "Istio"],
    results: ["10x scalability", "Independent deployments", "50% faster features"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
  },
  {
    id: 13,
    title: "Customer Support AI Agent",
    category: "AI Chatbots",
    description: "Intelligent chatbot handling 10K+ daily conversations with sentiment analysis, ticket routing, and human handoff.",
    techStack: ["GPT-4", "LangChain", "Python", "WebSocket", "PostgreSQL"],
    results: ["85% automation rate", "30s avg resolution", "4.7/5 satisfaction"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
  },
  {
    id: 14,
    title: "Real-Time Analytics Pipeline",
    category: "Data Engineering",
    description: "Built real-time data pipeline processing 10TB daily with streaming analytics, ML model serving, and visualization dashboards.",
    techStack: ["Apache Kafka", "Spark", "Airflow", "Snowflake", "dbt"],
    results: ["Real-time insights", "10TB/day processing", "Sub-second queries"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 15,
    title: "ERP System Modernization",
    category: "Enterprise Applications",
    description: "Modernized legacy ERP system for manufacturing company with inventory, supply chain, HR, and financial modules.",
    techStack: ["Java", "Spring Boot", "Angular", "Oracle", "Kubernetes"],
    results: ["5000+ users", "40% efficiency gain", "£5M savings/year"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
];

const categories = [
  "All",
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "UI/UX Designing",
  "QA & Testing",
  "AI Automations",
  "AI Video Ads",
  "Animations",
  "Short Films",
  "Cloud & DevOps",
  "API Development",
  "Microservices",
  "AI Chatbots",
  "Data Engineering",
  "Enterprise Applications",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our successful projects across 15+ service domains. From AI-powered solutions
            to enterprise systems, we deliver excellence at scale.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 border-b border-border/50 sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Filter by Service:</span>
          </div>
          <div className="relative w-full max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block w-full px-4 py-3 pr-10 text-sm rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all appearance-none shadow-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-accent">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-accent/30 text-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">▸</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Project Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No projects found in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's build something extraordinary together. Get in touch to discuss your next big idea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              Get a Quote
            </a>
            <a
              href="/services"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
