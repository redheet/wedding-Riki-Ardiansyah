import React from "react";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { HiArrowLongRight } from "react-icons/hi2";
import { RevealWrapper } from "next-reveal";

function Profile() {
  return (
    <section id="people">
      <div className="bg-[url('/images/profile/bg.jpg')] bg-center bg-no-repeat bg-cover px-12 py-16">
        <RevealWrapper duration={1500}>
          <p className="text-center text-[0.75rem] leading-loose text-[#424242] italic">
            <strong>Bismillahirrahmanirrahim</strong>
            <br />
            Assalamu'alaikum Warahmatullaahi Wabarakaatuh. Dengan memohon Rahmat
            serta Ridho Allah SWT. <br />Kami mengharapkan kehadiran
            Bapak/Ibu/Saudara/i. Pada acara resepsi pernikahan putra-putri kami.
          </p>
        </RevealWrapper>
        <div className="grid grid-cols-2 mt-20">
          <div className="-rotate-90 flex flex-col justify-end lg:mr-4 -translate-y-4 lg:-translate-y-4">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>THE</span>
                <span>GROOM</span>
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper duration={1500} origin="right">
            <img
              src="/images/profile/BPS_7706.webp"
              alt="Riki Ardiansyah"
              className="translate-x-[3rem]"
            />
          </RevealWrapper>
        </div>
        <div className="flex flex-col items-end text-right gap-6 mt-12">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="italic text-2xl font-light">Riki Ardiansyah ( Slay )</h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong>Putera Tunggal dari</strong>
            <br />
            Bpk. Aselih
            <br />
            & Ibu Komariah
          </p>
          {/* <a
            href="#"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>Aulia</span>
            <HiArrowLongRight />
          </a> */}
        </div>
        <div className="grid grid-cols-2 mt-20">
          <RevealWrapper duration={1500} origin="left">
            <img
              src="/images/profile/BPS_7701.webp"
              alt="Aura"
              className="-translate-x-[3rem]"
            />
          </RevealWrapper>
          <div className="rotate-90 flex flex-col justify-end lg:ml-4 translate-y-4 lg:translate-y-8">
            <RevealWrapper duration={1500} origin="bottom">
              <p className="text-[0.75rem] tracking-[5px] flex gap-2.5 text-[#424242] text-center">
                <span>THE</span>
                <span>BRIDE</span>
              </p>
            </RevealWrapper>
          </div>
        </div>
        <div className="flex flex-col items-start text-left gap-6 mt-12">
          <RevealWrapper duration={1500} origin="bottom">
            <h1 className="italic text-2xl font-light">
              Silvia ( Ipii )
            </h1>
          </RevealWrapper>
          <p className="text-sm leading-relaxed">
            <strong>Puteri Kedua dari</strong>
            <br />
            Bpk. Saimin
            <br />
            & Ibu Yati
          </p>
          {/* <a
            href="#"
            className="text-sm text-white bg-[#424242] px-[0.4375rem] py-1 rounded-[0.625rem] flex items-center gap-1 hover:scale-90 ease-linear duration-[0.2s]"
          >
            <AiOutlineInstagram />
            <span>Renaldi</span>
            <HiArrowLongRight />
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default Profile;
