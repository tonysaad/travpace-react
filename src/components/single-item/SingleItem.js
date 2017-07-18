import React, { Component } from 'react';
import ListPrices from '../ListPrices';
import TravelIncluded from '../TravelIncluded';
import BookNum from '../BookNum';
import Carousel from 'react-image-carousel';
import QRHeader from '../QRHeader';
import HotelFeatures from './HotelFeatures';
import Label from '../Label';
import TravelDates from '../TravelDates';
import AgencyDetails from '../AgencyDetails';
import Item from './Item';
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
                    <Item info={this.props.info}/>
                    <div onClick={() => { this.props.switchPopup('right') }} className="arrow-switcher right"></div>
                </div>
            </div>

        );
    }
}
export default SingleItem;
