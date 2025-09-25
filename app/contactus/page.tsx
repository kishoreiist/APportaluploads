"use client";

import { useEffect, useState, FormEvent } from "react";
import Navbar from "../Navbar";
import ChatBox from "../components/chatbox";
import Image from "next/image";

export default function ContactUsPage() {
  // ✅ Set browser tab title
  useEffect(() => {
    document.title = "APPortal uploads :: Contact Us";
    // Optionally, update meta description dynamically:
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with APPortaluploads for inquiries, demos, and support.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Get in touch with APPortaluploads for inquiries, demos, and support.";
      document.head.appendChild(meta);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    country: "",
    portal: "",
    portalOther: "",
    documentType: "",
    documentTypeOther: "",
    volume: "",
    preferredContact: "",
    bestTime: "",
    message: "",
    subject: "",
    consent: false,
  });

  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [attachmentError, setAttachmentError] = useState(false);
 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (name === "email") setEmailError(false);
  };
 
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachment(e.target.files[0]);
      setAttachmentError(false);
    }
  };
 
  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    setEmailError(true);
    return;
  }

  if (!formData.consent) {
    alert("Please agree to the terms and privacy policy.");
    return;
  }

  setLoading(true);

  try {
    let attachmentData = null;
    if (attachment) {
      const base64 = await attachment.arrayBuffer();
      attachmentData = {
        name: attachment.name,
        content: Buffer.from(base64).toString("base64"),
      };
    }

    const response = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, attachment: attachmentData }),
    });

    const result = await response.json();

    if (result.success) {
      setSuccess("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        country: "",
        portal: "",
        portalOther: "",
        documentType: "",
        documentTypeOther: "",
        volume: "",
        preferredContact: "",
        bestTime: "",
        message: "",
        subject: "",
        consent: false,
      });
      setAttachment(null);
    } else {
      setSuccess("Failed to send email. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setSuccess("Failed to send email. Please try again.");
  }

  setLoading(false);
};
 
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-900 font-sans">
      <Navbar />
 
      {/* Hero */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-xl">
            <img
              src="/contactus.png"
              alt="Contact Hero"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
 
      {/* Form Section */}
<section className="relative mb-16">
  <div className="container max-w-6xl mx-auto px-6 relative rounded-xl shadow-lg overflow-hidden">
    <Image
         src="/girl.jpg"
      alt="Contact Background"
      fill
      priority
      className="object-cover"
      sizes="100vw"
    />
    <div className="absolute inset-0 bg-black/40"></div>
 
    <div className="relative z-10 flex justify-start p-6 md:p-12">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h4 className="text-xl md:text-2xl mb-6 text-center">
          Let Us Talk
        </h4>
 
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row: Name + Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-sm focus:outline-none focus:border-indigo-500"
              />
              <label
                htmlFor="name"
                className="absolute left-3 text-gray-500 text-sm transition-all
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                  peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-black"
              >
                Name*
              </label>
            </div>
 
            <div className="relative">
              <input
                id="mobile"
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder=" "
                className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-sm focus:outline-none focus:border-indigo-500"
              />
              <label
                htmlFor="mobile"
                className="absolute left-3 text-gray-500 text-sm transition-all
                  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                  peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-black"
              >
                Mobile / Phone*
              </label>
            </div>
          </div>
 
          {/* Email */}
          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className={`peer w-full px-3 pt-4 pb-2 border text-sm focus:outline-none focus:border-indigo-500 ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            />
            <label
              htmlFor="email"
              className="absolute left-3 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-black"
            >
              Company Email*
            </label>
            {emailError && (
              <p className="text-xs text-red-500 mt-1">
                Must be a valid email (example@domain.com)
              </p>
            )}
          </div>
 
          {/* Company + Country */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Company */}
  <div className="relative">
    <input
      id="company"
      type="text"
      name="company"
      value={formData.company}
      onChange={handleChange}
      required
      placeholder=" "
      className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-base text-gray-900 focus:outline-none focus:border-indigo-500"
    />
    <label
      htmlFor="company"
      className="absolute left-3 text-gray-500 text-base transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-lg
        peer-focus:top-0.5 peer-focus:text-sm peer-focus:text-black"
    >
      Company*
    </label>
  </div>
 
  {/* Country */}
  <div className="relative">
    <select
      id="country"
      name="country"
      value={formData.country}
      onChange={handleChange}
      required
      aria-label="Select your country"
      className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-base focus:outline-none focus:border-indigo-500 bg-white text-gray-600"
    >
      <option value="" disabled className="text-gray-400">
        Select your country
      </option>
      {[
        "India",
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "Germany",
        "France",
        "China",
        "Japan",
        "Brazil",
        "South Africa",
        "Singapore",
        "UAE",
        "Saudi Arabia",
        "Mexico",
        "Italy",
        "Spain",
        "Netherlands",
        "Sweden",
        "Other",
      ].map((c) => (
        <option key={c} value={c} className="text-gray-900">
          {c}
        </option>
      ))}
    </select>
  </div>
</div>
 
{/* Portal */}
<div className="relative">
  <select
    id="portal"
    name="portal"
    value={formData.portal}
    onChange={handleChange}
    required
    aria-label="Select portal"
    className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-base focus:outline-none focus:border-indigo-500 bg-white text-gray-600"
  >
    <option value="" className="text-gray-400">
      Select portal
    </option>
    <option value="Ariba" className="text-gray-900">Ariba</option>
    <option value="Coupa" className="text-gray-900">Coupa</option>
    <option value="Tradeshift" className="text-gray-900">Tradeshift</option>
    <option value="Tungsten" className="text-gray-900">Tungsten</option>
    <option value="Other" className="text-gray-900">Other</option>
  </select>
 
  {formData.portal === "Other" && (
    <input
      type="text"
      name="portalOther"
      placeholder="Enter portal name"
      value={formData.portalOther}
      onChange={handleChange}
      className="w-full mt-2 px-3 py-2 border border-gray-300 text-base focus:outline-none focus:border-indigo-500"
    />
  )}
</div>
 
{/* Document Type */}
<div className="relative">
  <select
    id="documentType"
    name="documentType"
    value={formData.documentType}
    onChange={handleChange}
    required
    aria-label="Select document type"
    className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-base focus:outline-none focus:border-indigo-500 bg-white text-gray-600"
  >
    <option value="" className="text-gray-400">
      Select document type
    </option>
    <option value="Invoice" className="text-gray-900">Invoice</option>
    <option value="Credit Note" className="text-gray-900">Credit Note</option>
    <option value="PO" className="text-gray-900">PO</option>
    <option value="Other" className="text-gray-900">Other</option>
  </select>
 
  {formData.documentType === "Other" && (
    <input
      type="text"
      name="documentTypeOther"
      placeholder="Enter document type"
      value={formData.documentTypeOther}
      onChange={handleChange}
      className="w-full mt-2 px-3 py-2 border border-gray-300 text-base focus:outline-none focus:border-indigo-500"
    />
  )}
</div>
 
 
          {/* Volume */}
          <div>
            <input
              type="text"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              placeholder="Approx. Invoice Volume per Month (Optional)"
              className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
 
          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder=" "
              className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-sm focus:outline-none focus:border-indigo-500"
            />
            <label
              htmlFor="message"
              className="absolute left-3 text-gray-500 text-sm transition-all
                peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base
                peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-black"
            >
              Message*
            </label>
          </div>
 
          {/* Best Time */}
<div className="relative">
  <input
    type="text"
    id="bestTime"
    name="bestTime"
    value={formData.bestTime}
    onChange={handleChange}
    required
    placeholder=" "
    className="peer w-full px-3 pt-4 pb-2 border border-gray-300 text-sm focus:outline-none focus:border-indigo-500"
  />
  <label
    htmlFor="bestTime"
    className="absolute left-3 text-gray-500 text-sm transition-all
      peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base
      peer-focus:top-0.5 peer-focus:text-xs peer-focus:text-black"
  >
    Best Time to Reach*
  </label>
</div>
 
 
          {/* Consent */}
          <div className="flex items-center">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-xs">
                I agree to terms & privacy policy
              </label>
            </label>
          </div>
 
          <p className="text-xs text-gray-500 mt-2">
            By submitting this form, you agree that APPortaluploads Software,
            Inc. may contact you occasionally via email or phone to make you
            aware of APPortaluploads products and services. You may withdraw
            your consent at any time. For more details see the{" "}
            <a
              href="/privacy"
              className="text-indigo-600 hover:underline"
            >
              APPortaluploads Privacy Policy
            </a>
            .
          </p>
 
          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-md text-sm hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
 
          {success && (
            <p className="text-center text-green-600 text-sm">{success}</p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>
 
 
<ChatBox />
</main>
 
  );
}