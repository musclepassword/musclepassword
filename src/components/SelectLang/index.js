import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function SelectLang() {
    const [lang, setLang] = useState(null);
    const router = useRouter();
    const { locale } = router;

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage) {
            const storedLang = localStorage.getItem("i18nextLng");
            setLang(storedLang || "en-US");
        }
    }, [lang]);

    const changeLanguage = (newLocale) => {
        router.push(router.pathname, router.asPath, { locale: newLocale });
        localStorage.setItem('i18nextLng', newLocale);
        setLang(newLocale);
    };

    const languageLabels = [
        { key: 'tr-TR', value: 'Türkçe' },
        { key: 'en-US', value: 'English' }
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
        <Dropdown menu={{ items: langMenu, selectedKeys: lang }} placement="bottomRight" arrow>
            <Button style={{ color: 'white' }} type='link' shape='round' size='large'>
                {lang?.substr(0, 2).toLocaleUpperCase()}<GlobalOutlined />
            </Button>
        </Dropdown>
    )
}