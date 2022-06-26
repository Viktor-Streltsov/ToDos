import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addNewTodo, fetchTodos } from './components/store/todoSlise';


import TodoList from './components/TodoList';
import InputFeld from './components/InputFeld';

import './App.css';

function App() {
    const [text, setText] = useState('');
    const {status, error} = useSelector(state => state.todos)
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addNewTodo(text));
        setText('');
    };

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

  return (
    <div className="App">

        <InputFeld text={text} hendlInput={setText} handlSubmit={addTask}/>
        {status === 'loding' && <h2>Loading...</h2>}
        {error && <h2>An error occerd: {error}</h2>}
        <TodoList />

    </div>
  );
}

export default App;
