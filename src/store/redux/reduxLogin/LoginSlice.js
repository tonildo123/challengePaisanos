import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
name: 'logger',
initialState: {
  user:   
    { 
      name:'',
      logged : false
    },

},
reducers: {
  loggearme: (state, action) => {

    console.log('action ', action)
    let newUser = {
      name:action.payload.name,      
      logged : true
    };
    
    state.user = newUser
    
  },
  unlogger: (state, action) => {
    
    state.user =  { 
      name:'',
      logged : false
    }
  }
  },
})
// Action creators are generated for each case reducer function
export const { loggearme, unlogger } = LoginSlice.actions
export default LoginSlice.reducer;