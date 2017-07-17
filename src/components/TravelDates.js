import React, { Component } from 'react';
import '../components/travel-dates/travel-dates.css';
import {
//   BrowserRouter as Router,
//   Route,
  Link
} from 'react-router-dom'

class TravelDates extends Component {
  render() {
    return (
    <div className="travel-dates-div">
        <h4>تواريخ السفر</h4>
        <table>
            <thead>
                <tr>
                    <th>التاريخ</th>
                    <th>سعر الفرد</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="date">٨ يناير -١٥ يناير </td>
                    <td className="price">2,800 EGP</td>
                    <td className="availability">متاح أماكن</td>
                </tr>
                <tr>
                    <td className="date">٨ يناير -١٥ يناير </td>
                    <td className="price">2,800 EGP</td>
                    <td className="availability unavailable">مباع بالكامل</td>
                </tr>
                <tr>
                    <td className="date">٨ يناير -١٥ يناير </td>
                    <td className="price">2,800 EGP</td>
                    <td className="availability">متاح أماكن</td>
                </tr>
                <tr>
                    <td className="date">٨ يناير -١٥ يناير </td>
                    <td className="price">2,800 EGP</td>
                    <td className="availability">متاح أماكن</td>
                </tr>
            </tbody>
        </table>
    </div>

    );
  }
}

export default TravelDates;
