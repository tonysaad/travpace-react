import React, { Component } from 'react';
import axios from "axios";
import NewDeal from './NewDeal';
import NewPackage from './NewPackage';
import Test from './Test';
import AgencyAccount from './AgencyAccount';
import ManageBookings from './ManageBookings';
import SingleBooking from './SingleBooking';
import DealsList from './DealsList';
import './dashboard.css';

class Dashboard extends Component {


    render() {
        return (
            <div className="DB">
                <div className="site-menubar">
                    <div className="logo">
                        <img src="/img/control-panal-logo.png" alt="control-panal-logo" />
                    </div>
                    <div className="list">
                        <div className="item active">
                            <h3>إحصائيات</h3>
                        </div>
                        <div className="item">
                            <h3>الحجوزات</h3>
                            <span className="red">191</span>
                        </div>
                        <div className="item">
                            <h3>عروض الفنادق</h3>
                            <span>123</span>
                        </div>
                        <div className="item">
                            <h3>الباقات السياحية</h3>
                            <span>23</span>
                        </div>
                        <div className="item">
                            <h3>حسابي</h3>
                        </div>
                    </div>
                </div>
                <div className="page">
                    <div className="DB-header">
                        <div className="agency-data">
                            <div className="pic">
                                <img src="/img/hotels/logo.png" alt="agency logo" />
                            </div>
                            <div className="conent">
                                <h3>توريكو هوليدايز للسياحة</h3>
                                <p className="account-plan">Free Account - <a herf="#">Upgrade Now!</a></p>
                            </div>
                        </div>
                        <div className="agency-profile">
                            <div className="pic">
                                <img src="/img/account.jpg" alt="" />
                            </div>
                            <div className="conent">
                                <h4>Hani Zakher <span>Admin</span></h4>
                                <a href="">Sign Out</a>
                            </div>
                        </div>
                    </div>
                    <NewDeal/>
                    <NewPackage/>
                    <AgencyAccount/>
                    <ManageBookings/>
                    <DealsList/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
