import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="homeContainer">
        <Header />
        <NavBar />
        <Home />
        <SignUp />
        <Footer />
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
