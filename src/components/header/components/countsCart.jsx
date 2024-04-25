import React, { useEffect, useState } from "react";
import "./countsCart.scss";
export default function CountsCart({ countItem }) {
  //console.log("CountCart",countItem)
  return <span className="counts">{countItem}</span>;
}
