// import fetch from 'isomorphic-fetch'
/**
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/**
 * other constants
*/

export const VisibilityFilters = {
SHOW_ALL: 'SHOW_ALL',
SHOW_COMPLETED: 'SHOW_COMPLETED',
SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * action creators
 */
let nextTodoId = 0
export function addTodo(text) {
    return { type: ADD_TODO, id: nextTodoId++, text  }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}

export function loading() {
    return {type: 'LOADING' }
}

export function receiveBitcoin(bitcoin) {
    return {type: 'BITCOIN', bitcoin: bitcoin }
}

function teste() {
    return dispatch => {
        dispatch(loading())
        // return fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,BRL')
        return fetch('http://localhost:58584/api/todo')
            .then(response => response.json())
            .then(result => dispatch(receiveBitcoin(result.results[0].name)));
    };
}

export function fetchTodos() {
    return dispatch => {
        dispatch(teste())
    }
}