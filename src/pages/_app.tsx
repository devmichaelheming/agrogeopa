import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
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
