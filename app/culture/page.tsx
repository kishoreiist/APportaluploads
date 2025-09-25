"use client";
 
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar";  
import ChatBox from "../components/chatbox";
 
export default function CulturePage() {
  const values = [
    {
      title: "Innovation",
      description:
        "We embrace new ideas and technologies to build solutions that shape the future.",
    },
    {
      title: "Collaboration",
      description:
        "Working together across teams and with our community drives our success.",
    },
    {
      title: "Integrity",
      description:
        "We act with honesty, transparency, and respect in everything we do.",
    },
    {
      title: "Growth",
      description:
        "We are committed to continuous learning, improvement, and development.",
    },
  ];
 
  return (
    <main className="min-h-screen bg-white">
      {/* ✅ Navbar */}
      <Navbar />
 
      {/* ✅ Hero Section */}
      <section className="invoice-hero py-16 px-6">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/culture.png"
              alt="Dashboard Preview"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>
 
      {/* ✅ Culture Values */}
      <div className="min-h-screen bg-white px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Culture
          </motion.h1>
 
          <p className="text-lg text-gray-600 mb-12">
            At <span className="font-semibold">ApportalUploads</span>, we
            believe in fostering a culture that empowers people, values
            creativity, and drives impact.
          </p>
 
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl shadow-md bg-white hover:shadow-xl transition"
              >
                <div className="p-6 text-left">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {value.title}
                  </h2>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
 
      {/* ✅ Chat box at bottom */}
      <ChatBox />
    </main>
  );
}
 