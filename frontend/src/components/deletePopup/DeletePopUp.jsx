import React from 'react'
import './DeletePopUp.css'
import { Link } from 'react-router-dom'
// import HomePage from '../../pages/HomePage'
import { useDispatch } from 'react-redux'
import { deleteAlltodos } from '../../store/oldTodosSlice'

const DeletePopUp = () => {

    const dispatch = useDispatch()
    const handledelete = () => {
       dispatch(deleteAlltodos())
    }

    return (
        <div className='parentContainer'>
            <div className="card">
                <h3>Are You sure you want to delete all todos !</h3>
                <div className="btnContainer">
                    <Link to={'/'}>
                        <button onClick={() => handledelete()} className='yesbutton'>Yes</button>
                    </Link>
        
                    <Link to={'/'}>
                        <button className='nobutton'>No</button>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default DeletePopUp
