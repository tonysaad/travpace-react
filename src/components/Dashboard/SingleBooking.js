import React, { Component } from 'react';
import './dashboard.css';
import PriceTotla from './../booking-page/PriceTotla';
import TravelIncluded from './../TravelIncluded';
import Starts from './../Starts';

class SingleBooking extends Component {
    render() {
    // let rating = (this.props.info.type === "hotel-deal") ? (<Starts rating={this.props.info.rating} />) : (<Starts />);
    // let staticTitle = (this.props.info.type === "hotel-deal") ? "فندق" : "عرض";
        return (

            <div className="single-booking">
                <div className="content">
                    <div className="close"></div>
                    <div className="head">
                        <div className="booking-date">
                            <span className="status">REQUEST</span>
                            <p>رقم الحجز  : 323443</p>
                            <p>تاريخ الحجز : ٢٣ أبريل ٢٠١٧</p>
                        </div>
                        <div className="action">
                            <a href="#" className="confirm">تأكيد حجز</a>
                            <a href="#" className="cancel">إلغاء حجز</a>
                        </div>
                    </div>
                    <div className="client-data">
                        <h4>بيانات العميل</h4>
                        <p>أسم العميل : ملاك ميخائيل سعد</p>
                        <p>رقم الموبايل : 012337389879</p>
                        <p>البريد الإلكتروني : malak@mitchdesigns.com</p>
                    </div>
                    <div className="box">
                        <div className="booking-data">
                            <h4>بيانات الحجز</h4>
                            <div className="hotel">
                                <div className="pic">
                                    <img src="/img/hotels/thumbnail.jpg" alt="hotel image" />
                                </div>
                                <div className="Info">
                                    <h2>فندق الواحة الغردقة</h2>
                                    <div className="starts starts-2"><i></i><i></i><i></i><i></i><i></i></div>
                                </div>
                            </div>
                            <p className="travel-date">تاريخ السفر ١٥ أبريل - تاريخ الرجوع ٢١ أبريل (مدة الأقامة ٧ أيام)</p>
                            <div className="client-msg">
                                <h4>رساله العميل</h4>
                                <p>يقع الفندق  فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق, مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى  ,ويضم جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة.</p>
                                <p>يقع الفندق  فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق, مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى  ,ويضم جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة.</p>
                            </div>
                        </div>
                        <PriceTotla/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleBooking;
