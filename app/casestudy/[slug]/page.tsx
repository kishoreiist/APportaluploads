// // app/casestudy/[slug]/page.tsx
// import { caseStudies } from "../../data/casestudies";
// import Navbar from "../../Navbar";
// import Image from "next/image";
// import Markdown from "react-markdown";
// import Link from "next/link";
// import { Metadata } from "next";

// // ✅ Dynamic browser tab title and meta description


// export default function CaseStudyDetails({ params }: { params: { slug: string } }) {
//   const study = caseStudies.find((s) => s.slug === params.slug);

//   if (!study) {
//     return (
//       <main className="min-h-screen flex items-center justify-center bg-gray-50">
//         <h1 className="text-2xl font-bold text-gray-700">
//           Case Study Not Found
//         </h1>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
//       <Navbar />

//       <section className="relative w-full px-6 py-10">
//         <div className="relative w-full max-w-7xl mx-auto h-[250px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-2xl">
//           <Image
//             src={study.imageUrl}
//             alt={study.title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </section>

//       <section className="max-w-7xl mx-auto px-6 py-12">
//         <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
//           {study.title}
//         </h1>
//         <p className="text-lg text-gray-600 mb-8">{study.description}</p>

//         <article className="prose prose-lg max-w-none mb-12">
//           <Markdown>{study.content}</Markdown>
//         </article>

//         {/* ✅ Back to Case Studies Button */}
//         <div className="mt-12 text-center">
//           <Link
//             href="/casestudy" // ✅ matches app/casestudy/page.tsx
//             className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//           >
//             ← Back to Case Studies
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }
import { caseStudies, CaseStudy } from "../../data/casestudies";
import Navbar from "../../Navbar";
import Image from "next/image";
import Markdown from "react-markdown";
import Link from "next/link";
import type { Metadata } from "next";
import React from "react";

// ✅ Default Metadata
export const metadata: Metadata = {
  title: "APPortal Uploads :: Case Study",
  description:
    "Read detailed case studies about APPU Solutions and our clients’ success stories.",
};

// ✅ Server Component
export default function CaseStudyDetails({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const study: CaseStudy | undefined = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-700">Case Study Not Found</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <Navbar />

      {/* ✅ Banner Image */}
      <section className="relative w-full px-6 py-10">
        <div className="relative w-full max-w-7xl mx-auto h-[220px] sm:h-[320px] md:h-[420px] overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={study.imageUrl}
            alt={study.title}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ✅ Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">
          {study.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{study.description}</p>

        <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <Markdown>{study.content}</Markdown>
        </article>

        {/* ✅ Back Button */}
        <div className="mt-12 text-center">
          <Link
            href="/casestudy"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            ← Back to Case Studies
          </Link>
        </div>
      </section>
    </main>
  );
}
