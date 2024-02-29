import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteOldToDo, getOldTodos } from '../../store/oldTodosSlice'
// import { add } from '../../store/oldTodosSlice'

const OldTodos = () => {

    const {data, status, deleteStatus} = useSelector((state) => state.oldTodoSlice);
    // console.log(data);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getOldTodos())
    },[deleteStatus]) // Fetch updated todos when deleteStatus changes
    
    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deleteOldToDo(id))
    };

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
export default OldTodos;

