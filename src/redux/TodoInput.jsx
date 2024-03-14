import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions'; 

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text)); 
      setText('');
    }
  };

  return (
    <form className='todo-input' onSubmit={handleSubmit}>
      <input className='input-todo' type="text" value={text} onChange={handleChange} placeholder="Add a todo..." />
      <div>
        <button className='addd' type="submit">ADD</button>
        </div>
    </form>
  );
};

export default TodoInput;
