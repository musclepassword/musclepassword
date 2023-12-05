import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import GeneratePassword from "./components/generatepassword";
import AboutGeneratePassword from "./components/aboutgeneratepassword";
import './assets/style/global.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <GeneratePassword />
      <AboutGeneratePassword />
      <Footer />
    </div>
  );
}

export default App;