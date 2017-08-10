import { combineReducers } from 'redux'
import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed:false
                }
            ]
            case TOGGLE_TODO:
                return state.map((todo, index) => {
                    if (index === action.index) {
                    console.log(index + " - indice")
                        //console.log(action.index+ " - " + todo.id)
                        return Object.assign({}, todo,  {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            case 'GET_TODOS':
                //console.log(action)
                return state;
            case 'LOADING':
                console.log('loading todos')    
                // console.log(action.bitcoin)
                return state;
            case 'BITCOIN':
                console.log('SHOW BITCOIN')
                console.log(action.bitcoin)
                return state;
        default:
            return state;
    }
}

/*function todos(state =[], action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({} ,state, {
                todos:[
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
            case TOGGLE_TODO:
                return Object.assign({}, state, {
                    todos: state.todos.map((todo, index) => {
                        if (index === action.index) {
                            return Object.assign({}, todo,  {
                                completed: !todo.completed
                            })
                        }
                        return todo
                    })
                })
        default:
            return state;
    }
}*/
/*const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}*/

const todoApp = combineReducers ({ 
    visibilityFilter,
    todos
})

export default todoApp

/*function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
    
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state, {
                visibilityFilter:action.filter
            })
        case ADD_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos,action)
            })
        default:
            return state;
    }
    return state;
}*/

