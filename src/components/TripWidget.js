import React, { Component } from 'react';
import '../components/hotel-deal-widget/hotel-deal-widget.css';
import Starts from './Starts';
import FavBtn from './FavBtn';
import Label from './Label';
import TravelIncluded from './TravelIncluded';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var TripImg = {
  backgroundImage: "url(/img/hotels/thumbnail.jpg)",
};

class TripWidget extends Component {
  render() {
    return (
<div className="col">
    <Link to="/single" className="default-widget hotel-deal">
        <div className="pic" style={TripImg}>

        </div>
        <div className="widget-hotel-content">
            <h2>فندق خليج نعمة شرم الشيخ
                <Starts/>
            </h2>
            <p className="premium-icon">عرض من شركة توريكو للسياحة</p>
            <Label/>
            <TravelIncluded/>
        </div>
        <div className="widget-hotel-foot">
            <div className="price">
                <span>جنيه</span>
                <h3 className="hot-deal">3,456
                    <div className="sale-widget">
                        <img src="/img/icons/percentage.png" alt="percentage"/>
                        <div>
                            <span>خصم ٢٥٪</span>
                            <p><del>1,400</del>جنيه</p>
                        </div>
                    </div>
                </h3>
                <p>للغرفة المزدوجة شاملة الضرائب</p>
            </div>
            <FavBtn/>
        </div>
        <div className="visibility-watch">
            <img src="/img/icons/visibility.png" alt="visibility"/>
            <span className="num">2398</span>
            <span>مشاهدة</span>
        </div>
    </Link>
</div>
    );
  }
}

export default TripWidget;
