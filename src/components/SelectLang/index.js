import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SelectLang() {
    const [lang, setLang] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage) {
            const storedLang = localStorage.getItem("i18nextLng") || "en";
            setLang(storedLang);
            router.push(router.pathname, router.asPath, { storedLang });
        }
    }, []);

    const changeLanguage = (locale) => {
        localStorage.setItem('i18nextLng', locale);
        router.push(router.pathname, router.asPath, { locale });
        setLang(locale);
    }

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
                {lang?.toLocaleUpperCase()} <GlobalOutlined />
            </Button>
        </Dropdown>
    );
}