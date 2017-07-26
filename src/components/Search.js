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
            <form className="search-sec">
                <div className="select-sec">
                    <label htmlFor="destination">الوجهة السياحية</label>
                    <select onChange={this.addDestination} value={this.state.value} name="destination">
                        <option value="شرم الشيخ">شرم الشيخ</option>
                        <option value="الغردقة">الغردقة</option>
                    </select>
                </div>
                <div className="select-sec">
                    <label htmlFor="month">الشهر المفضل للسفر</label>
                    <select name="month">
                        <option value="1">يناير ٢٠١٧</option>
                        <option value="2">فبراير ٢٠١٧</option>
                    </select>
                </div>
                <div className="select-btn">
                    <input type="submit" value="بحث" className="btn btn-search" />
                </div>
            </form>

        );
    }
}

export default Header;
