import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import './assets/style/global.scss';
import syncIcon from './assets/img/arrows-rotate-solid.svg';

function App() {
  const [charSet, setcharSet] = useState("abcdefghijklmnopqrstuvwxyz");
  const [password, setPassword] = useState("");

  useEffect(()=> {
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
        <input type="text" value={password} />
        <button className="button-transparent" onClick={() => generatePassword()}>
          <img src={syncIcon} alt="syncicon" />
        </button>
        <button onClick={() => copyClipboard()}>
          copy
        </button>
      </section>
      <section className="who-password">
        <h1>What is a random password generator?</h1>
      </section>
      <Footer />
    </div>
  );
}

export default App;