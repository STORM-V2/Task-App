import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/action';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    // You can perform any initialization logic here, like fetching tasks from an API
    // For simplicity, we'll just log a message
    console.log("Tasks fetched or updated");
  }, [tasks]);

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className='mt-5'>
      <h2 className='text-center'>Tasks</h2>
      {tasks.length === 0 ? (
        <p className='text-center'><i>No Tasks available.</i></p>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="col-9">Name</th>
                <th className="col-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task.id}>
                  <td className="col-9">{task.name}</td>
                  <td className="col-3">
                    <button type='submit' className='btn btn-warning' onClick={() => handleDeleteTask(task.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TaskList;