import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>

        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-200">
          <h2 className="text-3xl font-semibold">About Us</h2>
        </section>

        <section id="services" className="min-h-screen flex items-center justify-center bg-gray-300">
          <h2 className="text-3xl font-semibold">Our Services</h2>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-400">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
        </section>
      </main>
    </>
  );
}
