import React, { Component } from 'react';
import Starts from './../Starts';
import TravelIncluded from './../TravelIncluded';
import './booking-page.css';

class PackageInfo extends Component {
  render() {
    let rating = (this.props.info.type === "hotel-deal") ? (<Starts rating={this.props.info.rating} />) : (<Starts />);
    let staticTitle = (this.props.info.type === "hotel-deal") ? "فندق" : "عرض";

    return (

      <div className="PackageInfo">
        <div className="pic">
          <img src={this.props.info.featuredImg.large} alt="package-photo" />
        </div>
        <div className="content">
          <div className="Info">
              {rating}
            <h2>{staticTitle + " " + this.props.info.title}
            </h2>
            <TravelIncluded days={this.props.info.days} mealPlan={this.props.info.mealPlan} />
          </div>
          <div className="agency-details-Booking">
            <div className="agency-details">
              <div className="pic">
                <img src={this.props.info.agency.logo.thumbnail} alt="hotel logo" />
              </div>
              <div className="details">
                <p>أحجز هذا العرض من </p>
                <h4 className="premium-agency">{this.props.info.agency.name}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default PackageInfo;
