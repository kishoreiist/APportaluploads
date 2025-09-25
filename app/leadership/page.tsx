import Head from "next/head";
import Image from "next/image";

export default function LeadershipPage() {
  return (
    <>
      <Head>
        <title>Meet Our Leadership Team | DummyCorp</title>
        <meta
          name="description"
          content="At DummyCorp, our leaders believe that support is far stronger than management."
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          property="og:title"
          content="Meet Our Leadership Team | DummyCorp"
        />
        <meta
          property="og:description"
          content="At DummyCorp, our leaders believe in empowering people."
        />
        <meta property="og:image" content="/leadership-thumbnail.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* ✅ Hero Section with Banner */}
        <section className="invoice-hero py-16">
          <div className="container max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
            <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-xl shadow-2xl flex items-center justify-center">
              <img
                src="/leadership1.jpg"
                alt="Leadership Banner"
                className="min-w-full min-h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ✅ Leadership Cards */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Our Leaders
          </h2>

          {/* Top single leader */}
<div className="flex justify-center mb-12">
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-6 max-w-md w-full">
    <div className="h-[220px] w-[160px] mb-4 flex items-center justify-center overflow-hidden rounded-xl mx-auto">
      <Image
        src="/rm.png" // 🔄 replace with actual image path
        alt="Mohan Arumugam"
        width={160}
        height={260}
        className="object-cover rounded-full"
      />
    </div>
    <h3 className="text-lg font-bold">Ram N Ramamurthy</h3>
    <p className="text-sm text-gray-600">CEO & Founder</p>
    <p className="mt-4 text-sm text-gray-500">
      {/* Visionary leader with 20+ years of experience guiding
      organizations through digital transformation and global growth. */}
    </p>
  </div>
</div>

{/* Centered 2 leader cards below */}
<div className="flex justify-center gap-8 flex-wrap">
  {/* Leader 2 */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-6 max-w-sm w-full">
    <div className="h-40 mb-4 flex items-center justify-center overflow-hidden rounded-full">
      <Image
        src="/kishoresir1.png" // 🔄 replace with actual image path
        alt="Mohan Arumugam"
        width={160}
        height={260}
        className="object-cover rounded-full"
      />
    </div>
    <h3 className="text-lg font-bold">KishokKumar L.M</h3>
    <p className="text-sm text-gray-600">Chief Operations Officer</p>
    <p className="mt-4 text-sm text-gray-500">
      {/* Dedicated to operational excellence, building scalable systems
      that improve efficiency and client satisfaction. */}
    </p>
  </div>

  {/* Leader 4 */}
  <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-center p-6 max-w-sm w-full">
    <div className="h-40 mb-4 flex items-center justify-center overflow-hidden rounded-full">
      <Image
        src="/mohansir2.png" // 🔄 replace with actual image path
        alt="Mohan Arumugam"
        width={160}
        height={260}
        className="object-cover rounded-full"
      />
    </div>
    <h3 className="text-lg font-bold">Mohan Arumugam</h3>
    <p className="text-sm text-gray-600">Chief Technology Officer</p>
    <p className="mt-4 text-sm text-gray-500">
      {/* Driving innovation through emerging technologies while ensuring
      secure, scalable, and customer-focused solutions. */}
    </p>
  </div>
</div>
        </section>

        {/* ✅ Call to Action
        <section className="bg-indigo-100 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Work with Us?</h2>
          <p className="text-gray-700 mb-6">
            Join a team where leadership means collaboration and empowerment.
          </p>
          <a
            href="contactus"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </section> */}
      </main>
    </>
  );
}
