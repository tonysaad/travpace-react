import React, { Component } from 'react';
import '../components/quick-review-header/quick-review-header.css';
import FavBtn from './FavBtn';
import UsersWatch from './UsersWatch';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class QRHeader extends Component {
  render() {
    return (

    <div className="quick-review-header">
        <div className="pic">
            <img src="../img/hotels/logo.png" alt="hotel logo"/>
        </div>

        <div className="details">
            <h2>فندق خليج نعمة شرم الشيخ
                <div className="starts starts-five"><i></i><i></i><i></i><i></i><i></i></div>
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
