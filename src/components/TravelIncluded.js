import React, { Component } from 'react';
import '../components/travel-included/travel-included.css';

class TravelIncluded extends Component {
  constructor(props){
    super(props);
  }
  mealPlan(plan){
    switch(plan.toLowerCase()){
      case "full board" :  return "شاملة الفطار و الغذاء و العشاء"; break;
      case "bed and breakfast":  return "شاملة الفطار"; break; 
      case "half board":  return "شاملة الفطار و العشاء"; break; 
    }
  }
  render() {
    return (
        <ul className="travel-included">
          <li className="days">{this.props.days} أيام</li>
          {/* <li className="breakfast-dinner">{this.mealPlan(this.props.mealPlan)}</li> */}
        </ul>
    );
  }
}

export default TravelIncluded;
