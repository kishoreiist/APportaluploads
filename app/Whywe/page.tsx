// import React from "react";
// import Image from "next/image";
// import Navbar from "../Navbar";
// import ChatBox from "../components/chatbox";
// import type { Metadata } from "next";

// // 🔑 SEO Metadata
// export const metadata: Metadata = {
//   title: "APPortal Uploads :: Why We",
//   description:
//     "Discover why businesses across the US trust APPU Solutions for invoice processing. From purchase order matching to cost savings, accuracy, compliance, and advanced tracking, our solutions handle 200+ line item invoices with ease.",
// };

// export default function WhyWeScroll() {
//   const keyPoints = [
//     {
//       title: "Invoice with Purchase Order",
//       desc: "Each invoice line item should correspond to the matching purchase order line item to ensure accurate processing and reconciliation.",
//       img: "/why1.png",
//     },
//     {
//       title: "Invoice Line Items Without Corresponding Purchase Order Items",
//       desc: "If an invoice line item does not exist in the purchase order, it indicates a mismatch or missing entry that must be resolved.",
//       img: "/why2.png",
//     },
//     {
//       title: "Invoices Containing More Than 200 Line Items",
//       desc: "When an invoice includes more than 200 line items, it requires special attention to ensure accurate data processing.",
//       img: "/why3.png",
//     },
//     {
//       title: "Invoice Tracking and Management",
//       desc: "APPU solutions provide robust tools to monitor invoice statuses, track payments, and generate detailed reports.",
//       img: "/why4.png",
//     },
//     {
//       title: "Cost Savings",
//       desc: "By reducing manual data entry and paper usage, APPU solutions deliver significant cost savings and efficiency gains.",
//       img: "/why5.png",
//     },
//     {
//       title: "Improved Accuracy and Compliance",
//       desc: "Electronic invoicing minimizes errors and ensures compliance with regulatory requirements and industry standards.",
//       img: "/why6.png",
//     },
//   ];

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Navbar */}
//       <Navbar />

//         <section className="py-10 sm:py-16 px-4 sm:px-6">
//               <div className="max-w-7xl mx-auto">
//                 <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-xl shadow-2xl">
//                   <Image
//                    src="/whywe.png"
//                     alt="Dashboard Preview"
//                     fill
//                     className="object-cover rounded-xl"
//                     priority
//                     sizes="(max-width: 768px) 100vw,
//                            (max-width: 1200px) 80vw,
//                            1200px"
//                   />
//                 </div>
//               </div>
//             </section>

//       {/* Why We Section */}
//       <section className="w-full flex flex-col items-center py-1 bg-white mt-10">
//         <div className="w-full max-w-7xl flex flex-col items-center justify-center">
//           {/* Intro Card */}
//           <div className="w-full bg-white rounded-2xl shadow-2xl p-12 mb-8">
//             <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
//               Why We
//             </h2>
//             <div className="text-gray-900 text-lg space-y-4 text-justify px-4">
//               <p>
//                 APPortaluploads (APPU) is a key data analytical partner for our
//                 customers based in the United States, providing essential
//                 support in processing large volumes of invoices. With a
//                 dedicated team of over 100 skilled data analysts, APPU is
//                 well-positioned to manage high-volume and time-sensitive
//                 operations efficiently.
//               </p>
//               <p>
//                 Each invoice is assigned to a specific processing queue—such as
//                 Older, Resubmit, Restage, or Today—based on its current status.
//                 This structured data enables APPU to manage workflows
//                 efficiently and ensure timely processing of all received
//                 invoices.
//               </p>
//               <p>
//                 APPU is currently processing data for over 100 customers across
//                 various industries. Our team ensures that each customer's
//                 requirements are met with precision and timely execution.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why We Key Points (Image + Text in separate cards) */}
//       <section className="w-full flex flex-col items-center mt-8 px-6">
//         <div className="w-full max-w-7xl flex flex-col gap-16">
//           {keyPoints.map((point, idx) => (
//             <div
//               key={idx}
//               className={`flex flex-col md:flex-row items-center gap-8 ${
//                 idx % 2 === 1 ? "md:flex-row-reverse" : ""
//               } ${idx === keyPoints.length - 1 ? "mb-20" : ""}`}
//             >
//               {/* Image Card */}
//               <div className="md:w-[50%] bg-white rounded-2xl shadow-lg overflow-hidden">
//                 <div className="relative w-full h-[350px]">
//                   <Image
//                     src={point.img}
//                     alt={point.title}
//                     fill
//                     className="object-cover rounded-t-2xl"
//                   />
//                 </div>
//               </div>

