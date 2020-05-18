import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

//const Todo = ({ todo }) => <div className='todo'>{todo.text}</div>;

function App() {
	const [todos, setTodos] = useState([
		{ text: 'Learn about React', isCompleted: false },
		{ text: 'Meet friend for lunch', isCompleted: false },
		{ text: 'Build really cool todo app', isCompleted: false },
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;

		// const newTodos = todos.map((todo, index) => {
		// 	if (index === id) {
		// 		todo.isCompleted = !todo.isCompleted;
		// 	}
		// 	return todo;
		// });
		setTodos(newTodos);
	};

	const deleteTodo = (index) => {
		// const newTodos = todos.filter((todo, index) => index !== id);
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className='App'>
			<div className='todo-list'>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
				))}
				<div className='todo-form'>
					<TodoForm addTodo={addTodo} />
				</div>
			</div>
		</div>
	);
}

export default App;
