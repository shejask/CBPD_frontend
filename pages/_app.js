import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/animate.css'
import "../styles/icomoon.css";
import '../styles/sass/style.scss'
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>CBPD</title>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/favicon.ico" />
        <meta name="description" content="CBPD - Central Board of Professional Development" />
      </Head>
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
