import { blogs, Blog, BlogSection } from "@/data/blog";
import Image from "next/image";
import Link from "next/link";
import BlogFAQClient from "../../components/BlogFAQ"; // Client Component
import { Metadata } from "next";
import React from "react";
export default function BlogPage({ params, searchParams }: any) {
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p className="p-6">Blog not found.</p>;
return (
    <article className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* ✅ Blog Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">
        {blog.title}
      </h1>

      {/* ✅ Banner Image */}
      {blog.bannerImage && (
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-5xl h-[220px] sm:h-[320px] md:h-[420px] relative">
            <Image
              src={blog.bannerImage}
              alt={blog.title}
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* ✅ Blog Sections */}
      <div className="prose prose-indigo max-w-4xl mx-auto">
        {blog.blogData.map((section, index) => (
          <section key={index} className="mb-8">
            {section.subTitle && (
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800">
                {section.subTitle}
              </h2>
            )}
            {section.paragraphs?.map((p, i) => (
              <p
                key={i}
                className="text-gray-700 mb-3 leading-relaxed text-justify sm:text-left"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* ✅ FAQs */}
      {blog.faqs && (
        <div className="max-w-4xl mx-auto mt-10">
          <BlogFAQClient faqs={blog.faqs} />
        </div>
      )}

      {/* ✅ Back Link */}
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          ← Back to Blogs
        </Link>
      </div>
    </article>
  );
}