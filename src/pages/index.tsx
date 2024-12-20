import Banner from "~/components/Sections/Banner";
import CarouselComponent from "~/components/Sections/CarouselComponent";
import React, { FC, ReactElement } from "react";

const pages: FC = (): ReactElement => {
  return (
    <>
      <Banner />

      <CarouselComponent />
    </>
  );
};

export default pages;
