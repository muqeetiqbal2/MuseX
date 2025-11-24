import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Eye, Award, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every line of code and every pixel of design.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Your data's safety is our top priority in everything we build.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to turn visions into reality.",
    },
  ];

  const whyChooseUs = [
    "Scalable microservices architecture expertise",
    "Lightning-fast development with agile methodology",
    "24/7 support and maintenance",
    "Proven track record with 500+ successful projects",
    "Expert team with 10+ years of combined experience",
    "Cutting-edge technology stack",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">About MuseX</h1>
            <p className="text-xl text-muted-foreground">
              Microservices Unified Solutions Experience
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of passionate technologists, designers, and problem solvers dedicated to
              building scalable digital solutions that drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative technology solutions that are scalable, secure, and
                sustainable. We believe in creating digital experiences that not only meet current needs
                but anticipate future challenges.
              </p>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the global leader in microservices architecture and AI-powered solutions,
                known for transforming complex challenges into elegant, scalable systems that drive
                digital transformation worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card border border-border/50 rounded-lg p-6 space-y-4 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose MuseX?</h2>
              <p className="text-lg text-muted-foreground">
                We bring unmatched expertise and commitment to every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg leading-relaxed text-primary-foreground/90">
              <p>
                Founded by a team of experienced software architects and AI specialists, MuseX emerged from
                a simple vision: to make enterprise-grade technology accessible to businesses of all sizes.
              </p>
              <p>
                Over the years, we've evolved from a small startup to a trusted partner for companies
                worldwide, delivering solutions that combine the power of microservices architecture
                with the intelligence of modern AI systems.
              </p>
              <p>
                Today, MuseX stands at the forefront of digital innovation, helping businesses navigate
                the complexities of modern technology with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
