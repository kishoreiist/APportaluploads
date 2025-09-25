

// "use client";
 
// import { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Users, Wrench, FileText, MessageCircle, Calendar } from "lucide-react";
// import Navbar from "../app/Navbar";
// import ChatBox from "../app/components/chatbox";
// import Link from 'next/link';
// import { FaWhatsapp } from 'react-icons/fa';


// export default function HomePage() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);
//  const phoneNumber = "+16303992705";  
//   const message = "Hello, I want to get a demo.";
//   const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <main className="min-h-screen bg-white">
//       {/* ✅ Navbar */}
//       <Navbar />
 
 
// {/* ✅ Hero Section */}
//   <section className="invoice-hero py-16 px-6">
//     <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//       <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
//         <Image
//           src="/app2.png"
//           alt="Dashboard Preview"
//           fill
//           className="object-cover rounded-xl"
//           priority
//         />
      
 
//       {/* ✅ Buttons at bottom-right in same line */}
//       <div className="absolute bottom-6 right-6 flex flex-row gap-4">
//         {/* Request Demo */}
//  <Link href="/contactus" className="ml-auto">
//   <button className="flex items-center gap-2 border border-indigo-600 text-indigo-700 px-5 py-2 rounded-lg shadow-sm hover:bg-indigo-50 transition">
//     <Calendar className="w-5 h-5" />
//     Request Demo
//   </button>
// </Link>
 
// {/* Chat with Experts */}
//         <button
//                 onClick={() => window.open(waLink, "_blank")}
//                 className="flex items-center gap-2 border border-green-500 text-green-700 px-5 py-2 rounded-lg shadow-sm hover:bg-green-50 transition"
//               >
//                 <FaWhatsapp className="w-5 h-5" />
//                 Contact via WhatsApp
//               </button>
//       </div>
//     </div>
//   </div>
// </section>
// <div className="relative w-full overflow-hidden bg-white py-6">
//   <div className="flex animate-marquee whitespace-nowrap">
//     {Array(10)
//       .fill([
//         { src: "/sapariba.png", alt: "SAP Ariba", name: "SAP Ariba" },
//         { src: "/coupalogo.png", alt: "Coupa", name: "Coupa" },
//         { src: "/tungsten1.png", alt: "Tungsten", name: "Tungsten" },
//         { src: "/tradeshiftlogo.png", alt: "Tradeshift", name: "Tradeshift" },
//            { src: "/oracle.png",alt:"oracle", name:"oracle"},
//              { src: "/officetrax.png",alt:"officetrax", name:"officetrax"},
//                    { src: "/enverus.png", alt:"enverus", name:"Enverus"},

//         { src: "", alt: "More Portals", name: "70+ Portals" },
//       ])
//       .flat()
//       .map((item, idx) => (
//         <div
//           key={idx}
//           className={`relative w-40 h-24 flex-shrink-0 mx-3 flex flex-col items-center justify-center rounded-2xl p-2 transition ${
//             item.src
//               ? "bg-white shadow-lg border border-gray-300 hover:border-blue-500"
//               : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl"
//           }`}
//         >
//           {/* ✅ If logo exists, show image */}
//           {item.src ? (
//             <>
//               <div className="relative w-20 h-10">
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   fill
//                   style={{ objectFit: "contain" }}
//                 />
//               </div>
//               <p className="mt-2 text-sm font-medium text-gray-700 text-center">
//                 {item.name}
//               </p>
//             </>
//           ) : (
//             // ✅ Else show highlighted "70+ Portals"
//             <div className="flex flex-col items-center justify-center">
//               <span className="text-3xl font-extrabold leading-none">70+</span>
//               <span className="text-sm font-medium">Portals</span>
//             </div>
//           )}
//         </div>
//       ))}
//   </div>

//   <style jsx>{`
//     @keyframes marquee {
//       0% {
//         transform: translateX(0);
//       }
//       100% {
//         transform: translateX(-50%);
//       }
//     }

//  .animate-marquee {
//   display: flex;
//   min-width: max-content;
//   animation: marquee 160s linear infinite;
// }


//     .animate-marquee:hover {
//       animation-play-state: paused;
//     }
//   `}</style>
// </div>

  
//       {/* ✅ Stats Section */}
//       <section className="invoice-stats py-16 bg-white" data-aos="fade-up">
//         <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//           <div className="stat-box p-6 shadow-lg rounded-xl hover:scale-105 transition">
//             <Users className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-gray-900">100+ Customers</h3>
//           </div>
 
