import { Dropdown, Space } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const SelectLang = () => {

    const changeLang = (lang) => {
        localStorage.setItem('i18nextLng', lang);
        window.location.reload(true);
    }

    const selectLang = localStorage.getItem('i18nextLng') || 'tr-TR';
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
        <Dropdown menu={{ items: langMenu, selectedKeys: selectLang }} placement="bottomRight" arrow>
            <Space>
                <GlobalOutlined />
            </Space>
        </Dropdown>
    );
}

export default SelectLang;