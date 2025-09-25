"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Apportaluploads Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {/* Solutions Dropdown */}
          <li className="relative group">
            <span className="block px-4 py-2 cursor-pointer hover:text-indigo-600 transition">
              Solutions
            </span>

            {/* Hover Card Container */}
            <div className="absolute top-full left-0 flex w-[700px] bg-white shadow-2xl rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 invisible group-hover:visible transition-all duration-300 z-50">
              
              {/* Left Side Headings */}
              <div className="w-1/3 border-r border-gray-200 p-4">
                {["By Industry", "By Business Need", "Additional Enhancements"].map(
                  (category) => (
                    <div
                      key={category}
                      onMouseEnter={() => setHoveredCategory(category)}
                      className={`px-3 py-2 rounded-md cursor-pointer transition ${
                        hoveredCategory === category
                          ? "bg-indigo-50 text-indigo-700 font-semibold"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </div>
                  )
                )}
              </div>

              {/* Right Side Sub Items */}
              <div className="w-2/3 p-6">
                {hoveredCategory === "By Industry" && (
                  <ul className="grid grid-cols-2 gap-4 animate-fadeIn">
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Healthcare: Hospitals, clinics, diagnostics
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Education: Schools, colleges, universities
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Retail: Stores, e-commerce
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Manufacturing: Factories, supply chains
                    </li>
                  </ul>
                )}

                {hoveredCategory === "By Business Need" && (
                  <ul className="grid grid-cols-2 gap-4 animate-fadeIn">
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Workflow Automation
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Data Analytics & Reporting
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Customer Engagement
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Compliance & Security
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Mobile Workforce Enablement
                    </li>
                  </ul>
                )}

                {hoveredCategory === "Additional Enhancements" && (
                  <ul className="grid grid-cols-2 gap-4 animate-fadeIn">
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Case Studies
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Customer Testimonials
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Demo Videos
                    </li>
                    <li className="p-3 bg-white rounded-md shadow hover:shadow-md transition">
                      Request Demo
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </li>

          {/* Resources Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("resources")}
              className="flex items-center gap-1 hover:text-indigo-600"
            >
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "resources" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                <li>
                  <Link href="/Invoicetracking" className="block px-4 py-2 hover:bg-indigo-50">
                    Invoice Tracking
                  </Link>
                </li>
                <li>
                  <Link href="/reportsuite" className="block px-4 py-2 hover:bg-indigo-50">
                    Report Suite
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block px-4 py-2 hover:bg-indigo-50">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/casestudy" className="block px-4 py-2 hover:bg-indigo-50">
                    Case Study
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Company Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="flex items-center gap-1 hover:text-indigo-600"
            >
              Company <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "company" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                <li>
                  <Link href="/Whywe" className="block px-4 py-2 hover:bg-indigo-50">
                    Why We
                  </Link>
                </li>
                <li>
                  <Link href="/Aboutus" className="block px-4 py-2 hover:bg-indigo-50">
                    About Us
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Support Dropdown */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("support")}
              className="flex items-center gap-1 hover:text-indigo-600"
            >
              Support <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "support" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                <li>
                  <Link href="/contactus" className="block px-4 py-2 hover:bg-indigo-50">
                    Contact Us
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">☰</div>
      </div>
    </nav>
  );
}
