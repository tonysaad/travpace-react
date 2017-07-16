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

class TripWidget extends Component {
    constructor(props){
        super(props);
    }

    price(hasDiscount){
        let price = (hasDiscount)? this.props.info.discount : this.props.info.doublePrice;
        let discount = (hasDiscount)? (<div className="sale-widget">
                        <img src="/img/icons/percentage.png" alt="percentage"/>
                        <div>
                            <span>خصم{Math.round(this.props.info.doublePrice/this.props.info.discount * 100)/10}%</span>
                            <p><del>{this.props.info.doublePrice}</del>جنيه</p>
                        </div>
                    </div>) : '';
        
        return(<div className="widget-hotel-foot">
            <div className="price">
                <span>جنيه</span>
                <h3 className="hot-deal">{price}
                {discount}
                </h3>
                <p>للغرفة المزدوجة شاملة الضرائب</p>
            </div>
            <FavBtn/>
        </div>
        )
    }
   
  render() {
      let rating = (this.props.info.type == "hotel-deal")? (<Starts rating = {this.props.info.rating}/>) : (<Starts/>);
      let staticTitle = (this.props.info.type == "hotel-deal")? "فندق" : "عرض";
      let TripImg = {
  backgroundImage: `url(${this.props.info.featuredImg.thumbnail})`,
}; 
    return (
<div className="col">
    <div onClick={()=>{this.props.popupFunction(true, this.props.info)}} className="default-widget hotel-deal">
        <div className="pic" style={TripImg}>

        </div>
        <div className="widget-hotel-content">
            <h2>{staticTitle + " " + this.props.info.title}
                {rating}
            </h2>
            <p className="premium-icon">{"عرض من شركة "+this.props.info.agency.name}</p>
            <Label/>
            <TravelIncluded days = {this.props.info.days} mealPlan = {this.props.info.mealPlan}/>
        </div>
        {this.price(this.props.info.hasOwnProperty("discount"))}
        <div className="visibility-watch">
            <img src="/img/icons/visibility.png" alt="visibility"/>
            <span className="num">2398</span>
            <span>مشاهدة</span>
        </div>
    </div>
</div>
    );
  }
}

export default TripWidget;
