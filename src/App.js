import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import GeneratePassword from "./components/generatepassword";
import AboutGeneratePassword from "./components/aboutgeneratepassword";
import './assets/style/global.scss';
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Header />
      <GeneratePassword />
      <AboutGeneratePassword />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;