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

  /* --- Web Development (additions to reach 5) --- */
  {
    id: 16,
    title: "Headless CMS Platform",
    category: "Web Development",
    description: "Headless CMS powering multi-channel content for marketing sites and mobile apps with GraphQL API.",
    techStack: ["Next.js", "GraphQL", "Strapi", "Vercel"],
    results: ["50% faster content rollout", "10+ sites on single backend", "SEO uplift"],
    image: "https://images.unsplash.com/photo-1502880195258-0e0d9e0f6b5d?w=800&h=600&fit=crop",
  },
  {
    id: 17,
    title: "Progressive Web App for Retail",
    category: "Web Development",
    description: "Offline-capable PWA for retail with push notifications, fast shell, and native-like UX.",
    techStack: ["React", "Workbox", "Service Workers", "IndexedDB"],
    results: ["2x engagement on repeat visits", "80% offline availability", "40% reduction in bounce"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
  },
  {
    id: 18,
    title: "Real-time Collaboration App",
    category: "Web Development",
    description: "Realtime document collaboration with presence, operational transforms, and conflict resolution.",
    techStack: ["TypeScript", "WebSocket", "Yjs", "Redis"],
    results: ["Low-latency co-editing", "99.9% session stability", "Adopted by 100+ teams"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 19,
    title: "Content Delivery Optimization",
    category: "Web Development",
    description: "Full-stack optimizations: image CDN, critical CSS, HTTP/2, and edge caching to speed global sites.",
    techStack: ["Cloudflare", "NGINX", "Varnish", "Webpack"],
    results: ["1.2s TTFB improvement", "Global cache hit 92%", "Mobile LCP improved"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- Mobile App Development (additions) --- */
  {
    id: 20,
    title: "On-Demand Delivery App",
    category: "Mobile App Development",
    description: "Scalable rider and customer apps with live-tracking, dynamic pricing, and ratings.",
    techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
    results: ["200K active users", "95% on-time delivery", "4.6 rating"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    id: 21,
    title: "Health Tracking Wearable App",
    category: "Mobile App Development",
    description: "Companion app for wearable device providing health insights, trend detection, and alerts.",
    techStack: ["React Native", "Bluetooth LE", "GraphQL"],
    results: ["10K+ devices paired", "Daily active retention 45%", "FDA-ready reports"],
    image: "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?w=800&h=600&fit=crop",
  },
  {
    id: 22,
    title: "AR Shopping Experience",
    category: "Mobile App Development",
    description: "Augmented reality try-on and product placement for e-commerce with smooth rendering on mobile.",
    techStack: ["Unity", "ARCore", "iOS ARKit", "Firebase"],
    results: ["30% uplift in conversions", "6M AR sessions", "High user satisfaction"],
    image: "https://images.unsplash.com/photo-1526378728186-60c3b9d363a5?w=800&h=600&fit=crop",
  },
  {
    id: 23,
    title: "Offline-first Field App",
    category: "Mobile App Development",
    description: "Field operations app that syncs data opportunistically and supports geo-tagged inspections.",
    techStack: ["Flutter", "SQLite", "Couchbase Lite", "Azure Functions"],
    results: ["90% productivity increase in field", "Zero data loss", "Reduced paperwork"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- Software Development (additions) --- */
  {
    id: 24,
    title: "Supply Chain Optimization Suite",
    category: "Software Development",
    description: "Platform for demand forecasting, route planning, and supplier analytics for manufacturers.",
    techStack: ["Spring Boot", "React", "PostgreSQL", "Redis"],
    results: ["15% logistics cost reduction", "Improved forecast accuracy", "Integrated 30 suppliers"],
    image: "https://images.unsplash.com/photo-1508385082359-f32f93f8f60f?w=800&h=600&fit=crop",
  },
  {
    id: 25,
    title: "Custom CRM Platform",
    category: "Software Development",
    description: "Highly customizable CRM with workflow automation, lead scoring, and reporting.",
    techStack: ["Ruby on Rails", "Vue.js", "MySQL", "Docker"],
    results: ["40% faster sales cycle", "Adopted by 200+ reps", "Custom integrations"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 26,
    title: "Industrial IoT Monitoring",
    category: "Software Development",
    description: "Edge-to-cloud monitoring system for factory sensors with anomaly detection.",
    techStack: ["Go", "MQTT", "InfluxDB", "Grafana"],
    results: ["20% downtime reduction", "Real-time alerts", "Multi-site deployment"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    id: 27,
    title: "Workflow Automation Engine",
    category: "Software Development",
    description: "Rules-driven engine for business process automation with audit trails and RBAC.",
    techStack: ["Node.js", "TypeScript", "Postgres", "Kubernetes"],
    results: ["60% manual task reduction", "Faster approvals", "Compliance-ready logs"],
    image: "https://images.unsplash.com/photo-1526378728186-60c3b9d363a5?w=800&h=600&fit=crop",
  },

  /* --- UI/UX Designing (additions) --- */
  {
    id: 28,
    title: "Mobile Design System",
    category: "UI/UX Designing",
    description: "Design language and component library for mobile platforms with interaction guidelines.",
    techStack: ["Figma", "Principle", "Storybook"],
    results: ["Consistent cross-team UI", "Faster prototyping", "Reduced design debt"],
    image: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=800&h=600&fit=crop",
  },
  {
    id: 29,
    title: "User Research Program",
    category: "UI/UX Designing",
    description: "End-to-end user research with usability tests, interviews, personas and journey maps.",
    techStack: ["Lookback", "Dovetail", "Figma"],
    results: ["Identified critical UX friction", "30% fewer support tickets", "Product roadmap informed"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
  },
  {
    id: 30,
    title: "Accessible Enterprise Dashboard",
    category: "UI/UX Designing",
    description: "High-contrast, keyboard-navigable analytics dashboard meeting WCAG AA/AAA guidelines.",
    techStack: ["Figma", "React", "Tailwind CSS", "Axe"],
    results: ["AAA accessibility", "Improved adoption among accessibility users", "Reduced legal risk"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 31,
    title: "Conversion-focused Landing Pages",
    category: "UI/UX Designing",
    description: "A/B tested landing page templates optimized for higher conversions and micro-copy improvements.",
    techStack: ["Figma", "Optimizely", "React"],
    results: ["25% lift in signups", "Lower CPA", "Reusable templates"],
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
  },

  /* --- QA & Testing (additions) --- */
  {
    id: 32,
    title: "Mobile E2E Test Suite",
    category: "QA & Testing",
    description: "Cross-platform E2E automation for mobile apps with CI integration and flaky-test monitoring.",
    techStack: ["Appium", "Cypress", "GitLab CI"],
    results: ["Reduced regressions by 70%", "Stable nightly runs", "Faster releases"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
  },
  {
    id: 33,
    title: "Performance Testing Platform",
    category: "QA & Testing",
    description: "Load testing and bottleneck analysis platform for APIs and web services.",
    techStack: ["k6", "JMeter", "Grafana", "Prometheus"],
    results: ["Identified CPU hotspots", "SLA validation", "Improved throughput"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 34,
    title: "Security Testing Program",
    category: "QA & Testing",
    description: "Automated and manual security testing including SAST, DAST and pentests for web apps.",
    techStack: ["OWASP ZAP", "Snyk", "Burp Suite"],
    results: ["Zero critical vulnerabilities in prod", "Faster patch cycles", "Compliance achieved"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 35,
    title: "Test Data Management",
    category: "QA & Testing",
    description: "Synthetic test data generator and environment orchestration for deterministic tests.",
    techStack: ["Docker", "Terraform", "Faker", "Postgres"],
    results: ["Stable CI tests", "GDPR-safe test data", "Faster dev onboarding"],
    image: "https://images.unsplash.com/photo-1508385082359-f32f93f8f60f?w=800&h=600&fit=crop",
  },

  /* --- AI Automations (additions) --- */
  {
    id: 36,
    title: "Invoice OCR & Workflow",
    category: "AI Automations",
    description: "Automated invoice capture, line-item extraction and AP workflow integration.",
    techStack: ["Tesseract", "Python", "FastAPI", "Postgres"],
    results: ["95% extraction accuracy", "70% faster AP processing", "Reduced manual entry"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 37,
    title: "Intelligent Email Triage",
    category: "AI Automations",
    description: "Classifier that tags and routes incoming emails to teams and suggests replies.",
    techStack: ["Python", "spaCy", "Transformer models", "Celery"],
    results: ["60% automation rate", "Faster SLA adherence", "Improved agent productivity"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
  },
  {
    id: 38,
    title: "Robotic Process Automation (RPA)",
    category: "AI Automations",
    description: "Bots automating repetitive desktop tasks integrated with enterprise systems.",
    techStack: ["UIPath", "Python", "Selenium"],
    results: ["Reduced manual labor hours", "Error-free processes", "Quick ROI"],
    image: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=800&h=600&fit=crop",
  },
  {
    id: 39,
    title: "Smart Contract Automation",
    category: "AI Automations",
    description: "Automated verification and lifecycle triggers for blockchain-based contracts.",
    techStack: ["Solidity", "Python", "Chainlink", "AWS Lambda"],
    results: ["Faster settlements", "Transparent audit trail", "Lower dispute rates"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- AI Video Ads (additions) --- */
  {
    id: 40,
    title: "Dynamic Product Video Generator",
    category: "AI Video Ads",
    description: "Generates product-specific video creatives by combining templates, data and voice clones.",
    techStack: ["Runway", "Node.js", "ElevenLabs", "S3"],
    results: ["Automated 1K creatives/week", "30% lower CPM", "Higher personalization"],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
  },
  {
    id: 41,
    title: "Localization Pipeline for Video Ads",
    category: "AI Video Ads",
    description: "Automated subtitle, voiceover and cultural tweaks for multi-market campaigns.",
    techStack: ["Google Translate API", "ElevenLabs", "After Effects Scripting"],
    results: ["12 markets supported", "Faster go-to-market", "Improved CTR"],
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&h=600&fit=crop",
  },
  {
    id: 42,
    title: "A/B Video Variant Testing",
    category: "AI Video Ads",
    description: "Create multiple ad variants and run automated experiments to find best-performing assets.",
    techStack: ["Python", "Ad Platforms API", "Data Studio"],
    results: ["Systematic improvement in ROAS", "Optimized creative templates", "Higher engagement"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 43,
    title: "Interactive Shoppable Videos",
    category: "AI Video Ads",
    description: "Clickable hotspots and product overlays inside short video ads for direct conversions.",
    techStack: ["Shoppable SDKs", "React", "Node.js"],
    results: ["Direct in-ad purchases", "Shorter funnel", "Increased AOV"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },

  /* --- Animations (additions) --- */
  {
    id: 44,
    title: "Character-driven Short Animation",
    category: "Animations",
    description: "6-minute 3D character animation project with rigging, lip-sync and expressive acting.",
    techStack: ["Blender", "Maya", "Substance Painter"],
    results: ["Festival selection", "High audience retention", "Commissioned sequels"],
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
  },
  {
    id: 45,
    title: "Explainer Micro-Animations",
    category: "Animations",
    description: "Series of short 2D/3D explainer animations for SaaS onboarding and marketing.",
    techStack: ["After Effects", "Illustrator", "Bodymovin"],
    results: ["Improved onboarding completion", "Shorter time-to-value", "Multiple language versions"],
    image: "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?w=800&h=600&fit=crop",
  },
  {
    id: 46,
    title: "Virtual Product Demo",
    category: "Animations",
    description: "Photoreal 3D renders and animated demos showing product assembly and features.",
    techStack: ["Cinema 4D", "Octane", "After Effects"],
    results: ["Reduced support calls", "Higher pre-order conversion", "Award shortlist"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    id: 47,
    title: "Interactive WebGL Animation",
    category: "Animations",
    description: "Browser-based interactive animation for product storytelling and micro-interactions.",
    techStack: ["Three.js", "GLTF", "WebGL"],
    results: ["High dwell time", "Shareable experience", "Cross-platform compatibility"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- Short Films (additions) --- */
  {
    id: 48,
    title: "Documentary Short (Tech)",
    category: "Short Films",
    description: "10-minute documentary about grassroots tech initiatives with on-location interviews.",
    techStack: ["Premiere Pro", "DaVinci Resolve", "Field Audio"],
    results: ["Festival screenings", "Local press coverage", "Educational use"],
    image: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=800&h=600&fit=crop",
  },
  {
    id: 49,
    title: "Brand Narrative Short",
    category: "Short Films",
    description: "Cinematically shot brand short blending narrative, product shots and motion design.",
    techStack: ["RED Camera", "After Effects", "Pro Tools"],
    results: ["Viral campaign boost", "High brand recall", "Streamed on partner channels"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
  },
  {
    id: 50,
    title: "Educational Short Series",
    category: "Short Films",
    description: "Short educational episodes focusing on social topics with animation inserts.",
    techStack: ["Premiere Pro", "After Effects", "Blender"],
    results: ["Used in schools", "High completion rate", "Sponsorship acquired"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 51,
    title: "Cinematic Product Spotlight",
    category: "Short Films",
    description: "High-production-value 90s product spotlight mixing live action and motion graphics.",
    techStack: ["Arri Alexa", "DaVinci Resolve", "After Effects"],
    results: ["Featured on homepage", "Strong conversion lift", "Award-nominated"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- Cloud & DevOps (additions) --- */
  {
    id: 52,
    title: "Serverless Analytics Platform",
    category: "Cloud & DevOps",
    description: "Event-driven analytics using serverless functions, S3 eventing and nearline querying.",
    techStack: ["AWS Lambda", "S3", "Athena", "Glue"],
    results: ["Cost-efficient analytics", "Scalable event processing", "Fast query times"],
    image: "https://images.unsplash.com/photo-1508385082359-f32f93f8f60f?w=800&h=600&fit=crop",
  },
  {
    id: 53,
    title: "Infrastructure as Code Suite",
    category: "Cloud & DevOps",
    description: "Full IaC for multi-region deployments with automated drift detection and policy-as-code.",
    techStack: ["Terraform", "Terragrunt", "OPA", "AWS"],
    results: ["Consistent infra", "Safer deployments", "Reduced manual drift"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 54,
    title: "Cost Optimization Program",
    category: "Cloud & DevOps",
    description: "Rightsizing, reserved strategies and autoscaling policies to trim cloud spend.",
    techStack: ["AWS Cost Explorer", "Cloud Custodian", "Kubernetes"],
    results: ["40% cost reduction", "Predictable monthly budgets", "Sustainable growth"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    id: 55,
    title: "Chaos Engineering Initiative",
    category: "Cloud & DevOps",
    description: "Controlled fault injection and resilience testing run against critical services.",
    techStack: ["Chaos Mesh", "Prometheus", "Grafana"],
    results: ["Improved recovery time", "Validated runbooks", "Higher SLA confidence"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- API Development (additions) --- */
  {
    id: 56,
    title: "GraphQL Gateway",
    category: "API Development",
    description: "Unified GraphQL gateway aggregating multiple microservices and caching layers.",
    techStack: ["Apollo", "GraphQL", "Redis"],
    results: ["Simplified client integrations", "Lower overfetch", "Faster dev experience"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    id: 57,
    title: "API Rate Limiting & Security",
    category: "API Development",
    description: "Enterprise-grade API platform with OAuth, rate limits, quotas and analytics.",
    techStack: ["Kong", "OAuth2", "Prometheus", "ELK"],
    results: ["No abuse incidents", "Predictable throughput", "Comprehensive monitoring"],
    image: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=800&h=600&fit=crop",
  },
  {
    id: 58,
    title: "Realtime WebSocket APIs",
    category: "API Development",
    description: "Low-latency WebSocket APIs for trading and live collaboration applications.",
    techStack: ["Node.js", "uWebSockets.js", "Redis"],
    results: ["Sub-50ms message latency", "High connection stability", "Scalable fanout"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
  },
  {
    id: 59,
    title: "API Versioning & SDKs",
    category: "API Development",
    description: "Designed API version strategy and auto-generated SDKs for multiple languages.",
    techStack: ["OpenAPI", "TypeScript", "Swagger"],
    results: ["Faster client adoption", "Stable contract upgrades", "Multi-language support"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },

  /* --- Microservices (additions) --- */
  {
    id: 60,
    title: "Microservice Observability",
    category: "Microservices",
    description: "Tracing, metrics and centralized logs across 80+ services to troubleshoot production fast.",
    techStack: ["Jaeger", "Prometheus", "ELK", "Grafana"],
    results: ["Reduced MTTR", "High service-level visibility", "Data-driven ops"],
    image: "https://images.unsplash.com/photo-1508385082359-f32f93f8f60f?w=800&h=600&fit=crop",
  },
  {
    id: 61,
    title: "Service Mesh Rollout",
    category: "Microservices",
    description: "Incremental Istio-based service mesh with canary routing, retries and mTLS.",
    techStack: ["Istio", "Kubernetes", "Envoy"],
    results: ["Secure service-to-service comms", "Fine-grained traffic control", "Observability"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 62,
    title: "Bounded Context Replatform",
    category: "Microservices",
    description: "Decomposed core monolith into bounded contexts with clear contracts and async events.",
    techStack: ["Kafka", "Spring Boot", "gRPC"],
    results: ["Independent deploys", "Reduced coupling", "Faster feature delivery"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    id: 63,
    title: "Polyglot Microservices",
    category: "Microservices",
    description: "Platform supporting services in multiple languages and runtimes with standard contracts.",
    techStack: ["Docker", "Kubernetes", "gRPC", "Consul"],
    results: ["Language flexibility", "Better team autonomy", "Standardized CI/CD"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },

  /* --- AI Chatbots (additions) --- */
  {
    id: 64,
    title: "Voice-enabled Assistant",
    category: "AI Chatbots",
    description: "Multimodal voice assistant for customer service with intent detection and voice TTS.",
    techStack: ["Speech-to-Text", "GPT-4", "ElevenLabs", "Node.js"],
    results: ["Reduced call deflection", "Better CSAT", "24/7 availability"],
    image: "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?w=800&h=600&fit=crop",
  },
  {
    id: 65,
    title: "Knowledge-base QA Bot",
    category: "AI Chatbots",
    description: "RAG-based assistant that answers product & policy questions using internal docs.",
    techStack: ["LangChain", "FAISS", "GPT-4", "FastAPI"],
    results: ["85% accurate answers", "Reduced support load", "Shorter resolution times"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
  },
  {
    id: 66,
    title: "E-commerce Conversational Agent",
    category: "AI Chatbots",
    description: "Conversational shopping assistant that recommends products and completes checkouts.",
    techStack: ["Rasa", "Python", "Stripe"],
    results: ["Higher AOV from conv. commerce", "Improved conversion", "Seamless payment flow"],
    image: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=800&h=600&fit=crop",
  },
  {
    id: 67,
    title: "Multilingual Support Bot",
    category: "AI Chatbots",
    description: "Bot with auto-translation and language detection supporting global customers.",
    techStack: ["Transformer Models", "Azure Cognitive Services", "Node.js"],
    results: ["12 languages supported", "Improved global CSAT", "Faster multilingual replies"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },

  /* --- Data Engineering (additions) --- */
  {
    id: 68,
    title: "Batch ETL Modernization",
    category: "Data Engineering",
    description: "Rewrote legacy ETL to modern data lake architecture with orchestration and lineage.",
    techStack: ["Airflow", "Spark", "S3", "dbt"],
    results: ["Faster pipelines", "Improved data quality", "Clear lineage"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 69,
    title: "Feature Store Implementation",
    category: "Data Engineering",
    description: "Centralized feature store for ML teams with online and offline feature serving.",
    techStack: ["Feast", "Kafka", "Spark", "Redis"],
    results: ["Faster ML iteration", "Consistent features", "Low-latency serving"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
  {
    id: 70,
    title: "Master Data Management",
    category: "Data Engineering",
    description: "MDM for customer and product entities with deduplication and golden record creation.",
    techStack: ["Postgres", "Airflow", "dbt"],
    results: ["Single source of truth", "Cleaner reporting", "Fewer duplicates"],
    image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=800&h=600&fit=crop",
  },
  {
    id: 71,
    title: "Self-serve Analytics Platform",
    category: "Data Engineering",
    description: "Empowered teams with curated datasets, semantic layer and governed data products.",
    techStack: ["Snowflake", "Looker", "dbt"],
    results: ["Faster insights", "Fewer ad-hoc requests", "Data-driven decisions"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },

  /* --- Enterprise Applications (additions) --- */
  {
    id: 72,
    title: "HRMS Cloud Migration",
    category: "Enterprise Applications",
    description: "Migrated on-prem HR system to cloud SaaS with single sign-on and payroll integrations.",
    techStack: ["Java", "Spring Boot", "Azure", "Postgres"],
    results: ["Faster payroll runs", "Centralized HR data", "Scalable user base"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 73,
    title: "Procurement Platform",
    category: "Enterprise Applications",
    description: "End-to-end procurement with supplier catalog, PO lifecycle and approvals.",
    techStack: ["Angular", "Node.js", "Oracle"],
    results: ["Supplier consolidation", "Faster PO processing", "Cost savings"],
    image: "https://images.unsplash.com/photo-1508385082359-f32f93f8f60f?w=800&h=600&fit=crop",
  },
  {
    id: 74,
    title: "Finance Close Automation",
    category: "Enterprise Applications",
    description: "Automated month-end close tasks, reconciliation and reporting for finance teams.",
    techStack: ["Python", "ETL", "PowerBI"],
    results: ["Faster close cycle", "Reduced reconciliation errors", "Audit-ready reports"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
  },
  {
    id: 75,
    title: "Customer 360 Portal",
    category: "Enterprise Applications",
    description: "Unified customer view integrating CRM, billing and support for enterprise accounts.",
    techStack: ["Microservices", "Kafka", "React", "Postgres"],
    results: ["Improved account management", "Higher renewal rates", "Unified reporting"],
    image: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=800&h=600&fit=crop",
  }
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
