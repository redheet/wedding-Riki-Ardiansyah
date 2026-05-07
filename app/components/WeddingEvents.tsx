import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { RevealWrapper } from "next-reveal";

function WeddingEvents() {
  return (
    <section id="wedding-events">
      <div className="bg-[url('/images/weddingEvents/BPS_7791.webp')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-4xl italic text-white text-center font-light font-sans">
            Wedding Events
          </h1>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-10">
              <img
                src="/images/weddingEvents/BPS_7791.webp"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem]"
              />
              <div className="flex">
                <div className="w-[20%] bg-[#424242] rounded-bl-[1.25rem] flex items-center">
                  <p className="rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-5 lg:-translate-x-3.5 tracking-[5px]">
                    AKAD
                  </p>
                </div>
                <div className="w-[80%] bg-white px-4 py-6 rounded-br-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
                    Sabtu, 16 Mei 2026
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <p className="flex items-center text-[#5a5a5a] font-light text-sm gap-1.5">
                    <AiFillClockCircle />
                    <span>09.00 WIB s.d Selesai</span>
                  </p>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
                      Kediaman Mempelai Wanita
                    </strong>
                    <br />
                    Jl. Kp. Bedahan, RT.01 RW.09, Bedahan, Kec. Sawangan, Kota Depok, Jawa Barat 16519
                  </p>
                  <a
                    href="https://maps.app.goo.gl/wWxRBJJkVSDNVeDX7"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                    target="_blank"
                  >
                    GOOGLE MAPS
                  </a>
                </div>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper duration={1500} origin="bottom">
            <div className="mt-6">
              <img
                src="/images/weddingEvents/BPS_7811.webp"
                alt="akad"
                className="w-full h-72 object-cover rounded-t-[1.25rem] object-left"
              />
              <div className="flex">
                <div className="w-[80%] bg-white px-4 py-6 rounded-bl-[1.25rem] flex flex-col gap-5 items-baseline">
                  <h1 className="italic text-xl font-light">
                    Sabtu, 16 Mei 2026
                  </h1>
                  <hr className="border border-[#5a5a5a80] w-full" />
                  <div>
                    <p className="flex items-center text-[#5a5a5a] font-light text-[0.8rem] gap-1.5">
                      <AiFillClockCircle />
                      <span>11.00 WIB - Selesai</span>
                    </p>
                  </div>
                  <p className="text-[0.785rem] text-[#5a5a5a] font-light leading-[1.9]">
                    <strong className="text-black font-bold">
                      Kediaman Mempelai Wanita
                    </strong>
                    <br />
                    Jl. Kp. Bedahan, RT.01 RW.09, Bedahan, Kec. Sawangan, Kota Depok, Jawa Barat 16519
                  </p>
                  <a
                    href="https://maps.app.goo.gl/wWxRBJJkVSDNVeDX7"
                    className="text-[0.75rem] text-[#424242] border border-[#424242] px-[0.4375rem] py-1.5 rounded-full hover:scale-90 ease-linear duration-[0.2s]"
                    target="_blank"
                  >
                    GOOGLE MAPS
                  </a>
                </div>
                <div className="w-[20%] bg-[#424242] rounded-br-[1.25rem] flex items-center">
                  <p className="-rotate-90 text-center text-white font-bold text-[1.75rem] -translate-x-[3rem] lg:-translate-x-[2.35rem] tracking-[5px]">
                    RESEPSI
                  </p>
                </div>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

export default WeddingEvents;
