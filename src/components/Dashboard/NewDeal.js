import React, { Component } from 'react';
import axios from "axios";
import './dashboard.css';

class NewDeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        cityID : 0,
        hotelID : 0,
        cities : [],
        hotels : [],
        themes : [],
        meals : [],
        roomsCats : [],
        roomsView : [],
        days : 0,
        selected_meal : '',
        selected_themes :[],
        rooms: [],
        hotelName:'',
        description:'',
        featuredImage:'',
        status:'',
        };


    }

    handleChange = (event)=> {
        const target = event.target;
        if(target.name === "dealdays"){
            this.setState({days: target.value});
        }
        if(target.name === "meal"){
            this.setState({selected_meal: target.value});
        }
        if(target.name === "theme"){
            this.setState({selected_themes: this.getselected('theme')});
        }
        if(target.name === "description"){
            this.setState({description: target.value});
        }
        if(target.name === "featuredImage"){
            console.log(target.files[0].name);
            this.setState({featuredImage: target.files[0].name});
        }
        if(target.name === "publish"){
            this.setState({status : "pending"});
        }
        if(target.name === "draft"){
            this.setState({status : "draft"});
        }
        
    }
    handleSubmit = (event)=>  {
        event.preventDefault();
        var data = {
            title : ' عرض '+this.state.hotelName,
            content: this.state.description,
            hotel: this.state.hotelID,
            days: this.state.days,
            meal_plan: this.state.selected_meal,
            themesIDs: this.state.selected_themes,
            status: this.state.status, 
            featuredImg : this.state.featuredImage,
        }
        axios.post(`http://localhost/GIT/travpace/wp-json/v1/deals`,data);
    }
    
    componentDidMount(){
        this.getCities(); 
    }
    getCities = () =>{
        axios.get(`http://localhost/GIT/travpace/wp-json/v1/hotels`).then(response => {
            this.setState({cities : response.data['cities'], themes :response.data['themes'] , meals :response.data['meals'] });
        });
    }
    getHotels = () =>{
        axios.get(`http://localhost/GIT/travpace/wp-json/v1/hotels/${this.cityID}`).then(response => {
            this.setState({hotels : response.data});
        });  
    }
    getRooms = () => {
        let room_cats= [];
        let roomView = [];
        let hotelID = this.hotelID;
        this.state.hotels.map(function(hotel,i){
            if(hotel.id === hotelID){
                room_cats = hotel.room_category;
                roomView = hotel.room_view;
            }
        });
        this.setState({roomsCats : room_cats , roomsView : roomView });
    }
    getSelectedCity =(e) =>{
        this.setState({hotelID: 0 ,roomsCats:[], roomsView:[]});
        const cityID  = e.target.value;
        this.cityID = cityID;
        this.setState({cityID });
        this.getHotels(); 
    }
    getSelectedHotel = (e) => {
        const hotelID  = e.target.value;
        this.hotelID = hotelID;
        let index = e.nativeEvent.target.selectedIndex;
        let hotelName = e.nativeEvent.target[index].text;
        this.setState({hotelID : hotelID , hotelName : hotelName });
        this.getRooms();
    }
    getselected = (field) => {
        let fields = document.getElementsByName(field);
        let selectedFields = [];
        for(let i = 0; i < fields.length; i++){
            if(fields[i].checked){
                selectedFields.push(fields[i].value);
            }
        }
        return selectedFields;
    }
    render() {
        
        return (

            <div className="ndp">
                <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                    <div className="data dataDeal">
                        <div className="item_header">أضف بيانات العرض الفندقي</div>
                        <div className="content">
                            <div className="row">
                                <div className="full">
                                    <div className="select-sec med">
                                        <h4 className="label">أختار الوجهة السياحية</h4>
                                        <select name="destination" ref="destination"value={this.state.cityID} onChange={this.getSelectedCity}>
                                            <option value="0">الوجهه السياحيه</option>
                                            {this.state.cities.map(function(city,i){
                                                return <option value={city.id}>{city.title}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="select-sec">
                                        <h4 className="label">أختار الفندق</h4>
                                        <select name="hotel" ref="hotel" value={this.state.hotelID} onChange={this.getSelectedHotel} >
                                            <option value="0">الفندق</option>
                                            {this.state.hotels.map(function(hotel,i){
                                                return <option value={hotel.id} name={hotel.title} >{hotel.title}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className="exclamation">
                                        <img src="/img/exclamation.png" alt="exclamation" />
                                    </div>
                                </div>
                                <div className="full">
                                    <div className="select-sec small">
                                        <h4 className="label">مدة أيام العرض</h4>
                                        <select name="dealdays" ref="dealdays" value={this.state.value} onChange={this.handleChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="radio-btns">
                                    <h4>نظام الوجبات</h4>
                                    {this.state.meals.map(function(meal,i){
                                        return <label htmlFor={'meal'+(i+1)}>
                                        <input type="radio" name="meal" id={'meal'+(i+1)} value={meal.term_id} onChange={this.handleChange} />
                                        <span className="shape"></span>
                                        <span className="text">{meal.name}</span>
                                    </label>
                                    },this)}
                                </div>
                            </div>
                            <div className="row">
                                <div className="checkbox-btns inline">
                                    <h4>العرض مناسب</h4>
                                    {this.state.themes.map(function(theme,i){
                                        return <label htmlFor={'suitable'+(i+1)}>
                                        <input type="checkbox" name="theme"  id={'suitable'+(i+1)} value={theme.id} onChange={this.handleChange} />
                                        <span className="shape"></span>
                                        <span className="text">{theme.title}</span>
                                    </label>
                                    },this)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rooms">
                        <div className="item_header">أضف الغرف</div>
                        <div className="row">
                            <div className="room-type">
                                <div className="inline-width">
                                    <div className="select-sec">
                                        <h4 className="label">نوع الغرفة</h4>
                                        <select name="roomType" ref="roomType">
                                            <option value="">النوع</option>
                                            <option value="single">فردية</option>
                                            <option value="double">مزدوجة</option>
                                            <option value="triple">ثلاثية</option>
                                            <option value="family">عائلية</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="inline-width">
                                    <div className="select-sec">
                                        <h4 className="label">فئة الغرفة</h4>
                                        <select name="roomCategory" ref="roomCategory">
                                            <option value="0">الفئة</option>
                                            {this.state.roomsCats.map(function(room,i){
                                                return <option value={room.term_id}>{room.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="inline-width">
                                    <div className="select-sec">
                                        <h4 className="label">مطلة علي</h4>
                                        <select name="roomView" ref="roomView">
                                            <option value="0">الوجهه</option>
                                        {this.state.roomsView.map(function(room,i){
                                                return <option value={room.term_id}>{room.name}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="dates-prices">
                                <div className="labels">
                                    <span>من تاريخ</span>
                                    <span>حتي تاريخ</span>
                                    <span>سعر  العرض بالجنيه</span>
                                </div>
                                <div className="inputs">
                                    <input type="date" />
                                    <input type="date" />
                                    <input type="number" />
                                </div>
                            </div>
                            <span className="remove-room-link">حذف الغرفة</span>
                        </div>
                        <div className="new-row">
                            <a href="#">
                                <i>+</i>
                                <span>أضف نوع غرفة جديدة</span>
                            </a>
                        </div>
                    </div>
                    <div className="childrens">
                        <div className="item_header">أضف الأطفال</div>
                        <div className="row">
                            <div className="select-sec">
                                <h4 className="label">الشريحة العمرية</h4>
                                <select name="child-age">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                </select>
                                <select name="child-age">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="childrens-checkboxes">
                                <label htmlFor="first-child">
                                    <input type="checkbox" id="first-child" />
                                    <span className="shape"></span>
                                    <span className="text">الطفل الأول مجاناً</span>
                                    <span className="bg"></span>
                                </label>
                                <label htmlFor="second-child">
                                    <input type="checkbox" id="second-child" />
                                    <span className="shape"></span>
                                    <span className="text">الطفل التالي مجاناً</span>
                                    <span className="bg"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hotel-inculds">
                        <div className="item_header">نبذة عن العرض الفندقي</div>
                        <div className="content">
                            <div className="row">
                                <div className="upload">
                                    <input type="file" name="featuredImage" placeholder="صورة العرض الفندقى الأفتتاحية" accept=".png,.jpg" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="group-form">
                                    <h4>نبذة عن العرض</h4>
                                    <textarea name="description" onChange={this.handleChange}></textarea>
                                </div>
                                {/*<div className="group-form">
                                    <h4>العرض يشمل</h4>
                                    <div className="repeater">
                                        <input type="text" />
                                        <span className="remove"><img src="/img/remove-circle.png" /></span>
                                    </div>
                                    <div className="repeater">
                                        <input type="text" />
                                        <span className="remove"><img src="/img/remove-circle.png" /></span>
                                    </div>
                                    <div className="new-row">
                                        <a href="#">
                                            <i>+</i>
                                            <span>أضف بند جديد</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="group-form">
                                    <h4>العرض لايشمل</h4>
                                    <div className="repeater">
                                        <input type="text" />
                                        <span className="remove"><img src="/img/remove-circle.png" /></span>
                                    </div>
                                    <div className="repeater">
                                        <input type="text" />
                                        <span className="remove"><img src="/img/remove-circle.png" /></span>
                                    </div>
                                    <div className="new-row">
                                        <a href="#">
                                            <i>+</i>
                                            <span>أضف بند جديد</span>
                                        </a>
                                    </div>
                                </div>*/}
                            </div>
                            <div className="row terms-row">

                                <label htmlFor="terms">
                                    <input type="checkbox" id="terms" />
                                    <span className="shape"></span>
                                    <span className="text">أتفهم وأوافق علي شروط النشو والإعلان والتعديل للعروض الفندقية علي منصة ترافبيز</span>
                                    <span className="bg"></span>
                                </label>
                                <div className="actions">
                                    <input type="submit" className="publish" value="نشر عرض جديد" name="publish" onClick={this.handleChange} />
                                    <input type="submit" className="draft" value="حفظ بدون نشر" name="draft" onClick={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewDeal;
