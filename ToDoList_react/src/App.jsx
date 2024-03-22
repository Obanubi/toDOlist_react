import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'



function App() {
  const [task, settask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      settask([...task, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const updatedtask = task.filter((_, i) => i !== index);
    settask(updatedtask);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        
        onChange={(anything) => setInputValue(anything.target.value)}
        placeholder="Add task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {task.map((todo, index) => (
          <li>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
