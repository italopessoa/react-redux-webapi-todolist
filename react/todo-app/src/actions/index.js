import axios from 'axios'
import fetch from 'isomorphic-fetch'
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
    dispatch => {
        dispatch(loading)

        console.log('sdasdasd')
        return fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,BRL')
            .then(response => response.json())
            .then(r=>dispatch(receiveBitcoin(r.BTC.BRL)))
    }

}
export function fetchTodos(){
    return (dispatch, getState) => {
        return dispatch(teste())
    }
    // return axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,BRL')
    // .then(response => dispatch(receiveBitcoin((1.0000 / response.data.BTC.BRL) * 1000000))) 
    // return {type: 'LOADING' }
}