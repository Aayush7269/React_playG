import React from 'react'
import { useSelector } from 'react-redux'


export const Result = () => {
    const {display} =useSelector((state)=>state.data)
  return (
    <div>
        <ul>
            {display.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}
