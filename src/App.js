import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import './assets/style/global.scss';
import syncIcon from './assets/img/arrows-rotate-solid.svg';

function App() {
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
    <div className="App">
      <Header />
      <section className="generate-password">
        <div>
          <input className="input-text" type="text" value={password} />
          <button className="button-transparent" onClick={() => generatePassword()}>
            <img src={syncIcon} alt="syncicon" />
          </button>
          <button onClick={() => copyClipboard()}>
            copy
          </button>
        </div>
        <div>
          <input type="checkbox" className="checkbox" name="vehicle1" value="A-Z" />
          <label for="vehicle1"> A - Z </label>
          <input type="checkbox" defaultChecked={true} className="checkbox" name="vehicle1" value="a-z" />
          <label for="vehicle1"> a - z </label>
          <input type="checkbox" id="number" className="checkbox" name="number" value="0-9" />
          <label for="number"> 0 - 9 </label>
        </div>
      </section>
      {/* <section className="who-password">
        <h1>What is a random password generator?</h1>
      </section> */}
      <Footer />
    </div>
  );
}

export default App;