"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar";
import ChatBox from "../components/chatbox";

export default function CulturePage() {
  const values = [
    {
      title: "Driven by Innovation",
      description:
        "At the heart of our culture lies a strong belief in innovation as a way of life. We encourage curiosity, creativity, and continuous improvement in everything we do. Our teams are empowered to challenge the status quo, explore new ideas, and turn them into practical solutions that create real business value.\n\nWe blend deep industry experience with cutting-edge technologies like AI, Machine Learning, Cloud, and Automation to deliver smarter, faster, and more impactful outcomes for our clients. Innovation for us is not just about technology — it’s about building a culture of collaboration, openness, and problem-solving.\n\nBy fostering this culture of innovation, we ensure that every solution we create is future-ready, scalable, and aligned with our clients’ evolving needs.",
    },
    {
      title: "Collaboration",
      description:
        "Collaboration is at the core of our success. We believe the best ideas and solutions come from working together as one team, across functions, geographies, and perspectives.\n\nOur culture encourages open communication, trust, and respect, ensuring that every voice is heard and valued. By fostering strong partnerships internally and with our clients, we create an environment where knowledge is shared, challenges are solved collectively, and innovation thrives.\n\nThrough collaboration, we deliver solutions that are not only effective but also sustainable — empowering businesses to grow with confidence.",
    },
    {
      title: "Integrity",
      description:
        "Integrity is the foundation of everything we do. We are committed to being honest, transparent, and accountable in every interaction — with our clients, partners, and within our teams.\n\nWe believe that doing the right thing, even when no one is watching, builds lasting trust and long-term relationships. Our decisions and actions are guided by fairness, responsibility, and respect, ensuring that we deliver on our promises with the highest ethical standards.\n\nWith integrity at our core, we create a culture where trust and credibility drive sustainable growth and success.",
    },
    {
      title: "Growth",
      description:
        "Growth is central to our culture — both for our people and our clients. We believe in creating an environment that encourages continuous learning, upskilling, and personal development, enabling our teams to reach their full potential.\n\nBy embracing innovation, adapting to change, and nurturing talent, we ensure that our organization grows sustainably while helping our clients achieve their business goals.\n\nFor us, growth is not just about numbers — it’s about building long-term value, stronger relationships, and future-ready solutions that make a lasting impact.",
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/culture.png"
              alt="Culture Preview"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Culture Values Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-grow">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Culture
          </motion.h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-12 px-2 sm:px-6 lg:px-20">
            At <span className="font-semibold">ApportalUploads</span>, we
            believe in fostering a culture that empowers people, values
            creativity, and drives impact.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 text-left">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="rounded-2xl shadow-md bg-white hover:shadow-xl transition"
              >
                <div className="p-5 sm:p-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    {value.title}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base whitespace-pre-line">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat box at bottom */}
      <ChatBox />
    </main>
  );
}
