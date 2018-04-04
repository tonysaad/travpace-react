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
        info:'',
        isActive: false
      };
  }

  componentDidMount() {
    document.body.classList.toggle('no-scroll', false)
    axios.get(`http://thebackendcrew.com:8004/deals-and-packages/${this.props.params.id}`).then(response => {
      this.setState({
        info:response.data,
      })
    });
  }


    toggleClasses = ()=>{
        // document.body.classList.toggle('no-scroll', !this.state.isActive);
        this.setState({isActive: !this.state.isActive});
    }

  render() {
    if(this.state.info === ''){
      return null;
    }
        let priceClass = (this.state.isActive)? "active" : "test";
    return (
      <div className="container">
        <form className="booking-content" >
          <div className="booking-form">
            <PackageInfo info={this.state.info}/>
            <ChooseDate days={this.state.info.days} />
            <RoomPrices />
            <ChildrenNum />
            <Transportation />
            <CustomerData />
          </div>
          <div className="price-total">
            <Sticky bottomOffset={80}>
              <PriceTotla onClick={()=>{this.toggleClasses()}} className={priceClass}/>
            </Sticky>
          </div>
        </form>
      </div>
    );
  }
}

export default Book;
