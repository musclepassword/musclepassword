import SelectLang from "../SelectLang";
import Logo from "../../assets/image/musclepassword-logo.png"

const Header = () => {

    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src={Logo} alt="logo" /><h1><b>Muscle</b> <span>Password</span></h1>
                </div>
                <SelectLang />
            </header>
        </div>
    );
}

export default Header;