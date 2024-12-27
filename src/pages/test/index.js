import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function TestPage() {
  const { t } = useTranslation('common');

  return (
    <div>
      <p>{t('Generate Password')}</p>
    </div>
  );
}