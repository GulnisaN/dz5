import axios from "axios";

const initialState = {
    todos: []
}

const todosReducer = (state= initialState, action) => {
    if (action.type == 'ADD_TODO') {
        return {...state, todos: [...state.todos, action.payload ]}
    }

    if (action.type == 'REMOVE_TODO') {
        const newTodos = state.todos.filter(el=> el.id !== action.payload)
        return {...state, todos: newTodos}
    }
    if(action.type == 'SET_TODOS') {
        return {...state, todos: action.payload}
    }
    if (action.type == 'EDIT_TODO') {
        state.todos.map(el=>{
            if(el.id === action.payload.id) el.title = action.payload.title
        })
        }
        return state
}

export const fetchTodos = () => {
    return async (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(
                resp => dispatch(setTodos(resp.data))
            )

    }
}


export const asyncEditTodo = (data) => {
    return async (dispatch) => {
        axios.patch(`https://jsonplaceholder.typicode.com/todos/${data.id}`)
            .then(dispatch({
                    type: 'EDIT_TODO',
                    payload: data
                })
            )

    }
}

const setTodos = payload => ({type: 'SET_TODOS', payload})

export const addTodo = payload => (
    {type: 'ADD_TODO', payload})

export const deleteTodo = payload => (
    {type: 'REMOVE_TODO', payload}
)

export default todosReducer


