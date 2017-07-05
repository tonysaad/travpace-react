import React, { Component } from 'react';
import RoomPricesItem from './RoomPricesItem';
import './booking-page.css';
var listroom =[
  <RoomPricesItem/>,
  <RoomPricesItem/>,
  <RoomPricesItem/>,
];
class RoomPrices extends Component {
  render() {
    return (

        <div className="RoomPrices">
          <div className="booking-small-head">
            <h3>أختار عدد ونوع الغرف الفندقية</h3>
            <span>الأسعار الموضحة شاملة جميع ليالي الأقامة</span>
          </div>
          <div className="booking-text-content">
            {listroom}
          </div>
        </div>

    );
  }
}

export default RoomPrices;
