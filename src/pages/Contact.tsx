import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

type ResultState = { ok: boolean | null; message: string };

const Contact: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<ResultState>({ ok: null, message: "" });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult({ ok: null, message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    // debug: log entries to confirm names are present
    for (const [k, v] of formData.entries()) {
      console.log("FormData:", k, v);
    }

    // honeypot check
    if (formData.get("botcheck")) {
      console.warn("Honeypot filled — aborting.");
      setResult({ ok: false, message: "Bot detected — submission blocked." });
      setLoading(false);
      return;
    }

    // Use Vite env variable
    const accessKey = (import.meta.env as Record<string, string | undefined>).VITE_WEB3FORMS_KEY
      || "5ca445a6-aa21-4e25-9286-03b728a495cf"; // fallback empty (not recommended to hardcode)

    if (!accessKey) {
      console.error("Web3Forms key missing. Add VITE_WEB3FORMS_KEY to .env");
      setResult({ ok: false, message: "Server configuration error (missing key)." });
      setLoading(false);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Website contact form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      let data: any = null;
      try { data = JSON.parse(text); } catch { /* non-json */ }

      console.log("Response status:", response.status, "body:", text);

      if (!response.ok) {
        const msg = data?.message || `HTTP ${response.status}`;
        setResult({ ok: false, message: `Submission failed: ${msg}` });
      } else if (data?.success) {
        setResult({ ok: true, message: "Thanks — your message was sent successfully!" });
        form.reset();
      } else {
        // server returned 200 but success not true
        const msg = data?.message || text || "Unknown server response";
        setResult({ ok: false, message: `Submission failed: ${msg}` });
      }
    } catch (err: any) {
      console.error("Fetch error:", err);
      setResult({ ok: false, message: `Network error: ${err?.message || err}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-primary">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your business
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="bg-card border border-border/50 rounded-lg p-8 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-2">Send us a message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6" aria-describedby="form-result">
                  {/* Honeypot */}
                  <input name="botcheck" type="text" autoComplete="off" tabIndex={-1} style={{display: "none"}} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <select id="inquiry" name="inquiry" className="w-full px-3 py-2 border border-input rounded-md bg-background" required>
                      <option value="">Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={5} required />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>

                  <div id="form-result" aria-live="polite" className="mt-2">
                    {result.ok === true && <p className="text-green-600" role="status">{result.message}</p>}
                    {result.ok === false && <p className="text-red-600" role="alert">{result.message}</p>}
                  </div>
                </form>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">Have questions? We're here to help. Reach out to us through any of the following channels.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground">contact@musex.com</p>
                    <p className="text-muted-foreground">support@musex.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Office</h3>
                    <p className="text-muted-foreground">123 Tech Street</p>
                    <p className="text-muted-foreground">Innovation Hub, CA 94000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 rounded-lg bg-muted border border-border overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">Map Integration Placeholder</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
