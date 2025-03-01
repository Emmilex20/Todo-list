import React from 'react';
import '../styles/styles.css';

function AddTask({ newTask, setNewTask, addTask }) {
    return (
        <form className="add-task-form" onSubmit={addTask}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add new task"
                className="add-task-input"
            />
            <button type="submit" className="add-task-btn">Add Task</button>
        </form>
    );
}

export default AddTask;