//               {/* Text Card */}
//               <div
//                 className="max-w-xl bg-white rounded-2xl p-8 flex flex-col justify-center items-center
//                 shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] 
//                 transition duration-300 mx-auto h-full"
//               >
//                 <h3 className="text-2xl font-bold text-black mb-4 text-center">
//                   {point.title}
//                 </h3>
//                 <p className="text-gray-700 text-base leading-relaxed text-center">
//                   {point.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Chat Box */}
//       <ChatBox />
//     </main>
//   );
// }

import React from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import ChatBox from "../components/chatbox";
import type { Metadata } from "next";

// 🔑 SEO Metadata
export const metadata: Metadata = {
  title: "APPortal Uploads :: Why We",
  description:
    "Discover why businesses across the US trust APPU Solutions for invoice processing. From purchase order matching to cost savings, accuracy, compliance, and advanced tracking, our solutions handle 200+ line item invoices with ease.",
};

export default function WhyWeScroll() {
  const keyPoints = [
    {
      title: "Invoice with Purchase Order",
      desc: "Each invoice line item should correspond to the matching purchase order line item to ensure accurate processing and reconciliation.",
      img: "/why1.png",
    },
    {
      title: "Invoice Line Items Without Corresponding Purchase Order Items",
      desc: "If an invoice line item does not exist in the purchase order, it indicates a mismatch or missing entry that must be resolved.",
      img: "/why2.png",
    },
    {
      title: "Invoices Containing More Than 200 Line Items",
      desc: "When an invoice includes more than 200 line items, it requires special attention to ensure accurate data processing.",
      img: "/why3.png",
    },
    {
      title: "Invoice Tracking and Management",
      desc: "APPU solutions provide robust tools to monitor invoice statuses, track payments, and generate detailed reports.",
      img: "/why4.png",
    },
    {
      title: "Cost Savings",
      desc: "By reducing manual data entry and paper usage, APPU solutions deliver significant cost savings and efficiency gains.",
      img: "/why5.png",
    },
    {
      title: "Improved Accuracy and Compliance",
      desc: "Electronic invoicing minimizes errors and ensures compliance with regulatory requirements and industry standards.",
      img: "/why6.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/whywe.png"
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

      {/* Why We Section */}
      <section className="w-full flex flex-col items-center py-1 bg-white mt-10">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center">
          {/* Intro Card */}
          <div className="w-full bg-white rounded-2xl shadow-2xl p-12 mb-8">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-6">
              Why We
            </h2>
            <div className="text-gray-900 text-lg space-y-4 text-justify px-4">
              <p>
                APPortaluploads (APPU) is a key data analytical partner for our
                customers based in the United States, providing essential
                support in processing large volumes of invoices. With a
                dedicated team of over 100 skilled data analysts, APPU is
                well-positioned to manage high-volume and time-sensitive
                operations efficiently.
              </p>
              <p>
                Each invoice is assigned to a specific processing queue—such as
                Older, Resubmit, Restage, or Today—based on its current status.
                This structured data enables APPU to manage workflows
                efficiently and ensure timely processing of all received
                invoices.
              </p>
              <p>
                APPU is currently processing data for over 100 customers across
                various industries. Our team ensures that each customer's
                requirements are met with precision and timely execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Key Points (Image + Text in separate cards) */}
      <section className="w-full flex flex-col items-center mt-8 px-6">
        <div className="w-full max-w-7xl flex flex-col gap-16">
          {keyPoints.map((point, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } ${idx === keyPoints.length - 1 ? "mb-20" : ""}`}
            >
              {/* Image Card */}
            <div className="relative w-full h-64 sm:h-72 md:h-[350px]">
  <Image
    src={point.img}
    alt={point.title}
    fill
    className="object-cover rounded-t-2xl"
  />
</div>


              {/* Text Card */}
              <div
                className="max-w-xl bg-white rounded-2xl p-8 flex flex-col justify-center items-center
                shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] 
                transition duration-300 mx-auto h-full"
              >
                <h3 className="text-2xl font-bold text-black mb-4 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed text-center">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chat Box */}
      <ChatBox />
    </main>
  );
}
