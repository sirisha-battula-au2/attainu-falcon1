import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

​const style = {
    marginTop: {
        marginTop: '5%'
    },
    showCalendar: {
        borderStyle: 'solid',
        borderWidth: '1px'
    },
    cell: {
        borderStyle: 'solid',
        borderWidth: '1px',
        height: '40px',
        cursor: 'pointer'
    }
}
​
​
class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.dayInMonths = this.dayInMonths.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.displayCalendar = this.displayCalendar.bind(this);
        this.state = {
            dateContext: moment(),
            selectedDate: "",
            toggleCalendar: false
        }
    }
    displayCalendar() {
​
        if (!this.state.toggleCalendar) {
            this.setState({
                toggleCalendar: true
            })
        }else{
            this.setState({
                toggleCalendar:false
            })
        }
​
    }
​
    handleDayClick(day) {
​
​
​
        let currentDateObject = this.state.dateContext.date(day)
        let formatedDate = currentDateObject.format("DD-MM-YYYY").toString().replace("/,/g", "-");
​
        this.setState({
            selectedDate: formatedDate
        })
    }
​
    dayInMonths() {
        let totalDayInMonth = this.state.dateContext.daysInMonth();
        let dayCellArray = [];
​
        for (var i = 1; i <= totalDayInMonth; i++) {
            dayCellArray.push(<div className="col-md-2" style={style.cell} key={i} onClick={this.handleDayClick.bind(this, i)}>{i}</div>)
        }
​
        return dayCellArray;
​
    }
​
    calendar() {
        console.log("calendar called ..")
        return (
            <div className="row" style={style.debug}>
                <h3>Calendar </h3>
                {this.dayInMonths()}
            </div>
        )
​
    }
​
​
    render() {
​
​
​
        let displayDate = this.state.toggleCalendar ? this.dayInMonths() : null;
        return (
​
            <div className="row" style={style.marginTop}>
                <div className="col-md-6 offset-md-4">
                    <input type="text" className="form-control" defaultValue={this.state.selectedDate} onFocus={this.displayCalendar} />
                    <div className="row" style={this.state.toggleCalendar ? style.showCalendar : null}>
                        {displayDate}
                    </div>
                </div>
            </div>
​
        )
    }
}
​
ReactDOM.render(<Calendar />, document.getElementById("root"));
