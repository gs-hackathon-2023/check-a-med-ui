import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MediConflict</title>
        <meta name="description" content="medications conflict" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/med.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
