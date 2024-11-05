import React from 'react';
import AddTask from './components/addtask';
import ListTask from './components/listTask';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>ToDo Tasks App</h1>
      <div className="tasks">
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
};

export default App;
