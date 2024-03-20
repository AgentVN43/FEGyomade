import React from "react";
import Category from "../../components/category";
import Collection from "../../components/collection";
import FeaturedItem from "../../components/featuredItem";
import IconBox from "../../components/iconbox";
import MovingSlider from "../../components/movingSlider";
import SimpleSlider from "../../components/slider";

export default function Home() {
  return (
    <>
      <SimpleSlider />
      <IconBox />
      <Category />
      <FeaturedItem />
      <MovingSlider />
      <Collection />
    </>
  );
}
