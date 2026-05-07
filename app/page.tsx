"use client";

import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import ArRum from "./components/ArRum";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import WeddingEvents from "./components/WeddingEvents";
import Reservation from "./components/Reservation";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CardRek from "./components/CardRek";
import { RevealWrapper } from "next-reveal";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");
  const whatsappUrl =
    "https://wa.me/62819326114090?text=Halo%2C%20saya%20mau%20pesan%20website.%20Boleh%20minta%20info%20paket%20dan%20harganya%3F";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = currentOverflow;
    // Clean up stale service workers that can throw runtime cache errors.
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
    }
  }, [currentOverflow]);

  return (
    <main className="max-w-[28.125rem] mx-auto">
      <RevealWrapper duration={1500}>
        <Hero setCurrentOverflow={setCurrentOverflow} />
      </RevealWrapper>
      <Countdown />
      <ArRum />
      <Profile />
      <WeddingEvents />
      <Reservation />
      <CardRek />
      <Gallery />
      <Footer />
      {currentOverflow === "auto" && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
        >
          <FaWhatsapp size={30} />
        </a>
      )}
    </main>
  );
}
