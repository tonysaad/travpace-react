import React, { Component } from 'react';
import './dashboard.css';

class AgencyAccount extends Component {
    render() {
        return (

            <div className="ndp">
                <div className="agency-acc">
                    <div className="item_header">نبذة عن العرض الفندقي</div>
                    <div className="content">
                        <div className="group-form">
                            <h4>أسم الشركة</h4>
                            <input type="text" value="توريكو هوليدايز"/>
                        </div>
                        <div className="group-form">
                            <h4>إيميل الشركة</h4>
                            <input type="text" value="توريكو هوليدايز"/>
                        </div>
                        <div className="group-form">
                            <h4>رقم تليفون إستقبال الحجوزات</h4>
                            <input type="text" value="0123098239823"/>
                        </div>
                        <div className="group-form">
                            <h4>عنوان الشركة</h4>
                            <input type="text" value="١٩ محمد عبيد، مدينةنصر، القاهرة"/>
                        </div>
                    <div className="group-form">
                        <a href="#" className="save">حفظ التعديلات</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgencyAccount;
