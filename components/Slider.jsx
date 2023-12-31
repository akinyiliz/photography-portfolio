import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

import slides from "@/lib/slides";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

const Slider = () => {
  return (
    <div id="gallery" className="max-w-[1240px] h-3/4 mx-auto mb-4">
      <h1 className="text-4xl font-bold text-center p-4">Gallery</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ type: "fraction" }}
        className="max-w-4xl mx-auto h-96 md:h-[500px] rounded-xl "
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full flex items-center justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                priority
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
