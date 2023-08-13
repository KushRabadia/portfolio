import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Kush Rabadia</title>

        <link href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;1,300&display=swap" rel="stylesheet"></link>

        <link rel="stylesheet" href="css/basic.css" />
        <link rel="stylesheet" href="css/layout.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/jarallax.css" />
        <link rel="stylesheet" href="css/swiper.css" />
        <link rel="stylesheet" href="css/fontawesome.css" />
        <link rel="stylesheet" href="css/brands.css" />
        <link rel="stylesheet" href="css/solid.css" />
        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
