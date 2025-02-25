import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <Breadcrumb
        pageName="Financial Management"
        differentPage={{
          name: "Services",
          url: "/services",
        }}
      />
    </div>
  );
};

export default page;
