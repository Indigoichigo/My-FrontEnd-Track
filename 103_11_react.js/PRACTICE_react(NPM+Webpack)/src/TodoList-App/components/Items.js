import React from 'react';
import Item from './Item';

const Items = (props) => {
    return(
        <div id="item_wrapper">
            
            {
                props.items.map((item,index) => (
                    <Item
                        no={index}
                        key={index}
                        itemText={item}
                        handleDeleteItem={props.handleDeleteItem}
                    />
                ))
            }
            <button id="remove_all" onClick={props.handleDeleteItems}>Remove All</button>
        </div>
    )
};

export default Items 