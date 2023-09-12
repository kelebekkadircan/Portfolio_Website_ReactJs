import { Fragment, useContext } from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
// import { ThemeProvider } from './context';
import { ThemeContext } from './context.js'

function App() {

  const theme = useContext(ThemeContext)

  const darkMode = theme.state.darkMode;



  return (
    <>
      <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode ? "white" : "black" }}>

        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />

      </div>

    </>
  );
}

export default App;
