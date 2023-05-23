import PageHeader from "@/components/UI/PageHeader";
import React from "react";

export const metadata = {
  title: "About Me",
  description: "Zeyad essam's about me page",
};

const AboutMePage = () => {
  return (
    <>
      <PageHeader
        links={[{ text: "Home", href: "/" }]}
        activeLink="About"
        pageTitle="About Me"
      />
    </>
  );
};

export default AboutMePage;
