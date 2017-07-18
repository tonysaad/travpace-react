import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import './booking-page.css';
import 'react-dates/lib/css/_datepicker.css';

class ChooseDate extends Component {
  render() {
    return (

        <div className="ChooseDate">
          <div className="booking-small-head">
            <h3>أختار تاريخ السفر</h3>
          </div>
          <div className="booking-text-content">
<DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>
          </div>
        </div>

    );
  }
}

export default ChooseDate;
