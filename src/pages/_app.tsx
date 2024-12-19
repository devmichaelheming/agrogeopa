import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "antd/dist/antd.css";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ConfigProvider locale={ptBR}>
      <StyleProvider hashPriority="high" ssrInline>
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  );
};

export default MyApp;
