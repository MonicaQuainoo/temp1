import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Pricing Page | Play SaaS Starter Kit and Boilerplate for Next.js",
  description: "This is pricing page description",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Services" />
      <Features />
    </>
  );
};

export default PricingPage;
