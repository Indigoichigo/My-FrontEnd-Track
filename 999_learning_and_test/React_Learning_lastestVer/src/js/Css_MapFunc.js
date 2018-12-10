import React, { Component } from 'react';

const list = ['HTML5', 'CSS3', 'Javascript'];

// css inline寫法
const pStyle = {
    color: '#f00',
};

class CssAndMapFunc extends Component {
    

    render() {
        return (
            <div>
                <h2 data-title='map-func'>map用法</h2>
                
                <ul>
                    {/* item是陣列的內容，index會自動增加 */}
                    {list.map(
                        (item, index) => {
                            return (<li style={pStyle} key={index}>{item}</li>);
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default CssAndMapFunc;
