import React, { Component } from 'react';

//React的組件(components)就像是JS的函式

// 兩種渲染方式
// 1.class渲染
// 2.function渲染

// 1.class渲染
//--------------------------------------------------------
function showName(u) {
    return `${u.firstName} ${u.lastName}` 
}

const user = {
    firstName: 'Harry',
    lastName: 'Potter'
}

class App extends Component {
    render() {
        return <h1>hello, {showName(user)}</h1>;
    }
}
//--------------------------------------------------------

// 2.function渲染
//--------------------------------------------------------
// function ShowName() {
//     const user = {
//         firstName: 'Harry',
//         lastName: 'Potter'
//     }

//     return <h1>hello, {user.firstName} {user.lastName}</h1>
// }

// const App = ShowName;
//--------------------------------------------------------

export default App;
