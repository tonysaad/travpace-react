import React, { Component } from 'react';
import PackageInfo from './PackageInfo';
import ChooseDate from './ChooseDate';
import RoomPrices from './RoomPrices';
import ChildrenNum from './ChildrenNum';
import Transportation from './Transportation';
import CustomerData from './CustomerData';
import PriceTotla from './PriceTotla';
import Sticky from 'react-sticky-el';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Book extends Component {
  render() {
    return (
        <div className="container">
          <form className="booking-content" >
            <div className="booking-form">
              <PackageInfo/>
              <ChooseDate/>
              <RoomPrices/>
              <ChildrenNum/>
              <Transportation/>
              <CustomerData/>
            </div>
            <div className="price-total">
              <Sticky bottomOffset={80}>
                <PriceTotla/>
                </Sticky>
            </div>
          </form>
        </div>
    );
  }
}

export default Book;
