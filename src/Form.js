import React, { useState } from 'react'
import { setDisplay } from './displaySlice'
import { useDispatch } from 'react-redux'
export const Form = () => {
  
    const [name, setname] = useState("")

    const dispatch = useDispatch()
    const handleOnChange = (e)=>{
        const {value} = e.target
        setname(value)
    }

   const handleOnSubmit = (e)=>{
    e.preventDefault()
    dispatch(setDisplay(name))
   }



    return (
    
    <div>
          <form action="" onSubmit={handleOnSubmit}>
        <p>
          <input name="username" onChange={handleOnChange} />
        </p>
        <p>
          <button>Submit </button>
        </p>
      </form>
    </div>
  )
}
