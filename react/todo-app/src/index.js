import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import todoApp from './reducers/todo.js'
import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

let store = createStore(todoApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch(addTodo("Learn about actions"))
// store.dispatch(addTodo("Learn aboun reducers"))
// store.dispatch(addTodo("Learn about store"))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
