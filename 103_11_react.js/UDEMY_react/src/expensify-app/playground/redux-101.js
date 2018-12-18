import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({resetBy = 0} = {}) => ({
    type: 'RESET',
    resetBy
});

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy }
        case 'DECREMENT':
            return { count: state.count - action.decrementBy }
        case 'RESET':
            return { count: 0 }
        default:
            return state;
    }
}

const store = createStore(countReducer);



store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())
store.dispatch(decrementCount({decrementBy: 3}))
store.dispatch(decrementCount())
store.dispatch(resetCount());



