import React, { Component } from "react";
import axios from "axios";
import ListView from '../ListView';
// import Pagination from '../Pagination';
import TitleCity from '../TitleCity';
import SingleItem from '../single-item/SingleItem';
import Filter from '../Filter';
import Search from '../Search';
// import Header from '../Header';
import { Loader } from 'react-loaders'

class ListPaginationWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      filters: { "_page": 1, "_limit": 48 },
      totalCount: 0,
      popupToggle: false,
      showOne: false,
      showTwo: false,
      showLoader: false,
      // popupData: '',
      popupIndex: -1
    };
    this.url = "http://thebackendcrew.com:8888/deals-and-packages";
  }
  updateState = (list, filters, totalCount, keepListItems) => {
    if (keepListItems) {
      window.addEventListener("scroll", this.handleScroll);
      let oldList = [...this.state.list];
      let newList = oldList.concat(list);
//      this.setState({list: newList, filters, totalCount });
      this.setState({ showOne: false, showTwo: false, list: newList, filters, totalCount });
    }
    else
      this.setState({showOne: false, showTwo: false, list, filters, totalCount });
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



  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = 0.9 * Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && this.state.filters._page * 16 < this.state.totalCount) {
      if (this.state.showOne) {
        if (this.state.showTwo) {
          this.setState({ showLoader: false });
        }
        else {
          this.setState({ showLoader: true });
          setTimeout(() => { this.setState({ showLoader: false, showTwo: true }) }, 1000);
        }
      }
      else {
        this.setState({ showLoader: true })
        setTimeout(() => { this.setState({ showLoader: false, showOne: true }) }, 1000)
      }
    }
  }

  componentDidMount() {
    this.getList({});
    window.addEventListener("scroll", this.handleScroll);
  }


  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getList = (newFilters, keepListItems = false) => {
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
      this.updateState(response.data, allFilters, response.headers["x-total-count"], keepListItems);
    });
  };

  addItems = () => {
    this.setState({showLoader:true});
    window.removeEventListener("scroll", this.handleScroll);
    this.getList({ "_page": this.state.filters._page + 1 }, true);
  }

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
    let loader = (this.state.showLoader) ? (<Loader type="ball-clip-rotate" active />) : (<span className="loader-btn" onClick={() => { this.addItems() }}>المزيد</span>);
    if(this.state.filters._page * 48 >= this.state.totalCount )
      loader = "";
    return (
      <div className="HomePage">
        <Search updateFilters={this.getList} />
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
            <ListView showAfter={(this.state.filters._page-1)*48 + 16 - 1} showAfterTwo={(this.state.filters._page-1)*48 + 32 - 1} showOne={this.state.showOne} showTwo={this.state.showTwo} popupFunction={this.populateAndTogglePopup} list={this.state.list} />
            {loader}
            {/* <Pagination totalItems={this.state.totalCount} changePage={this.changePage} /> */}
            {popup}
          <div className="sponsored middle">
            <span>برعاية</span>
            <img src="/img/middle-sponsored.png" alt="sponsored" />
          </div>
          </div>
        </div>
      </div>

    )
  }
}
export default ListPaginationWrapper;
