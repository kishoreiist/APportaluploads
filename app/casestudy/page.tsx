// app/casestudy/page.tsx
import { caseStudies } from "../data/casestudies";
import Link from "next/link";
import Navbar from "../Navbar";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "APPortal Uploads :: Our Case Studies ",
  description:
    "Read expert insights, tips, and guides on APPortal Uploads. Stay updated with our blogs.",
};

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative w-full px-6 py-10">
        <div className="relative w-full max-w-7xl mx-auto h-[250px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/case.png"
            alt="Case Studies Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
              Case Studies
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl">
              Discover how Apportal Uploads helps businesses streamline
              operations, improve efficiency, and stay compliant.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                {/* ✅ Removed category span */}
                <h2 className="text-xl font-bold mb-3 text-black">
                  {study.title}
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  {study.description}
                </p>
                <Link
                  href={`/casestudy/${study.slug}`}
                  className="text-indigo-600 font-medium flex items-center group"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
