import React, { Component } from 'react';
import './dashboard.css';

class ManageBookings extends Component {
    render() {
        return (

            <div className="manage-bookings">
                <h1>حجوزات العروض الفندقية</h1>
                <div className="filters">
                    <div className="right">
                        <div className="select-sec">
                            <h4 className="label">نوع الحجوزات</h4>
                            <select name="book-type">
                                <option value="book1">العروض الفندقية</option>
                                <option value="book2">الباقات السياحية</option>
                            </select>
                        </div>
                        <div className="select-sec">
                            <h4 className="label">حالة الحجز</h4>
                            <select name="book-status">
                                <option value="status1">INSTANT</option>
                                <option value="status2">REQUEST</option>
                            </select>
                        </div>
                    </div>
                    <div className="left">
                        <div className="select-sec">
                            <h4 className="label">عرض فترة</h4>
                            <select name="view-period">
                                <option value="period1">من آخر ٣٠ يوم</option>
                                <option value="period2">من آخر ٦٠ يوم</option>
                            </select>
                        </div>
                        <ul className="pagination">
                            <li className="btn pagination-prev"><a href="#"></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#" className="active">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li className="btn pagination-next"><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>رقم الحجز</th>
                            <th>تاريخ الحجز</th>
                            <th>أسم الحاجز</th>
                            <th>رقم المحمول</th>
                            <th>العرض الفندقي</th>
                            <th>تاريخ السفر</th>
                            <th>الغرف</th>
                            <th>قيمة الحجز (جنيه)</th>
                            <th></th>
                        </tr>
                        <tr className="data">
                            <td>
                                <div className="booking-number">
                                    <span className="num">4326</span>
                                    <p className="status err">instant
                                        <span>بطاقة لا تعمل</span>
                                    </p>
                                </div>
                            </td>
                            <td>
                                <div className="booking-date">
                                    <p>٢٣ أبريل ٢٠١٧</p>
                                </div>
                            </td>
                            <td>
                                <div className="client-name">
                                    <p>ملاك ميخائيل</p>
                                </div>
                            </td>
                            <td>
                                <div className="client-phone">
                                    <p>0123456789</p>
                                </div>
                            </td>
                            <td>
                                <div className="hotel-deal">
                                    <div className="pic">
                                        <img src="/img/hotels/thumbnail.jpg" alt="hotel kza kza"/>
                                    </div>
                                    <div className="content">
                                        <p>فندق تروبيكان جراند أزور  - نبق بيه</p>
                                        <p> Days - Half Board</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="travel-date">
                                    <p>١٢ يونيو ٢٠١٧</p>
                                </div>
                            </td>
                            <td>
                                <div className="rooms">
                                    <p>٢ غرفة <span className="extras">+ ١ طفل</span></p>
                                </div>
                            </td>
                            <td>
                                <div className="booking-price">
                                    <h5>7,800</h5>
                                    <p>LAST MINUTE<br/>[DISCOUNT COPOUN]</p>
                                </div>
                            </td>
                            <td>
                                <div className="booking-check">
                                    <div className="check">
                                        <img src="/img/icons/check-green.png" alt="check-green"/>
                                        <span>حجز مؤكد</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default ManageBookings;
