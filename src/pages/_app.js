import '@/styles/globals.scss';
import 'antd/dist/reset.css';
import nextI18nextConfig from '../../next-i18next.config';
import { appWithTranslation } from 'next-i18next';
import '../../i18n';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, nextI18nextConfig);