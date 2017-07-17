import React, { Component } from 'react';
import '../components/quick-review-header/quick-review-header.css';
import FavBtn from './FavBtn';
import Starts from './Starts';
import UsersWatch from './UsersWatch';

import {
//   BrowserRouter as Router,
//   Route,
//   Link
} from 'react-router-dom'

class QRHeader extends Component {
  render() {
      let rating = (this.props.info.type === "hotel-deal")? (<Starts rating = {this.props.info.rating}/>) : (<Starts/>);
      let staticTitle = (this.props.info.type === "hotel-deal")? "فندق" : "عرض";
    return (

    <div className="quick-review-header">
        <div className="pic">
            <img src="../img/hotels/logo.png" alt="hotel logo"/>
        </div>

        <div className="details">
            <h2>{staticTitle + " " + this.props.info.title}
               {rating}
            </h2>
            <p className="premium-icon">عرض من شركة توريكو للسياحة</p>
        </div>
        <UsersWatch/>
        <FavBtn/>
    </div>

    );
  }
}

export default QRHeader;
