import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ReactElement } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "antd/dist/antd.css";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ConfigProvider locale={ptBR}>
      <StyleProvider hashPriority="high" ssrInline>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16466624959"
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16466624959');
            `,
          }}
        />
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  );
};

export default MyApp;
