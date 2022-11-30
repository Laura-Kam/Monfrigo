import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>header</h1>
      </header>

      <div className="homeContainer">
        <Header />
        <Home />
      </div>

      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}

export default App;
