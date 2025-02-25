import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import servicesData from "./serviceData";

const Features = () => {
  return (
    <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Services"
          title="Main Services We Offer"
          paragraph="We offer a range of tailored services designed to help businesses grow, from strategic consultancy to operational support."
          center
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {servicesData.map((service, i) => (
            <SingleFeature key={i} feature={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
