<div className='text-center mt-4'>
  <h2>Tasks</h2>
  {tasks.length === 0 ? (
    <p><i>No Tasks available.</i></p>
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
                <button type='submit' className='btn btn-warning btn-block' onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>