import TodoInput from './redux/TodoInput';
import TodoList from './redux/TodoList';
import './App.css'

const App = () => {
  return (

      <div className=" ">
        <h1 className="todo">Todo List</h1>
        <div className='line'></div>
        <TodoInput />
        <TodoList />
      </div>

  );
};

export default App;

