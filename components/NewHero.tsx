import Image from "next/image";
import React from "react";
import { PlayfulHeroSection } from "./PlayfulHeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const images = [
  "https://cms.flowautomate.io/uploads/Untitled_design_7c41492031.png",
  "https://cms.flowautomate.io/uploads/Untitled_design_7c41492031.png",
  "https://cms.flowautomate.io/uploads/Untitled_design_7c41492031.png",
];

const NewHero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:pb-10 sm:px-8 sm:py-20">
      <PlayfulHeroSection />

      {/* Image Grid for Desktop, Swiper for Mobile */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              width={300}
              height={400}
              className={`w-full h-auto rounded-[20px] mx-auto ${index === 1 ? "mt-10" : ""}`}
            />
          ))}
        </div>

        {/* Swiper Carousel for Mobile */}
        <div className="sm:hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.5}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            modules={[Pagination]}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-auto h-auto rounded-[20px] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Pagination Container */}
          <div className="swiper-pagination" />
        </div>
      </div>

      {/* Text and Button Section */}
      {/* <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
        <p className="text-lg max-w-xl text-center md:text-left">
          This is a demo paragraph describing the content. You can replace it
          with your actual text to provide more information.
        </p>
        <RainbowButton href="#" className="px-12 sm:px-24 py-7 font-bold">
          Get Started - Step 01
        </RainbowButton>
      </div> */}
    </div>
  );
};

export default NewHero;
