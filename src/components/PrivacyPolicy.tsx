import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
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
          Privacy Policy
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <section>
            <p className="text-text-charcoal/70 mb-4">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-text-charcoal/70">
              Courte Consulting ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">1. Information We Collect</h2>
            <p className="text-text-charcoal/70 mb-3">
              We may collect personal information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-text-charcoal/70 space-y-2 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and business information</li>
              <li>Project details and requirements</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">2. How We Use Your Information</h2>
            <p className="text-text-charcoal/70 mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-text-charcoal/70 space-y-2 ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver services and fulfill project requirements</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-text-charcoal/70">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">4. Data Security</h2>
            <p className="text-text-charcoal/70">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-text-charcoal/70">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some functionality of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">6. Third-Party Links</h2>
            <p className="text-text-charcoal/70">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">7. Your Rights</h2>
            <p className="text-text-charcoal/70 mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-text-charcoal/70 space-y-2 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">8. Children's Privacy</h2>
            <p className="text-text-charcoal/70">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-text-charcoal/70">
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Effective Date" at the top of this page. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-charcoal mb-4">10. Contact Us</h2>
            <p className="text-text-charcoal/70">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-text-charcoal/70 mt-3">
              <strong>Email:</strong>{' '}
              <a href="mailto:info@courteconsulting.com" className="text-primary-orange hover:text-primary-orange-dark">
                info@courteconsulting.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
