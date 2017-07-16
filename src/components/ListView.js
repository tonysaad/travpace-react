import React, { Component } from 'react';
import TripWidget from './TripWidget';


class ListView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let list = this.props.list.map((item, i)=>{
        return(
        <TripWidget popupFunction={this.props.popupFunction} info= {item} key = {i}/>
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
