import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import i18n from '../../i18n';

export default function SelectLang() {
    const [lang, setLang] = useState(null);
    const router = useRouter();
    const { locale } = router;

    // Tarayıcıda kayıtlı dili veya varsayılan dili al
    useEffect(() => {
        if (typeof window !== "undefined" && localStorage) {
            const storedLang = localStorage.getItem("i18nextLng") || "en";
            setLang(storedLang);
            i18n.changeLanguage(storedLang); // Sayfa yüklendiğinde i18n dilini ayarla
        }
    }, []);

    const changeLanguage = (newLocale) => {
        localStorage.setItem('i18nextLng', newLocale); // Yeni dili kaydet
        setLang(newLocale); // State'i güncelle
        i18n.changeLanguage(newLocale); // i18n dilini değiştir
    };

    const languageLabels = [
        { key: 'tr', value: 'Türkçe' },
        { key: 'en', value: 'English' }
    ];

    const langMenu = languageLabels.map(locale => (
        {
            key: locale.key,
            label: (
                locale.value
            ),
            onClick: () => changeLanguage(locale.key)
        }
    ));

    return (
        <Dropdown menu={{ items: langMenu, selectedKeys: [lang] }} placement="bottomRight" arrow>
            <Button style={{ color: 'white' }} type='link' shape='round' size='large'>
                {lang?.substr(0, 2).toLocaleUpperCase()} <GlobalOutlined />
            </Button>
        </Dropdown>
    );
}