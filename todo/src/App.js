import React from 'react';
import './App.css';
import Header from './components/header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
// import Task from './components/Task';

// function based

const App = () =>{
// useState is used to to track state or data or properties in a function
const[tasks, setTasks] = useState([
  {
      id:1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30',
      reminder: true,
  },

  {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm ',
      reminder: true,
  },

  {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  },
])  
// Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id ===id ? {...task, reminder : !task.reminder} : task))
}


// Add Task
const addTask =(task) =>{
  console.log(task);
}


// Delete Task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

  return(
    <div className="container">
      <Header title='Rushi'/>
      <AddTask onAdd={AddTask}/>
      {tasks.length > 0? (<Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Task to show')}
      
    </div>
  )
}

// function App() {
//   return (
//   <>
//   <Header/>
//   </>
//   );
// }


// class based

// class App extends React.Component{
//   render(){
//     return <h1>Hello from class</h1>
//   }
// }

export default App;
