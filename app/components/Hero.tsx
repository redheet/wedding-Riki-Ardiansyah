"use client";

import React from "react";
import { RxEnvelopeOpen } from "react-icons/rx";
import useSound from "use-sound";
import { RevealWrapper } from "next-reveal";

export default function Hero({
  setCurrentOverflow,
}: {
  setCurrentOverflow: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [play] = useSound("/audio/m1.mp3", {
    volume: 0.65,
    loop: true,
  });

  // Get nama from URL hash (e.g., #naufal dan keluarga)
  const [nama, setNama] = React.useState<string>("Nama Undangan");

  React.useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the #
    if (hash.trim()) {
      // Decode URL encoding (e.g., %20 -> space)
      setNama(decodeURIComponent(hash));
    }
  }, []);

  return (
    <section id="hero">
      <div className="min-h-screen bg-[url('/images/hero/BPS_7712.webp')] bg-cover bg-center text-white relative">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="flex flex-col justify-between py-28 px-12 text-center z-20 relative h-screen">
          <div>
            <p className="font-extralight text-[0.75rem] ">The Wedding of</p>
            <h1 className="text-3xl font-light mt-2 font-sans">Riki Ardiansyah & Silvia</h1>
            <p className="font-extralight text-[0.8rem] mt-4">
              Sabtu, 16 Mei 2026
            </p>
            {/* <p className="font-extralight text-[1.2rem] mt-8">
              {nama.trim() || "Keluarga"}
            </p> */}
          </div>
          {/* {nama.map((tamu) => ( */}
          <div className="flex flex-col items-center gap-2">
            {/* <p className="text-[0.8rem]">Kediaman Mempelai Wanita</p> */}
            <p className="text-[0.8rem]">
              Jl. Kp. Bedahan, RT.01 RW.09, Bedahan, Kec. Sawangan, Kota Depok, Jawa Barat 16519
            </p>
            {/* <p>{tamu}</p> */}
            <RevealWrapper duration={4000} origin="bottom">
              <a
                href="#countdown"
                onClick={() => {
                  setCurrentOverflow("auto");
                  play();
                }}
                className="font-bold text-sm bg-[#ffffff36] border border-[#bdb08f8c] rounded-lg flex items-center gap-2 px-6 py-3 mt-6 hover:scale-90 ease-linear duration-[0.2s]"
              >
                <RxEnvelopeOpen />
                <span>Buka Undangan</span>
              </a>
            </RevealWrapper>
          </div>
          {/* ))} */}
        </div>
      </div>
    </section>
  );
}
