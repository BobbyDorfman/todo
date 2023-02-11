import React, { useEffect, useState } from 'react'

// Импорт библиотеки
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    useEffect(() => {
        const closeModalIfEscaped = (e) => {
            e.key === "Escape" && closeEditMode();
        }

        window.addEventListener('keydown', closeModalIfEscaped)

        return () => {
            window.removeEventListener('keydown', closeModalIfEscaped);
        }
    }, [closeEditMode])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({ ...editedTask, name: updatedTaskName})
    }

    return (
        <div 
            role="dialog" 
            aria-aria-labelledby="editTask"
            onClick={(e) => { e.target === e.currentTarget && closeEditMode()}}
        >
            <form 
                className='todo'
                onSubmit={handleFormSubmit}
            >
                <div className="wrapper">
                    <input 
                        type="text"
                        id="editTask"
                        className="input"
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                        required
                        autoFocus
                        maxLength={60}
                        placeholder="Обновите задачу"
                    />
                    <label 
                        htmlFor="editTask"
                        className='label'
                    >Обновите задачу</label>
                </div>
                <button 
                    className="btn"
                    aria-label={`Подтвердите отредактированную задачу ${updatedTaskName}`}
                    type="submit"
                >
                    <CheckIcon strokeWidth={2} height={24} width={24} />
                </button>
            </form>
        </div>
    )
}

export default EditForm