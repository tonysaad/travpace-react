import React, { Component } from 'react';
import TripWidget from './TripWidget';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var list =[
    <TripWidget/>,
    <TripWidget/>,
    <TripWidget/>,
    <TripWidget/>,
    <TripWidget/>,
    <TripWidget/>,
    <TripWidget/>,
    <TripWidget/>,
];

class ListView extends Component {
  render() {
    return (
      <div className="list-view">
        {list}
      </div>
    );
  }
}

export default ListView;
