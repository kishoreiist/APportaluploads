import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../Navbar";
import ChatBox from "../components/chatbox";

export const metadata: Metadata = {
  title: "APPortal Uploads :: Aboutus",
  description:
    "APPU Solutions is a global leader in invoice processing, serving North America and Europe since 1994. With 130+ employees and ISO/IEC 27001:2022 certification, we process 200,000+ invoices daily and support Heavy Equipment dealers worldwide.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="invoice-hero py-16">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl ">
            <img
              src="/aboutus.png"
              alt="Dashboard Preview"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left: Content */}
            <div className="bg-white/70 rounded-2xl p-6 lg:w-1/2 shadow max-h-[600px] overflow-y-auto">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
                About Us
              </h2>

              <p className="mb-4 text-black leading-relaxed text-justify">
                We are a major player in the B2B sector, specializing in invoice
                processing with an extensive presence across North America and
                Europe.
              </p>
              <p className="mb-4 text-black leading-relaxed text-justify">
                Founded in 1994, our company has grown to a team of 130+
                employees and processes over{" "}
                <strong>200,000 invoices a day</strong>.
              </p>
              <p className="mb-4 text-black leading-relaxed text-justify">
                We operate an offshore delivery center in{" "}
                <strong>Chennai, India</strong>.
              </p>
              <p className="mb-4 text-black leading-relaxed text-justify">
                As a values-driven service provider, we prioritize meeting the
                unique needs of our customers and proudly stand as the leading
                service provider for{" "}
                <strong>Heavy Equipment dealers</strong> across North America
                and Europe.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-2 text-blue-900">
                ISO/IEC 27001:2022 Certification
              </h3>
              <p className="text-black leading-relaxed text-justify">
                The ISO Certification is a seal from a third-party body that
                confirms the company runs an internationally recognized
                management system. It enhances credibility, supports business
                tenders, and instills confidence among clients about our
                practices.
              </p>
            </div>

            {/* Right: Certificate Image */}
            <div className="bg-white/70 rounded-2xl p-4 lg:w-1/2 shadow flex justify-center items-center">
              <Image
                src="/cer.jpg"
                alt="ISO/IEC 27001:2022 Certificate"
                width={400}
                height={400}
                className="object-contain max-h-[500px] w-auto rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <ChatBox />
    </main>
  );
}
