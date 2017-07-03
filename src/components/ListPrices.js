import React, { Component } from 'react';

class ListPrices extends Component {
  render() {
    return (
                <li>
                    <div className="room-type">
                        <img src="/img/icons/single-room.png" alt="single-room"/>
                        <div>
                            <h5>للغرفة فردية المميزة</h5>
                            <p>مطلة علي حمام السبحة</p>
                        </div>
                    </div>
                    <div className="price">
                        <span>جنيه</span>
                        <h3>3,456</h3>
                    </div>
                </li>

    );
  }
}

export default ListPrices;
