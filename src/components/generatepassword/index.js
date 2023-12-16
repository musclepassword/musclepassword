import React, { useEffect, useState } from "react";
import syncIcon from '../../assets/image/rotate-right-solid.svg';
import copyIcon from '../../assets/image/copy-regular.svg';

function GeneratePassword() {
    const [charSet, setCharSet] = useState("");
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(15);

    useEffect(() => {
        generatePassword();
    }, [])

    const generatePassword = () => {
        const defaultChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';
        let retVal = "";
        for (var i = 0, n = defaultChar.length; i < length; ++i) {
            retVal += defaultChar.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText(password);
        console.log("Copied the text: " + password);
    }

    const charChange = (value) => {
        const charUpperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charNumberSet = "0123456789";
        const charCharacterSet = "!@#$%^&";
        value === "ABC" && setCharSet(charSet + charUpperCaseSet);
        value === "123" && setCharSet(charSet + charNumberSet);
        value === "#$&" && setCharSet(charSet + charCharacterSet);
    }

    return (
        <section className="generate-password">
            <h1>Strong random password generator</h1>
            <p>Generate strong passwords using random password generator</p>
            <div className="input-range">
                <label>Password Length: <b>{length}</b></label>
                <input
                    type="range"
                    onChange={(e) => { setLength(e.target.value) || setTimeout(() => generatePassword(), 0) }}
                    value={length}
                    min={4}
                />
            </div>
            <div className="input-password">
                <input className="input-text" type="text" value={password} />
                <button onClick={() => copyClipboard()}>
                    <img src={copyIcon} alt="copyicon" />
                </button>
                <button className="button-transparent" onClick={() => generatePassword()}>
                    <img src={syncIcon} alt="syncicon" />
                </button>
            </div>
            <div className="char-checkbox">
                <label for="uppercase">
                    <input type="checkbox" onClick={(e) => charChange(e.target.value)} defaultChecked={false} className="checkbox" id="uppercase" value="ABC" />
                    Uppercase </label>
                <label for="vehicle1">
                    <input type="checkbox" onClick={(e) => charChange(e.target.value)} defaultChecked={true} className="checkbox" id="vehicle1" value="abc" />
                    Lowercase </label>
                <label for="digits">
                    <input type="checkbox" onClick={(e) => charChange(e.target.value)} defaultChecked={true} className="checkbox" id="digits" value="123" />
                    Digits </label>
                <label for="symbols">
                    <input type="checkbox" onClick={(e) => charChange(e.target.value)} defaultChecked={true} className="checkbox" id="symbols" value="#$&" />
                    Symbols </label>
            </div>
        </section>
    );
}

export default GeneratePassword;