import React, { Component } from "react";
import axios from "axios";
import ListView from '../ListView';
import Pagination from '../Pagination';
import SingleItem from '../single-item/SingleItem';
import Search from '../Search';
import AgencyDetails from '../AgencyDetails';



class Agency extends Component {
	constructor(props) {
    super(props);
    this.state = {
      list: [],
      filters: { "page": 1, "limit": 16 ,"agency-id" : this.props.params.id},
      totalCount: 0,
      popupToggle: false,
      popupIndex: -1,
      agencyInfo: [],
    };
    this.deals_pckgs_url = "http://localhost/GIT/travpace/wp-json/v1/hotel-deals-and-packages";
  }
  updateState = (list, filters, totalCount) => {
    this.setState({ list, filters, totalCount });
  };
  changePage = (page) => {
    this.getList({ "page": page });
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
      this.props.history.replace("/agency/" + this.props.params.id);
    this.setState({ popupToggle, popupIndex })
  }

  componentDidMount() {
    this.getList({});
    this.getAgencyInfo({});

  }

  getList = (newFilters) => {
    let allFilters = { ...this.state.filters };
    for (let key in newFilters)
      allFilters[key] = newFilters[key];
    let tempURL = this.deals_pckgs_url;
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
  
  getAgencyInfo = () =>{
    console.log(`http://localhost/GIT/travpace/wp-json/v1/agency/${this.props.params.id}`);
    axios.get(`http://localhost/GIT/travpace/wp-json/v1/agency/${this.props.params.id}`).then(response => { 
      this.setState({ agencyInfo: response.data[0] });
    });
    
  }
	render(){
    let info = (this.state.agencyInfo) ? (<AgencyDetails agency={this.state.agencyInfo} page ="agency" />) : '';
		let popup = (this.state.popupToggle) ? (<SingleItem info={this.state.list[this.state.popupIndex]} popupFunction={this.populateAndTogglePopup} switchPopup={this.switchPopup} />) : '';
    
 
      return (
	      <div className="HomePage">
	        <Search updateFilters={this.getList} />
	        <div className="container">
	          <div className="left-side">
	            {info}
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


export default Agency;