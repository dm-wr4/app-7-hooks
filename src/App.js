import React, {useState, useEffect} from 'react';
import './App.css';
import List from './Components/List'
import NewTask from './Components/NewTask'

function App() {
  const [list, setList] = useState(['a task', 'another task', 'a third task'])

  const addTask = task => {
    setList([...list, task])

    // setList((prev) => {
    //   return [...prev, task]
    // })

  }

  return (
    <div className="App">
        <NewTask addNewItem={addTask}/>
        <List listOfTodoItems={list}/>
    </div>
  );
}

export default App;
