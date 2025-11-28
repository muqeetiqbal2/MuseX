import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building2, TrendingUp, Users, Award } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  avatar: string;
  rating: number;
  service: string;
  review: string;
  projectDetails: string;
  results: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CTO",
    company: "TechVision Inc",
    companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
    service: "Web Development",
    review: "MuseX transformed our entire digital presence. Their team delivered a scalable e-commerce platform that handles millions of users seamlessly. The attention to detail and technical expertise was outstanding.",
    projectDetails: "E-commerce Platform Rebuild",
    results: ["300% increase in conversions", "99.9% uptime achieved", "50% faster page loads"]
  },
  {
    id: 2,
    name: "James Chen",
    role: "CEO",
    company: "FinFlow Solutions",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
    service: "Mobile App Development",
    review: "The mobile banking app MuseX built for us exceeded all expectations. Security, performance, and user experience were all top-notch. Our users love it, and it's helped us gain significant market share.",
    projectDetails: "Mobile Banking Application",
    results: ["500K+ downloads in 6 months", "4.8/5 App Store rating", "Zero security incidents"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Director of IT",
    company: "MedCare Network",
    companyLogo: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
    service: "Software Development",
    review: "MuseX developed a comprehensive healthcare management system that's now used across 50+ hospitals. Their understanding of healthcare compliance and security requirements was impressive.",
    projectDetails: "Healthcare Management System",
    results: ["50+ hospitals deployed", "HIPAA compliant", "1M+ patient records managed"]
  },
  {
    id: 4,
    name: "Michael Torres",
    role: "Head of Design",
    company: "CreativeHub Studio",
    companyLogo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
    service: "UI/UX Designing",
    review: "The design system MuseX created for us is phenomenal. It's not just beautiful—it's functional, accessible, and has dramatically improved our design-to-development workflow.",
    projectDetails: "Enterprise Design System",
    results: ["70% faster design process", "AAA accessibility rating", "5 brands supported"]
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "VP of Engineering",
    company: "DataStream Analytics",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Automations",
    review: "The AI automation solution MuseX built saves us countless hours. Document processing that used to take days now happens in minutes with incredible accuracy.",
    projectDetails: "AI Document Processing System",
    results: ["99.3% accuracy rate", "90% time savings", "£2M annual cost reduction"]
  },
  {
    id: 6,
    name: "Robert Kumar",
    role: "Marketing Director",
    company: "BrandWave Global",
    companyLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Video Ads",
    review: "MuseX created 500+ personalized video variations for our global campaign. The AI-powered approach gave us unprecedented scale and engagement rates we'd never seen before.",
    projectDetails: "Global Video Ad Campaign",
    results: ["500+ video variations", "45% higher engagement", "12 languages supported"]
  },
  {
    id: 7,
    name: "Jennifer Park",
    role: "Creative Director",
    company: "Pixel Perfect Studios",
    companyLogo: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    rating: 5,
    service: "Animations",
    review: "The 3D product launch animation MuseX created was absolutely stunning. It won industry awards and became the centerpiece of our entire rebrand campaign.",
    projectDetails: "3D Product Launch Animation",
    results: ["2M+ views", "Design award winner", "Featured in industry publications"]
  },
  {
    id: 8,
    name: "David Thompson",
    role: "DevOps Manager",
    company: "CloudScale Systems",
    companyLogo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
    rating: 5,
    service: "Cloud & DevOps",
    review: "MuseX migrated our entire infrastructure to a multi-cloud Kubernetes setup. The result? Better performance, lower costs, and deployments that take minutes instead of hours.",
    projectDetails: "Multi-Cloud Infrastructure Migration",
    results: ["99.99% uptime", "60% cost reduction", "3-minute deployments"]
  },
  {
    id: 9,
    name: "Amanda Foster",
    role: "Product Manager",
    company: "PayTech Solutions",
    companyLogo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    rating: 5,
    service: "API Development",
    review: "The payment gateway API MuseX built integrates 15+ providers seamlessly. It's fast, reliable, and has processed over $50M without a hitch. Exceptional work.",
    projectDetails: "Multi-Provider Payment Gateway",
    results: ["$50M+ processed", "150ms average response", "99.97% success rate"]
  },
  {
    id: 10,
    name: "Carlos Mendoza",
    role: "Chief Architect",
    company: "Enterprise Solutions Group",
    companyLogo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 5,
    service: "Microservices",
    review: "MuseX successfully migrated our monolith to a microservices architecture with zero downtime. The scalability and deployment flexibility we gained has been transformative.",
    projectDetails: "Microservices Migration",
    results: ["10x scalability improvement", "Independent deployments", "50% faster features"]
  },
  {
    id: 11,
    name: "Rachel Green",
    role: "Customer Experience Lead",
    company: "SupportPro Inc",
    companyLogo: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Chatbots",
    review: "The AI chatbot MuseX built handles 85% of our customer inquiries automatically with remarkable accuracy. Our support team can now focus on complex issues while maintaining high satisfaction scores.",
    projectDetails: "AI Customer Support System",
    results: ["85% automation rate", "4.7/5 satisfaction score", "30-second average resolution"]
  },
  {
    id: 12,
    name: "Thomas Wright",
    role: "Data Director",
    company: "Analytics Prime",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
    rating: 5,
    service: "Data Engineering",
    review: "MuseX built a real-time analytics pipeline that processes 10TB daily. The insights we get now are instantaneous, giving us a massive competitive advantage.",
    projectDetails: "Real-Time Data Pipeline",
    results: ["10TB/day processing", "Real-time insights", "Sub-second query times"]
  },

  /* --- Extra reviews: each service now has 4 reviews total --- */

  /* Web Development (3 added) */
  {
    id: 13,
    name: "Olivia Brooks",
    role: "Head of Growth",
    company: "ShopMart",
    companyLogo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9b?w=200&h=200&fit=crop",
    rating: 5,
    service: "Web Development",
    review: "MuseX rebuilt our storefront with a headless approach — the improvements in conversion and content velocity were immediate.",
    projectDetails: "Headless Commerce Migration",
    results: ["50% faster releases", "Improved SEO", "Higher conversion rate"]
  },
  {
    id: 14,
    name: "Ethan Mills",
    role: "Product Owner",
    company: "EduStream",
    companyLogo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9b?w=200&h=200&fit=crop",
    rating: 4,
    service: "Web Development",
    review: "Great engineering and pragmatic approach — the progressive web app they delivered improved retention considerably.",
    projectDetails: "PWA for Online Learning",
    results: ["2x repeat visits", "40% lower bounce", "Offline support"]
  },
  {
    id: 15,
    name: "Nadia Ali",
    role: "Marketing Lead",
    company: "LocalGoods",
    companyLogo: "https://images.unsplash.com/photo-1543595267-73e6a1bca4c2?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    rating: 5,
    service: "Web Development",
    review: "Fast delivery, solid testing and excellent collaboration. Our global traffic spikes are handled flawlessly now.",
    projectDetails: "Global Retail Replatform",
    results: ["Scalable infra", "Improved page loads", "Reliable releases"]
  },

  /* Mobile App Development (3 added) */
  {
    id: 16,
    name: "Priya Desai",
    role: "Head of Product",
    company: "RideNow",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    service: "Mobile App Development",
    review: "Their on-demand delivery app was robust and intuitive. Driver experience and tracking is flawless.",
    projectDetails: "Rider & Customer Apps",
    results: ["200K active users", "95% on-time delivery", "4.6 rating"]
  },
  {
    id: 17,
    name: "Omar Rahman",
    role: "CTO",
    company: "FitWear",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9b?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 4,
    service: "Mobile App Development",
    review: "Good cross-platform experience and timely bug fixes. Minor UI polish needed but overall excellent app delivery.",
    projectDetails: "Wearable Companion App",
    results: ["10K+ devices paired", "Healthy retention", "Reliable sync"]
  },
  {
    id: 18,
    name: "Hannah Lee",
    role: "Operations Head",
    company: "FieldOps",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
    service: "Mobile App Development",
    review: "Offline-first capabilities were a game changer for our field teams — sync and conflict resolution worked flawlessly.",
    projectDetails: "Field Inspection App",
    results: ["90% productivity gain", "Zero data loss", "Great UX"]
  },

  /* Software Development (3 added) */
  {
    id: 19,
    name: "Victor Huang",
    role: "COO",
    company: "LogiTrack",
    companyLogo: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    rating: 5,
    service: "Software Development",
    review: "Their supply chain platform cut our logistic costs and improved forecasting accuracy — highly skilled engineering team.",
    projectDetails: "Supply Chain Suite",
    results: ["15% cost reduction", "Integrated suppliers", "Better forecasts"]
  },
  {
    id: 20,
    name: "Lena Kovacs",
    role: "Sales VP",
    company: "BrightCRM",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 4,
    service: "Software Development",
    review: "Custom CRM worked well and integrated nicely with our existing tools. Some feature backlog remains but progress is steady.",
    projectDetails: "Custom CRM Platform",
    results: ["Faster sales cycle", "Custom integrations", "Better tracking"]
  },
  {
    id: 21,
    name: "Ahmed Khan",
    role: "Plant Manager",
    company: "SteelWorks",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 5,
    service: "Software Development",
    review: "Industrial IoT solution delivered real-time insights and anomaly detection that saved us multiple hours of downtime.",
    projectDetails: "IoT Monitoring System",
    results: ["20% downtime reduction", "Real-time alerts", "Multi-site deployment"]
  },

  /* UI/UX Designing (3 added) */
  {
    id: 22,
    name: "Sofia Martinez",
    role: "Head of Product",
    company: "QuickForms",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 5,
    service: "UI/UX Designing",
    review: "Their mobile design language made prototyping painless and consistent across teams. Designers and devs love it.",
    projectDetails: "Mobile Design System",
    results: ["Faster prototyping", "Consistent UI", "Lower design debt"]
  },
  {
    id: 23,
    name: "Marco Silva",
    role: "UX Researcher",
    company: "InsightLab",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 4,
    service: "UI/UX Designing",
    review: "User research program identified the exact UX friction points we needed to fix. Actionable insights delivered quickly.",
    projectDetails: "User Research Initiative",
    results: ["30% fewer support tickets", "Clear UX roadmap", "Improved retention"]
  },
  {
    id: 24,
    name: "Aisha Noor",
    role: "Product Designer",
    company: "MobiPay",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    rating: 5,
    service: "UI/UX Designing",
    review: "Accessible dashboard design dramatically improved usability for keyboard and screen-reader users.",
    projectDetails: "Accessible Dashboard",
    results: ["AAA compliance", "Improved adoption", "Lower legal risk"]
  },

  /* QA & Testing (3 added) */
  {
    id: 25,
    name: "Marcus Bell",
    role: "QA Lead",
    company: "SecureApps",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 5,
    service: "QA & Testing",
    review: "Their E2E mobile test suite eliminated flaky tests and stabilized our CI pipeline.",
    projectDetails: "Mobile E2E Automation",
    results: ["70% fewer regressions", "Stable nightly runs", "Faster releases"]
  },
  {
    id: 26,
    name: "Yuki Tanaka",
    role: "Performance Engineer",
    company: "OptiScale",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    service: "QA & Testing",
    review: "Performance testing uncovered bottlenecks we couldn't see — the remediation plan boosted throughput significantly.",
    projectDetails: "Load Testing & Bottleneck Analysis",
    results: ["Improved throughput", "SLA validation", "Reduced latency"]
  },
  {
    id: 27,
    name: "Olga Petrova",
    role: "Security Manager",
    company: "SafeNet",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 4,
    service: "QA & Testing",
    review: "Comprehensive security testing helped close critical gaps before production. Professional and thorough.",
    projectDetails: "Security Testing Program",
    results: ["Zero critical vulns", "Faster patching", "Compliance achieved"]
  },

  /* AI Automations (3 added) */
  {
    id: 28,
    name: "Mikhail S.",
    role: "Finance Director",
    company: "AutoLedger",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Automations",
    review: "Invoice OCR and AP workflow reduced manual entry massively. ROI within months.",
    projectDetails: "Invoice OCR & Workflow",
    results: ["95% extraction accuracy", "70% faster AP", "Lower error rates"]
  },
  {
    id: 29,
    name: "Leila Haddad",
    role: "Support Lead",
    company: "GlobalTel",
    companyLogo: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 4,
    service: "AI Automations",
    review: "Email triage automation saved our agents hours every day; suggestions are reliably accurate.",
    projectDetails: "Email Triage Classifier",
    results: ["60% automation rate", "Faster SLA adherence", "Higher productivity"]
  },
  {
    id: 30,
    name: "Gavin Morris",
    role: "CFO",
    company: "ChainTrade",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Automations",
    review: "RPA bots removed repetitive work and reduced manual errors in our reconciliations.",
    projectDetails: "RPA for Finance",
    results: ["Lower manual hours", "Error-free processes", "Fast ROI"]
  },

  /* AI Video Ads (3 added) */
  {
    id: 31,
    name: "Claire Dupont",
    role: "Head of Growth",
    company: "GroceryNow",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Video Ads",
    review: "Automated video generator allowed us to launch region-specific creatives quickly and at scale.",
    projectDetails: "Dynamic Product Video Generator",
    results: ["1K creatives/week", "Lower CPM", "Better personalization"]
  },
  {
    id: 32,
    name: "Ravi Patel",
    role: "Marketing Ops",
    company: "TravelMate",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 4,
    service: "AI Video Ads",
    review: "Localization pipeline saved us weeks of manual dubbing and subtitling — quality was surprisingly high.",
    projectDetails: "Localization Pipeline",
    results: ["12 markets supported", "Faster launches", "Improved CTR"]
  },
  {
    id: 33,
    name: "Sima Noor",
    role: "Creative Producer",
    company: "AdWorks",
    companyLogo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    service: "AI Video Ads",
    review: "A/B video variant testing helped us double down on high-performing creatives quickly.",
    projectDetails: "Variant Testing System",
    results: ["ROAS uplift", "Optimized templates", "Higher engagement"]
  },

  /* Animations (3 added) */
  {
    id: 34,
    name: "Tomás Rivera",
    role: "Head of Content",
    company: "GadgetCo",
    companyLogo: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    rating: 5,
    service: "Animations",
    review: "The character animation series they produced captured tone and emotion perfectly. Audiences loved it.",
    projectDetails: "Character Short Animation",
    results: ["Festival selection", "High retention", "Follow-up commissions"]
  },
  {
    id: 35,
    name: "Anya Petrova",
    role: "Product Marketing",
    company: "HomeTech",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 4,
    service: "Animations",
    review: "Explainer micro-animations greatly improved onboarding completion rates—clear, concise, and fun.",
    projectDetails: "Explainer Animation Series",
    results: ["Higher onboarding completion", "Shorter time-to-value", "Multi-language support"]
  },
  {
    id: 36,
    name: "Diego Alvarez",
    role: "Creative Lead",
    company: "3DWorks",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    service: "Animations",
    review: "Photoreal product demos reduced support tickets and helped customers understand assembly instantly.",
    projectDetails: "Virtual Product Demo",
    results: ["Reduced support calls", "Higher pre-orders", "Client praise"]
  },

  /* Short Films (3 added) */
  {
    id: 37,
    name: "Hannah Kim",
    role: "Producer",
    company: "DocuWorks",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 5,
    service: "Short Films",
    review: "Their documentary short was handled with sensitivity and cinematic skill—excellent storytelling.",
    projectDetails: "Tech Documentary Short",
    results: ["Festival screenings", "Press coverage", "Educational use"]
  },
  {
    id: 38,
    name: "Jeroen van Dijk",
    role: "Brand Manager",
    company: "LuxHome",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 4,
    service: "Short Films",
    review: "Brand narrative short gave our campaign a strong emotional anchor—great production values.",
    projectDetails: "Brand Narrative Short",
    results: ["Viral boost", "Higher recall", "Partner streaming"]
  },
  {
    id: 39,
    name: "Priyanka Joshi",
    role: "Education Director",
    company: "LearnWell",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    service: "Short Films",
    review: "Educational shorts were engaging and used effectively in classrooms. Production attention to detail was excellent.",
    projectDetails: "Educational Short Series",
    results: ["Used in schools", "High completion rate", "Sponsorships secured"]
  },

  /* Cloud & DevOps (3 added) */
  {
    id: 40,
    name: "Sean O'Connor",
    role: "Infrastructure Lead",
    company: "FinCloud",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 5,
    service: "Cloud & DevOps",
    review: "Infrastructure-as-Code suite made multi-region deployments replicable and safe. Excellent automation.",
    projectDetails: "IaC Multi-Region",
    results: ["Consistent infra", "Reduced drift", "Faster deployments"]
  },
  {
    id: 41,
    name: "Laila Ahmed",
    role: "Cloud Architect",
    company: "RetailX",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 4,
    service: "Cloud & DevOps",
    review: "Cost optimization program made our cloud bills predictable and cut unnecessary spend.",
    projectDetails: "Cost Optimization",
    results: ["40% cost cut", "Rightsized infra", "Reserved instance strategy"]
  },
  {
    id: 42,
    name: "Jonas Berg",
    role: "SRE Manager",
    company: "MediaFlow",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 5,
    service: "Cloud & DevOps",
    review: "Chaos engineering exercises hardened our services and improved runbook quality across teams.",
    projectDetails: "Chaos Engineering",
    results: ["Faster recovery", "Validated runbooks", "Higher SLA confidence"]
  },

  /* API Development (3 added) */
  {
    id: 43,
    name: "Nora Jensen",
    role: "Platform PM",
    company: "DevKit",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 5,
    service: "API Development",
    review: "GraphQL gateway simplified client integration and reduced overfetching significantly.",
    projectDetails: "GraphQL Gateway",
    results: ["Simpler clients", "Lower bandwidth", "Better dev DX"]
  },
  {
    id: 44,
    name: "Felix Romero",
    role: "Security Engineer",
    company: "SafePay",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 4,
    service: "API Development",
    review: "Robust rate-limiting and analytics help us detect and prevent abuse early.",
    projectDetails: "API Security & Rate Limiting",
    results: ["No abuse incidents", "Predictable throughput", "Detailed analytics"]
  },
  {
    id: 45,
    name: "Zara Khan",
    role: "Realtime Lead",
    company: "TickerNow",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 5,
    service: "API Development",
    review: "Their WebSocket APIs delivered sub-50ms latency for our trading platform — rock solid under load.",
    projectDetails: "Realtime WebSocket APIs",
    results: ["<50ms latency", "High stability", "Scalable fanout"]
  },

  /* Microservices (3 added) */
  {
    id: 46,
    name: "Pavel Novak",
    role: "Backend Lead",
    company: "ScaleUp",
    companyLogo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1520975661168-7f1b7b44d5de?w=200&h=200&fit=crop",
    rating: 5,
    service: "Microservices",
    review: "Observability platform they implemented made debugging production issues painless.",
    projectDetails: "Microservice Observability",
    results: ["Reduced MTTR", "Centralized logs", "Better ops"]
  },
  {
    id: 47,
    name: "Marta Silva",
    role: "Platform Engineer",
    company: "NextGen",
    companyLogo: "https://images.unsplash.com/photo-1545996124-1c6a9a6e6f9?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    rating: 4,
    service: "Microservices",
    review: "Service mesh rollout improved our traffic control and mutual TLS setup — well executed.",
    projectDetails: "Service Mesh Rollout",
    results: ["Secure comms", "Traffic control", "Observability"]
  },
  {
    id: 48,
    name: "Kofi Mensah",
    role: "Engineering Manager",
    company: "FinServ",
    companyLogo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    rating: 5,
    service: "Microservices",
    review: "Decomposing the monolith into bounded contexts reduced team friction and sped up feature delivery.",
    projectDetails: "Bounded Context Replatform",
    results: ["Independent deploys", "Reduced coupling", "Faster delivery"]
  }
];


