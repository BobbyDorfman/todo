import { useState } from 'react'

// Пользовательские компаненты
import CustomForm from './components/CustomForm'

function App() {
    const [count, setCount] = useState(0)

    const addTask = (task) => {
        console.log(task);
    }

    return (
        <div className="container">
            <header>
                <h1>Task List</h1>
            </header>
            <CustomForm addTask={addTask} />
        </div>
    )
}

export default App
