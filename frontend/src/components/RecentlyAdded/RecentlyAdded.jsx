import React from 'react'
import './RecentlyAdded.css'
import { useSelector } from 'react-redux'

const RecentlyAdded = () => {

    const {data} = useSelector(state => state.todoSlice)
    // console.log(data);
  return (
    data.length === 0 && (
     <div className='textContainer'>
     <p> here you will see all recently added tasks</p>
    </div>
    )
    
  )
}

export default RecentlyAdded
