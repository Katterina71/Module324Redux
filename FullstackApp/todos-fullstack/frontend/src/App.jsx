import { useState, useRef, useEffect } from 'react'
import './App.css'

const BASE_URL = 'http://localhost:8080/api/todos'

function App() {
 
  const [isLoading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])

 const textRef = useRef()
 const completeRef = useRef()  

useEffect(() => {
  async function getTodos (){
    try {
      setLoading(true)
      const response = await fetch(BASE_URL)
      const data = await response.json()
      console.log(data)
      setTodos(data)
    } catch (error) {
      console.error(error)
 
    }
    finally {
      setLoading(false)
      // setTimeout(()=> setLoading(false), 3000)
    }
  }
  getTodos()
},[])

 async function handleSubmit(e){
   e.preventDefault()

   const body = {
    text: textRef.current.value,
    completed: completeRef.current.checked,
    user: 'bob'
   }
   try {
    setLoading(true)
   const response = await fetch (BASE_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
   })
     const newTodo = await response.json();
     setTodos([...todos, newTodo])

   } catch (error) {
     console.error(error)
   }
   finally {
    setLoading(false)
   }


  //  console.log(JSON.stringify(body))
  //  console.log(textRef.current.value)
  //  console.log(completeRef.current.checked)
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
      { isLoading ? <p>Loading...</p> 
      :
      todos.map((todo) => 
          <p key={todo._id}
          style = {{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.text}</p>
        )}
      {JSON.stringify(todos)}
    </>
  )
}

export default App
