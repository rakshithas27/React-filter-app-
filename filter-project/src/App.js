//import logo from './logo.svg';
import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {date: new Date()}
  }

  tick() {
    this.setState({date: new Date()});
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return(
      <div>
        <h3>A Small React Project!</h3>
        <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
      </div>
    )
  }
}

export {Clock};


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2'>
          {category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? 
      product.name : 
      <span style={{color: 'red'}}>
        {product.name}
      </span>;
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      )
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if(product.name.indexOf(filterText) === -1) {
        return;
      }
      if(inStockOnly && !product.stocked) {
        return;
      }
      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category = {product.category}
            key = {product.category} />
        )
      }

      rows.push(
        <ProductRow 
          product = {product}
          key = {product.name} />
      )
      lastCategory = product.category;
    });
    return (
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thread>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked)
  }

  render() {
    return (
      <form>
        <input type="text" 
        placeholder='Search..' 
        value={this.props.filterText} 
        onChange={this.handleFilterTextChange} />
        <p>
          <input type='checkbox' 
          checked={this.props.inStockOnly} 
          onChange={this.handleInStockChange} />
          {' '}
          Only Show products in Stock.
        </p>
      </form>
    )
  }   
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return(
      <div>
        <SearchBar filterText = {this.state.filterText}
              inStockOnly = {this.state.inStockOnly}
              onFilterTextChange = {this.handleFilterTextChange}
              onInStockChange = {this.handleInStockChange}>
        </SearchBar>

        <ProductTable products = {this.props.products}
              filterText = {this.state.filterText}
              inStockOnly = {this.state.inStockOnly}>
        </ProductTable>
      </div>
    )
  }
}

export {FilterableProductTable};

