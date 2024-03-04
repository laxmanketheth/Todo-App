import React, { useState } from 'react'
import './AddToDoForm.css'
import { useDispatch } from 'react-redux'
import { addCurrentTodo } from '../../store/TodoSlice';


const AddToDoForm = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const inputValue = e.target.value
        //    console.log(inputValue);
        setValue(inputValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            return alert('enter text first')
        }
        const todoData = {
            task: value
        }

        dispatch(addCurrentTodo(todoData))
        setValue('')
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} >
                <label className='label' htmlFor="todoInput">Add a To Do :</label>
                <input className='textarea'
                    type="text"
                    placeholder='type here'
                    name="todoInput"
                    value={value}
                    onChange={handleChange}
                />
                <button type='submit' className='submitBtn'>Submit</button>
            </form>

        </div>
    )
}
export default AddToDoForm;