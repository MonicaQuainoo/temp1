import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Page | PrimePath",
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" differentPage={{
        name: 'Home',
        url: '/'
      }}/>
      <NotFound />
    </>
  );
};

export default ErrorPage;
