import React, { Component } from 'react';
import '../components/hotel-deal-widget/hotel-deal-widget.css';

class FavBtn extends Component {
  render() {
    return (

        <button type="button" onClick={(event)=>{this.props.toggleLike();event.stopPropagation();}} className="fav-btn"><i className="fav-icon"></i><span>12</span></button>

    );
  }
}

export default FavBtn;
