import React, { Component } from 'react';
import ListPrices from '../ListPrices';
import TravelIncluded from '../TravelIncluded';
import BookNum from '../BookNum';
import Carousel from 'react-image-carousel';
import QRHeader from '../QRHeader';
import Label from '../Label';
import TravelDates from '../TravelDates';
import AgencyDetails from '../AgencyDetails';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.info);

    }
    itenerary() {
        return (
            <div>
                <div className="item">
                    <div className="program-div">
                        <h4>برامج الرحلة</h4>
                        <ul>
                            <li>
                                <h3>أول يوم - وصول</h3>
                                <p>يقع الفندق فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق.</p>
                                <div className="extra">
                                    <img src="img/icons/camp.png" alt="" />
                                    <Link to="#" target="_blank">المبيت في فندق ماريوت بيروت</Link>
                                </div>
                            </li>
                            <li>
                                <h3>أول يوم - وصول</h3>
                                <p>يقع الفندق فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق.</p>
                                <div className="extra">
                                    <img src="img/icons/camp.png" alt="" />
                                    <p>المبيت في كامب</p>
                                </div>
                            </li>
                            <li>
                                <h3>أول يوم - وصول</h3>
                                <p>يقع الفندق فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <div className="list-in-package-div">
                        <h4>برامج الرحلة</h4>
                        <ul>
                            <li>يقع الفندق فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير</li>
                            <li>الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق</li>
                            <li>مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى</li>
                            <li>جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        let images = this.props.info.hotel.gallery.map((image, index) => {
            return image.original;
        })
        let itenerary = (this.props.info.type == "hotel") ? '' : this.itenerary();
        console.log("images");
        console.log(images);
        return (
            <div className="quick-view">
                <div onClick={() => { this.props.popupFunction(false) }} className="close"></div>
                <div className="quick-view-items">
                    <div onClick={() => { this.props.switchPopup('left') }} className="arrow-switcher left"></div>
                    <div className="item">
                        <div className="head">
                            <QRHeader info={this.props.info} />
                        </div>
                        <div className="trip-content">
                            <div className="trip-right-side">
                                <div className="img-carousel">
                                    <Carousel images={images} thumb={true} loop={true} />
                                </div>
                                <div className="flight-img">
                                    <img src="/img/flight-img.png" alt="flight-img" />
                                </div>
                                <div className="labels">
                                    <Label />
                                    <Label />
                                </div>

                                <div className="trip-data">
                                    <div className="item">
                                        <p>{this.props.info.hotel.description}</p>
                                    </div>

                                </div>

                            </div>
                            <div className="trip-left-side">
                                <BookNum phone={this.props.info.agency.phone}/>
                                <TravelIncluded days = {this.props.info.days} mealPlan = {this.props.info.mealPlan}/>
                                <div className="list-prices">
                                    <div className="select-sec">
                                        <select name="room-views-month">
                                            <option value="1">العرض ساري من ١ مايو ٢٠١٧  حتي 15 مايو ٢٠١٧</option>
                                            <option value="2">العرض ساري من ١ سبتمبر ٢٠١٧  حتي 15 سبتمبر ٢٠١٧</option>
                                        </select>
                                    </div>
                                    <ul>
                                        <ListPrices />
                                        <ListPrices />
                                        <ListPrices />
                                    </ul>
                                </div>
                                <TravelDates />
                                <Link to={"/book/"+this.props.info.id} className="btn">أحجز الآن</Link>
                                <AgencyDetails agency={this.props.info.agency}/>
                                <div className="extra-logos">
                                    <img src="img/icons/logo-01.png" alt="" />
                                    <img src="img/icons/logo-01.png" alt="" />
                                </div>
                                <div className="sponsored">
                                    <span>برعاية</span>
                                    <img src="/img/right-sponsored.png" alt="sponsored" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={() => { this.props.switchPopup('right') }} className="arrow-switcher right"></div>
                </div>
            </div>

        );
    }
}
export default SingleItem;
