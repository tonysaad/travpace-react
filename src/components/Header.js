import React, { Component } from 'react';
import '../components/header/header.css';
import {
    //   BrowserRouter as Router,
    //   Route,
    Link
} from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            destination: '',
            date: ''
        }
    }
    addDestination = (event) => {
        this.props.updateFilters({ cities_like: event.target.value })
        this.setState({ destination: event.target.value });
    }
    render() {
        return (
            <div>
                <div className="header-top">
                    <div className="main-menu">
                        <ul>
                            <li>
                                <Link to="/" className="active">الرئيسية</Link>
                            </li>
                            <li>
                                <Link to="/">عروض فندقية</Link>
                            </li>
                            <li>
                                <Link to="/">رحلات سياحية</Link>
                            </li>
                            <li>
                                <Link to="/">أطفال وعائلات</Link>

                            </li>
                            <li>
                                <Link to="/">مدن عالمية</Link>
                            </li>
                            <li>
                                <Link to="/">أجازات شؤاطئ</Link>
                            </li>
                            <li>
                                <Link to="/">شهر العسل</Link>
                            </li>
                            <li>
                                <Link to="/">مغامرة وشباب</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li>
                                <Link to="/">عن <span>Travepace</span></Link>
                            </li>
                            <li>
                                <Link to="/">شركات السياحة</Link>
                            </li>
                            <li>
                                <Link to="/">سياسة العرض والحجز</Link>
                            </li>
                            <li>
                                <Link to="/">إتصل بنا</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="company-logo">
                        <img src="/img/logo.jpg" alt="company-logo" />
                    </div>

                    <div className="account">
                        <img src="/img/account.jpg" alt="account-profile" />
                        <div className="details">
                            <h3>George Saad</h3>
                            <h4><img src="/img/icons/favorite.png" alt="favorite" /> 42 Liked Deals</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
