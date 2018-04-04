import React, { Component } from 'react';
import './booking-page.css';
import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'

class CustomerData extends Component {
  render() {
    return (

      <div className="CustomerData">
        <div className="booking-small-head">
          <h3>بيانات الحاجز</h3>
        </div>
        <div className="booking-text-content">
          <div className="entry-form">
            <div className="facebookData">
              <button>إدخال البيانات عن طريق فيس بوك</button>
            </div>
            <div className="or"><span>أو</span></div>
            <div className="form-group">
              <label>الأسم بالكامل</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" />
            </div>
            <div className="form-group">
              <label>رقم المحمول</label>
              <input type="number" />
            </div>
            <hr />
            <div className="form-group">
              <label>رسالة موجهة لشركة السياحة</label>
              <textarea name="textarea"></textarea>
            </div>
            <div className="form-group">
              <Link to="/thanks" className="submit">
                أحجز الآن
                </Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default CustomerData;
