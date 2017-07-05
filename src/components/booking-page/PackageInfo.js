import React, { Component } from 'react';
import Starts from './../Starts';
import TravelIncluded from './../TravelIncluded';
import './booking-page.css';

class PackageInfo extends Component {
  render() {
    return (

        <div className="PackageInfo">
          <div className="pic">
            <img src="/img/hotels/package-photo.jpg" alt="package-photo" />
          </div>
          <div className="content">
            <div className="Info">
              <Starts />
              <h2>فندق خليج نعمة شرم الشيخ</h2>
              <TravelIncluded />
            </div>
            <div className="agency-details-Booking">
              <div className="agency-details">
                  <div className="pic">
                      <img src="/img/hotels/logo.png" alt="hotel logo"/>
                  </div>
                  <div className="details">
                    <p>أحجز هذا العرض من </p>
                    <h4 className="premium-agency">توريكو هوليدايز للسياحة</h4>
                  </div>
              </div>
          </div>
          </div>
        </div>

    );
  }
}

export default PackageInfo;
