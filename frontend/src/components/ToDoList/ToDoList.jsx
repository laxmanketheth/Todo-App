import {useState} from 'react'
import './ToDoList.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteToDo } from '../../store/TodoSlice'

const ToDoList = () => {

    const data = useSelector((state) => state.todoSlice);
    // const [response, setResponse]= useState('');
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`http://localhost:8080/todo/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => dispatch(deleteToDo(id)))
        // .then(data => setResponse(data))
        // dispatch(deleteToDo(id))
    }
    // console.log(response);


    return (
        <div>
            {data.map((item, index) => {
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
