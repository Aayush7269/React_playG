import { createSlice } from "@reduxjs/toolkit"

const initialState={
    display:[],
    email:[]
}
const dataSlice = createSlice({
    name:"data",
   initialState,
   reducers:{
    setDisplay:(state,action) =>{
        state.display = [...state.display,action.payload]

    }
}

})

const {reducer, actions} = dataSlice
export const {setDisplay} = actions
export default reducer