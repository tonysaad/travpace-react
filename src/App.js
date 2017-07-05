import React, { Component } from 'react';
import AgencyDetails from './components/AgencyDetails';
import BookNum from './components/BookNum';
import TravelIncluded from './components/TravelIncluded';
import Header from './components/Header';
import Filter from './components/Filter';
import TitleCity from './components/TitleCity';
import ListView from './components/ListView';
import Pagination from './components/Pagination';
import Starts from './components/Starts';
import FavBtn from './components/FavBtn';
import QRHeader from './components/QRHeader';
import UsersWatch from './components/UsersWatch';
import Label from './components/Label';
import ListPrices from './components/ListPrices';
import TravelDates from './components/TravelDates';
import Book from './components/booking-page/Book';
import Thanks from './components/thanks-page/Thanks';
import Carousel from 'react-image-carousel';
// import ReactModal from 'react-modal';
import './css/reset.css';
import './css/base.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

let images = [
	'http://via.placeholder.com/350x150',
	'http://via.placeholder.com/350x150',
	'http://via.placeholder.com/350x150',
	'http://via.placeholder.com/350x150',
	'http://via.placeholder.com/350x150',
	'http://via.placeholder.com/350x150',
];


const App = () => (


  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/single" component={Single}/>
      <Route path="/book" component={BookNow}/>
      <Route path="/thanks" component={ThanksPage}/>
    </div>
  </Router>
)

const Home = () => (
  <div className="HomePage">
    <div className="container">
      <div className="right-side">
        <div className="sponsored">
          <span>برعاية</span>
          <img src="/img/right-sponsored.png" alt="sponsored"/>
        </div>
        <Filter/>
      </div>
      <div className="left-side">
        <TitleCity/>
        <ListView/>
        <Pagination/>
      </div>
      <div className="sponsored middle">
        <span>برعاية</span>
        <img src="/img/middle-sponsored.png" alt="sponsored"/>
      </div>
    </div>
  </div>
)

const Single = () => (
  <div className="quick-view">
    <Link to="/" className="close"></Link>
    <div className="quick-view-items">
      <Link to="/" className="arrow-switcher left"></Link>
      <div className="item">
        <div className="head">
          <QRHeader/>
        </div>
        <div className="trip-content">
          <div className="trip-right-side">
            <div className="img-carousel">
              <Carousel images={images} thumb={true} loop={true}/>
            </div>
            <div className="flight-img">
              <img src="/img/flight-img.png" alt="flight-img"/>
            </div>
            <div className="labels">
              <Label/>
              <Label/>
            </div>

            <div className="trip-data">
              <div className="item">
                <p>يقع الفندق  فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق, مركز بيروت للفن و على بعد 10 دقائق من مطار رفيق الحريرى  ,ويضم جمنازيوم مجهز تجهيزا جيدا، وساونا ومكتب الاستقبال يعمل على مدار 24 ساعة. </p>
                <p> كما يمكن للنزلاء الاستمتاع بالمأكولات اللبنانية الشهيرة في مطعم الفندق أو اكتشاف العديد من خيارات الطعام النموذجية ذات المستوى العالمي، على بعد خطوات من الفندق,كما يضم ساونا و مركز للياقة البدنية.</p>
              </div>
              <div className="item">
                <div className="program-div">
                    <h4>برامج الرحلة</h4>
                    <ul>
                        <li>
                            <h3>أول يوم - وصول</h3>
                            <p>يقع الفندق فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق.</p>
                            <div className="extra">
                            <img src="img/icons/camp.png" alt=""/>
                                <a href="#" target="_blank">المبيت في فندق ماريوت بيروت</a>
                            </div>
                        </li>
                        <li>
                            <h3>أول يوم - وصول</h3>
                            <p>يقع الفندق فى وسط مدينة بيروت على بعد 50 متر من شارع الحمرا الشهير ,الفندق رائع من حيث الموقع فهو قريب من اماكن التسوق.</p>
                            <div className="extra">
                            <img src="img/icons/camp.png" alt=""/>
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

          </div>
          <div className="trip-left-side">
            <BookNum/>
            <TravelIncluded/>
            <div className="list-prices">
              <div className="select-sec">
                  <select name="room-views-month">
                      <option value="1">العرض ساري من ١ مايو ٢٠١٧  حتي 15 مايو ٢٠١٧</option>
                      <option value="2">العرض ساري من ١ سبتمبر ٢٠١٧  حتي 15 سبتمبر ٢٠١٧</option>
                  </select>
              </div>
              <ul>
                <ListPrices/>
                <ListPrices/>
                <ListPrices/>
              </ul>
            </div>
            <TravelDates/>
            <AgencyDetails/>
            <div className="extra-logos">
              <img src="img/icons/logo-01.png" alt=""/>
              <img src="img/icons/logo-01.png" alt=""/>
            </div>
            <div className="sponsored">
              <span>برعاية</span>
              <img src="/img/right-sponsored.png" alt="sponsored"/>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="arrow-switcher right"></Link>
    </div>
  </div>
)


const BookNow = () => (
  <Book/>
)


const ThanksPage = () => (
  <Thanks/>
)

export default App
