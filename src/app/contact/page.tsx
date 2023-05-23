import React from "react";
import PageHeader from "@/components/UI/PageHeader";

export const metadata = {
  title: "Contact Me",
  description: "Zeyad essam's contact page",
};

const ContactPage = () => {
  return (
    <>
      <PageHeader
        links={[{ text: "Home", href: "/" }]}
        activeLink="Contact"
        pageTitle="Contact Me"
      />
    </>
  );
};

export default ContactPage;
