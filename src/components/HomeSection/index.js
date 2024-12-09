import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import GeneratePassword from '../GeneratePassword';

export default function HomeSection() {
    const { t, i18n } = useTranslation('common');
    const [lang, setLang] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedLang = localStorage.getItem("i18nextLng");
            if (storedLang) {
                i18n.changeLanguage(storedLang); // İstemci tarafında dil değiştir
                setLang(storedLang);
            }
        }
    }, []);

    if (!lang) {
        return <div>Loading...</div>; // Dil yüklenene kadar bir yükleme durumu göster
    }

    return (
        <section className="home-section">
            <div className="container">
                <article>
                    <h2>{t("Strong Random Password Generator")}</h2>
                    <p>{t("Generate strong passwords using random password generator")}</p>
                </article>
                <GeneratePassword />
            </div>
        </section>
    );
}
