import React, { Component } from 'react';
import '../components/filter/filter.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Filter extends Component {
  render() {
    return (
    <div className="right-filter">
        <div className="toggle-btns">
            <label for="toggle-premium">
            <input type="checkbox" name="toggle-premium" id="toggle-premium"/>
            <span className="toggle-switch"></span>
            <span className="premium-icon ">شركات سياحة <em>PREMIUM</em> فقط</span>
            </label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="hotel-deals"><input type="checkbox" name="عروض فندقية" value="" id="hotel-deals"/><span></span> عروض فندقية</label>
            <label className="checkbox" for="trips"><input type="checkbox" name="رحلات سياحية" value="" id="trips"/><span></span> رحلات سياحية</label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="Tourism-in-Egypt"><input type="checkbox" name="سياحة داخل مصر" value="" id="Tourism-in-Egypt"/><span></span> سياحة داخل مصر</label>
            <label className="checkbox" for="Tourism-out-Egypt"><input type="checkbox" name="سياحة خارج مصر" value="" id="Tourism-out-Egypt"/><span></span> سياحة خارج مصر</label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="five-star">
                <input type="checkbox" name="filter by starts" value="" id="five-star"/>
                <span></span>
                <div className="starts starts-five"><i></i><i></i><i></i><i></i><i></i></div>
            </label>
            <label className="checkbox" for="four-star">
                <input type="checkbox" name="filter by starts" value="" id="four-star"/>
                <span></span>
                <div className="starts starts-four"><i></i><i></i><i></i><i></i><i></i></div>
            </label>
            <label className="checkbox" for="three-star">
                <input type="checkbox" name="filter by starts" value="" id="three-star"/>
                <span></span>
                <div className="starts starts-three"><i></i><i></i><i></i><i></i><i></i></div>
            </label>
            <label className="checkbox" for="two-star">
                <input type="checkbox" name="filter by starts" value="" id="two-star"/>
                <span></span>
                <div className="starts starts-two"><i></i><i></i><i></i><i></i><i></i></div>
            </label>
            <label className="checkbox" for="one-star">
                <input type="checkbox" name="filter by starts" value="" id="one-star"/>
                <span></span>
                <div className="starts starts-one"><i></i><i></i><i></i><i></i><i></i></div>
            </label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="package-class-luxury">
                <input type="checkbox" name="filter by class" value="" id="package-class-luxury"/>
                <span></span>
                <div className="crowns crowns-luxury"><i></i><i></i><i></i><p className="hint">رحلة فاخرة</p></div>
            </label>
            <label className="checkbox" for="package-class-special">
                <input type="checkbox" name="filter by class" value="" id="package-class-special"/>
                <span></span>
                <div className="crowns crowns-special"><i></i><i></i><i></i><p className="hint">رحلة مميزه</p></div>
            </label>
            <label className="checkbox" for="package-class-economic">
                <input type="checkbox" name="filter by class" value="" id="package-class-economic"/>
                <span></span>
                <div className="crowns crowns-economic"><i></i><i></i><i></i><p className="hint">رحلة إقتصادية</p></div>
            </label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="just-breakfast"><input type="checkbox" name="فطار فقط" value="" id="just-breakfast"/><span></span> فطار فقط</label>
            <label className="checkbox" for="breakfast-dinner"><input type="checkbox" name="فطار وعشاء" value="" id="breakfast-dinner"/><span></span> فطار وعشاء</label>
            <label className="checkbox" for="breakfast-lunch-dinner"><input type="checkbox" name="فطار وغذاء وعشاء" value="" id="breakfast-lunch-dinner"/><span></span> فطار وغذاء وعشاء</label>
            <label className="checkbox" for="all-inclusive"><input type="checkbox" name="إقامة شاملة جميع الوجبات والمشروبات" value="" id="all-inclusive"/><span></span> إقامة شاملة جميع الوجبات والمشروبات</label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="for-children-families"><input type="checkbox" name="مناسب للأطفال والعائلات" value="" id="for-children-families"/><span></span> مناسب للأطفال والعائلات</label>
            <label className="checkbox" for="world-cities"><input type="checkbox" name="مدن عالمية" value="" id="world-cities"/><span></span> مدن عالمية</label>
            <label className="checkbox" for="beach"><input type="checkbox" name="أجازات شؤاطئ" value="" id="beach"/><span></span> أجازات شؤاطئ</label>
            <label className="checkbox" for="adventure-youth"><input type="checkbox" name="مغامرة وشباب" value="" id="adventure-youth"/><span></span> مغامرة وشباب</label>
        </div>
        <div className="checkbox-filter">
            <label className="checkbox" for="short-vacation"><input type="checkbox" name="أجازة قصيرة" value="" id="short-vacation"/><span></span> أجازة قصيرة</label>
            <label className="checkbox" for="long-youth"><input type="checkbox" name="أجازة طويلة" value="" id="long-youth"/><span></span> أجازة طويلة</label>
        </div>
    </div>
    );
  }
}

export default Filter;
