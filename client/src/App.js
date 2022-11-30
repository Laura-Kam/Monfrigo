import logo2 from "./logo.png";
import './App.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
      </header>
      <div className="homeContainer">
        <Home />
      </div>
    </div>
  );
}

export default App;
