import React, { useState } from 'react';
const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='input'
				placeholder='enter todo...'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<input type='submit' className='submit' value='submit' />
		</form>
	);
};

export default TodoForm;
