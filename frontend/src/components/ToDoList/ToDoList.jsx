// import {useState} from 'react'
import './ToDoList.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCurrentToDo } from '../../store/TodoSlice'
import { useEffect } from 'react';

const ToDoList = () => {

    const {data, status,deleteStatus} = useSelector((state) => state.todoSlice);
    // console.log(data);
    // console.log(status);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCurrentToDo(id))
    }
    

    // const handleDelete = (id) => {
    //     // console.log(id);
    //     fetch(`http://localhost:8080/todo/${id}`,{
    //         method: 'DELETE'
    //     })
    //     .then(res => res.json())
    //     .then(result => dispatch(deleteToDo(id)))  
    // }
   
    return (
        <div>
        

            {data?.map((item, index) => {
                return (
                    <div key={item._id} className="individualTask">
                        <span className='count'>{index + 1}.</span>
                        {item.task}
                        <button onClick={() => handleDelete(item._id)} className='deletebtn'>Delete</button>
                    </div>
                )    
            })}
        </div>
    )
}
export default ToDoList;
