import Footer from "./components/footer";
import Header from "./components/header";
import './assets/style/global.scss';
import syncIcon from './assets/img/arrows-rotate-solid.svg';

function App() {

  const generatePassword = () => {
    console.log("test");
  }

  const copyClipboard = () => {

  }

  return (
    <div className="App">
      <Header />
      <section className="generate-password">
        <input type="text" />
        <button onClick={() => generatePassword()}>
          <img src={syncIcon} alt="syncicon" />
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