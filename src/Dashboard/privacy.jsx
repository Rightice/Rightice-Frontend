"use client";

import { useState } from "react";
import Sidebar from "../components/side-top-bar";
import { ChevronDown, ChevronUp, Shield } from "lucide-react";

const Privacy = () => {
  const [expandedSections, setExpandedSections] = useState({
    information: true,
    use: false,
    sharing: false,
    rights: false,
    security: false,
    cookies: false,
    changes: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const Section = ({ id, title, children }) => {
    const isExpanded = expandedSections[id];

    return (
      <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left">
          <h2 className="text-lg font-medium text-[#242E4D]">{title}</h2>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {isExpanded && <div className="p-4 bg-white">{children}</div>}
      </div>
    );
  };

  return (
    <Sidebar>
      <div className="p-6 max-w-1xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="h-8 w-8 text-[#242E4D]" />
          <h1 className="text-3xl font-semibold text-[#242E4D]">
            Privacy Policy
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {/* <p className="text-gray-700">Last Updated: April 20, 2025</p> */}
          <p className="mt-4 text-gray-700">
            Welcome to Rightice.ng. We are committed
            to protecting your privacy and ensuring the security of your
            personal information. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our legal
            services platform.
          </p>
          <p className="mt-4 text-gray-700">
            By accessing or using Rightice.ng, you agree to the terms of this
            Privacy Policy. Please read this policy carefully to understand our
            practices regarding your personal data.
          </p>
        </div>

        <Section id="information" title="1. Information We Collect">
          <h3 className="font-medium text-[#242E4D] mb-2">
            Personal Information
          </h3>
          <p className="mb-4 text-gray-700">
            We collect personal information that you voluntarily provide to us
            when you:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Create an account or profile</li>
            <li>Request legal services or consultations</li>
            <li>Complete forms or surveys</li>
            <li>Communicate with lawyers or our support team</li>
            <li>Make payments for services</li>
          </ul>
          <p className="mb-4 text-gray-700">This information may include:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              Contact information (name, email address, phone number, address)
            </li>
            <li>Profile information (username, password, profile picture)</li>
            <li>Identity verification information</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Legal case information and documentation</li>
          </ul>

          <h3 className="font-medium text-[#242E4D] mb-2">
            Automatically Collected Information
          </h3>
          <p className="mb-4 text-gray-700">
            When you access or use our platform, we automatically collect
            certain information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              Device information (IP address, browser type, operating system)
            </li>
            <li>Usage data (pages visited, time spent, actions taken)</li>
            <li>Location information (if permitted by your device settings)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </Section>

        <Section id="use" title="2. How We Use Your Information">
          <p className="mb-4 text-gray-700">
            We use your personal information for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>To provide and maintain our legal services platform</li>
            <li>To connect you with appropriate legal professionals</li>
            <li>To process and complete transactions</li>
            <li>
              To communicate with you about services, updates, and support
            </li>
            <li>To personalize your experience and improve our platform</li>
            <li>To analyze usage patterns and optimize our services</li>
            <li>
              To protect our platform, users, and legal professionals from fraud
              and abuse
            </li>
            <li>
              To comply with legal obligations and enforce our terms of service
            </li>
          </ul>

          <h3 className="font-medium text-[#242E4D] mb-2">
            Legal Basis for Processing
          </h3>
          <p className="mb-4 text-gray-700">
            We process your personal information based on one or more of the
            following legal grounds:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Performance of a contract when we provide you with services</li>
            <li>Your consent, which you can withdraw at any time</li>
            <li>
              Legitimate interests in operating and improving our platform
            </li>
            <li>Compliance with legal obligations</li>
          </ul>
        </Section>

        <Section id="sharing" title="3. Information Sharing and Disclosure">
          <p className="mb-4 text-gray-700">
            We may share your personal information in the following
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              <strong>Legal Professionals:</strong> We share your information
              with lawyers and legal professionals to facilitate the provision
              of legal services you request.
            </li>
            <li>
              <strong>Service Providers:</strong> We may engage trusted
              third-party companies and individuals to facilitate our services,
              provide services on our behalf, or assist in analyzing how our
              services are used.
            </li>
            <li>
              <strong>Business Transfers:</strong> If we are involved in a
              merger, acquisition, or sale of assets, your information may be
              transferred as part of that transaction.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose your
              information if required by law, court order, or other legal
              processes.
            </li>
            <li>
              <strong>Protection of Rights:</strong> We may disclose information
              to protect the rights, property, or safety of our platform, users,
              legal professionals, or others.
            </li>
          </ul>

          <h3 className="font-medium text-[#242E4D] mb-2">
            Attorney-Client Privilege
          </h3>
          <p className="mb-4 text-gray-700">
            We respect the confidentiality of communications between lawyers and
            clients. Our platform is designed to maintain attorney-client
            privilege where applicable. However, please note that not all
            communications on our platform are protected by attorney-client
            privilege, particularly before a formal attorney-client relationship
            is established.
          </p>
        </Section>

        <Section id="rights" title="4. Your Rights and Choices">
          <p className="mb-4 text-gray-700">
            Depending on your location, you may have certain rights regarding
            your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Access and review your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Delete your personal information</li>
            <li>Restrict or object to certain processing activities</li>
            <li>
              Data portability (receiving your data in a structured,
              machine-readable format)
            </li>
            <li>Withdraw consent for processing based on consent</li>
          </ul>

          <p className="mb-4 text-gray-700">
            To exercise these rights, please contact us using the information
            provided in the &quot;Contact Us&quot; section. We will respond to
            your request within the timeframe required by applicable law.
          </p>

          <h3 className="font-medium text-[#242E4D] mb-2">Account Settings</h3>
          <p className="mb-4 text-gray-700">
            You can update certain personal information directly through your
            account settings. If you need assistance, please contact our support
            team.
          </p>

          <h3 className="font-medium text-[#242E4D] mb-2">
            Marketing Communications
          </h3>
          <p className="mb-4 text-gray-700">
            You can opt out of receiving marketing communications from us by
            following the unsubscribe instructions included in our emails or by
            contacting us directly.
          </p>
        </Section>

        <Section id="security" title="5. Data Security">
          <p className="mb-4 text-gray-700">
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>Encryption of sensitive data</li>
            <li>Secure socket layer (SSL) technology</li>
            <li>Regular security assessments and testing</li>
            <li>Access controls and authentication procedures</li>
            <li>Staff training on data protection and security</li>
          </ul>

          <p className="mb-4 text-gray-700">
            While we strive to protect your personal information, no method of
            transmission over the Internet or electronic storage is 100% secure.
            We cannot guarantee absolute security of your data.
          </p>

          <h3 className="font-medium text-[#242E4D] mb-2">Data Retention</h3>
          <p className="mb-4 text-gray-700">
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law. When
            determining the retention period, we consider:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>The nature and sensitivity of the information</li>
            <li>
              The potential risk of harm from unauthorized use or disclosure
            </li>
            <li>The purposes for which we process the information</li>
            <li>Legal and regulatory requirements</li>
          </ul>
        </Section>

        <Section id="cookies" title="6. Cookies and Tracking Technologies">
          <p className="mb-4 text-gray-700">
            We use cookies and similar tracking technologies to collect and
            track information about your browsing activities on our platform.
            Cookies are small text files that are stored on your device when you
            visit a website.
          </p>

          <h3 className="font-medium text-[#242E4D] mb-2">
            Types of Cookies We Use
          </h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Necessary for the operation of
              our platform and enable core functionality.
            </li>
            <li>
              <strong>Analytical/Performance Cookies:</strong> Help us
              understand how visitors interact with our platform by collecting
              and reporting information anonymously.
            </li>
            <li>
              <strong>Functionality Cookies:</strong> Enable us to personalize
              your experience by remembering your preferences and settings.
            </li>
            <li>
              <strong>Targeting/Advertising Cookies:</strong> Used to deliver
              relevant advertisements and track the effectiveness of advertising
              campaigns.
            </li>
          </ul>

          <h3 className="font-medium text-[#242E4D] mb-2">Cookie Management</h3>
          <p className="mb-4 text-gray-700">
            Most web browsers allow you to control cookies through their
            settings. You can typically delete existing cookies, block certain
            types of cookies, or set your browser to notify you when cookies are
            being sent. Please note that disabling cookies may affect the
            functionality of our platform.
          </p>
        </Section>

        <Section id="changes" title="7. Changes to This Privacy Policy">
          <p className="mb-4 text-gray-700">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, services, or applicable laws. We will
            notify you of any material changes by posting the updated policy on
            our platform with a new &quot;Last Updated&quot; date.
          </p>
          <p className="mb-4 text-gray-700">
            We encourage you to review this Privacy Policy periodically to stay
            informed about how we collect, use, and protect your information.
            Your continued use of our platform after any changes to this Privacy
            Policy constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section id="contact" title="8. Contact Us">
          <p className="mb-4 text-gray-700">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our privacy practices, please contact us at:
          </p>
          <div className="mb-4 text-gray-700">
            <p>Rightice.ng Legal Services</p>
            <p>Email: privacy@rightice.ng</p>
            <p>Phone: +234 123 456 7890</p>
            <p>Address: 123 Legal Avenue, Lagos, Nigeria</p>
          </div>
          <p className="mb-4 text-gray-700">
            We will respond to your inquiry as soon as possible and within the
            timeframe required by applicable law.
          </p>
        </Section>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            By using Rightice.ng, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms.
          </p>
        </div>
      </div>
    </Sidebar>
  );
};

export default Privacy;
