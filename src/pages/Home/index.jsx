import React from "react";
import Header from "../../components/header";
import SimpleSlider from "../../components/slider";
import IconBox from "../../components/iconbox";

export default function Home() {
  return (
    <>
      {/* <Preloader/> */}
      <Header />
      <SimpleSlider />
      <IconBox/>
    </>
  );
}
