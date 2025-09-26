"use client";
 
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, X } from "lucide-react";
 
export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // desktop simple dropdowns
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // desktop mega menu hover
  const [mobileOpen, setMobileOpen] = useState(false); // show mobile menu
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false); // show solutions inside mobile
  const [mobileActiveSolutions, setMobileActiveSolutions] = useState<string | null>(null); // which solutions group is open on mobile
 
  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };
 
  const toggleMobileSolutions = () => {
    setMobileSolutionsOpen((p) => !p);
    setMobileActiveSolutions(null);
  };
 
  const toggleMobileSolutionsGroup = (group: string) =>
    setMobileActiveSolutions((prev) => (prev === group ? null : group));
 
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setMobileActiveSolutions(null);
    setOpenDropdown(null);
  };
 
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobile}>
          <img src="/logo.svg" alt="Apportaluploads Logo" className="h-16 w-auto" />
        </Link>
 
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {/* Solutions Flyout (desktop unchanged) */}
          <li className="relative group">
            <span className="block px-4 py-2 cursor-pointer hover:text-indigo-600 transition-colors duration-200">
              Solutions
            </span>
 
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-orange-50 to-white shadow-md">
                      <h3 className="text-base font-semibold text-orange-700 border-b border-orange-100 pb-2 mb-3">
                        Manufacturing
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-orange-600 cursor-pointer">Factories</li>
                        <li className="hover:text-orange-600 cursor-pointer">Supply Chains</li>
                      </ul>
                    </div>
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-purple-50 to-white shadow-md">
                      <h3 className="text-base font-semibold text-purple-700 border-b border-purple-100 pb-2 mb-3">
                        Transportation & Logistics
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-purple-600 cursor-pointer">Freight & Global Shipping</li>
                        <li className="hover:text-purple-600 cursor-pointer">Warehouse & Inventory</li>
                      </ul>
                    </div>
                      <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-green-50 to-white shadow-md">
                      <h3 className="text-base font-semibold text-green-700 border-b border-green-100 pb-2 mb-3">
                        Retail
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-green-600 cursor-pointer">Stores</li>
                        <li className="hover:text-green-600 cursor-pointer">E-Commerce</li>
                      </ul>
                    </div>

                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-blue-50 to-white shadow-md">
                      <h3 className="text-base font-semibold text-blue-700 border-b border-blue-100 pb-2 mb-3">
                        Healthcare
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-blue-600 cursor-pointer">Hospitals</li>
                        <li className="hover:text-blue-600 cursor-pointer">Clinics</li>
                        <li className="hover:text-blue-600 cursor-pointer">Diagnostics</li>
                      </ul>
                    </div>
 
                    <div className="px-6 py-5 rounded-xl bg-gradient-to-r from-indigo-50 to-white shadow-md">
                      <h3 className="text-base font-semibold text-indigo-700 border-b border-indigo-100 pb-2 mb-3">
                        Education
                      </h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm leading-relaxed">
                        <li className="hover:text-indigo-600 cursor-pointer">Schools</li>
                        <li className="hover:text-indigo-600 cursor-pointer">Colleges</li>
                        <li className="hover:text-indigo-600 cursor-pointer">Universities</li>
                      </ul>
                    </div>

                  </div>
                )}
 
                {activeMenu === "business" && (
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Workflow Automation</li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Data Analytics & Reporting</li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Customer Engagement</li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Compliance & Security</li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Mobile Workforce Enablement</li>
                  </ul>
                )}
 
                {activeMenu === "enhancements" && (
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>
              <Link href="/casestudy" className="px-3  py-2 rounded-md hover:bg-gray-50 shadow-sm">
                Casestudies
              </Link>
            </li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Customer Testimonials</li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Demo Videos</li>
                    <li className="px-3 py-2 rounded-md hover:bg-gray-50 shadow-sm">Request Demo</li>
                  </ul>
                )}
              </div>
            </div>
          </li>
 
          {/* Resources Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown("resources")} className="flex items-center gap-1 hover:text-indigo-600">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "resources" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                <li>
                  <Link href="/Invoicetracking" className="block px-4 py-2 hover:bg-indigo-50">Invoice Tracking</Link>
                </li>
                <li>
                  <Link href="/reportsuite" className="block px-4 py-2 hover:bg-indigo-50">Report Suite</Link>
                </li>
                <li>
                  <Link href="/blog" className="block px-4 py-2 hover:bg-indigo-50">Blog</Link>
                </li>
                <li>
                  <Link href="/casestudy" className="block px-4 py-2 hover:bg-indigo-50">Case Study</Link>
                </li>
              </ul>
            )}
          </li>
 
          {/* Company Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown("company")} className="flex items-center gap-1 hover:text-indigo-600">
              Company <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "company" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                <li><Link href="/Whywe" className="block px-4 py-2 hover:bg-indigo-50">Why We</Link></li>
                <li><Link href="/Aboutus" className="block px-4 py-2 hover:bg-indigo-50">About Us</Link></li>
                <li><Link href="/leadership" className="block px-4 py-2 hover:bg-indigo-50">Leadership</Link></li>
                <li><Link href="/culture" className="block px-4 py-2 hover:bg-indigo-50">Culture</Link></li>
              </ul>
            )}
          </li>
 
          {/* Support Dropdown */}
          <li className="relative">
            <button onClick={() => toggleDropdown("support")} className="flex items-center gap-1 hover:text-indigo-600">
              Support <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "support" && (
              <ul className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 py-2">
                <li><Link href="/contactus" className="block px-4 py-2 hover:bg-indigo-50">Contact Us</Link></li>
              </ul>
            )}
          </li>
        </ul>
 
        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen((p) => !p)}>
          {mobileOpen ? <X size={28} /> : "☰"}
        </button>
      </div>
 
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col space-y-2 px-6 py-4 font-medium text-gray-700">
            {/* Solutions (accordion) */}
            <li>
              <button
                onClick={toggleMobileSolutions}
                className="flex items-center justify-between w-full py-2 text-left"
                aria-expanded={mobileSolutionsOpen}
              >
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
 
              {mobileSolutionsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {/* By Industry */}
                  <div>
                    <button
                      onClick={() => toggleMobileSolutionsGroup("industry")}
                      className="flex items-center justify-between w-full py-2 text-left"
                      aria-expanded={mobileActiveSolutions === "industry"}
                    >
                      <span>By Industry</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
 
                    {mobileActiveSolutions === "industry" && (
                      <ul className="pl-4 space-y-1 text-sm">
                        <li>
                          <Link href="/solutions/industry/hospitals" className="block py-1" onClick={closeMobile}>
                            Hospitals
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/industry/clinics" className="block py-1" onClick={closeMobile}>
                            Clinics
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/industry/diagnostics" className="block py-1" onClick={closeMobile}>
                            Diagnostics
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
 
                  {/* By Business Need */}
                  <div>
                    <button
                      onClick={() => toggleMobileSolutionsGroup("business")}
                      className="flex items-center justify-between w-full py-2 text-left"
                      aria-expanded={mobileActiveSolutions === "business"}
                    >
                      <span>By Business Need</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
 
                    {mobileActiveSolutions === "business" && (
                      <ul className="pl-4 space-y-1 text-sm">
                        <li>
                          <Link href="/solutions/business/workflow" className="block py-1" onClick={closeMobile}>
                            Workflow Automation
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/business/analytics" className="block py-1" onClick={closeMobile}>
                            Data Analytics & Reporting
                          </Link>
                        </li>
                        <li>
                          <Link href="/solutions/business/customer-engagement" className="block py-1" onClick={closeMobile}>
                            Customer Engagement
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
 
                  {/* Additional Enhancements */}
                  <div>
                    <button
                      onClick={() => toggleMobileSolutionsGroup("enhancements")}
                      className="flex items-center justify-between w-full py-2 text-left"
                      aria-expanded={mobileActiveSolutions === "enhancements"}
                    >
                      <span>Additional Enhancements</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
 
                    {mobileActiveSolutions === "enhancements" && (
                      <ul className="pl-4 space-y-1 text-sm">
                        <li>
                          <Link href="/case-studies" className="block py-1" onClick={closeMobile}>
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link href="/testimonials" className="block py-1" onClick={closeMobile}>
                            Customer Testimonials
                          </Link>
                        </li>
                        <li>
                          <Link href="/demo-videos" className="block py-1" onClick={closeMobile}>
                            Demo Videos
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </li>
 
            {/* Resources */}
            <li>
              <button
                onClick={() => toggleDropdown("resources")}
                className="flex items-center justify-between w-full py-2"
              >
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "resources" && (
                <ul className="pl-4 space-y-1 text-sm">
                  <li>
                    <Link href="/Invoicetracking" className="block py-1" onClick={closeMobile}>
                      Invoice Tracking
                    </Link>
                  </li>
                  <li>
                    <Link href="/reportsuite" className="block py-1" onClick={closeMobile}>
                      Report Suite
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="block py-1" onClick={closeMobile}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/casestudy" className="block py-1" onClick={closeMobile}>
                      Case Study
                    </Link>
                  </li>
                </ul>
              )}
            </li>
 
            {/* Company */}
            <li>
              <button onClick={() => toggleDropdown("company")} className="flex items-center justify-between w-full py-2">
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "company" && (
                <ul className="pl-4 space-y-1 text-sm">
                  <li>
                    <Link href="/Whywe" className="block py-1" onClick={closeMobile}>
                      Why We
                    </Link>
                  </li>
                  <li>
                    <Link href="/Aboutus" className="block py-1" onClick={closeMobile}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/culture" className="block py-1" onClick={closeMobile}>
                      Culture
                    </Link>
                  </li>
                </ul>
              )}
            </li>
 
            {/* Support */}
            <li>
              <button onClick={() => toggleDropdown("support")} className="flex items-center justify-between w-full py-2">
                <span>Support</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === "support" && (
                <ul className="pl-4 space-y-1 text-sm">
                  <li>
                    <Link href="/contactus" className="block py-1" onClick={closeMobile}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}