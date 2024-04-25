import React from "react";
import dataOrg from "./schemaorg.json";
import dataLocal from "./schemalocal.json";
import { Helmet } from "react-helmet-async";

export default function SchemaOrg() {
  const dataSchema = JSON.stringify(dataOrg);
  //console.log(dataSchema);
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(dataOrg)}</script>
        <script type="application/ld+json">{JSON.stringify(dataLocal)}</script>
      </Helmet>
    </>
  );
}
