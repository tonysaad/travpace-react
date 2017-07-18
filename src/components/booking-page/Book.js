import React, { Component } from 'react';
import axios from "axios";
import PackageInfo from './PackageInfo';
import ChooseDate from './ChooseDate';
import RoomPrices from './RoomPrices';
import ChildrenNum from './ChildrenNum';
import Transportation from './Transportation';
import CustomerData from './CustomerData';
import PriceTotla from './PriceTotla';
import Sticky from 'react-sticky-el';
import {
  // BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom'

class Book extends Component {
    constructor(props) {
      super(props);
    this.state = {
      info:''
    };
  }

  componentDidMount() {
    document.body.classList.toggle('no-scroll', false)
    axios.get(`http://thebackendcrew.com:8888/deals-and-packages/${this.props.params.id}`).then(response => {
      this.setState({
        info:response.data
      })
    });
  }

  render() {
    if(this.state.info === ''){
      return null;
    }
    return (
      <div className="container">
        <form className="booking-content" >
          <div className="booking-form">
            <PackageInfo info={this.state.info}/>
            <ChooseDate />
            <RoomPrices />
            <ChildrenNum />
            <Transportation />
            <CustomerData />
          </div>
          <div className="price-total">
            <Sticky bottomOffset={80}>
              <PriceTotla />
            </Sticky>
          </div>
        </form>
      </div>
    );
  }
}

export default Book;
