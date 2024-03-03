import React from 'react'
import './OldTodoHeading.css'
import { useSelector } from 'react-redux'
import KeyboardDoubleArrowDownSharpIcon from '@mui/icons-material/KeyboardDoubleArrowDownSharp';

const OldTodoHeading = () => {

  const { data } = useSelector(state => state.oldTodoSlice)
  // console.log(data);
  return (
    data.length > 1 && (
    <div>
      <div className='textContainer'>     
        <p className='text'> Previously added tasks
          <span className='icon'> <KeyboardDoubleArrowDownSharpIcon /></span>
        </p>
      </div>
    </div>
    )


  )
}

export default OldTodoHeading;
