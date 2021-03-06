import React, { Component } from 'react';
import '../components/hotel-deal-widget/hotel-deal-widget.css';

class FavBtn extends Component {
  render() {
    return (

        <button type="button" onClick={(event)=>{this.props.toggleLike();event.stopPropagation();}} className={(this.props.liked)? 'fav-btn clicked' : 'fav-btn'}><i className='fav-icon'></i></button>

    );
  }
}

export default FavBtn;
