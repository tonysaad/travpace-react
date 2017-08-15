import React, { Component } from 'react';
import './dashboard.css';

class NewPackage extends Component {
    render() {
        return (

            <div className="ndp">
                <div className="data dataPackage">
                    <div className="item_header">أضف بيانات الرحلة السياحية</div>
                    <div className="content">
                        <div className="row">
                            <div className="full">
                                <div className="form-group">
                                    <h4 className="label">عنوان الرحلة</h4>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="full ie ie_3">
                                <h4 className="label">أختار الوجهة السياحية</h4>
                                <div className="select-sec">
                                    <select name="city1">
                                        <option value="بانكوك">بانكوك</option>
                                        <option value="بانكوك">بانكوك</option>
                                        <option value="بانكوك">بانكوك</option>
                                    </select>
                                </div>
                                <div className="select-sec">
                                    <select name="city1">
                                        <option value="بانكوك">بانكوك</option>
                                        <option value="بانكوك">بانكوك</option>
                                        <option value="بانكوك">بانكوك</option>
                                    </select>
                                </div>
                                <div className="new-city">
                                    <a href="#">
                                        <i>+</i>
                                        <span>أضف مدينة</span>
                                    </a>
                                </div>
                            </div>
                            <div className="full">
                                <div className="select-sec small">
                                    <label htmlFor="packagedays">مدة أيام الرحلة</label>
                                    <select name="packagedays">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="checkbox-btns block">
                                <h4>شاملة</h4>
                                <label htmlFor="packageinc1">
                                    <input type="checkbox" id="packageinc1" />
                                    <span className="shape"></span>
                                    <span className="text">للأطفال والعائلات</span>
                                </label>
                                <label htmlFor="packageinc2">
                                    <input type="checkbox" id="packageinc2" />
                                    <span className="shape"></span>
                                    <span className="text">مدن عالمية</span>
                                </label>
                                <label htmlFor="packageinc3">
                                    <input type="checkbox" id="packageinc3" />
                                    <span className="shape"></span>
                                    <span className="text">أجازات شؤاطئ</span>
                                </label>
                                <label htmlFor="packageinc4">
                                    <input type="checkbox" id="packageinc4" />
                                    <span className="shape"></span>
                                    <span className="text">مغامرة وشباب</span>
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="checkbox-btns inline">
                                <h4>العرض مناسب</h4>
                                <label htmlFor="packagesuitable1">
                                    <input type="checkbox" id="packagesuitable1" />
                                    <span className="shape"></span>
                                    <span className="text">للأطفال والعائلات</span>
                                </label>
                                <label htmlFor="packagesuitable2">
                                    <input type="checkbox" id="packagesuitable2" />
                                    <span className="shape"></span>
                                    <span className="text">مدن عالمية</span>
                                </label>
                                <label htmlFor="packagesuitable3">
                                    <input type="checkbox" id="packagesuitable3" />
                                    <span className="shape"></span>
                                    <span className="text">أجازات شؤاطئ</span>
                                </label>
                                <label htmlFor="packagesuitable4">
                                    <input type="checkbox" id="packagesuitable4" />
                                    <span className="shape"></span>
                                    <span className="text">مغامرة وشباب</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prices-dates prices-dates_p">
                    <div className="item_header">التواريخ والأسعار</div>
                    <div className="row">
                        <div className="labels">
                            <span>من تاريخ السفر</span>
                            <span>سعر  الرحلة بالجنيه</span>
                        </div>
                        <div className="inputs">
                            <input type="date" />
                            <input type="number" />
                            <div className="action-input">
                                <span className="remove"><img src="/img/remove-circle.png" /></span>
                                <span className="add"><img src="/img/remove-circle.png" /></span>
                            </div>
                        </div>
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
                            </div>
                        </div>
                        <div className="row terms-row">

                            <label htmlFor="terms">
                                <input type="checkbox" id="terms" />
                                <span className="shape"></span>
                                <span className="text">أتفهم وأوافق علي شروط النشو والإعلان والتعديل للعروض الفندقية علي منصة ترافبيز</span>
                                <span className="bg"></span>
                            </label>
                            <div className="actions">
                                <input type="submit" className="publish" value="نشر عرض جديد"/>
                                <input type="submit" className="draft" value="حفظ بدون نشر"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPackage;
