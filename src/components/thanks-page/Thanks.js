import React, { Component } from 'react';
import PackageInfo from './../booking-page/PackageInfo';
import Dates from './Dates';
import RoomType from './RoomType';
import AgentDetails from './AgentDetails';
import TravelWay from './TravelWay';
import Totals from './Totals';
import {
  // BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom'


class Thanks extends Component {
  render() {
    return (
      <div className="ThanksPage">
        <div className="pic">
            <img src="/img/hotels/logo.png" alt="hotel logo"/>
        </div>
        <h1> شكراً، لقد تم إرسال طلب الحجز بنجاح لشركة السياحة</h1>
        <p>سوف يتم الأتصال بكم في خلال ساعات</p>
        <div className="thx-box">
          <PackageInfo/>
          <Dates/>
          <AgentDetails/>
          <RoomType/>
          <TravelWay/>
          <Totals/>
        </div>
      </div>
    );
  }
}

export default Thanks;
