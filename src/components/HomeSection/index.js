import { useTranslation } from 'react-i18next';

export default function HomeSection() {
  const { t } = useTranslation('common');

  return (
    <section className="home-section">
        <article>
            <h2>Strong Random Password Generator</h2>
            <p>Generate strong passwords using random password generator</p>
            {t("welcome")}
        </article>
    </section>
  );
};