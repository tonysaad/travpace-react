import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AgencyHeader from './AgencyHeader';
import AgencyFooter from './AgencyFooter';
import './about.css';

class About extends Component {
    render() {
        let TripImg = {
            // backgroundImage: `url(${this.props.info.featuredImg.thumbnail})`,
            backgroundImage: `url(/img/heros/agency-about.jpg)`,
        };
        return (
            <div className="AgencyApp">
                <AgencyHeader />
                <div className="agency-about">
                    <div className="hero" style={TripImg}></div>
                    <div className="agency-info">
                        <h1>من نحن</h1>
                        <p>يقع الفندق  فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق, مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى  ,ويضم جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة. كما يمكن للنزلاء الاستمتاع بالمأكولات اللبنانية الشهيرة في مطعم الفندق أو اكتشاف العديد من خيارات الطعام النموذجية ذات المستوى العالمي، على بعد خطوات من الفندق</p>
                    </div>
                    <div className="about-sec">
                        <div className="text">
                            <h2>رحلات رخيصة، فنادق رائعة وعروض ممتازة</h2>
                            <p>يقع الفندق  فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق, مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى  ,ويضم جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة. كما يمكن للنزلاء الاستمتاع بالمأكولات اللبنانية الشهيرة في مطعم الفندق أو اكتشاف العديد من خيارات الطعام النموذجية ذات المستوى العالمي، على بعد خطوات من الفندقيقع الفندق</p>
                            <p>فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق, مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى  ,ويضم جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة. كما يمكن للنزلاء الاستمتاع بالمأكولات اللبنانية الشهيرة في مطعم الفندق أو اكتشاف العديد من خيارات الطعام</p>
                            <Link to="/" className="btn">إظهار العروض الفندقية</Link>
                        </div>
                        <div className="pic"><img src="/img/about-pic.jpg" alt="about-pic" /></div>
                    </div>
                </div>
                <AgencyFooter />
            </div>
        );
    }
}

export default About;
