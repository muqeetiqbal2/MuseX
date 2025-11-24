import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: November 19, 2025</p>

          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and MuseX ("Company," "we," "us," or "our") concerning your access to and use of our website and services.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree with these Terms, you must not access or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
              <p className="mb-4">MuseX provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Web Development and Design</li>
                <li>Mobile Application Development</li>
                <li>Software Development Solutions</li>
                <li>UI/UX Design Services</li>
                <li>Quality Assurance and Testing</li>
                <li>AI Automations and Integrations</li>
                <li>Cloud and DevOps Solutions</li>
                <li>API Development and Integration</li>
                <li>Microservices Architecture</li>
                <li>Data Engineering and Analytics</li>
                <li>Enterprise Application Development</li>
                <li>Additional services as described on our website</li>
              </ul>
              <p className="mt-4">
                We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts and Registration</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Account Creation</h3>
              <p className="mb-4">
                To access certain features of our services, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Account Security</h3>
              <p className="mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Account Termination</h3>
              <p>
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Project Engagement and Deliverables</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Project Scope</h3>
              <p className="mb-4">
                All projects will be governed by a separate Statement of Work (SOW) or project agreement that outlines specific deliverables, timelines, and pricing. The SOW is incorporated into these Terms by reference.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Client Responsibilities</h3>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Provide timely feedback and approvals</li>
                <li>Supply necessary materials, information, and access</li>
                <li>Designate authorized representatives for project decisions</li>
                <li>Make timely payments as specified in the agreement</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Project Changes</h3>
              <p>
                Any changes to the agreed project scope must be documented in writing and may result in adjustments to timeline and pricing. We will provide estimates for change requests before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment Terms</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Fees and Payment</h3>
              <p className="mb-4">
                You agree to pay all fees as specified in your project agreement or SOW. Payment terms will be outlined in the agreement and may include milestone-based payments or recurring subscription fees.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Late Payments</h3>
              <p className="mb-4">
                Late payments may be subject to interest charges of 1.5% per month or the maximum rate permitted by law, whichever is less. We reserve the right to suspend services for accounts with overdue payments.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Refunds</h3>
              <p>
                Refund policies will be specified in individual project agreements. Generally, payments for completed work are non-refundable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property Rights</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Ownership of Deliverables</h3>
              <p className="mb-4">
                Upon full payment, you will own the final deliverables as specified in the project agreement. We retain ownership of all preliminary work, concepts, and any pre-existing intellectual property.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.2 Company IP</h3>
              <p className="mb-4">
                All rights, title, and interest in MuseX's proprietary tools, methodologies, frameworks, and pre-existing code libraries remain with MuseX.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.3 Third-Party Components</h3>
              <p className="mb-4">
                Projects may include third-party components subject to their own licenses. You are responsible for complying with such licenses.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">6.4 Portfolio Rights</h3>
              <p>
                We reserve the right to use completed projects in our portfolio, marketing materials, and case studies unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
              <p className="mb-4">
                Both parties agree to maintain confidentiality of any proprietary or confidential information shared during the course of the engagement. This obligation survives termination of the agreement.
              </p>
              <p>
                Confidential information does not include information that: (a) is or becomes publicly available through no breach of this agreement; (b) was rightfully in possession prior to disclosure; (c) is independently developed; or (d) is required to be disclosed by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Warranties and Disclaimers</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">8.1 Service Warranty</h3>
              <p className="mb-4">
                We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards. Warranty periods for specific deliverables will be outlined in project agreements.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">8.2 Disclaimer</h3>
              <p className="mb-4">
                EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">8.3 No Guarantee of Results</h3>
              <p>
                We do not guarantee specific business outcomes, traffic, revenue, or other results from our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL MUSEX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p>
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE THAT GAVE RISE TO THE CLAIM DURING THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless MuseX and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from: (a) your use of our services; (b) your violation of these Terms; (c) your violation of any rights of another party; or (d) content you provide to us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Acceptable Use</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use our services for any illegal purpose or in violation of any laws</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our services to transmit malware, viruses, or harmful code</li>
                <li>Engage in any activity that could damage our reputation</li>
                <li>Violate any intellectual property rights</li>
                <li>Use our services to harass, abuse, or harm another person</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Third-Party Services</h2>
              <p>
                Our services may integrate with or include third-party services, APIs, or platforms. Your use of such third-party services is subject to their own terms and conditions. We are not responsible for third-party services or their performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Termination</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">13.1 Termination by Either Party</h3>
              <p className="mb-4">
                Either party may terminate an agreement with 30 days written notice. Termination does not relieve you of payment obligations for services already rendered.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">13.2 Immediate Termination</h3>
              <p className="mb-4">
                We may immediately terminate or suspend access to our services without notice for: (a) violation of these Terms; (b) non-payment; (c) illegal activities; or (d) at our sole discretion.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">13.3 Effect of Termination</h3>
              <p>
                Upon termination, you must cease all use of our services. Provisions that by their nature should survive termination will survive, including ownership, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Dispute Resolution</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">14.1 Informal Resolution</h3>
              <p className="mb-4">
                In the event of any dispute, both parties agree to first attempt to resolve the matter through good-faith negotiations.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">14.2 Arbitration</h3>
              <p className="mb-4">
                If informal resolution fails, any dispute shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in San Francisco, California.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">14.3 Class Action Waiver</h3>
              <p>
                You agree that disputes must be brought on an individual basis only, and not as part of any class or representative action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">16. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through our website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">17. Miscellaneous</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">17.1 Entire Agreement</h3>
              <p className="mb-4">
                These Terms, together with any project agreements or SOWs, constitute the entire agreement between you and MuseX.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">17.2 Severability</h3>
              <p className="mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">17.3 Waiver</h3>
              <p className="mb-4">
                No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3">17.4 Assignment</h3>
              <p>
                You may not assign these Terms without our prior written consent. We may assign our rights and obligations without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">18. Contact Information</h2>
              <p className="mb-4">For questions about these Terms, please contact us:</p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> legal@musex.com</li>
                <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                <li><strong>Address:</strong> 123 Tech Street, Innovation District, San Francisco, CA 94105</li>
              </ul>
            </section>

            <section className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                By using MuseX services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
