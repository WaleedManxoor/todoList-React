import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input) {
      // Show an alert if the input is empty
      alert('Please enter a task before adding!');
      return;
    }
    setTasks([...tasks, { id: tasks.length + 1, text: input, completed: false }]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      <div className="bg-gray-900 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md relative">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-400">My To-Do List</h1>

        {/* Input Field and Add Button */}
        <div className="flex mb-4 sm:mb-6">
          <input
            className="border border-gray-300 p-2 sm:p-3 rounded-l-md w-full focus:outline-none text-gray-800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-2 sm:p-3 rounded-r-md hover:from-gray-600 hover:to-gray-800 transition transform hover:scale-105 shadow-lg focus:outline-none"
            onClick={addTask}
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2 sm:space-y-3 max-h-60 overflow-y-auto">
          {tasks.map(task => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-3 rounded-lg shadow-md transition ${
                task.completed ? 'text-white' : 'bg-gray-800 text-white'
              }`}
            >
              <span
                className={`text-base sm:text-lg cursor-pointer ${
                  task.completed ? 'line-through text-gray-300' : ''
                }`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </span>
              <button
                className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-1 rounded-lg  hover:scale-105 shadow-lg focus:outline-none"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* No Tasks Message */}
        {tasks.length === 0 && <p className="text-gray-500 text-center mt-4">No tasks yet!</p>}
      </div>
    </div>
  );
}

export default TodoApp;
