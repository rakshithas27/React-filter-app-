import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Clock,FilterableProductTable} from './App';
import reportWebVitals from './reportWebVitals';


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99',stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99',stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99',stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99',stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99',stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99',stocked: true, name: 'Nexus 7'}
];

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterableProductTable products={PRODUCTS} />
  </React.StrictMode>
);*/


ReactDOM.render(
  <React.StrictMode>
    <div>
    <Clock />
    <FilterableProductTable products={PRODUCTS} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
