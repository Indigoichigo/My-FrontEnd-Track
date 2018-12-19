import React, { Component } from 'react';
import Header from './Header';
import Items from './Items';
import AddItem from './AddItem'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItems = this.handleDeleteItems.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        try {
            const fetchItems = localStorage.getItem('items');
            const items = JSON.parse(fetchItems);

            if (items) {
                this.setState(() => ({ items }));
            }
        } catch (e) {
            //JSON遇到undefined, null會壞掉，但不需要做甚麼事~

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.items.length !== this.state.items.length) {
            const saveItem = JSON.stringify(this.state.items);
            localStorage.setItem('items', saveItem);
        }
    }

    handleAddItem(item) {
        if(!item) {
            return 'Enter something that you want to do.'
        } else if (this.state.items.indexOf(item) > -1)
            return 'You already Enter it yet.'

        this.setState((prevState) => ({
            items: prevState.items.concat(item)
        }));
    }

    handleDeleteItems() {
        this.setState(() => ({items: []}))
    }

    handleDeleteItem(itemToRemove) {
        console.log('!')
        this.setState((prevState) => ({
            items: prevState.items.filter((item) => itemToRemove !== item)
        }))
    }

    render () {
        return (
            <div id="todolist_wrapper">
                <Header subTitle={this.props.subTitle}/>
                <AddItem
                    handleAddItem={this.handleAddItem}
                />
                <Items
                    items={this.state.items}
                    handleDeleteItems={this.handleDeleteItems}
                    handleDeleteItem={this.handleDeleteItem}
                />
            </div>
        )
    }
}

TodoList.defaultProps = {
    subTitle: 'Type your own schedule in the input.'
}

export default TodoList;