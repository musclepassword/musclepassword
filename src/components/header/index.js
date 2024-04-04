import { Dropdown } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

const Header = () => {

    const selectLang = (lang) => {
        localStorage.setItem('i18n', lang);
        window.location.reload(true);
    }

    const langMenu = [
        {
            key: 'TR',
            label: (
                'Türkçe'
            ),
            onClick: () => selectLang('TR')
        },
        {
            key: 'EN',
            label: (
                'İngilizce'
            ),
            onClick: () => selectLang('EN')
        }
    ];

    return (
        <div className="container">
            <header>
                <div className="logo">
                    Muscle Password
                </div>
                <Dropdown menu={{ items: langMenu, selectedKeys: localStorage.getItem('i18n') }} placement="bottomRight" arrow>
                    <GlobalOutlined />
                </Dropdown>
            </header>
        </div>
    );
}

export default Header;