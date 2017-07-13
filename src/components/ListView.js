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
    this.url = "http://localhost:4321/deals-and-packages?_page=1&_limit=16";
  }
    updateState = (list) => {
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
        this.updateState(response.data);
      
    });
  }
  render() {
    let list = this.state.list.map((item, i)=>{
        return(
        <TripWidget info= {item} key = {i}/>
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
