import React from "react";
import Slider from "../components/Slider";
import axios from "axios";
import { ISliderImage } from "@/types/type";


async function HomePageViews() {
  const sliderImages = await axios
    .get<ISliderImage>("http://localhost:3001/slider")
    .then((res) => {
      return res.data;
    });

  return (
    <div >
      <Slider images={sliderImages} />
    </div>
  );
}

export default HomePageViews;
