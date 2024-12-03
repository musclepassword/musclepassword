import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

export default function HomeSection() {
  // const { t } = useTranslation("common");

  return (
    <section className="home-section">
        <article>
            <h2>Strong Random Password Generator</h2>
            <p>Generate strong passwords using random password generator</p>
            {i18n.t("welcome")}
        </article>
    </section>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: await serverSideTranslations(locale, ['common'])
  }
}