import React from 'react'
import './DeletePopUp.css'
import { Link } from 'react-router-dom'
// import HomePage from '../../pages/HomePage'


const DeletePopUp = () => {

    const handledelete = () => {
        fetch('http://localhost:8080/deleteAlltodos',{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
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
