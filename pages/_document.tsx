import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// import { isrtllang } from "../src/utils";

const MyDocument = ({ lang }: { lang: string }) => {
  // let isRtl = isrtllang(lang);
  return (
    <Html
      lang={lang.length > 0 ? lang : "en"}
      dir={lang == "ar" ? "rtl" : "ltr"}
    >
      <Head>
        <meta name="theme-color" content="#FC271C" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <meta name="google-adsense-account" content="ca-pub-7391414384206267" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  const path = ctx.asPath;
  let lang = "en"; // default language
  if (path && path.startsWith("/ar")) {
    lang = "ar";
  } else if (path && path.startsWith("/es")) {
    lang = "es";
  } else if (path && path.startsWith("/fr")) {
    lang = "fr";
  } else if (path && path.startsWith("/hi")) {
    lang = "hi";
  } else if (path && path.startsWith("/zh")) {
    lang = "zh";
  }
  return {
    ...initialProps,
    lang,
  };
};

export default MyDocument;
