import React, { Component } from 'React';
import PropTypes from 'prop-types';


// 這裡的箭頭函式不能用{}
const Todoitem = (props) => (
    <ul>
		{
			props.items.map((item) => (
				<li key={item.id}>{item.text}</li>
			))
		}
	</ul>
)


class TodoList extends Component {
    constructor(props) {
        super(props);
        
        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleInputChange = this._handleInputChange.bind(this);
        this.state = {
            items: [],
            text: '',
        }
        
    }

    _handleSubmit(e) {
        e.preventDefault();
        const nextItem = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
        const nextText = '';
        this.setState({items: nextItem, text: nextText});

    }

    _handleInputChange(e) {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div>
                <h2>TodoList</h2>
                <Todoitem items={this.state.items} />
                <form onSubmit={this._handleSubmit}>
                    <input onChange={this._handleInputChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                 </form>
            </div>
        )
    }
}


// const Todoitem = (props) => (
// 	<ul>
// 		{
// 			props.items.map((item) => (
// 				<li key={item.id}>{item.text}</li>
// 			))
// 		}
// 	</ul>
// )

// class TodoList extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.onChange = this.onChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 		this.state = {
// 			items: [],
// 			text: '',
// 		}
// 	}
// 	onChange(e) {
//     	this.setState({text: e.target.value});
// 	}
// 	handleSubmit(e) {
//     	e.preventDefault();
//     	const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
//     	const nextText = '';
//     	this.setState({items: nextItems, text: nextText});
// 	}
// 	render() {
// 	    return (
// 	      <div>
// 	        <h3>TODO</h3>
// 	        <Todoitem items={this.state.items} />
// 	        <form onSubmit={this.handleSubmit}>
// 	          <input onChange={this.onChange} value={this.state.text} />
// 	          <button>{'Add #' + (this.state.items.length + 1)}</button>
// 	        </form>
// 	      </div>
// 	    );
// 	}
// }



export default TodoList;