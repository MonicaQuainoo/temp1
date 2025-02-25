import React from "react";
import SectionTitle from "./Common/SectionTitle";

const Mission = () => {
  return (
    <div className="space-y-10 overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]">
      <div className="container md:flex space-y-10 justify-center">
        <SectionTitle
          subtitle="Our Mission"
          title="What Drives Us"
          paragraph="To drive business excellence by providing innovative, practical, and sustainable solutions that transform small enterprises into industry leaders across Africa. With a focus on empowering growth, PrimePath works relentlessly to help businesses scale and succeed in an ever-evolving marketplace."
          center
        />
        <SectionTitle
          subtitle="Our Vision"
          title="What Inspires Us"
          paragraph="To be the premier consultancy partner for small and medium-sized businesses seeking to thrive and expand within Africa’s dynamic markets. We aim to empower businesses to scale, innovate, and lead, driving sustainable success across the continent."
          center
        />
      </div>
    </div>
  );
};

export default Mission;
