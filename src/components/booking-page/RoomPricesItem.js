import React, { Component } from 'react';

class RoomPricesItem extends Component {
  render() {
    return (

  <div className="select-item select-item-rooms">
    <div className="room-type">
      <img src="/img/icons/single-room.png" alt="single-room"/>
      <div>
          <h5>للغرفة فردية المميزة</h5>
          <p>مطلة علي حمام السبحة</p>
      </div>
    </div>
    <div className="sale-widget">
      <img src="/img/icons/percentage.png" alt="percentage"/>
      <div>
        <span>خصم ٢٥٪</span>
        <p><del>1,400</del>جنيه</p>
      </div>
    </div>
    <div className="price">
      <h3>3,456</h3>
      <span>جنيه</span>
    </div>
    <div className="select-sec">
      <select name="room-num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  </div>

    );
  }
}

export default RoomPricesItem;