const services = [
  "All Services",
  "Web Development",
  "Mobile App Development",
  "Software Development",
  "UI/UX Designing",
  "AI Automations",
  "AI Video Ads",
  "Animations",
  "Cloud & DevOps",
  "API Development",
  "Microservices",
  "AI Chatbots",
  "Data Engineering"
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Star, label: "Average Rating", value: "4.9/5" },
  { icon: Award, label: "Industry Awards", value: "25+" },
  { icon: TrendingUp, label: "Success Rate", value: "98%" }
];

const Testimonials = () => {
  const [selectedService, setSelectedService] = useState("All Services");

  const filteredTestimonials =
    selectedService === "All Services"
      ? testimonials
      : testimonials.filter((t) => t.service === selectedService);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-accent text-accent" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center animate-fade-in">
              <Quote className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Don't just take our word for it. Hear from the companies and leaders who have
            transformed their businesses with MuseX solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sticky top-16 bg-background/95 backdrop-blur-sm z-40 border-b border-border/50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-foreground">Filter by Service:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedService === service
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className="group overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Company Logo */}
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted">
                      <img
                        src={testimonial.companyLogo}
                        alt={testimonial.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/30">
                      {testimonial.service}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    {renderStars(testimonial.rating)}
                    <span className="text-sm font-medium text-foreground">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Review */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                      {testimonial.review}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold text-foreground mb-2">
                      Project: {testimonial.projectDetails}
                    </p>
                    <div className="space-y-1">
                      {testimonial.results.map((result, i) => (
                        <div key={i} className="flex items-start text-xs text-muted-foreground">
                          <span className="text-accent mr-2">✓</span>
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Avatar className="w-12 h-12 border-2 border-accent/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No testimonials found for this service yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create something extraordinary together. Start your project today and become our
            next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-accent/30 transition-all"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
