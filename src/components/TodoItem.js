import React from 'react';
import '../styles/styles.css';

function TodoItem({ task, deleteTask, toggleCompleted }) {
    return (
        <li className={`todo-list-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-name">{task.name}</span>

            <div className="task-buttons">
                <button className="delete-btn" onClick={deleteTask}>Delete</button>
                <button className="toggle-btn" onClick={toggleCompleted}>
                    {task.completed ? 'Undo' : 'Done'}
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
