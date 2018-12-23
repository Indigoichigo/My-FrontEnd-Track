import React from 'react';
import left_arrow from '../../images/blog/icon_gray_leftarrow.png';
import right_arrow from '../../images/blog/icon_gray_rightarrow.png';



class Day extends React.Component {
    render() {
        return <p className="day">{this.props.num}</p>
    }
}

class Calendar extends React.Component {			
    constructor(props) {
        super(props);

        this.state = {
            currentYear: this.props.info.getFullYear(),
            currentMonth: this.props.info.getMonth(),
            monthArr: '',
            monthLength: '',
        }
    }

    _calculateMonth(yearVal, monthVal) {
        const monthdFirstDayVal = new Date(yearVal, monthVal, 1).getDay();
        const monthLengthVal = new Date(yearVal, monthVal+1, 0).getDate();

        const monthArr = [];
        for ( let i = 1 ; i <= monthdFirstDayVal ; i++ ) {
            monthArr.splice(0, 0, '　');
        }

        for ( let i = 1 ; i <= monthLengthVal ; i++ ) {
            monthArr.push(i);
        }

        return {mlen: monthArr.length, mArr: monthArr}
    };

    _prevMonth() {
        if (this.state.currentMonth == 0) {
            this.setState({currentYear: this.state.currentYear -1, currentMonth: 11,});
        } else {
            this.setState({currentYear: this.state.currentYear -1});
        }
    }

    _nextMonth() {
        if (this.state.currentMonth == 11) {
            this.setState({currentYear: this.state.currentYear +1 ,currentMonth: 0});
        } else {
            this.setState({currentMonth: this.state.currentMonth +1});
        }
    }

    componentWillMount() {
        const monthArrLen = this._calculateMonth(this.state.currentYear, this.state.currentMonth);
        this.setState({monthLength: monthArrLen.mlen, monthArr: monthArrLen.mArr});
    }

    componentWillUpdate() {
        const monthArrLen = this._calculateMonth(this.state.currentYear, this.state.currentMonth);
        this.setState({monthLength: monthArrLen.mlen, monthArr: monthArrLen.mArr});
    }

    render() {
        let cells = [];

        for( let i = 0 ; i < this.state.monthLength ; i++) {				
            cells.push(<Day key={i} num={this.state.monthArr[i]}/>);
        }
        
        return (
            
            <div className="calendar_wrapper">
                <h3>Post Record</h3>
                <div className="calendar_header">
                    <div className="month_btn">
                        <img src={left_arrow} onClick={this._prevMonth.bind(this)}/>
                    </div>
                    <p className="calendar_title">
                        {this.state.currentYear}, 
                        {this.state.currentMonth + 1}
                    </p>
                    <div className="month_btn">
                        <img src={right_arrow} onClick={this._nextMonth.bind(this)}/>
                    </div>
                </div>
                <ul className="show_week">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <div className="clearfix">
                    {cells}
                </div>
            </div>
        )
    }
}


export default Calendar;