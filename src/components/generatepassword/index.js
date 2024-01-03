import React, { useEffect, useState } from "react";
import syncIcon from '../../assets/image/rotate-right-solid.svg';
import copyIcon from '../../assets/image/copy-regular.svg';

function GeneratePassword() {
    const [char, setChar] = useState("");
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(15);

    const checkBoxList = [
        { name: 'Uppercase', value: 'ABC', default: true, character: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
        { name: 'Lowercase', value: 'abc', default: true, character: 'abcdefghijklmnopqrstuvwxyz' },
        { name: 'Digits', value: '123', default: true, character: '0123456789' },
        { name: 'Symbols', value: '#$&', default: false, character: '!@#$%^&*()+_-=}{[]|:;"/?.><,`~' },
    ];

    useEffect(() => {
        charChange();
        generatePassword();
    }, [])

    const generatePassword = (e) => {
        setLength(e ? e : length);

        let retVal = "";
        for (var i = 0, n = char.length; i < length; ++i) {
            retVal += char.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText(password);
        console.log("Copied the text: " + password);
    }

    const charChange = (value, checked) => {
        // console.log(value, checked);
        let charts = '';
        checkBoxList.map(item => {
            if (item.value == value || item.default) {
                charts = charts + item.character;
            }
        });
        console.log(charts);
        setChar(charts);
    }

    // console.log("charts: ", char);

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
                                onClick={(e) => charChange(e.target.value, e.target.checked)}
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