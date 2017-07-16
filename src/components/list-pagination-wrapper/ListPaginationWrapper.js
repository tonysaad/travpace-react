import React, { Component } from "react";
import axios from "axios";
import ListView from '../ListView';
import Pagination from '../Pagination';
import TitleCity from '../TitleCity';

class ListPaginationWrapper extends Component {
  constructor() {
      super();
    this.state = {
      list: [],
      filters:  {"_page":1, "_limit": 16},
      totalCount:0
    };
    this.url = "http://localhost:4321/deals-and-packages";
  }
  updateState = (list, filters, totalCount) => {
    this.setState({ list, filters, totalCount  });
  };
  changePage = (page) =>{
    console.log(page)
    this.getList({"_page":page});
  }

    componentDidMount() {
    this.getList({});
  }

  getList = (newFilters) => {
    let allFilters = {...this.state.filters};
    for (let key in newFilters)
        allFilters[key] = newFilters[key];
    let tempURL = this.url;
    Object.keys(allFilters).forEach((filterKey, i) => {
      let filter = filterKey+"="+allFilters[filterKey];
      tempURL += i == 0 ? "?" + filter : "&" + filter;
    });
    axios.get(tempURL).then(response => { 
      console.log(response);
      this.updateState(response.data, allFilters, response.headers["x-total-count"]);
    });
  };

  render(){
    return(    
      <div className="left-side">
        <TitleCity/>
        <ListView list = {this.state.list}/>
        <Pagination totalItems= {this.state.totalCount} changePage = {this.changePage}/>
      </div>
    )
  }
}
export default ListPaginationWrapper;
