import React, { Component } from 'react';
import './dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="DB">
                <div className="site-menubar">
                    <div className="logo">
                        <img src="/img/control-panal-logo.png" alt="control-panal-logo" />
                    </div>
                    <div className="list">
                        <div className="item active">
                            <h3>إحصائيات</h3>
                        </div>
                        <div className="item">
                            <h3>الحجوزات</h3>
                            <span className="red">191</span>
                        </div>
                        <div className="item">
                            <h3>عروض الفنادق</h3>
                            <span>123</span>
                        </div>
                        <div className="item">
                            <h3>الباقات السياحية</h3>
                            <span>23</span>
                        </div>
                        <div className="item">
                            <h3>حسابي</h3>
                        </div>
                    </div>
                </div>
                <div className="page">
                    <div className="DB-header">
                        <div className="agency-data">
                            <div className="pic">
                                <img src="/img/hotels/logo.png" alt="agency logo" />
                            </div>
                            <div className="conent">
                                <h3>توريكو هوليدايز للسياحة</h3>
                                <p className="account-plan">Free Account - <a herf="#">Upgrade Now!</a></p>
                            </div>
                        </div>
                        <div className="agency-profile">
                            <div className="pic">
                                <img src="/img/account.jpg" alt="" />
                            </div>
                            <div className="conent">
                                <h4>Hani Zakher <span>Admin</span></h4>
                                <a href="">Sign Out</a>
                            </div>
                        </div>
                    </div>
                    <div className="newDeal">
                        <div className="data">
                            <div className="item_header">أضف بيانات العرض الفندقي</div>
                            <div className="content">
                                <div className="row">
                                    <div className="full">
                                        <div className="select-sec">
                                            <label htmlFor="destination">أختار الوجهة السياحية</label>
                                            <select name="destination">
                                                <option value="sharm">شرم الشيخ</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="full">
                                        <div className="select-sec">
                                            <label htmlFor="hotel">أختار الفندق</label>
                                            <select name="hotel">
                                                <option value="Ne'ema-bay">خليج نعمة</option>
                                            </select>
                                        </div>
                                        <div className="exclamation">
                                            <img src="/img/exclamation.png" alt="exclamation" />
                                        </div>
                                    </div>
                                    <div className="full">
                                        <div className="select-sec small">
                                            <label htmlFor="dealdays">مدة أيام العرض</label>
                                            <select name="dealdays">
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="radio-btns">
                                        <h4>نظام الوجبات</h4>
                                        <label htmlFor="meal1">
                                            <input type="radio" id="meal1" />
                                            <span className="shape"></span>
                                            <span className="text">فطار فقط</span>
                                        </label>
                                        <label htmlFor="meal2">
                                            <input type="radio" id="meal2" />
                                            <span className="shape"></span>
                                            <span className="text">فطار وعشاء</span>
                                        </label>
                                        <label htmlFor="meal3">
                                            <input type="radio" id="meal3" />
                                            <span className="shape"></span>
                                            <span className="text">فطار وغذاء وعشاء</span>
                                        </label>
                                        <label htmlFor="meal4">
                                            <input type="radio" id="meal4" />
                                            <span className="shape"></span>
                                            <span className="text">إقامة شاملة جميع الوجبات والمشروبات</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="checkbox-btns inline">
                                        <h4>العرض مناسب</h4>
                                        <label htmlFor="suitable1">
                                            <input type="checkbox" id="suitable1" />
                                            <span className="shape"></span>
                                            <span className="text">للأطفال والعائلات</span>
                                        </label>
                                        <label htmlFor="suitable2">
                                            <input type="checkbox" id="suitable2" />
                                            <span className="shape"></span>
                                            <span className="text">مدن عالمية</span>
                                        </label>
                                        <label htmlFor="suitable3">
                                            <input type="checkbox" id="suitable3" />
                                            <span className="shape"></span>
                                            <span className="text">أجازات شؤاطئ</span>
                                        </label>
                                        <label htmlFor="suitable4">
                                            <input type="checkbox" id="suitable4" />
                                            <span className="shape"></span>
                                            <span className="text">مغامرة وشباب</span>
                                        </label>
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
                                            <label htmlFor="hotel">نوع الغرفة</label>
                                            <select name="hotel">
                                                <option value="double">مزدوجة</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="inline-width">
                                        <div className="select-sec">
                                            <label htmlFor="hotel">فئة الغرفة</label>
                                            <select name="hotel">
                                                <option value="double">عادية</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="inline-width">
                                        <div className="select-sec">
                                            <label htmlFor="hotel">مطلة علي</label>
                                            <select name="hotel">
                                                <option value="double">شاطئ  البحر</option>
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
                                <span>حذف الغرفة</span>
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
                                    <label>الشريحة العمرية</label>
                                    <select name="child-age">
                                        <option value="1">1</option>
                                    </select>
                                    <select name="child-age">
                                        <option value="4">4</option>
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
                                        <input type="upload" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="group-form">
                                        <h4>نبذة عن العرض</h4>
                                        <textarea name=""></textarea>
                                    </div>
                                    <div className="group-form">
                                        <h4>العرض يشمل</h4>
                                        <div className="repeater">
                                            <input type="text"/>
                                            <span className="remove"><img src="/img/remove-circle.png"/></span>
                                        </div>
                                        <div className="repeater">
                                            <input type="text"/>
                                            <span className="remove"><img src="/img/remove-circle.png"/></span>
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
                                            <input type="text"/>
                                            <span className="remove"><img src="/img/remove-circle.png"/></span>
                                        </div>
                                        <div className="repeater">
                                            <input type="text"/>
                                            <span className="remove"><img src="/img/remove-circle.png"/></span>
                                        </div>
                                        <div className="new-row">
                                            <a href="#">
                                                <i>+</i>
                                                <span>أضف بند جديد</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                
                                    <label htmlFor="terms">
                                        <input type="checkbox" id="terms" />
                                        <span className="shape"></span>
                                        <span className="text">أتفهم وأوافق علي شروط النشو والإعلان والتعديل للعروض الفندقية علي منصة ترافبيز</span>
                                        <span className="bg"></span>
                                    </label>
                                    <div className="actions">
                                        <a href="#">نشر عرض جديد</a>
                                        <a href="#">حفظ بدون نشر</a>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
