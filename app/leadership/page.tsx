"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../Navbar"; // ✅ Import Navbar

interface Leader {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  description: string;
  isCEO?: boolean;
}

const leaders: Leader[] = [
  {
    name: "Ram N Ramamurthy",
    role: "CEO & Founder",
    image: "/rm.png",
    linkedin: "/linkedin.svg",
    isCEO: true,
    description: `With over 37 years of experience in document imaging and indexing services, Ram N Ram Murthy has consistently delivered innovative, cost-effective, and high-quality solutions. Over the last 15 years, we have improved organizational productivity by more than 300%, driven by technology adoption and process excellence.

He specializes in blending traditional document management expertise with modern AI, Machine Learning, and automation technologies.

Key achievements include:
• Using AI-powered automation in document classification, data extraction, and workflow management.
• Developing an Electronic Invoice Presentment and Payment (EIPP) SaaS solution.
• Creating a true Accounts Payable (AP) workflow service solution — a global first.`,
  },
  {
    name: "Kishor Kumar L.M",
    role: "Chief Operating Officer",
    image: "/k2.png",
    linkedin: "/linkedin.svg",
    description: `Kishor Kumar L.M serves as the Chief Operating Officer (COO) at apuploadportals.com, bringing extensive experience in operations management, process optimization, and technology-driven service delivery. With a strong track record of driving efficiency and productivity, Kishor ensures seamless execution of complex projects while integrating modern technologies into operations.

He has successfully led initiatives in document management, portal uploads, workflow automation, and SaaS-based solutions, leveraging AI and .NET development to create scalable, reliable, and high-performance platforms. Kishor’s expertise spans team leadership, process design, client engagement, and technology integration, ensuring projects meet quality, timeline, and budget expectations.

Under his leadership, apuploadportals.com has implemented AI-powered automation solutions and .NET-based enterprise platforms, enhancing operational workflows, improving service delivery standards, and optimizing accounts payable and document management processes.

Specialties:
Operations Management | AI & Automation | .NET Development | SaaS Solutions | Document Management | Workflow Optimization | Team Leadership | Process Excellence | AP Workflow

Kishor Kumar L.M is committed to helping businesses achieve operational efficiency and digital transformation through innovative technology and streamlined processes.`,
  },
  {
    name: "Mohan Arumugam",
    role: "Chief Technology Officer",
    image: "/mohansir2.png",
    linkedin: "/linkedin.svg",
    description: `Mohan Arumugam brings over 23 years of experience in enterprise software delivery and architecture, with proven expertise in .NET, SharePoint, Python, SQL Server, ERP integration, and AI/ML technologies. He has successfully led and delivered more than 80 enterprise projects across industries such as healthcare, manufacturing, banking, and government, both in India and internationally.

At apuploadportals.com, Mohan focuses on building AI-driven, scalable, and secure platforms that streamline document management, invoice processing, and accounts payable workflows. His deep knowledge of Mobility + ERP solutions, Cloud platforms, Power Platform, and custom development enables businesses to achieve measurable productivity gains and digital transformation.

With a passion for innovation, Mohan has been instrumental in:
• Designing and implementing Electronic Invoice Presentment and Payment (EIPP) solutions.
• Developing intelligent AP workflow services using AI, ML, and automation.
• Driving cost-effective and high-quality digital transformation initiatives for global clients.

Specialties:
AI/ML & Analytics | .NET & SharePoint | Python | ERP Integration | Cloud Solutions | Power Platform | Custom Development | Document Imaging & Indexing | EIPP | AP Workflow

Mohan’s mission is to help organizations work smarter, faster, and more efficiently by combining AI innovation with practical enterprise technology solutions.`,
  },
];

export default function LeadershipPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const ceo = leaders.find((l) => l.isCEO);
  const others = leaders.filter((l) => !l.isCEO);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="invoice-hero py-10">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl flex items-center justify-center">
            <img
              src="/leadership1.jpg"
              alt="Leadership Team Banner"
              className="min-w-full min-h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CEO Section */}
      {ceo && (
        <section className="max-w-3xl mx-auto px-6 py-12 text-center">
          <div
            className="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-6 max-w-md mx-auto cursor-pointer hover:shadow-2xl transition"
            onClick={() => setSelectedLeader(ceo)}
          >
            <div className="h-[220px] w-[160px] mb-4 flex items-center justify-center overflow-hidden rounded-xl mx-auto">
              <Image
                src={ceo.image}
                alt={`Portrait of ${ceo.name}`}
                width={160}
                height={220}
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold">{ceo.name}</h3>
            <p className="text-sm text-gray-600">{ceo.role}</p>

            <div className="mt-2 flex justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${ceo.name}'s LinkedIn profile`}
              >
                <Image src={ceo.linkedin} alt={`${ceo.name} LinkedIn`} width={24} height={24} />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Other Leaders */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-8">
          {others.map((leader) => (
            <div
              key={leader.name}
              className="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-6 max-w-sm w-full cursor-pointer hover:shadow-2xl transition"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="h-[180px] w-[140px] mb-4 flex items-center justify-center overflow-hidden rounded-xl mx-auto">
                <Image
                  src={leader.image}
                  alt={`Portrait of ${leader.name}`}
                  width={140}
                  height={180}
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg font-bold">{leader.name}</h3>
              <p className="text-sm text-gray-600">{leader.role}</p>

              <div className="mt-2 flex justify-center">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${leader.name}'s LinkedIn profile`}
                >
                  <Image src={leader.linkedin} alt={`${leader.name} LinkedIn`} width={22} height={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 text-center md:text-left">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  width={160}
                  height={220}
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold text-indigo-700">{selectedLeader.name}</h2>
                <p className="text-gray-600 mb-4">{selectedLeader.role}</p>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedLeader.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
