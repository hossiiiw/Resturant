"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import FoodItem from "../components/FoodItem";
function FoodHomeViews() {
  return (
    <div
      dir="ltr"
      style={{ width: "100%", padding: "20px" }}
      className="bg-gray-100 my-12 rounded "
    >
      <div className="flex my6">
        <h2 className="text-2xl font-bold mx-auto">Suggestion Food</h2>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1, // موبایل
          },
          640: {
            slidesPerView: 2, // گوشی‌های بزرگ
          },
          768: {
            slidesPerView: 3, // تبلت
          },
          1024: {
            slidesPerView: 3, // دسکتاپ
          },
          1200: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 6,
          },
        }}
      >
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
        <SwiperSlide>
          <FoodItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FoodHomeViews;