//           <div className="stat-box p-6 shadow-lg rounded-xl hover:scale-105 transition">
//             <Wrench className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-gray-900">130+ Engineers</h3>
//           </div>
 
//           <div className="stat-box p-6 shadow-lg rounded-xl hover:scale-105 transition">
//             <FileText className="w-14 h-14 text-indigo-600 mx-auto mb-4" />
//             <h3 className="text-xl font-bold text-gray-900">
//               100k Documents a month
//             </h3>
//           </div>
//         </div>
//       </section>
 
//       {/* ✅ Chatbox (floating at bottom-right) */}
//       <ChatBox />
//     </main>
//   );
// }
"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, Wrench, FileText, Calendar } from "lucide-react";
import Navbar from "../app/Navbar";
import ChatBox from "../app/components/chatbox";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const phoneNumber = "+16303992705";
  const message = "Hello, I want to get a demo.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const portals = [
    { src: "/sapariba.png", alt: "SAP Ariba", name: "SAP Ariba" },
    { src: "/coupalogo.png", alt: "Coupa", name: "Coupa" },
    { src: "/tungsten1.png", alt: "Tungsten", name: "Tungsten" },
    { src: "/tradeshiftlogo.png", alt: "Tradeshift", name: "Tradeshift" },
    { src: "/oracle.png", alt: "Oracle", name: "Oracle" },
    { src: "/officetrax.png", alt: "Officetrax", name: "Officetrax" },
    { src: "/enverus.png", alt: "Enverus", name: "Enverus" },
    { src: "", alt: "More Portals", name: "70+ Portals" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="invoice-hero py-16 px-6">
        <div className="container max-w-7xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/app2.png"
              alt="Dashboard Preview"
              fill
              className="object-cover rounded-xl"
              priority
            />

            {/* ✅ Buttons bottom-right */}
         {/* ✅ Buttons bottom-right always side by side */}
<div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-row gap-3 sm:gap-4">
  {/* Request Demo */}
  <Link href="/contactus">
    <button className="flex items-center justify-center gap-2 border border-indigo-600 text-indigo-700 px-3 sm:px-5 py-2 rounded-lg shadow-sm hover:bg-indigo-50 transition text-xs sm:text-base">
      <Calendar className="w-5 h-5" />
      Request Demo
    </button>
  </Link>

  {/* WhatsApp */}
  <button
    onClick={() => window.open(waLink, "_blank")}
    className="flex items-center justify-center gap-2 border border-green-500 text-green-700 px-3 sm:px-5 py-2 rounded-lg shadow-sm hover:bg-green-50 transition text-xs sm:text-base"
  >
    <FaWhatsapp className="w-5 h-5" />
    WhatsApp
  </button>
</div>

          </div>
        </div>
      </section>

      {/* ✅ Marquee Section */}
      <div className="relative w-full overflow-hidden bg-white py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(10)
            .fill(portals)
            .flat()
            .map((item, idx) => (
              <div
                key={idx}
                className={`relative w-28 sm:w-36 md:w-40 h-20 sm:h-24 flex-shrink-0 mx-2 sm:mx-3 flex flex-col items-center justify-center rounded-2xl p-2 transition ${
                  item.src
                    ? "bg-white shadow-lg border border-gray-300 hover:border-blue-500"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-xl"
                }`}
              >
                {item.src ? (
                  <>
                    <div className="relative w-16 sm:w-20 h-8 sm:h-10">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center">
                      {item.name}
                    </p>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-none">
                      70+
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      Portals
                    </span>
                  </div>
                )}
              </div>
            ))}
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-marquee {
            display: flex;
            min-width: max-content;
            animation: marquee 160s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>

      {/* ✅ Stats Section */}
      <section
        className="invoice-stats py-12 sm:py-16 bg-white"
        data-aos="fade-up"
      >
        <div className="container max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 text-center">
          <div className="stat-box p-6 shadow-lg rounded-xl hover:scale-105 transition">
            <Users className="w-10 h-10 sm:w-14 sm:h-14 text-indigo-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              100+ Customers
            </h3>
          </div>

          <div className="stat-box p-6 shadow-lg rounded-xl hover:scale-105 transition">
            <Wrench className="w-10 h-10 sm:w-14 sm:h-14 text-indigo-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              130+ Engineers
            </h3>
          </div>

          <div className="stat-box p-6 shadow-lg rounded-xl hover:scale-105 transition">
            <FileText className="w-10 h-10 sm:w-14 sm:h-14 text-indigo-600 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              100k Documents a month
            </h3>
          </div>
        </div>
      </section>

      {/* ✅ Floating Chatbox */}
      <ChatBox />
    </main>
  );
}
