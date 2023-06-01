import { useState } from "react"
import { useDispatch } from "react-redux"
import {useLocation, useNavigate, useParams} from "react-router-dom"
import { asyncEditTodo } from "../store/todosReducer"


const EditTodo = () => {
    const location = useLocation()
    const [title, setTitle] = useState(location.state.title)
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const buttonClick = () => {
        const newTodo = {
            id: location.state.id,
            title: title,
            completed: false
        }
        dispatch(asyncEditTodo(newTodo))
        navigate('/results')
    }

    return (
        <div>EditTodo
            <h3>Изменить todo {location.state.id}</h3>
            <input
                value={title}
                type="text"
                placeholder="title"
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={buttonClick}>Изменить</button>
        </div>
    )
}
export default EditTodo