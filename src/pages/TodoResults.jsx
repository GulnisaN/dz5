import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react'
import {addTodo, deleteTodo} from '../store/todosReducer'
import {NavLink} from "react-router-dom";


const TodoResults = () => {
    const [newtodo, setNewTodo] = useState('')
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    const handleDelete = (id)=>{
        dispatch(deleteTodo(id))
    }
    const handleClick = () => {
        if (newtodo.trim() !== '') {
            const data = {
                id: todos.length+1,
                title: newtodo,
                completed: false
            }
            dispatch(addTodo(data))
            setNewTodo('')
        }
    }

    // const onDeleteTodo = (todo) => {
    //     dispatch(deleteTodo(todo))
    // }

    return (
        <div>TodoList
            <input type="text" onChange={e => setNewTodo(e.target.value)} value={newtodo} />
            <button
                onClick={handleClick}
            >Добавить</button>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {todos && todos.map( t =>
                    <div key={t.id}>
                        <NavLink
                            state={t}
                            to={`\${t.id}`}
                        >{t.title}</NavLink>
                        <button onClick={()=>handleDelete(t.id)}>Удалить</button>
                    </div>

                )}
            </ul>
        </div>
    )
}
export default TodoResults