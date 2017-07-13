import React, { Component } from 'react';
import '../components/pagination/pagination.css';

class Pagination extends Component {
  constructor(){
      super()
      this.state = {active: 1}
  }
    changePage(page){
        this.setState({active: page});
        return;
    }
  render() {
      let pages = []
    for(let i = 1; i<= 10; i++){
        pages.push(<li onClick = {this.changePage.bind(this,i)} className={(i === this.state.active)? "active" : ""}><a href="#">{i}</a></li>)
    }
    let prev = ((this.state.active >1))? (<li onClick = {()=>{this.setState({active: this.state.active - 1})}} className="btn pagination-prev"><a href="#"></a></li>) : '';
    let next = ((this.state.active <10))? (<li onClick = {()=>{this.setState({active: this.state.active + 1})}} className="btn pagination-next"><a href="#"></a></li>) : '';
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
