
import Image from "next/image";
import Navbar from "../Navbar";
import ChatBox from "../components/chatbox";
import type { Metadata } from "next";

// 🔑 SEO Metadata
export const metadata: Metadata = {
  title: "APPortal Uploads :: Invoice Tracking",
  description:
    "Discover why businesses across the US trust APPU Solutions for invoice processing. From purchase order matching to cost savings, accuracy, compliance, and advanced tracking, our solutions handle 200+ line item invoices with ease.",
};

export default function InvoicetrackingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="invoice-hero py-16 px-6">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/Tracking.png"
              alt="Dashboard Preview"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ✅ Glass Section */}
      <div className="container max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-stretch gap-6 pb-12 mb-12">
        {/* Left: Text */}
        <div className="flex-1 min-h-[250px] p-10 rounded-2xl shadow-md bg-white border-l-4 border-amber-400 flex flex-col justify-center text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Invoice <span className="text-amber-400">Tracking</span> System
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The Invoice Tracking System helps organizations streamline and automate
            the flow of invoices across Accounts Payable (AP) and Accounts Receivable
            (AR) departments. It ensures invoices are accurately received, validated,
            approved, paid or collected, and archived securely — reducing manual effort
            and ensuring compliance.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 min-h-[100px] rounded-2xl shadow-md bg-white border-t-4 border-amber-400 flex justify-center items-center">
          <img
            src="/image.png"
            alt="Process Illustration"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <ChatBox />
    </main>
  );
}
