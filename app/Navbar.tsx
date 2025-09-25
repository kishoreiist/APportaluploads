"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Apportaluploads Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {/* Solutions Flyout */}
          <li className="relative group">
            <span className="block px-4 py-2 cursor-pointer hover:text-indigo-600 transition-colors duration-200">
              Solutions
            </span>

            {/* Flyout Menu */}
            <div
              className="absolute top-full left-0 flex bg-white shadow-2xl rounded-xl 
                            opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                            invisible group-hover:visible transition-all duration-300 z-50"
            >
              {/* Headings Column */}
              <ul className="w-64 p-4 space-y-2">
                <li
                  onMouseEnter={() => setActiveMenu("industry")}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      activeMenu === "industry"
                        ? "bg-blue-50 border-l-4 border-blue-600 text-blue-700 shadow-sm"
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }`}
                >
                  By Industry <ChevronRight className="w-4 h-4" />
                </li>
                <li
                  onMouseEnter={() => setActiveMenu("business")}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      activeMenu === "business"
                        ? "bg-blue-50 border-l-4 border-blue-600 text-blue-700 shadow-sm"
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }`}
                >
                  By Business Need <ChevronRight className="w-4 h-4" />
                </li>
                <li
                  onMouseEnter={() => setActiveMenu("enhancements")}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      activeMenu === "enhancements"
                        ? "bg-blue-50 border-l-4 border-blue-600 text-blue-700 shadow-sm"
                        : "hover:bg-blue-50 hover:text-blue-600"
                    }`}
                >
                  Additional Enhancements <ChevronRight className="w-4 h-4" />
                </li>
              </ul>

              {/* Submenus */}
              <div className="min-w-[500px] p-6">
                {activeMenu === "industry" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slideIn">
                    {/* Healthcare */}
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-blue-50 to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                      <h3 className="text-base font-semibold text-blue-700 border-b border-blue-100 pb-2 mb-3">
                        Healthcare
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-blue-600 cursor-pointer">Hospitals</li>
                        <li className="hover:text-blue-600 cursor-pointer">Clinics</li>
                        <li className="hover:text-blue-600 cursor-pointer">Diagnostics</li>
                      </ul>
                    </div>

                    {/* Education */}
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-indigo-50 to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                      <h3 className="text-base font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-3">
                        Education
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-indigo-600 cursor-pointer">Schools</li>
                        <li className="hover:text-indigo-600 cursor-pointer">Colleges</li>
                        <li className="hover:text-indigo-600 cursor-pointer">Universities</li>
                      </ul>
                    </div>

                    {/* Retail */}
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-green-50 to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                      <h3 className="text-base font-semibold text-green-700 border-b border-green-100 pb-2 mb-3">
                        Retail
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-green-600 cursor-pointer">Stores</li>
                        <li className="hover:text-green-600 cursor-pointer">E-Commerce</li>
                      </ul>
                    </div>

                    {/* Manufacturing */}
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-orange-50 to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                      <h3 className="text-base font-semibold text-orange-700 border-b border-orange-100 pb-2 mb-3">
                        Manufacturing
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-orange-600 cursor-pointer">Factories</li>
                        <li className="hover:text-orange-600 cursor-pointer">Supply Chains</li>
                      </ul>
                    </div>

                    {/* Transportation */}
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-purple-50 to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                      <h3 className="text-base font-semibold text-purple-700 border-b border-purple-100 pb-2 mb-3">
                        Transportation
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-purple-600 cursor-pointer">Public Transit</li>
                        <li className="hover:text-purple-600 cursor-pointer">Freight</li>
                        <li className="hover:text-purple-600 cursor-pointer">Ride Sharing</li>
                      </ul>
                    </div>

                    {/* Logistics */}
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-teal-50 to-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                      <h3 className="text-base font-semibold text-teal-700 border-b border-teal-100 pb-2 mb-3">
                        Logistics
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-teal-600 cursor-pointer">Warehousing</li>
                        <li className="hover:text-teal-600 cursor-pointer">Last-Mile Delivery</li>
                        <li className="hover:text-teal-600 cursor-pointer">Global Shipping</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeMenu === "business" && (
                  <ul className="space-y-3 animate-slideIn text-sm text-gray-700">
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Workflow Automation
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Data Analytics & Reporting
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Customer Engagement
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Compliance & Security
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Mobile Workforce Enablement
                    </li>
                  </ul>
                )}

                {activeMenu === "enhancements" && (
                  <ul className="space-y-3 animate-slideIn text-sm text-gray-700">
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Case Studies
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Customer Testimonials
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
                      Demo Videos
                    </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">
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
                <li>
                  <Link href="/culture" className="block px-4 py-2 hover:bg-indigo-50">
                    Culture
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
