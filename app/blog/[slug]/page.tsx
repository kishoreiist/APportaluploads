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
    <div className="container mx-auto px-6 py-10">
      {/* Blog content */}
      <h1 className="text-3xl font-bold mb-6 text-center">{blog.title}</h1>

      {blog.bannerImage && (
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-[1100px] h-[400px] relative">
            <Image src={blog.bannerImage} alt={blog.title} fill className="rounded-lg object-cover"/>
          </div>
        </div>
      )}

      {/* Blog sections */}
      {blog.blogData.map((section, index) => (
        <div key={index} className="mb-8 max-w-5xl mx-auto">
          {section.subTitle && <h2 className="text-2xl font-semibold mb-3">{section.subTitle}</h2>}
          {section.paragraphs?.map((p, i) => <p key={i} className="text-gray-700 mb-2 text-justify">{p}</p>)}
        </div>
      ))}

      {/* FAQs */}
      {blog.faqs && <BlogFAQClient faqs={blog.faqs}/>}

      {/* Back link */}
      <div className="mt-12 text-center">
        <Link href="/blog" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}
