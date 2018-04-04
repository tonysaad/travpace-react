import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class PageNotFound extends Component {
  render() {
    return (
        <div className="page-not-found">
            <img src="/img/404.png" alt="page not found"/>
            <h1>لم يتم العثور على الصفحة</h1>
            <p>قد يحدث ذلك! الآن، دعنا نحاول وضعك مجددًا على الطريق الصحيح</p>
            <Link to="/" className="btn">الذهاب للصفحة الرئيسية</Link>
        </div>
    );
  }
}

export default PageNotFound;
