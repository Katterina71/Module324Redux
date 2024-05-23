//wrong pass
import "../App.css";
//not import useState
import { useState } from "react";
//export without {} for default 
import TodoList from './components/TodoList'
 
export default function Main() {
  //not null in useState for input, and array for todos
  let [todos, setTodos] = useState([]);
  let [input, setInput] = useState();
  let [listType, setListType] = useState("all");

  function addToList() {
    let item = {
      text: input,
      completed: false,
      id: crypto.randomUUID() // 2188jd-293483-dfllkaksldf
    };

    let newTodos = [...todos, item];

    setTodos(newTodos);
    setInput("");
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  function deleteTodo(id) {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  function completeTodo(id) {
    let newTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );

    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todos ({listType})</h1>

      <TodoList
      //wrong parameters
        // todos={todos}
        // listType={listType}
        // completeTodo={completeTodo}
        // deleteTodo={deleteTodo}
        
        todos={todos}
        listType={listType}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      {/* misspelling onChange */}
      <input value={input} onChange={handleChange} /> 
      <button onClick={addToList}>Submit</button>

      <br />
      <br />

      <button onClick={() => setListType("all")}>All</button>
      <button onClick={() => setListType("complete")}>Completed</button>
      <button onClick={() => setListType("incomplete")}>Incomplete</button>
    </div>
  );
}

