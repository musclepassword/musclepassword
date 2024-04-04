import SelectLang from "../SelectLang";

const Header = () => {

    return (
        <div className="container">
            <header>
                <div className="logo">
                    Muscle Password
                </div>
                <SelectLang />
            </header>
        </div>
    );
}

export default Header;