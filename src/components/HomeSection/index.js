import { useEffect, useState } from 'react';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';

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
            <article>
                <h2>Strong Random Password Generator</h2>
                <p>Generate strong passwords using random password generator</p>
                <p>{t("welcome")}</p>
            </article>
        </section>
    );
}
