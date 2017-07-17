import React, { Component } from 'react';
import '../components/book-num/book-num.css';

class BookNum extends Component {
  render() {
    return (
        <div className="book-num-div">
            <p>الحجز متاح عن طريق التليفون</p>
            <a href={"tel:" + this.props.phone}>{this.props.phone}</a>
        </div>
    );
  }
}

export default BookNum;
