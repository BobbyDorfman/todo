import React from 'react'
// Импорт компонентов
import TaskItem from './TaskItem';

// Стили
import styles from './TaskList.module.css';

const TaskList = ({tasks, toggleTask, deleteTask, enterEditMode}) => {
  return (
    <ul className={styles.tasks}>
        {tasks.sort((a, b) => b.id - a.id).map(task => (
            <TaskItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                enterEditMode={enterEditMode}
            />
        ))
        }
    </ul>
  )
}

export default TaskList