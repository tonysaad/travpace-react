import React, { Component } from 'react';
import '../components/hotel-deal-widget/hotel-deal-widget.css';
import Starts from './Starts';
import FavBtn from './FavBtn';
import Label from './Label';
import TravelIncluded from './TravelIncluded';

import {
    //   BrowserRouter as Router,
    //   Route,
    //   Link
} from 'react-router-dom'

class TripWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            waiting: true
        };
    }
    toggleLike = () => {
        this.setState({ liked: !this.state.liked })
    }
    notWaiting(){
        this.setState({waiting: false});
    }
    
    price(hasDiscount) {
        let price = (hasDiscount) ? this.props.info.discount : this.props.info.doublePrice;
        let discount = (hasDiscount) ? (<div className="sale-widget">
            <img src="/img/icons/percentage.png" alt="percentage" />
            <div>
                <span>خصم{Math.round(this.props.info.doublePrice / this.props.info.discount * 100) / 10}%</span>
                <p><del>{this.props.info.doublePrice}</del>جنيه</p>
            </div>
        </div>) : '';

        return (<div className="widget-hotel-foot">
            <div className="price">
                <span>جنيه</span>
                <h3>{price}
                    {discount}
                </h3>
                <p>للغرفة المزدوجة شاملة الضرائب</p>
            </div>
            <FavBtn liked={this.state.liked} toggleLike={this.toggleLike} />
        </div>
        )
    }

    render() {
        let rating = (this.props.info.type === "hotel-deal") ? (<Starts rating={this.props.info.rating} />) : (<Starts />);
        let staticTitle = (this.props.info.type === "hotel-deal") ? "فندق" : "عرض";
        let TripImg = {
            backgroundImage: `url(${this.props.info.featuredImg.thumbnail})`,
        };
        let TripImg2 = this.props.info.featuredImg.thumbnail;
        let premium = (this.props.info.agency.isPremium)? "premium-icon premium-chip" : "premium-icon"
        return (
            <div className="col">
                <div onClick={() => { console.log(this.props.key); this.props.popupFunction(true, this.props.index) }} className={!this.state.waiting? 'default-widget hotel-deal' :'default-widget hotel-deal waiting' }>
                    <div className="pic" style={TripImg}>
                        <img onLoad={this.notWaiting.bind(this)} src={TripImg2} />
                    </div>
                    <div>
                        <div className="widget-hotel-content">
                            <h2>{staticTitle + " " + this.props.info.title}
                                {rating}
                            </h2>
                            <p className={premium}>{"عرض من شركة " + this.props.info.agency.name}</p>
                            <Label />
                            <TravelIncluded days={this.props.info.days} mealPlan={this.props.info.mealPlan} />
                        </div>
                        {this.price(this.props.info.hasOwnProperty("discount"))}
                    </div>
                    <div className="visibility-watch">
                        <img src="/img/icons/visibility.png" alt="visibility" />
                        <span className="num">2398</span>
                        <span>مشاهدة</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TripWidget;
