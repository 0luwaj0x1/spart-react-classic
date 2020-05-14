import React, { Component } from "react";
import PropTypes from "prop-types";
import CustomerItem from "./CustomerItem";
import api from "../apis/api";
import { SearchConsumer } from "../contexts/search";

class Customer extends Component {
  state = {
    customers: [],
  };

  componentDidMount() {
    this.fetchCustomers();

    this.timerID = setInterval(() => this.fetchCustomers(), 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  fetchCustomers = async () => {
    const customers = await api.get(
      `/products/${this.props.id}?offset=0&limit=5`
    );
    this.setState({
      customers: customers.data.customers,
    });
  };

  render() {
    const { customers } = this.state;
    return (
      <SearchConsumer>
        {(search) => (
          <div>
            <ul className="customers">
              {customers
                .filter((customer) =>
                  customer.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((customer) => (
                  <CustomerItem key={customer.id} customer={customer} />
                ))}
            </ul>
          </div>
        )}
      </SearchConsumer>
    );
  }
}

Customer.propTypes = {
  id: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default Customer;
