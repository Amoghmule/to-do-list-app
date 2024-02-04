import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        if (value){
            e.preventDefault();
            addTodo (value);
            setValue('');
        }
    }
  return (
    <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder='whats up with you today?' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button type="submit">Add</button>
    </form>
  )
}
