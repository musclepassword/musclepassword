import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const getStaticProps = async ({ locale }) => {
  console.log(locale);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale, // Server'dan gelen locale
    },
  };
};

export default function Test({ locale: serverLocale }) {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const { locale: queryLocale } = router.query;
  console.log(queryLocale);

  useEffect(() => {
    // Query parametresindeki locale değerini kullan
    const currentLocale = queryLocale || serverLocale;

    // Eğer i18n'deki dil, query'deki locale ile aynı değilse değiştir
    if (currentLocale && i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale);
    }
  }, [queryLocale, serverLocale, i18n]);

  return (
    <>
      <h1>{t('Add to Chrome')}</h1>
      <p>{t('home')}</p>
    </>
  );
}
