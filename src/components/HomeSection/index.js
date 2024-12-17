import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import GeneratePassword from '../GeneratePassword';

export default function HomeSection() {
    const { t, i18n } = useTranslation('common');

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         const storedLang = localStorage.getItem("i18nextLng");
    //         if (storedLang) {
    //             i18n.changeLanguage(storedLang); // İstemci tarafında dil değiştir
    //         }
    //     }
    // }, []);

    return (
        <section className="home-section">
            <div className="container">
                <article>
                    <h2>{t("Strong Random Password Generator")}</h2>
                    <h3>{t("Generate strong passwords using random password generator")}</h3>
                </article>
                <GeneratePassword />
            </div>
        </section>
    );
}
