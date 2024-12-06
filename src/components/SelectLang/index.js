import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import i18n from '../../i18n';

export default function SelectLang() {
    const [lang, setLang] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined" && localStorage) {
            const storedLang = localStorage.getItem("i18nextLng") || "en";
            setLang(storedLang);
            i18n.changeLanguage(storedLang);
        }
    }, []);

    const changeLanguage = (newLocale) => {
        localStorage.setItem('i18nextLng', newLocale);
        setLang(newLocale);
        i18n.changeLanguage(newLocale);
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
                {lang?.toLocaleUpperCase()} <GlobalOutlined />
            </Button>
        </Dropdown>
    );
}