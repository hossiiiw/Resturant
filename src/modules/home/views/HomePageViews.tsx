import React from "react";
import Slider from "../components/Slider";
import axios from "axios";
import { ISliderImage } from "@/types/type";
import db from "./../../../data/db.json";
import FoodHomeViews from "@/modules/food/views/FoodHomeViews";

async function HomePageViews() {
  // const sliderImages = await axios
  //   .get<ISliderImage[]>("http://localhost:3001/slider")
  //   .then((res) => {
  //     return res.data;
  //   });

  const sliderImages = db.slider;

  return (
    <div>
      <Slider images={sliderImages} />
      <FoodHomeViews />
    </div>
  );
}

export default HomePageViews;
