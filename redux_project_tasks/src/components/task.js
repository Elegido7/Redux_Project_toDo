import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../store/taskSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        aria-label={`Mark ${task.description} as ${task.isDone ? 'not done' : 'done'}`}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none', marginLeft: '8px' }}>
          {task.description}
        </span>
      )}
      <button onClick={handleEdit} style={{ marginLeft: '10px' }}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default Task;
