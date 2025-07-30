"use client";

import { ISliderImage } from "@/types/type";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface SliderProps {
  images: ISliderImage[];
}
function Slider({ images }: SliderProps) {
  return (
    <div className="w-full min-h-[200px]">
      <Swiper
        dir="ltr"
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="p-2 bg-gray-200 rounded-xl w-full">
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-48 object-cover rounded block"
                onError={() =>
                  console.log(`Failed to load image: ${image.src}`)
                }
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
