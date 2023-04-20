import './App.css'
import {Todolist} from "./conponents/Todolist";

function App() {

    const title1 = 'Список 1'

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]

    const removeTask = () => {
        console.log('test')
    }

    return <>
        <Todolist
            title={title1}
            tasks={tasks1}
            removeTask={removeTask}
        />
    </>
}

export default App
