import React, { Component } from 'react';
import '../components/hotel-deal-widget/hotel-deal-widget.css';

class Starts extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

        <div className={`starts starts-${this.props.rating}`}><i></i><i></i><i></i><i></i><i></i></div>

    );
  }
}

export default Starts;
