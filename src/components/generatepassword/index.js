import React, { useEffect, useState } from "react";
import syncIcon from '../../assets/img/arrows-rotate-solid.svg';
import copyIcon from '../../assets/img/copy-solid.svg';

function GeneratePassword() {
    const [charSet, setcharSet] = useState("abcdefghijklmnopqrstuvwxyz");
    const [password, setPassword] = useState("");

    useEffect(() => {
        generatePassword();
    }, [])

    const generatePassword = () => {
        let length = 10;
        const charSet = "abcdefghijklmnopqrstuvwxyz";
        const charUpperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charNumberSet = "0123456789";
        const charCharacterSet = "!@#$%^&";
        let retVal = "";
        // id ? (length = id) : length = parseInt(range.value);
        for (var i = 0, n = charSet.length; i < length; ++i) {
            retVal += charSet.charAt(Math.floor(Math.random() * n));
        }
        setPassword(retVal);
    }

    const copyClipboard = () => {
        navigator.clipboard.writeText(password);
        console.log("Copied the text: " + password);
    }

    return (
        <section className="generate-password">
            <div>
                <input className="input-text" type="text" value={password} />
                <button className="button-transparent" onClick={() => generatePassword()}>
                    <img src={syncIcon} alt="syncicon" />
                </button>
                <button onClick={() => copyClipboard()}>
                    <img src={copyIcon} alt="copyicon" />
                </button>
            </div>
            <div>
                <input type="checkbox" className="checkbox" name="vehicle1" value="ABC" />
                <label for="vehicle1"> Uppercase ABC </label>
                <br />
                <input type="checkbox" defaultChecked={true} className="checkbox" name="vehicle1" value="abc" />
                <label for="vehicle1"> Lowercase abc </label>
                <br />
                <input type="checkbox" id="number" className="checkbox" name="number" value="123" />
                <label for="number"> Digits 123 </label>
                <br />
                <input type="checkbox" id="number" className="checkbox" name="number" value="#$&" />
                <label for="number"> Symbols #$& </label>
            </div>
        </section>
    );
}

export default GeneratePassword;