import { Fragment } from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <Fragment>
      <div>
        <Intro />
        <About />
        <ProductList />
      </div>

    </Fragment>
  );
}

export default App;
