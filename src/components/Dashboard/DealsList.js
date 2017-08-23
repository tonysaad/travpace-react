import React, { Component } from 'react';
import './dealslist.css';
import './dashboard.css';
import PriceTotla from './../booking-page/PriceTotla';
import TravelIncluded from './../TravelIncluded';
import Starts from './../Starts';

class DealsList extends Component {
    render() {
        // let rating = (this.props.info.type === "hotel-deal") ? (<Starts rating={this.props.info.rating} />) : (<Starts />);
        // let staticTitle = (this.props.info.type === "hotel-deal") ? "فندق" : "عرض";
        return (

            <div className="DealList">
                <div className="ListContent">
                    <div className="Head">
                        <a href="#">أضف عرض فندقي جديد</a>
                    </div>
                    <div className="Listing">
                        <div className="item">
                            <div className="pic">
                                <img src="/img/hotels/package-photo.jpg" alt="package-photo" />
                            </div>
                            <div className="content">
                                <span className="label published">تم النشر</span>
                                <h3 className="deal-name">فندق تروبيكان جراند أزور  - نبق بيه
                                <Starts />
                                </h3>
                                <p className="city">Sharm El Sheikh</p>
                                <p className="days">5 Days - Half Board</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pic">
                                <img src="/img/hotels/package-photo.jpg" alt="package-photo" />
                            </div>
                            <div className="content">
                                <span className="label no-yet">تم النشر</span>
                                <h3 className="deal-name">فندق تروبيكان جراند أزور  - نبق بيه
                                <Starts />
                                </h3>
                                <p className="city">Sharm El Sheikh</p>
                                <p className="days">5 Days - Half Board</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="pic">
                                <img src="/img/hotels/package-photo.jpg" alt="package-photo" />
                            </div>
                            <div className="content">
                                <span className="label pending">تم النشر</span>
                                <h3 className="deal-name">فندق تروبيكان جراند أزور  - نبق بيه
                                <Starts />
                                </h3>
                                <p className="city">Sharm El Sheikh</p>
                                <p className="days">5 Days - Half Board</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="deal-details">
                    <div className="deal-activity">
                        <div className="activity activity-views">
                            <h3>22,134</h3>
                            <div className="text">
                                <h4>مشاهدات</h4>
                                <p>من تاريخ النشر</p>
                            </div>
                        </div>
                        <div className="activity activity-likes">
                            <h3>28</h3>
                            <div className="text">
                                <h4>الإعجاب</h4>
                                <p>9% من المشاهدات</p>
                            </div>
                        </div>
                        <div className="activity activity-orders">
                            <h3>40</h3>
                            <div className="text">
                                <h4> الطلبات والحجز</h4>
                                <p>12% من المشاهدات</p>
                            </div>
                        </div>
                    </div>
                    <div className="deal-view">
                        <div className="pic">
                            <img src="/img/hotels/package-photo.jpg" alt="package-photo" />
                            <a href="#">تغيير الصورة</a>
                        </div>
                        <div className="content">
                            <span className="label no-yet">لم تنشر بعد</span>
                            <Starts />
                            <h3 className="deal-name"></h3>
                            <p>includs</p>
                            <hr />
                            <a href="#" className="edit-deal">تعديل العرض الفندقى</a>
                        </div>
                    </div>
                    <div className="list-pirces">
                        <div className="item">
                            <div className="head">
                                <img src="/img/icons/double-room.png" alt="double-room" />
                                <p>غرفة مزدوجة - عادية - مطلة علي البحر</p>
                            </div>
                            <div className="table-list">
                                <table>
                                    <tr>
                                        <th>من تاريخ</th>
                                        <th>حتي تاريخ</th>
                                        <th>سعر  العرض بالجنيه</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="item">
                            <div className="head">
                                <img src="/img/icons/tripple-room.png" alt="tripple-room" />
                                <p>غرفة ثلاثية فاخرة - مطلة علي حمام السباحة</p>
                            </div>
                            <div className="table-list">
                                <table>
                                    <tr>
                                        <th>من تاريخ</th>
                                        <th>حتي تاريخ</th>
                                        <th>سعر  العرض بالجنيه</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="item">
                            <div className="head">
                                <img src="/img/icons/single-room.png" alt="single-room" />
                                <p>غرفة فردية عادية - مطلة علي الحدائق</p>
                            </div>
                            <div className="table-list">
                                <table>
                                    <tr>
                                        <th>من تاريخ</th>
                                        <th>حتي تاريخ</th>
                                        <th>سعر  العرض بالجنيه</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="item">
                            <div className="head">
                                <img src="/img/icons/child.png" alt="child-room" />
                                <p className="child"><span>طفل</span>١ - ٤ سنوات</p>
                            </div>
                            <div className="table-list">
                                <table>
                                    <tr>
                                        <th>من تاريخ</th>
                                        <th>حتي تاريخ</th>
                                        <th>سعر  العرض بالجنيه</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="date">
                                                <p>01/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date">
                                                <p>31/05/2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price">
                                                <p>3,456</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="link-del">Delete this deal</a>
                </div>
            </div>
        );
    }
}

export default DealsList;
