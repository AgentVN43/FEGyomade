import React from "react";
import logoimg from "../../../assets/img/logogyomade.png";


export default function Logo() {
  return (
    <>
      <div className="cs_main_header_left">
        <a className="cs_site_branding" href="index.html">
          <img src={logoimg} alt="Logo3" />
        </a>
      </div>
    </>
  );
}
