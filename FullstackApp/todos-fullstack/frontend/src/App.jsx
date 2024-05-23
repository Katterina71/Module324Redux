import { useState, useRef, useEffect } from 'react'
import './App.css'



function App() {
 
  const [todos, setTodos] = useState([])

 const textRef = useRef()
 const completeRef = useRef()  

useEffect(() => {
  async function getTodos (){
    try {
      const response = await fetch('http://localhost:8080/api/todos')
      const data = await response.json()
      console.log(data)
      setTodos(data)
    } catch (error) {
      console.error(error)
    }
  }
  getTodos()
},[])

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
