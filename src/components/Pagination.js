import React, { Component } from 'react';
import '../components/pagination/pagination.css';

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = { active: 1 };
    }
    changePage(page) {
        this.props.changePage(page)
        this.setState({ active: page });
        return;
    }
    scrollUp = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        if (top > 0) {
            window.scrollTo(0, top - 15)
            setTimeout(this.scrollUp, 10)
        }
    }
    render() {
        let pages = []
        for (let i = 1; i <= this.props.totalItems / 16; i++) {
            pages.push(<li key={i} onClick={this.changePage.bind(this, i)} className={(i === this.state.active) ? "active" : ""}><a href="#">{i}</a></li>)
        }
        let prev = ((this.state.active > 1)) ? (<li onClick={(event)=>{this.changePage.bind(this, this.state.active + 1);}} className="btn pagination-prev"><a href="#" onClick={this.scrollUp}></a></li>) : '';
        let next = ((this.state.active < 10)) ? (<li onClick={this.changePage.bind(this, this.state.active + 1)} className="btn pagination-next"><a href="#"></a></li>) : '';
        return (

            <ul className="pagination">
                {prev}
                {pages}
                {next}
            </ul>
        );
    }
}

export default Pagination;
