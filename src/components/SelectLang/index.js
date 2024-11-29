import { Dropdown, Button } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

export default function SelectLang() {

    const changeLang = (lang) => {
    };

    // const selectLang = localStorage.getItem('i18nextLng') || 'tr-TR';
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
            onClick: () => changeLang(locale.key)
        }
    ));

    return (
        <Dropdown menu={{ items: langMenu, selectedKeys: 'tr-TR' }} placement="bottomRight" arrow>
            <Button style={{ color: 'white' }} type='link' shape='round' size='large'>
                {'tr-TR'.substr(0, 2).toLocaleUpperCase()}<GlobalOutlined />
            </Button>
        </Dropdown>
    )
}