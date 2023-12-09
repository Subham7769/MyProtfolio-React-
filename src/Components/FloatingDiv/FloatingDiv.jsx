import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({img,txt1,txt2}) => {
  return (
    <div className='floatingdiv'>
      <div>
        <img src={img} alt="" />
      </div>
        <span>
            {txt1}
            <br/>
            {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv