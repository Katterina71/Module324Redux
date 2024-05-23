import { useState, useRef } from 'react'
import './App.css'

let starterTodos = [
  {
    text: "finish frontend",
    complete: false,
    user: 'bob'
  },
  {
    text: "sleep",
    complete: true,
    user: 'bob'
  }
]

function App() {
 
  const [todos, setTodos] = useState(starterTodos)

 const textRef = useRef()
 const completeRef = useRef()  

 async function handleSubmit(e){
   e.preventDefault()
   console.log(textRef.current.value)
   console.log(completeRef.current.checked)
 } 
  return (
    <>
      <h1>Todo List</h1>
      
      <form onSubmit={handleSubmit} >
      <p>I want to: </p>
        <label>
          <input type="text" ref={textRef} />
        </label>
        <label>
          <input type="checkbox" ref={completeRef}/>
        </label>
        <br/> <br/>
        <button>Add ToDo</button>
      </form>
      <br/> <br/>
     
      {todos.map((todo) => 
          <p key={todo.text}
          style = {{textDecoration: todo.complete ? 'line-through' : ''}}>{todo.text}</p>
        )}
    </>
  )
}

export default App
