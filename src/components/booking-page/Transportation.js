import React, { Component } from 'react';
import './booking-page.css';

class PackageInfo extends Component {
  render() {
    return (

        <div className="Transportation">
          <div className="booking-small-head">
            <h3>وسيلة السفر</h3>
          </div>
          <div className="booking-text-content">
            <div className="radio-select">
              <div className="radio-item">
                <label for="car">
                  <input type="radio" name="Transportation" value="car" id="car" />
                  <span className="radio-icon"></span>
                  <span className="text">بالسيارة الشخصية </span>
                </label>
              </div>
              <div className="radio-item">
                <label for="Go Bus">
                  <input type="radio" name="Transportation" value="Go Bus" id="Go Bus" />
                  <span className="radio-icon"></span>
                  <span className="text">Go Bus</span>
                </label>
              </div>
              <div className="radio-item">
                <label for="flight">
                  <input type="radio" name="Transportation" value="flight" id="flight" />
                  <span className="radio-icon"></span>
                  <span className="text">مصر الطيران </span>
                </label>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default PackageInfo;
