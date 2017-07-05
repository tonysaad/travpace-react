import React, { Component } from 'react';
import TripWidget from './TripWidget';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class ListView extends Component {
  constructor(){
    super();
    this.state={
      list:[]
    }
    this.url = "http://localhost/mitchdesigns/travpace/wp-json/v1/hotel-deals-and-packages";
  }
    updateState = (list) => {
        console.log(list);
        this.setState({list:list});
    }
  componentDidMount(){
    this.getList(["type=hotel-deal"]);
  }  
  getList = (filters) => {
    let tempURL = this.url;
    filters.forEach((filter, i)=>{
      tempURL += (i == 0)? "?"+filter : "&"+filter;
    });
    axios.get(tempURL).then((response) => {
      if(response.data.status == "success"){
        console.log("hena");
        this.updateState(response.data.data);
      }
    });
  }
  render() {
    let list = this.state.list.map((item)=>{
        return(
        <TripWidget/>
        )
    });
    return(
      <div className='list-view'>
        {list}
      </div>
    )
  }
}

export default ListView;
