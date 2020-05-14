import React, { Component, Fragment } from "react";
import Customer from "./Customers";
import api from "../apis/api";

class Product extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const products = await api.get("/products");
    this.setState({
      products: products.data,
    });
  }

  render() {
    const { products } = this.state;
    console.log('product')
    return (
      <Fragment>
        {products.map((product) => (
          <article key={product.id} className="product">
            <h2 className="product--name">{product.name}</h2>
            <Customer id={product.id} total={product.customers} />
          </article>
        ))}
      </Fragment>
    );
  }
}

export default Product;
