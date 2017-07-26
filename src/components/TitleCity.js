import React, { Component } from 'react';
import '../components/title-city/title-city.css';

class TitleCity extends Component {
  render() {
    return (
      <div className="title-city-div">
        <div className="content">
          <h2>فنادق ورحلات سياحية - شرم الشيخ</h2>
          <p>يوجد ٢٥٠ عرض فندقي و١٢٠ رحلة سياحية</p>
        </div>
        <div className="actions-sec">
          <div className="show-filters">تصفية النتائج</div>
          <div className="sortby select-sec">
            <label for="sortby">رتب حسب</label>
            <select name="sortby">
              <option value="الأقل سعراً" selected>الأقل سعراً</option>
              <option value="الاعلى سعراً">الاعلى سعراً</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleCity;
