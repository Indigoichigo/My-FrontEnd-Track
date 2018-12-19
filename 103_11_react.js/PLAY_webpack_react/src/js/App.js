import React from 'react';
import Hello from './Css_MapFunc.js';
import ProptypePlugin_propTypes_defaultprops from './ProptypePlugin_propTypes_defaultprops.js';
import State_Timer from './State_Timer';
import TodoList from './TodoList';
import AjaxTest from './AjaxTest';

const App = () => {
    return (
        <div>
            <p>React here!</p>
            <Hello />
            <ProptypePlugin_propTypes_defaultprops name="Pig" />
            <State_Timer />
            <TodoList />
            {/* <AjaxTest /> */}
        </div>
    );
};
export default App;
