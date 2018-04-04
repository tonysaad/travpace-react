import React, { Component } from 'react';
import '../components/filter/filter.css';
import {
    //   BrowserRouter as Router,
    //   Route,
    //   Link
} from 'react-router-dom'

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: [],
            mealPlan: [],
            type :[],
            inEgypt: [],
            shortTrip: false,
            longTrip: false,
            premium: false
        }
    }
    addRating = (rating) => {
        let newRatingList = [...this.state.ratings];
        let index = this.state.ratings.indexOf(rating);
        if (index == -1)
            newRatingList.push(rating);

        else
            newRatingList.splice(index, 1);
        this.props.updateFilters({_page:1,rating:newRatingList})
        this.setState({ ratings: newRatingList });
    }

    addMeal = (mealPlan) => {
        let newMealPlanList = [...this.state.mealPlan];
        let index = this.state.mealPlan.indexOf(mealPlan);
        if (index == -1)
            newMealPlanList.push(mealPlan);

        else
            newMealPlanList.splice(index, 1);
        this.props.updateFilters({_page:1,mealPlan:newMealPlanList})
        this.setState({ mealPlan: newMealPlanList });
    }   
    
    addType = (type) => {
        let newTypeList = [...this.state.type];
        let index = this.state.type.indexOf(type);
        if (index == -1)
            newTypeList.push(type);

        else
            newTypeList.splice(index, 1);
        this.props.updateFilters({_page:1,type:newTypeList})
        this.setState({ type: newTypeList });
    }       

    longTrip = () => {
        if (!this.state.longTrip){

             this.props.updateFilters({_page:1,"days_gte":5})
        }
        else
            this.props.updateFilters({_page:1,"days_gte":[]})

        this.setState({ longTrip: !this.state.longTrip });
    }  
    
    shortTrip = () => {
        if (!this.state.shortTrip)
             this.props.updateFilters({_page:1,"days_lte":4})
        else
            this.props.updateFilters({_page:1,"days_lte":[]})
        this.setState({ shortTrip: !this.state.shortTrip });
    }
    
    premiumOnly = () => {
        if (!this.state.premium)
             this.props.updateFilters({_page:1,"agency.isPremium":true})
        else
             this.props.updateFilters({_page:1,"agency.isPremium":[]})
        this.setState({ premium: !this.state.premium });
    }

    addEgypt = (inEgypt) => {
        let newInEgyptList = [...this.state.inEgypt];
        let index = this.state.inEgypt.indexOf(inEgypt);
        if (index == -1)
            newInEgyptList.push(inEgypt);

        else
            newInEgyptList.splice(index, 1);
        this.props.updateFilters({_page:1,'in-egypt':newInEgyptList})
        this.setState({ inEgypt: newInEgyptList });
    }  
  
    removeClass = ()=>{
        document.body.classList.remove('ShowFilterActive');
    }
    render() {
        return (
            <div className="right-filter">
                <div className="toggle-btns">
                    <label for="toggle-premium">
                        <input onClick={() => { this.premiumOnly() }} type="checkbox" name="toggle-premium" id="toggle-premium" />
                        <span className="toggle-switch"></span>
                        <span className="premium-icon ">شركات سياحة <em>PREMIUM</em> فقط</span>
                    </label>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="hotel-deals"><input onClick={() => { this.addType("hotel-deal") }} type="checkbox" name="عروض فندقية" value="" id="hotel-deals" /><span></span> عروض فندقية<i className="bg"></i></label>
                    <label className="checkbox" for="trips"><input onClick={() => { this.addType("travel-package") }} type="checkbox" name="رحلات سياحية" value="" id="trips" /><span></span> رحلات سياحية<i className="bg"></i></label>
                    <a className="reset-btn" href="#">إعادة تعيين</a>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="Tourism-in-Egypt"><input onClick={() => { this.addEgypt(1) }}  type="checkbox" name="سياحة داخل مصر" value="" id="Tourism-in-Egypt" /><span></span> سياحة داخل مصر<i className="bg"></i></label>
                    <label className="checkbox" for="Tourism-out-Egypt"><input onClick={() => { this.addEgypt(0) }}  type="checkbox" name="سياحة خارج مصر" value="" id="Tourism-out-Egypt" /><span></span> سياحة خارج مصر<i className="bg"></i></label>
                    <a className="reset-btn" href="#">إعادة تعيين</a>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="five-star">
                        <input onChange={() => { this.addRating(5) }} type="checkbox" name="filter by starts" value="" id="five-star" />
                        <span></span>
                        <div className="starts starts-5"><i></i><i></i><i></i><i></i><i></i></div>
                        <i className="bg"></i>
                    </label>
                    <label className="checkbox" for="four-star">
                        <input onChange={() => { this.addRating(4) }} type="checkbox" name="filter by starts" value="" id="four-star" />
                        <span></span>
                        <div className="starts starts-4"><i></i><i></i><i></i><i></i><i></i></div>
                        <i className="bg"></i>
                    </label>
                    <label className="checkbox" for="three-star">
                        <input onChange={() => { this.addRating(3) }} type="checkbox" name="filter by starts" value="" id="three-star" />
                        <span></span>
                        <div className="starts starts-3"><i></i><i></i><i></i><i></i><i></i></div>
                        <i className="bg"></i>
                    </label>
                    <label className="checkbox" for="two-star">
                        <input onChange={() => { this.addRating(2) }} type="checkbox" name="filter by starts" value="" id="two-star" />
                        <span></span>
                        <div className="starts starts-2"><i></i><i></i><i></i><i></i><i></i></div>
                        <i className="bg"></i>
                    </label>
                    <label className="checkbox" for="one-star">
                        <input onChange={() => { this.addRating(1) }} type="checkbox" name="filter by starts" value="" id="one-star" />
                        <span></span>
                        <div className="starts starts-1"><i></i><i></i><i></i><i></i><i></i></div>
                        <i className="bg"></i>
                    </label>
                    <em className="reset-btn" href="#"  onClick={() => { this.addRating(5) }}>إعادة تعيين</em>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="package-class-luxury">
                        <input type="checkbox" name="filter by class" value="" id="package-class-luxury" />
                        <span></span>
                        <div className="crowns crowns-luxury"><i></i><i></i><i></i><p className="hint">رحلة فاخرة</p></div>
                        <i className="bg"></i>
                    </label>
                    <label className="checkbox" for="package-class-special">
                        <input type="checkbox" name="filter by class" value="" id="package-class-special" />
                        <span></span>
                        <div className="crowns crowns-special"><i></i><i></i><i></i><p className="hint">رحلة مميزه</p></div>
                        <i className="bg"></i>
                    </label>
                    <label className="checkbox" for="package-class-economic">
                        <input type="checkbox" name="filter by class" value="" id="package-class-economic" />
                        <span></span>
                        <div className="crowns crowns-economic"><i></i><i></i><i></i><p className="hint">رحلة إقتصادية</p></div>
                        <i className="bg"></i>
                    </label>
                    <a className="reset-btn" href="#">إعادة تعيين</a>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="just-breakfast"><input onClick={() => { this.addMeal("bed and breakfast") }}  type="checkbox" name="فطار فقط" value="" id="just-breakfast" /><span></span> فطار فقط<i className="bg"></i></label>
                    <label  className="checkbox" for="breakfast-dinner"><input onClick={() => { this.addMeal("half board") }} type="checkbox" name="فطار وعشاء" value="" id="breakfast-dinner" /><span></span> فطار وعشاء<i className="bg"></i></label>
                    <label   className="checkbox" for="breakfast-lunch-dinner"><input onClick={() => { this.addMeal("full board") }} type="checkbox" name="فطار وغذاء وعشاء" value="" id="breakfast-lunch-dinner" /><span></span> فطار وغذاء وعشاء<i className="bg"></i></label>
                    <label className="checkbox" for="all-inclusive"><input type="checkbox" name="إقامة شاملة جميع الوجبات والمشروبات" value="" id="all-inclusive" /><span></span> إقامة شاملة جميع الوجبات والمشروبات<i className="bg"></i></label>
                    <a className="reset-btn" href="#">إعادة تعيين</a>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="for-children-families"><input type="checkbox" name="مناسب للأطفال والعائلات" value="" id="for-children-families" /><span></span> مناسب للأطفال والعائلات<i className="bg"></i></label>
                    <label className="checkbox" for="world-cities"><input type="checkbox" name="مدن عالمية" value="" id="world-cities" /><span></span> مدن عالمية<i className="bg"></i></label>
                    <label className="checkbox" for="beach"><input type="checkbox" name="أجازات شؤاطئ" value="" id="beach" /><span></span> أجازات شؤاطئ<i className="bg"></i></label>
                    <label className="checkbox" for="adventure-youth"><input type="checkbox" name="مغامرة وشباب" value="" id="adventure-youth" /><span></span> مغامرة وشباب<i className="bg"></i></label>
                    <a className="reset-btn" href="#">إعادة تعيين</a>
                </div>
                <div className="checkbox-filter">
                    <label className="checkbox" for="short-vacation"><input onClick={() => { this.shortTrip() }} type="checkbox" name="أجازة قصيرة" value="" id="short-vacation" /><span></span> أجازة قصيرة<i className="bg"></i></label>
                    <label className="checkbox" for="long-youth"><input onClick={() => { this.longTrip() }} type="checkbox" name="أجازة طويلة" value="" id="long-youth" /><span></span> أجازة طويلة<i className="bg"></i></label>
                    <a className="reset-btn" href="#">إعادة تعيين</a>
                </div>
                <button className="btn btn-filter"  onClick={()=>{this.removeClass()}}>تصفية النتائج</button>
            </div>
        );
    }
}

export default Filter;
