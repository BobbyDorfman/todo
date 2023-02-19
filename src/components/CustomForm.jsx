import React, { useState } from 'react'

// Импорт библиотеки
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        });
        setTask("");
    }

    return (
        <form 
            className='todo'
            onSubmit={handleFormSubmit}
        >
            <div className="wrapper">
                <input 
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    required
                    autoFocus
                    maxLength={60}
                    placeholder="Введите задачу"
                />
                <label 
                    htmlFor="task"
                    className='label'
                >Введите задачу</label>
            </div>
            <button 
                className="btn"
                aria-label="Добавить задачу"
                type="submit"
            >
                <PlusIcon />
            </button>
        </form>
    )
}

export default CustomForm