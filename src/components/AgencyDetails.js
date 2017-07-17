import React, { Component } from 'react';
import '../components/agency-details/agency-details.css';

class AgencyDetails extends Component {
    render() {
        return (
            <div className="agency-details-div">
                <p>كافة أسعار وتفاصيل الرحلة السياحية مقدمة من خلال </p>
                <div className="agency-details">
                    <div className="pic">
                        <img src={this.props.agency.logo.thumbnail} alt="hotel logo" />
                    </div>
                    <div className="details">
                        <h4>{this.props.agency.name}</h4>
                        {(this.props.agency.isPremium) ? <p className="premium-agency">Premium Agency</p> : null}
                        <p className="address">{this.props.agency.address}</p>
                        <p className="tel">{this.props.agency.phone}</p>
                        <p className="mail">{this.props.agency.email}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgencyDetails;
