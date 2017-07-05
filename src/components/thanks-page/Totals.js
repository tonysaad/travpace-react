import React, { Component } from 'react';
import './thanks-page.css';

class Totals extends Component {
  render() {
    return (

  <div className="Totals">
    <h2>الأجمالي <span>شاملة الضرائب</span></h2>
    <span className="price">3,870 EGP</span>
  </div>

    );
  }
}

export default Totals;
