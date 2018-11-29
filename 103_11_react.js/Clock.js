import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.setState({date: new Date()}), 1000
        );
    }

    render() {
        return (
            <div>
                <p>Hello World</p>
                <p>It's now {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;