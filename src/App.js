import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GeneratePassword from "./components/GeneratePassword";
import About from "./components/About";
import Contact from "./components/Contact";
import './assets/style/global.scss';

function App() {
  return (
    <>
      <Header />
      <GeneratePassword />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;