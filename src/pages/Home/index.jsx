import React from "react";
import Header from "../../components/header";
import SimpleSlider from "../../components/slider";
import IconBox from "../../components/iconbox";
import Footer from "../../components/footer";
import Preloader from "../../components/preloader";
import Category from "../../components/category";
import FeaturedItem from "../../components/featuredItem";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <SimpleSlider />
      <IconBox />
      <Category />
      <FeaturedItem />
      
      <Footer />
    </>
  );
}
