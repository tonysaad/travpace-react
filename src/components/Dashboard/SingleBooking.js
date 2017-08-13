import React, { Component } from 'react';
import './dashboard.css';

class SingleBooking extends Component {
    render() {
        return (

            <div className="single-booking">
                <div className="content">
                    <div className="close"></div>
                    <div className="head">
                        <div className="booking-date">
                            <span className="status">REQUEST</span>
                            <p>رقم الحجز  : 323443</p>
                            <p>تاريخ الحجز : ٢٣ أبريل ٢٠١٧</p>
                        </div>
                        <div className="action">
                            <a href="#">تأكيد حجز</a>
                            <a href="#">إلغاء حجز</a>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }
}

export default SingleBooking;
