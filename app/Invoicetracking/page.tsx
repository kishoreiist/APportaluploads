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
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/Tracking.png"
              alt="Dashboard Preview"
              fill
              className="object-cover rounded-xl"
              priority
              sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 80vw,
                     1200px"
            />
          </div>
        </div>
      </section>

      {/* ✅ Glass Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-6 pb-12">
        {/* Left: Text */}
        {/* ✅ Glass Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center pb-12">
  <div
    className="max-w-2xl p-8 bg-white rounded-2xl flex flex-col justify-center items-center
    text-center shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]
    transition duration-300 mx-auto mt-12"
  >
    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
      Invoice <span className="text-amber-400">Tracking</span> System
    </h2>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
      The Invoice Tracking System helps organizations streamline and automate
      the flow of invoices across Accounts Payable (AP) and Accounts Receivable
      (AR) departments. It ensures invoices are accurately received, validated,
      approved, paid or collected, and archived securely — reducing manual effort
      and ensuring compliance.
    </p>
  </div>
</section>



        {/* Right: Image */}
        <div className="flex-1 min-h-[200px] rounded-2xl shadow-md bg-white border-t-4 border-amber-400 flex justify-center items-center">
          <Image
            src="/image.png"
            alt="Process Illustration"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   600px"
          />
        </div>
      </section>

      {/* ✅ Chat Widget */}
      <ChatBox />
    </main>
  );
}
