import '@/styles/globals.scss';
import 'antd/dist/reset.css';
import { appWithTranslation } from 'next-i18next';
import '../../i18n';
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/loadingScreen";

function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setTimeout(() => setIsLoading(false), 500);
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener('load', handlePageLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);