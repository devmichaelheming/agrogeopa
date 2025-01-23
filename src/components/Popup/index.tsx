import whatsappAnimationData from "~/assets/animated/whatsapp.json";
import { messageWhatsapp } from "~/lib/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

import S from "./styles";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LottieComponent = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const Popup: FC = (): ReactElement => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: whatsappAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.Container>
      <Link passHref href={messageWhatsapp} target="_blank">
        <LottieComponent
          options={defaultOptions}
          height={100}
          width={100}
          style={{ animationDelay: "1s" }}
        />
      </Link>
    </S.Container>
  );
};

export default Popup;
