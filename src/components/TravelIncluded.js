import React, { Component } from 'react';
import '../components/travel-included/travel-included.css';

class TravelIncluded extends Component {
  render() {
    return (
        <ul className="travel-included">
          <li className="days">5 أيام</li>
          <li className="breakfast-dinner">شاملة الفطار والعشاء</li>
        </ul>
    );
  }
}

export default TravelIncluded;
