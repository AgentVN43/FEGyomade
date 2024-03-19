import React from "react";
import Header from "../../components/header";
import SimpleSlider from "../../components/slider";
import IconBox from "../../components/iconbox";
import Footer from "../../components/footer";
import Preloader from "../../components/preloader";

export default function Home() {
  return (
    <>
      <Preloader/>
      <Header />
      <SimpleSlider />
      <IconBox/>
      <Footer/>
    </>
  );
}
