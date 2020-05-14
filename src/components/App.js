import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Product from "./Product";
import { SearchProvider } from "../contexts/search";

class App extends Component {
  state = {
    search: "",
  };

  handleSearch = (data) => {
    this.setState({
      search: data,
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="container">
        <SearchBar search={this.handleSearch} />
        <section id="products-container" className="products">
          <SearchProvider value={search}>
            <Product />
          </SearchProvider>
        </section>
      </div>
    );
  }
}



export default App;
