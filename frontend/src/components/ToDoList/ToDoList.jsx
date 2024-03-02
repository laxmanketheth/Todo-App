// import {useState} from 'react'
import './ToDoList.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCurrentToDo } from '../../store/TodoSlice'

const ToDoList = () => {

    const {data, status, deleteStatus} = useSelector((state) => state.todoSlice);

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCurrentToDo(id))
    }
   
    return (
        <div>
            { 
            data?.map((item, index) => {
                if( deleteStatus == 'pending' || deleteStatus == 'rejected' ){
                        return (
                            <div key={item._id} className="individualTask">
                                <span className='count'>{index + 1}.</span>
                                <div className='todotext'>{item.task}</div>    
                                <button onClick={() => handleDelete(item._id)} className='deletebtn'>Delete</button>
                            </div>
                        )     
                }
            })}
        </div>
    )
}
export default ToDoList;
