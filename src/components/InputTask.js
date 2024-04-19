import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';


const TaskInput = () => {
  const [taskName, setTaskName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName('');
    }
  };

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className='container'>
      <div className='justify-content-center input-group'>
        <input
          type="text"
          placeholder="Enter Task"
          value={taskName}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask} type='submit' className='btn btn-primary'>Add Task</button>
      </div>
    </div>
  );
};

export default TaskInput;