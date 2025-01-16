import '@/styles/globals.scss';
import 'antd/dist/reset.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';

const emptyInitialI18NextConfig = {
  i18n: {
    defaultLocale: nextI18NextConfig.i18n.defaultLocale,
    locales: nextI18NextConfig.i18n.locales,
  },
};

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, emptyInitialI18NextConfig);