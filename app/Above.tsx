import Link from "next/link";
import ChatBox from "../app/components/chatbox";

export default function AboveFooter() {
  return (
    <div className="sticky bottom-0 z-10 bg-gray-100 text-gray-800 py-6 px-6 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Text slightly toward middle */}
        <div className="ml-8">
          <h2 className="text-2xl font-semibold mb-1">Still have questions?</h2>
          <p className="text-sm">We can help you find what you need.</p>
        </div>

        {/* Button slightly toward right */}
        {/* <Link href="/contactus">
          <button className="mr-8 animate-bounce bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition duration-300">
            Contact Us
          </button>
        </Link> */}
        
{/* <Link href="/contactus">
          <button className="animate-bounce bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-500 text-white font-semibold py-3 px-10 rounded transition duration-300">
            Contact Us
          </button>
        </Link> */}

  <Link href="/contactus" className="ml-auto">
          <button className="animate-bounce bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-500 text-white font-semibold py-3 px-10 rounded transition duration-300">
            Contact Us
          </button>
        </Link>

        {/* ChatBox */}
        <ChatBox />
      </div>
    </div>
  );
}
