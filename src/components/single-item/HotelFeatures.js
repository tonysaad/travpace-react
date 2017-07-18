import React, { Component } from 'react';
import './SingleItem.css';

class HotelFeatures extends Component {
  render() {
    let features = this.props.features.map((feature) => {
      return(<li>{feature}</li>);
    
    })
    return (
      <div className="HotelFeatures">
        <h3>مميزا ت الفندق</h3>
        <ul>
          {features}
        </ul>
      </div>
    );
  }
}

export default HotelFeatures;
