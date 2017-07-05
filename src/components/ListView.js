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
    this.url = "https://gist.githubusercontent.com/omaressameldin/3572988c55805f1f71d06afd2b5b4589/raw/17327a7ba93acfb3a43e165642b917fc2da11b87/travpace.json";
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
      if(response.data.status == "success"){
        this.updateState(response.data.data);
      }
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
