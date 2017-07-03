import React, { Component } from 'react';
import '../components/book-num/book-num.css';

class BookNum extends Component {
  render() {
    return (
        <div className="book-num-div">
            <p>الحجز متاح عن طريق التليفون</p>
            <a href="tel:01276789887">01276789887</a>
        </div>
    );
  }
}

export default BookNum;
