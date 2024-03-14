import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from './actions';  

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(Array(todos.length).fill(false)); 

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleEditClick = (index) => {
    setIsEditing((prevEditing) => {
      const updatedEditing = [...prevEditing];
      updatedEditing[index] = !updatedEditing[index]; 
      return updatedEditing;
    });
  };

  const handleEditSubmit = (event, index) => {
    event.preventDefault();
    const newTodoText = event.target.elements.editInput.value;
    if (newTodoText.trim()) {

      console.log(`Update todo at index ${index} with new text: ${newTodoText}`);
      setIsEditing((prevEditing) => {
        const updatedEditing = [...prevEditing];
        updatedEditing[index] = false; 
        return updatedEditing;
      });
    }
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo, index) => (
        <li className='todoo' key={index}>
          {isEditing[index] ? (
            <form onSubmit={(event) => handleEditSubmit(event, index)}>
              <input type="text" name="editInput" defaultValue={todo} />
              <button type="submit">Sava</button>
            </form>
          ) : (
            <>
              {todo}
              <button className='adds' onClick={() => handleDelete(index)}>Delete</button>
              <button className='add' onClick={() => handleEditClick(index)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

