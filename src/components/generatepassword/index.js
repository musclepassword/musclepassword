import React, { useEffect, useState } from "react";
import syncIcon from '../../assets/image/rotate-right-solid.svg';
import copyIcon from '../../assets/image/copy-regular.svg';

function GeneratePassword() {
    const [charSet, setCharSet] = useState("");
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(15);

    const checkBoxList = [
        { name: 'Uppercase', value: 'ABC', default: true },
        { name: 'Lowercase', value: 'abc', default: false },
        { name: 'Digits', value: '123', default: true },
        { name: 'Symbols', value: '#$&', default: false },
    ];

    useEffect(() => {
        generatePassword();
    }, [])

    const generatePassword = (e) => {
        setLength(e ? e : length);

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
                    onChange={(e) => generatePassword(e.target.value)}
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
                {checkBoxList.map(item => {
                    return (
                        <label>
                            <input
                                type="checkbox"
                                onClick={(e) => charChange(e.target.value)}
                                defaultChecked={item.default}
                                className="checkbox"
                                value={item.value}
                            />
                            {item.name}
                        </label>
                    )
                })}
            </div>
        </section>
    );
}

export default GeneratePassword;