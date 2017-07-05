import React, { Component } from 'react';
import './booking-page.css';

class ChildrenNum extends Component {
  render() {
    return (

        <div className="ChildrenNum">
          <div className="booking-small-head">
            <h3>أختار عدد الأطفال</h3>
          </div>
          <div className="booking-text-content">
            <div className="select-item select-item-child">
              <div className="child-type">
                <img src="/img/icons/child.png" alt="single-room" width="28"/>
                <div>
                    <h5> طفل</h5>
                    <p>1 - 4 سنوات</p>
                </div>
              </div>
              <div className="price free">
                <h4>الطفل الأول مجاناً</h4>
                <h3>3,456</h3>
                <span>جنيه</span>
              </div>
              <div className="select-sec">
                <select name="child-num">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="select-item select-item-child">
              <div className="child-type">
                <img src="/img/icons/child.png" alt="single-room" width="28"/>
                <div>
                    <h5> طفل</h5>
                    <p>5 - 12 سنوات</p>
                </div>
              </div>
              <div className="price">
                <h3>3,456</h3>
                <span>جنيه</span>
              </div>
              <div className="select-sec">
                <select name="child-num">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default ChildrenNum;
