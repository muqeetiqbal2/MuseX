import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: November 19, 2025</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to MuseX ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Register for an account</li>
                <li>Express interest in obtaining information about us or our services</li>
                <li>Participate in activities on our website</li>
                <li>Contact us for support or inquiries</li>
              </ul>
              <p className="mb-4">The personal information we collect may include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact data (email address, phone number, address)</li>
                <li>Company name and job title</li>
                <li>Project requirements and business information</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="mb-4">We automatically collect certain information when you visit, use, or navigate our website:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Log and usage data (IP address, browser type, operating system)</li>
                <li>Device information</li>
                <li>Location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide, operate, and maintain our services</li>
                <li>To process your transactions and manage your orders</li>
                <li>To communicate with you about projects, updates, and marketing</li>
                <li>To improve our website and services</li>
                <li>To detect, prevent, and address technical issues and fraud</li>
                <li>To comply with legal obligations</li>
                <li>To analyze usage patterns and optimize user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing Your Information</h2>
              <p className="mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We share information with third-party vendors who perform services on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> We may share your information for other purposes with your explicit consent</li>
              </ul>
              <p className="mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission or storage method is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p>
                We use encryption, secure servers, and access controls to safeguard your data. Our team is trained in data protection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Privacy Rights</h2>
              <p className="mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Objection:</strong> Object to our processing of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on it for processing</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at privacy@musex.com</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
              </p>
              <p>Types of cookies we use:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Essential Cookies:</strong> Necessary for website operation</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing habits to show relevant ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
              <p className="mb-4">If you have questions or concerns about this Privacy Policy, please contact us:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> privacy@musex.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Tech Street, Innovation District, San Francisco, CA 94105</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
