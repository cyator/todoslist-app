import React from 'react';
//import PropTypes from 'prop-types'

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
	return (
		<div
			style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
			className='todo'
		>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => deleteTodo(index)}>delete</button>
			</div>
		</div>
	);
};

export default Todo;
