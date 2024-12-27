import { useTranslation } from 'next-i18next';
import GeneratePassword from '../generatepassword';

export default function HomeSection() {
  const { t } = useTranslation("common");

  return (
    <section className="home-section">
      <div className="container">
        <article>
          <h2>{t("Strong Random Password Generator")}</h2>
          <h3>
            {t("Generate strong passwords using random password generator")}
          </h3>
        </article>
        <GeneratePassword />
      </div>
    </section>
  );
}
