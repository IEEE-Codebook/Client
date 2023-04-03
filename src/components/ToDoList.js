import React, { useState, useEffect } from "react";
import "../css/Todolist.css"
function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [problemSet, setProblemSet] = useState([]);

  useEffect(() => {
    fetch("https://codeforces.com/api/problemset.problems")
      .then((response) => response.json())
      .then((data) => setProblemSet(data.result.problems))
      .catch((error) => console.log(error));
  }, []);

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (dropdownValue.trim() === "") return;
    const problem = problemSet.find((p) => p.name === dropdownValue);
    if (problem) {
      const link = `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`;
      setTodoItems([...todoItems, { name: dropdownValue, link: link }]);
      setDropdownValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div>
        <select value={dropdownValue} onChange={handleDropdownChange}>
          <option value="">Select a problem</option>
          {problemSet.map((problem, index) => (
            <option key={index} value={problem.name}>
              {problem.name} - {problem.index}
            </option>
          ))}
        </select>
        <button
          className="pure-material-button-contained edit-btn"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
