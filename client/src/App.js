import logo2 from "./logo.png";
import './App.css';
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
      </header>
      <Home />
    </div>
  );
}

export default App;
