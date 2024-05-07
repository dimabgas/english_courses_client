import React from "react";
import { Header } from "@/components/blocks";

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
