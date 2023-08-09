import {createSlice} from '@reduxjs/toolkit'


const loginSlice = createSlice ({
    name: 'login', 
    initialState: {isLogin : false , content: {}  },
    reducers : {
        login (state,actions) {
            state.isLogin = true
            state.content = actions.payload
        
        },
        loguot(state) {
            state.isLogin = false;
         
        }
    }

})

 export const  loginActions = loginSlice.actions;
 export default loginSlice.reducer;


