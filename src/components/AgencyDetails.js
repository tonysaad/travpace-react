import React, { Component } from 'react';
import '../components/agency-details/agency-details.css';

class AgencyDetails extends Component {
  render() {
    return (
    <div className="agency-details-div">
        <p>كافة أسعار وتفاصيل الرحلة السياحية مقدمة من خلال </p>
        <div className="agency-details">
            <div className="pic">
                <img src="/img/hotels/logo.png" alt="hotel logo"/>
            </div>
            <div className="details">
                <h4>توريكو هوليدايز للسياحة</h4>
                <p className="premium-agency">Premium Agency</p>
                <p className="address">٢٣ شارع المقديسي، الميرغني، مصر الجديدة، القاهرة</p>
                <p className="tel">012 898989323</p>
                <p className="mail">info@touricoholidays.com</p>
            </div>
        </div>
    </div>
    );
  }
}

export default AgencyDetails;
