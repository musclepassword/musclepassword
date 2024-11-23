import SelectLang from "../SelectLang";
import Logo from "../../assets/image/musclepassword-logo.png"
import { ChromeOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";

const Header = () => {
    const { i18n } = useTranslation();

    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span>
                        <h1><span>MUSCLE</span><br /> PASSWORD</h1>
                    </span>
                </div>
                <div>
                    <a href={'https://chromewebstore.google.com/detail/muscle-password/iimjcckbcjoehbfekigjpnlgmjllmgdk'} target="_blank">
                    {i18n.t('add_to_chrome')} <ChromeOutlined />{' '}</a>
                    <SelectLang />
                </div>
            </header>
        </div>
    );
}

export default Header;