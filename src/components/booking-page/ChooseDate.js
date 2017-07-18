import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import './booking-page.css';
import 'react-dates/lib/css/_datepicker.css';

class ChooseDate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (

      <div className="ChooseDate">
        <div className="booking-small-head">
          <h3>أختار تاريخ السفر</h3>
        </div>
        <div className="booking-text-content">
          <DayPickerRangeController
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
          />
        </div>
      </div>

    );
  }
}

export default ChooseDate;
