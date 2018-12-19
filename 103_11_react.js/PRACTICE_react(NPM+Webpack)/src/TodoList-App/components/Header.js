import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h1>{props.appTitle}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    appTitle: 'TodoList'
}

export default Header;
