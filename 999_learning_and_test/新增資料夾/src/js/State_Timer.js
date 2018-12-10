import React, { Component } from 'React';
import PropTypes from 'prop-types';

class State_Timer extends Component {
    constructor(props) {
        super(props);
        // this._tick = this._tick.bind(this);
        this.state = {
            plusOne: 0
        }
    }

    _tick() {
        this.setState({plusOne: this.state.plusOne + 1});
    }

    componentDidMount() {
        this.interval = setInterval(this._tick.bind(this), 1000);
        console.log(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h2>每秒增加1</h2>
                <p>{this.state.plusOne}</p>
            </div>
        )
    }
}

export default State_Timer;