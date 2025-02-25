import Breadcrumb from "@/components/Common/Breadcrumb";
import { url } from "inspector";
import React from "react";

const page = () => {
  return (
    <div>
      <Breadcrumb
        pageName="Business Diagnostics"
        differentPage={{
          name: "Services",
          url: "/services",
        }}
      />
    </div>
  );
};

export default page;
