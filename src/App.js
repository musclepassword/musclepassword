import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GeneratePassword from "./components/GeneratePassword";
import About from "./components/About";
import Contact from "./components/Contact";
import ChromeExtension from "./components/ChromeExt";
import './assets/style/global.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <GeneratePassword />
      <About />
      <ChromeExtension />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;