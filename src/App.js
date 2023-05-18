import { useEffect, useState } from 'react';
import './App.css';
import { TodoItem } from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("")

  const createTodo = () => {
    if(inputValue){
      setTodos([...todos, {text: inputValue, complete: true}])
      setInputValue("")
      localStorage.setItem('todos', JSON.stringify([...todos, {text: inputValue, complete: true}]))
    }
  }

  useEffect(() =>{
    let localTodos = JSON.parse(localStorage.getItem('todos'))
    setTodos(localTodos)
  }, [])

  const setLocal = (arr) => {
    localStorage.setItem('todos', JSON.stringify(arr))
  }

  const RemoveTodo = (id) => {
    let arr = [...todos]
    arr.splice(id, 1)
    setTodos(arr)
    setLocal(arr)
  }

  const CompleteTodo = (id) => {
    let arr = [...todos]
    arr[id].complete = !arr[id].complete
    setTodos(arr)
    setLocal(arr)
  }

  return (
    <div className="App">
      <div>
      <input className='Erbol' type='text' value={inputValue} placeholder='type smt' onChange={(e) => setInputValue(e.target.value)}/>
      <button className='tunuk' onClick={createTodo}>Add</button>
      </div>
      {
        todos.map((el, id) => {
          return <TodoItem todo={el} remove={RemoveTodo} completeTodo={CompleteTodo} id={id}/>
        })
      }
    </div>
  );
}

export default App;
