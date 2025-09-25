'use client';

import Link from 'next/link';

export default function BlogCard({ blog }: { blog: any }) {
  // const formattedDate = new Date(blog.publishedDate).toLocaleDateString('en-IN', {
  //   day: 'numeric',
  //   month: 'short',
  //   year: 'numeric',
  // });

  return (

    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 flex flex-col justify-between h-full">
      <img
        src={blog.bannerImage}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-bold text-indigo-700 mb-2">{blog.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{blog.description}</p>

      <div className="flex justify-between items-center mt-auto">
        {/* <span className="text-sm text-gray-500">{formattedDate}</span> */}
        <Link
          href={`/blog/${blog.slug}`}
          className="text-indigo-600 font-semibold hover:underline"
        >
          
          Read More →
        </Link>
      </div>
    </div>

  );
}
