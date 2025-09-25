import Image from "next/image";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex justify-start items-start">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Apportal Uploads Logo"
              width={190}
              height={80}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* 2️⃣ Center-left: New to Apportal */}
<div>
  <h4 className="text-sm font-semibold text-gray-900 mb-3">New to Apportal?</h4>
  <ul className="space-y-3 text-sm">
    <li>
      <Link href="/Aboutus" className="hover:text-blue-600">
        About
      </Link>
    </li>
    <li>
      <Link href="/platform" className="hover:text-blue-600">
        Platform
      </Link>
    </li>
    <li>
      <Link href="/leadership" className="hover:text-blue-600">
        Leadership
      </Link>
    </li>

  </ul>
</div>

        {/* 3️⃣ Center-right: Contact Us */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Us</h4>
          <div className="flex items-center gap-2 mb-3">
            <EnvelopeIcon className="w-5 h-5 text-blue-500" />
            <a
              href="mailto:ceo@apportaluploads.com"
              className="hover:text-blue-700 font-medium text-sm"
            >
              ceo@apportaluploads.com
            </a>
          </div>
          <div className="flex items-start gap-2 mb-3 text-sm">
            <MapPinIcon className="w-5 h-5 text-blue-500 mt-1" />
            <address className="not-italic">
              2/13 Muthumariamman Kovil Street,<br />
              Thiru-Vi-Ka Nagar, Kadaperi, West Tambaram,<br />
              Chennai, India.
            </address>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <PhoneIcon className="w-5 h-5 text-blue-500" />
            <a href="tel:+16303992705" className="hover:text-blue-700">
              +1 (630) 399-2705
            </a>
          </div>
        </div>

        {/* 4️⃣ Right: Social + Demo */}
        <div className="flex flex-col items-center gap-6 mt-6">
  <div className="flex gap-6">
    <a
      href="https://www.linkedin.com/company/ap-portal-uploads"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <Image
        src="/linkedin1.svg"
        alt="LinkedIn"
        width={40}  // increased size
        height={40} // increased size
        className="hover:scale-110 transition-transform duration-300"
      />
    </a>
            {/* <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Image src="/twitter1.svg" alt="Twitter" width={22} height={22} />
            </a>
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook1.svg" alt="Facebook" width={22} height={22} />
            </a>
            <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/youtube1.svg" alt="YouTube" width={22} height={22} />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/insta1.svg" alt="Instagram" width={22} height={22} />
            </a> */}
          </div>
           <Link
  href="/contactus"
  className="inline-block px-6 py-2 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-semibold text-sm md:text-base"
>
  Demo Now
</Link>
 
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-600">
        <a href="/policy" className="hover:text-blue-600">Privacy Policy</a> · 
        <a href="#cookies" className="hover:text-blue-600"> Cookie Policy</a> · 
        <a href="#preferences" className="hover:text-blue-600"> Cookie Preferences</a>
        <br />
        © {new Date().getFullYear()} Apportal Uploads. All rights reserved.
      </div>
    </footer>
  );
}
