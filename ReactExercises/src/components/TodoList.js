import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <br />
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No todos match your search.</p>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
