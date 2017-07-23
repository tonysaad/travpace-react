import React, { Component } from "react";
import axios from "axios";
import ListView from '../ListView';
import Pagination from '../Pagination';
import TitleCity from '../TitleCity';
import SingleItem from '../single-item/SingleItem';
import Filter from '../Filter';
import Header from '../Header';

class ListPaginationWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filters: { "_page": 1, "_limit": 16 },
      totalCount: 0,
      popupToggle: false,
      // popupData: '',
      popupIndex: -1
    };
    this.url = "http://thebackendcrew.com:8888/deals-and-packages";
  }
  updateState = (list, filters, totalCount) => {
    this.setState({ list, filters, totalCount });
  };
  changePage = (page) => {
    this.getList({ "_page": page });
  }
  switchPopup = (direction) => {
    if (this.state.popupIndex + 1 < this.state.list.length && direction === 'left') {
      this.props.history.replace("/" + this.state.list[this.state.popupIndex + 1].id);
      this.setState({ popupIndex: this.state.popupIndex + 1 })
    }
    if (this.state.popupIndex - 1 >= 0 && direction === 'right') {
      this.props.history.replace("/" + this.state.list[this.state.popupIndex - 1].id);
      this.setState({ popupIndex: this.state.popupIndex - 1 })
    }
  };
  populateAndTogglePopup = (popupToggle, popupIndex = -1) => {
    document.body.classList.toggle('no-scroll', popupToggle)
    if (popupToggle === true)
      this.props.history.push("/" + this.state.list[popupIndex].id);

    else
      this.props.history.replace("/");
    this.setState({ popupToggle, popupIndex })
  }

  componentDidMount() {
    this.getList({});
  }

  getList = (newFilters) => {
    let allFilters = { ...this.state.filters };
    for (let key in newFilters)
      allFilters[key] = newFilters[key];
    let tempURL = this.url;
    Object.keys(allFilters).forEach((filterKey, i) => {
      let filter = ""
      if (Array.isArray(allFilters[filterKey])) {
        allFilters[filterKey].forEach((f, i) => {
          filter += (i === 0) ? filterKey + "=" + f : "&" + filterKey + "=" + f
        })
      }
      else
        filter = filterKey + "=" + allFilters[filterKey];
      tempURL += i === 0 ? "?" + filter : "&" + filter;
    });
    console.log(tempURL);
    axios.get(tempURL).then(response => {
      this.updateState(response.data, allFilters, response.headers["x-total-count"]);
    });
  };

  //   getList = (newFilters) => {
  //   let allFilters = { ...this.state.filters };
  //   for (let key in newFilters)
  //     allFilters[key] = newFilters[key];
  //   let tempURL = this.url;
  //   Object.keys(allFilters).forEach((filterKey, i) => {
  //     let filter = filterKey + "=" + allFilters[filterKey];
  //     console.log(allFilters[filterKey])
  //     tempURL += i === 0 ? "?" + filter : "&" + filter;
  //   });

  //   axios.get(tempURL).then(response => {
  //     this.updateState(response.data, allFilters, response.headers["x-total-count"]);
  //   });
  // };


  render() {
    let popup = (this.state.popupToggle) ? (<SingleItem info={this.state.list[this.state.popupIndex]} popupFunction={this.populateAndTogglePopup} switchPopup={this.switchPopup} />) : '';
    return (
      <div className="HomePage">
        <Header updateFilters={this.getList} />
        <div className="container">
          <div className="right-side">
            <div className="sponsored">
              <span>برعاية</span>
              <img src="/img/right-sponsored.png" alt="sponsored" />
            </div>
            <Filter updateFilters={this.getList} />
          </div>
          <div className="left-side">
            <TitleCity />
            <ListView popupFunction={this.populateAndTogglePopup} list={this.state.list} />
            <Pagination totalItems={this.state.totalCount} changePage={this.changePage} />
            {popup}
          </div>
          <div className="sponsored middle">
            <span>برعاية</span>
            <img src="/img/middle-sponsored.png" alt="sponsored" />
          </div>
        </div>
      </div>

    )
  }
}
export default ListPaginationWrapper;
