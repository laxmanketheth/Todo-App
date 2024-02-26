import React, { useState } from 'react'
import './AddToDoForm.css'
import { useDispatch } from 'react-redux'
import { add } from '../../store/TodoSlice'

const AddToDoForm = () => {

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const inputValue = e.target.value
        //    console.log(inputValue);
        setValue(inputValue)
    }
    // console.log(value);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            return alert('enter text first')
        }
        const todoData = {
            task: value
        }

        fetch('http://localhost:8080/addtodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoData)
        })
            .then(res => res.json())
            .then(data => {
                return dispatch(add(data))
            })
            .catch(err => console.log(err))

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