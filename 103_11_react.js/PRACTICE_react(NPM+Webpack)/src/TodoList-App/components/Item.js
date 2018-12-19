import React from 'react';


const Item = (props) => {
    return(
        <div className="item">
            {console.log(props.no)}
            {`${props.no+1}. ${props.itemText}`}
            <p className="remove"
                onClick={(e) => props.handleDeleteItem(props.itemText)}
            >
                Remove
            </p>
        </div>
    )
};

export default Item