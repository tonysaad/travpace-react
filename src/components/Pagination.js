import React, { Component } from 'react';
import '../components/pagination/pagination.css';

class Pagination extends Component {
  render() {
    return (

    <ul className="pagination">
        <li className="btn pagination-prev">
            <a href="#"></a>
        </li>
        <li><a href="#">1</a></li>
        <li className="active"><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li className="btn pagination-next">
            <a href="#"></a>
        </li>
    </ul>
    );
  }
}

export default Pagination;
