import React, { Component } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import './booking-page.css';
import 'react-dates/lib/css/_datepicker.css';

class ChooseDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: null,
      to: null,
    };
  }
  handleDayClick = from => {
    const from2 = new Date(from);
    from2.setDate(from2.getDate() + this.props.days-1);
    this.setState({
      from,
      to: from2,
    });
  };
  render() {
    const { from, to } = this.state;
    return (
      <div className="ChooseDate">
        <div className="booking-small-head">
          <h3>أختار تاريخ السفر</h3>
        </div>
        <div className="booking-text-content">
          <div className="dateRange">
            <DayPicker
              numberOfMonths={2}
              selectedDays={[from, { from, to }]}
              onDayClick={this.handleDayClick}
              disabledDays={[
                new Date(2017, 7, 12),
                new Date(2017, 7, 13),
                {
                  after: new Date(2017, 8, 11),
                  before: new Date(2017, 8, 15),
                },
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChooseDate;
