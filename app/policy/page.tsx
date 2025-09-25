"use client";

import Navbar from "../Navbar";
import ChatBox from "../components/chatbox";

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Page Header */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Effective Date: <span className="font-semibold">01-June-2025</span>
          </p>
        </div>
      </section>

      {/* ✅ Policy Content */}
      <section className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-gray-700 leading-relaxed text-justify">
        <p className="mb-6">
          EIPP Solutions Pvt. Ltd. values your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website{" "}
          <span className="text-blue-600 break-all">arcoinfoindia.com</span>.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-5 sm:ml-6 mb-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email, phone, billing
            details, etc., if you voluntarily provide them.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Browser type, device info,
            IP address, and usage data.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> To enhance user experience and
            analyze traffic.
          </li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-5 sm:ml-6 mb-6 space-y-2">
          <li>Provide, operate, and improve our services</li>
          <li>Personalize your website experience</li>
          <li>Communicate regarding updates or inquiries</li>
          <li>Process payments (if applicable)</li>
          <li>Ensure security and prevent fraud</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          3. Sharing of Information
        </h2>
        <p className="mb-4">
          We do not sell or rent personal data. We may share only with:
        </p>
        <ul className="list-disc ml-5 sm:ml-6 mb-6 space-y-2">
          <li>
            <strong>Service Providers:</strong> Hosting, payment, analytics.
          </li>
          <li>
            <strong>Legal Obligations:</strong> When required by law.
          </li>
          <li>
            <strong>Business Transfers:</strong> In case of merger, sale, or
            transfer.
          </li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">4. Data Security</h2>
        <p className="mb-6">
          We use technical and organizational measures to protect personal data
          from unauthorized access, loss, or misuse.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">5. Your Rights</h2>
        <ul className="list-disc ml-5 sm:ml-6 mb-6 space-y-2">
          <li>Access, correct, or delete your data</li>
          <li>Withdraw consent</li>
          <li>Request portability</li>
          <li>Opt out of marketing</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">6. Third-Party Links</h2>
        <p className="mb-6">
          Our site may contain links to third-party sites. We are not responsible
          for their privacy practices.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">7. Cookies</h2>
        <p className="mb-6">
          We use cookies for preferences and analytics. You can disable them in
          your browser, but some features may not work properly.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          8. Children’s Privacy
        </h2>
        <p className="mb-6">
          Our services are not directed to individuals under 18, and we do not
          knowingly collect their data.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          9. Changes to This Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy. Updates will include a new
          “Effective Date.”
        </p>

        <h2 className="text-lg sm:text-xl font-semibold mb-2">10. Contact Us</h2>
        <address className="not-italic mb-12 text-sm sm:text-base">
          <p>
            <strong>Address:</strong>
            <br />
            2/13, Muthumariamman Kovil Street,
            <br />
            Thru-Vi-Ka Nagar, Kadaperi, West Tambaram,
            <br />
            Chennai – 600045
          </p>
        </address>
      </section>

      {/* ✅ Chat Widget */}
      <ChatBox />
    </main>
  );
}
