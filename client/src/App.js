import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import About from "./components/Endpoints/About";
import Contact from "./components/Endpoints/Contact";
import SavedRecipes from "./components/Endpoints/SavedRecipes";

import LogOutMessage from "./components/Endpoints/LogOutMessage";

import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#56965c",
    },
    secondary: {
      main: "#cf4a72",
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
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
              <Route path="/logout" element={<LogOutMessage />} />
            </Routes>
            {/* </div> */}
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
