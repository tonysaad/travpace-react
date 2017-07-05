import React, { Component } from 'react';
import './booking-page.css';

class PriceTotla extends Component {
  render() {
    return (

        <div className="PriceTotla">
          <div className="head waiting">
            <h5>الأجمالي</h5>
            <h2>12,456 <span>جنيه</span></h2>
            <p>شاملة الضرائب</p>
          </div>
          <div className="content">
            <div className="item">
              <span>1x</span>
              <div className="details">
                <h4>غرفة مزدوجة</h4>
                <p>فاخرة - مطلة علي البحر</p>
              </div>
              <div className="price">
                <h3>3,456</h3>
                <span>جنيه</span>
              </div>
            </div>
            <div className="item">
              <span>1x</span>
              <div className="details">
                <h4>غرفة مزدوجة</h4>
                <p>فاخرة - مطلة علي البحر</p>
              </div>
              <div className="price">
                <h3>3,456</h3>
                <span>جنيه</span>
              </div>
            </div>
            <div className="item">
              <span>1x</span>
              <div className="details">
                <h4>غرفة مزدوجة</h4>
                <p>فاخرة - مطلة علي البحر</p>
              </div>
              <div className="price free">
                <h4>مجاناً</h4>
                <h3>3,456</h3>
                <span>جنيه</span>
              </div>
            </div>
            <div className="item">
              <span>1x</span>
              <div className="details">
                <h4>غرفة مزدوجة</h4>
                <p>فاخرة - مطلة علي البحر</p>
              </div>
              <div className="price">
                <h3>3,456</h3>
                <span>جنيه</span>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default PriceTotla;
