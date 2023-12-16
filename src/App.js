import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import GeneratePassword from "./components/generatepassword";
import About from "./components/about";
import './assets/style/global.scss';
import Contact from "./components/contact";

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