import React, { useState } from 'react';
import TodoItem from './TodoItem';
import AddTask from './AddTask';
import '../styles/styles.css';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        const newTaskObj = { name: newTask, completed: false };
        setTasks([...tasks, newTaskObj]);
        setNewTask('');
    };

    const deleteTask = (index) => {
        const taskElements = document.querySelectorAll('.todo-list-item');
        taskElements[index].classList.add('shake');

        setTimeout(() => {
            setTasks(tasks.filter((_, i) => i !== index));
        }, 300);
    };

    const toggleCompleted = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="todo-list">
            <h1 className="todo-list-title">To-Do List</h1>
            <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
            <ul className="todo-list-items">
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        deleteTask={() => deleteTask(index)}
                        toggleCompleted={() => toggleCompleted(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
