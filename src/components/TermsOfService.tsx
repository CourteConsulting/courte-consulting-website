import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-accent-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <Link
          to="/"
          className="inline-flex items-center text-primary-orange hover:text-primary-orange-dark transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl lg:text-5xl font-bold text-text-charcoal mb-8">
          Terms of Service
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <p className="text-text-charcoal/70 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-text-charcoal/70">
              Welcome to Courte Consulting. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">1. Acceptance of Terms</h2>
            <p className="text-text-charcoal/70">
              By accessing and using our website and services, you accept and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">2. Services Description</h2>
            <p className="text-text-charcoal/70">
              Courte Consulting provides digital marketing, website design, product development, and related consulting services. The specific scope of services will be outlined in individual project agreements or statements of work.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">3. User Responsibilities</h2>
            <p className="text-text-charcoal/70 mb-3">
              When using our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-text-charcoal/70 space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of any account credentials</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">4. Intellectual Property</h2>
            <p className="text-text-charcoal/70">
              All content on our website, including text, graphics, logos, images, and software, is the property of Courte Consulting or its licensors and is protected by copyright and other intellectual property laws. Work products created as part of client engagements will be governed by individual project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">5. Payment Terms</h2>
            <p className="text-text-charcoal/70">
              Payment terms for services will be outlined in individual project agreements. Unless otherwise specified, payment is due according to the terms stated in the project proposal or invoice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">6. Confidentiality</h2>
            <p className="text-text-charcoal/70">
              We respect the confidentiality of our clients' information. Both parties agree to maintain the confidentiality of proprietary information shared during the course of our business relationship, as detailed in individual project agreements or non-disclosure agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">7. Limitation of Liability</h2>
            <p className="text-text-charcoal/70">
              To the fullest extent permitted by law, Courte Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">8. Warranty Disclaimer</h2>
            <p className="text-text-charcoal/70">
              Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">9. Termination</h2>
            <p className="text-text-charcoal/70">
              We reserve the right to terminate or suspend access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">10. Changes to Terms</h2>
            <p className="text-text-charcoal/70">
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by updating the "Effective Date" at the top of this page. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">11. Governing Law</h2>
            <p className="text-text-charcoal/70">
              These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">12. Contact Information</h2>
            <p className="text-text-charcoal/70">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-text-charcoal/70 mt-3">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@courteconsulting.com" className="text-primary-orange hover:text-primary-orange-dark">
                info@courteconsulting.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">13. Entire Agreement</h2>
            <p className="text-text-charcoal/70">
              These Terms, together with our Privacy Policy and any specific project agreements, constitute the entire agreement between you and Courte Consulting regarding the use of our services.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
