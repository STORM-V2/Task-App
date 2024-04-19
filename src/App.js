import React from 'react';
import TaskInput from './components/InputTask';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div>
      <h1 className='text-center mt-4'>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;