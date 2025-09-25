"use client";

import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import Image from "next/image";
import { JSX } from 'react';

  import ChatBox from "../components/chatbox";

type Subheading = {
  id: string;
  title: string;
  table: JSX.Element
};

type Section = {
  id: string;
  title: string;
  subheadings: Subheading[];
};

const ReportsuitePage = () => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeSubId, setActiveSubId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setActiveSectionId(prev => (prev === id ? null : id));
    setActiveSubId(null);
  };

  const toggleSubheading = (id: string) => setActiveSubId(id);

   const sections: Section[] = [
    {
      id: "invoices",
      title: "Invoices",
      subheadings: [
  {
    id: "issued",
    title: "Total Issued",
    table: (
      <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
          <tr>
            <th className="px-3 py-2 border">Invoice No</th>
            <th className="px-3 py-2 border">Date</th>
            <th className="px-3 py-2 border">Vendor</th>
            <th className="px-3 py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="hover:bg-[#E2EDF4]">
            <td className="px-3 py-2 border">INV001</td>
            <td className="px-3 py-2 border">01-08-2025</td>
            <td className="px-3 py-2 border">ABC Traders</td>
            <td className="px-3 py-2 border">$5,000</td>
          </tr>
          <tr className="hover:bg-[#E2EDF4]">
            <td className="px-3 py-2 border">INV002</td>
            <td className="px-3 py-2 border">03-08-2025</td>
            <td className="px-3 py-2 border">XYZ Pvt Ltd</td>
            <td className="px-3 py-2 border">$7,800</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "paid",
    title: "Paid",
    table: (
      <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
          <tr>
            <th className="px-3 py-2 border">Invoice No</th>
            <th className="px-3 py-2 border">Date</th>
            <th className="px-3 py-2 border">Vendor</th>
            <th className="px-3 py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="hover:bg-[#E2EDF4]">
            <td className="px-3 py-2 border">INV003</td>
            <td className="px-3 py-2 border">05-08-2025</td>
            <td className="px-3 py-2 border">LMN Supplies</td>
            <td className="px-3 py-2 border">$6,000</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "pending",
title: "Pending",
table: (
  <table className="min-w-full border border-gray-300 text-[#273F4F]">
    {/* Table Heading */}
    <thead className="bg-[#91ADC8] text-black">
      <tr>
        <th className="px-3 py-2 border">Invoice No</th>
        <th className="px-3 py-2 border">Date</th>
        <th className="px-3 py-2 border">Vendor</th>
        <th className="px-3 py-2 border">Amount</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody className="bg-[#F7FAFC] text-[#273F4F]">
      <tr className="hover:bg-[#E2EDF4]">
        <td className="px-3 py-2 border">INV004</td>
        <td className="px-3 py-2 border">08-08-2025</td>
        <td className="px-3 py-2 border">PQR Agencies</td>
        <td className="px-3 py-2 border">$9,200</td>
      </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "overdue",
    title: "Overdue",
    table: (
      <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
          <tr>
            <th className="px-3 py-2 border">Invoice No</th>
            <th className="px-3 py-2 border">Due Date</th>
            <th className="px-3 py-2 border">Vendor</th>
            <th className="px-3 py-2 border">Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr className="hover:bg-[#E2EDF4]">
            <td className="px-3 py-2 border">INV005</td>
            <td className="px-3 py-2 border">10-07-2025</td>
            <td className="px-3 py-2 border">DEF Mart</td>
            <td className="px-3 py-2 border">$4,500</td>
          </tr>
        </tbody>
      </table>
    ),
  },


      
       
      
      ],
    },
    {
      id: "kpis",
      title: "Key Performance Indicators (KPIs)",
      subheadings: [
        {
          id: "kpi-time",
          title: "% Paid On Time",
          table: (
            <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Month</th>
                  <th className="border px-3 py-2 text-left">% On Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">July</td>
                  <td className="border px-3 py-2">85%</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">August</td>
                  <td className="border px-3 py-2">90%</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "kpi-delay",
          title: "Average Payment Delay",
          table: (
          <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Vendor</th>
                  <th className="border px-3 py-2 text-left">Avg Delay (days)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">ABC Traders</td>
                  <td className="border px-3 py-2">3</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">XYZ Pvt Ltd</td>
                  <td className="border px-3 py-2">5</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "kpi-outstanding",
          title: "Outstanding Amount",
          table: (
            <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Customer</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">LMN Stores</td>
                  <td className="border px-3 py-2">$12,000</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">PQR Agencies</td>
                  <td className="border px-3 py-2">$8,500</td>
                </tr>
              </tbody>
            </table>
          ),
        },
      ],
    },
    {
      id: "payment-status",
      title: "Payment Status Reports",
      subheadings: [
        {
          id: "status-paid",
          title: "Paid",
          table: (
              <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Date</th>
                  <th className="border px-3 py-2 text-left">Reference</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV006</td>
                  <td className="border px-3 py-2">02-08-2025</td>
                  <td className="border px-3 py-2">TXN98765</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "status-partial",
          title: "Partially Paid",
          table: (
               <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Paid</th>
                  <th className="border px-3 py-2 text-left">Remaining</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV007</td>
                  <td className="border px-3 py-2">$4,000</td>
                  <td className="border px-3 py-2">$2,000</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "status-unpaid",
          title: "Unpaid",
          table: (
           <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Due Date</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV008</td>
                  <td className="border px-3 py-2">12-08-2025</td>
                  <td className="border px-3 py-2">$6,300</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "status-overdue",
          title: "Overdue",
          table: (
                   <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Due Date</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV009</td>
                  <td className="border px-3 py-2">05-07-2025</td>
                  <td className="border px-3 py-2">$4,700</td>
                </tr>
              </tbody>
            </table>
          ),
        },
      ],
    },
    {
      id: "payment-details",
      title: "Payment Details",
      subheadings: [
        {
          id: "details-due",
          title: "Due Dates",
          table: (
                      <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Due Date</th>
                  <th className="border px-3 py-2 text-left">Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV014</td>
                  <td className="border px-3 py-2">15-08-2025</td>
                  <td className="border px-3 py-2">ABC Traders</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV015</td>
                  <td className="border px-3 py-2">18-08-2025</td>
                  <td className="border px-3 py-2">XYZ Pvt Ltd</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "details-terms",
          title: "Payment Terms",
          table: (
                      <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Terms</th>
                  <th className="border px-3 py-2 text-left">Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV014</td>
                  <td className="border px-3 py-2">Net 30</td>
                  <td className="border px-3 py-2">ABC Traders</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV015</td>
                  <td className="border px-3 py-2">Net 45</td>
                  <td className="border px-3 py-2">XYZ Pvt Ltd</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "details-method",
          title: "Payment Method",
          table: (
            <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Method</th>
                  <th className="border px-3 py-2 text-left">Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV014</td>
                  <td className="border px-3 py-2">Bank Transfer</td>
                  <td className="border px-3 py-2">ABC Traders</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV015</td>
                  <td className="border px-3 py-2">Credit Card</td>
                  <td className="border px-3 py-2">XYZ Pvt Ltd</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "details-reference",
          title: "Reference Numbers",
          table: (
                       <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Reference No</th>
                  <th className="border px-3 py-2 text-left">Vendor</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV014</td>
                  <td className="border px-3 py-2">TXN12345</td>
                  <td className="border px-3 py-2">ABC Traders</td>
                </tr>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV015</td>
                  <td className="border px-3 py-2">TXN67890</td>
                  <td className="border px-3 py-2">XYZ Pvt Ltd</td>
                </tr>
              </tbody>
            </table>
          ),
        },
      ],
    },
    {
      id: "aging",
      title: "Aging Reports",
      subheadings: [
        {
          id: "aging-30",
          title: "0–30 Days",
          table: (
                     <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Age</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV010</td>
                  <td className="border px-3 py-2">15 days</td>
                  <td className="border px-3 py-2">$3,000</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "aging-60",
          title: "31–60 Days",
          table: (
                  <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Age</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV011</td>
                  <td className="border px-3 py-2">45 days</td>
                  <td className="border px-3 py-2">$7,500</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "aging-90",
          title: "61–90 Days",
          table: (
                   <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Age</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV012</td>
                  <td className="border px-3 py-2">70 days</td>
                  <td className="border px-3 py-2">$6,400</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          id: "aging-90plus",
          title: "Over 90 Days",
          table: (
                <table className="min-w-full border border-gray-300 text-gray-900">
        <thead className="bg-[#91ADC8] text-black">
                <tr>
                  <th className="border px-3 py-2 text-left">Invoice No</th>
                  <th className="border px-3 py-2 text-left">Age</th>
                  <th className="border px-3 py-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#E2EDF4]">
                  <td className="border px-3 py-2">INV013</td>
                  <td className="border px-3 py-2">120 days</td>
                  <td className="border px-3 py-2">$9,900</td>
                </tr>
              </tbody>
            </table>
          ),
        },
      ],
    },
  ];



return (
  <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
    {/* ✅ Navbar */}
    <Navbar />

    {/* ✅ Hero Section */}
    <section className="invoice-hero py-16 px-6">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Hero Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/report.png"
            alt="Dashboard Preview"
            fill
            className="object-cover rounded-xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>

    {/* ✅ Heading */}
    <div className="container max-w-7xl mx-auto px-6 text-center mb-8">
      <h1 className="text-4xl font-bold text-[#003161]">Reporting Suite</h1>
    </div>

    {/* ✅ Main Content */}
    <div className="container max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left side: Sections */}
        <div className="md:w-1/3 space-y-3 self-start min-h-[450px]">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-lg border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-3 
                           text-lg font-semibold transition 
                           bg-[#273F4F] text-white hover:bg-[#1e2f3c]"
                onClick={() => toggleSection(section.id)}
              >
                {section.title}
                {activeSectionId === section.id ? (
                  <BiChevronUp size={24} />
                ) : (
                  <BiChevronDown size={24} />
                )}
              </button>

              {activeSectionId === section.id && (
                <ul className="overflow-hidden px-2 pb-2 space-y-2 mt-3 border-t border-gray-200">
                  {section.subheadings.map((sub) => (
                    <li key={sub.id}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-md border-l-4 transition 
                          ${
                            activeSubId === sub.id
                              ? "bg-[#003161] border-l-[#273F4F] text-white font-medium"
                              : "bg-white border-l-transparent text-[#273F4F] hover:bg-[#F1F5F9] hover:border-l-[#273F4F]"
                          }`}
                        onClick={() => toggleSubheading(sub.id)}
                      >
                        {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Tables */}
<AnimatePresence>
  {activeSubId ? (
    sections.map(section =>
      section.subheadings.map(sub =>
        activeSubId === sub.id && (
          <div key={sub.id} className="w-full flex justify-center">
            <div className="w-full max-w-[1000px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white w-full rounded-xl shadow-lg border border-gray-200 p-4 origin-center flex flex-col"
              >
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  {sub.title}
                </h2>
                {/* ✅ Scrollable table wrapper */}
                <div className="flex-1 max-h-[450px] overflow-auto rounded-lg">
                  {sub.table}
                </div>
              </motion.div>
            </div>
          </div>
        )
      )
    )
  ) : (
    <div className="w-full flex justify-center">
      <motion.div
        key="placeholder"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white w-full max-w-[1000px] rounded-xl shadow-lg border border-gray-200 p-4 flex items-center justify-center origin-center"
      >
        <video
          src="/placeholder-video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </motion.div>
    </div>
  )}
</AnimatePresence>


      </div>
    </div>
  </main>
);

  
};

export default ReportsuitePage;
