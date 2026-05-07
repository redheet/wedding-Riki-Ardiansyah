import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/gallery/9.webp", alt: "quote", isHeader: true },
    { src: "/images/gallery/we.webp", alt: "big-grid", isBig: true },
    { src: "/images/gallery/BPS_7712.webp", alt: "grid-1", grid: true },
    { src: "/images/gallery/BPS_7716.webp", alt: "grid-2", grid: true },
    { src: "/images/gallery/BPS_7791.webp", alt: "grid-3", grid: true },
    { src: "/images/gallery/BPS_7797.webp", alt: "grid-3", grid: true },
    { src: "/images/gallery/BPS_7819.webp", alt: "grid-3", grid: true },
    { src: "/images/gallery/BPS_7805.webp", alt: "grid-3", grid: true },
  ];

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="gallery">
      <div className="bg-[url('/images/gallery/bg.jpg')] bg-cover bg-center relative px-8 py-16">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#424242_100%)] opacity-90 absolute inset-0"></div>
        <div className="z-10 relative">
          <h1 className="text-4xl italic font-light text-center text-white">
            Our Gallery
          </h1>
          <div className="flex flex-col items-center text-center gap-4 my-10">
            <img
              src="/images/gallery/9.webp"
              alt="quote"
              className="w-[170px] h-[220px] object-cover cursor-pointer"
              onClick={() => setSelectedImage("/images/gallery/9.webp")}
            />
            <RevealWrapper origin="top" duration={1500}>
              <span>
                <FaQuoteRight color="#4242427A" fontSize="1.75rem" />
              </span>
            </RevealWrapper>
            <RevealWrapper origin="top" duration={1500}>
              <p className="text-[0.8rem] font-light leading-loose px-8 italic">
                From when I first saw you, I felt that I was finally home, all I
                want is to make your dreams come true and share our dreams
                together.
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper origin="right" duration={1500}>
            <img
              src="/images/gallery/we.webp"
              alt="big-grid"
              className="w-full h-96 object-cover object-bottom cursor-pointer"
              onClick={() => setSelectedImage("/images/gallery/we.webp")}
            />
          </RevealWrapper>
          <RevealWrapper origin="top" duration={1500}>
            <div className="grid grid-cols-3 gap-1 mt-1">
              {images.slice(2).map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="h-32 object-cover w-full cursor-pointer"
                  onClick={() => setSelectedImage(img.src)}
                />
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={handleBackgroundClick}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}

export default Gallery;
