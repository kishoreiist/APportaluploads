// app/blog/page.tsx
import { Metadata } from "next";
import { blogs } from "../data/blog";
import BlogCard from "../components/blogcard1";
import Navbar from "../Navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "APPortal Uploads :: Our Blogs",
  description:
    "Read expert insights, tips, and guides on APPortal Uploads. Stay updated with our blogs.",
};

export default function BlogList() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="invoice-hero py-16 px-6">
        <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Hero Image without animation */}
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/blog.jpg"
              alt="Dashboard Preview"
              fill
              className="object-cover rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ✅ Blog Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blogs</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
