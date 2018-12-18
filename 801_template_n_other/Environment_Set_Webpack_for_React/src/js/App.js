import React from 'react';
import Hello from './Hello.js';

const App = () => {
    const pStyle = {
        color: '#f00',
    }

    return (
        <div>
            <Hello />
            <p style={pStyle}>React here!</p>
        </div>
    );
};
export default App;
