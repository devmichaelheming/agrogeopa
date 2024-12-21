import Banner from "~/components/Sections/Banner";
import Benefits from "~/components/Sections/Benefits";
import CarouselComponent from "~/components/Sections/CarouselComponent";
import React, { FC, ReactElement } from "react";

const pages: FC = (): ReactElement => {
  return (
    <>
      <Banner />

      <CarouselComponent />

      <Benefits />
    </>
  );
};

export default pages;
