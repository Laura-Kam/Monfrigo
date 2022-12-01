import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import About from "./components/Endpoints/About";
import Contact from "./components/Endpoints/Contact";
import SavedRecipes from "./components/Endpoints/SavedRecipes";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          {/* <div className="container"> */}
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/recipes" element={<SavedRecipes />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          {/* </div> */}
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
