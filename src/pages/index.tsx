import Banner from "~/components/Sections/Banner";
import Benefits from "~/components/Sections/Benefits";
import CarouselComponent from "~/components/Sections/CarouselComponent";
import InfoDrones from "~/components/Sections/InfoDrones";
import React, { FC, ReactElement } from "react";

const pages: FC = (): ReactElement => {
  return (
    <>
      <Banner />

      <CarouselComponent />

      <Benefits />

      <InfoDrones />
    </>
  );
};

export default pages;
