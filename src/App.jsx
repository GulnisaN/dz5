import './App.css'
import TodoList from "./pages/TodoList.jsx";
// import Counter from "./pages/Counter.jsx";
import EditTodo from "./pages/EditTodo.jsx";
import {Routes, Route} from "react-router-dom";
import TodoResults from "./pages/TodoResults.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<TodoList/>}/>
            <Route path="/results" element={<TodoResults/>}/>
            <Route path="/results/:id" element={<EditTodo/>}/>
            <Route path="/:id" element={<EditTodo/>}/>
            {/*<TodoList />*/}
             {/*<Counter />*/}
            {/* счетчик не будет работать потому что мы отвязали его редьсер от стора */}
        </Routes>
    )
}

export default App