import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="homeContainer">
        <Header />
        <NavBar />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
