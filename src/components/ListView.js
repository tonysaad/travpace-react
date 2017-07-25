import React, { Component } from 'react';
import TripWidget from './TripWidget';


class ListView extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let showOne = this.props.showOne;
    let showTwo = this.props.showTwo;
    console.log(this.props.showAfter);
    console.log(this.props.showAfterTwo);
    let list = this.props.list.map((item, i)=>{
        if(!showOne && i > this.props.showAfter )
          return null;
        if(!showTwo && i > this.props.showAfterTwo )
          return null;

        return(
        <TripWidget popupFunction={this.props.popupFunction} info= {item} key = {i} index={i}/>
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
