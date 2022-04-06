import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name:'userSlice',
        initialState: {
            searchedUsers: null,
        },
        reducers: {
            setSearchedUsers: (state,action) => {
                console.log(action.payload);
                state.searchedUsers = action.payload;
            },
        }
    }
)

export const fetchSearchedUsers = (username) => {
    return async(dispatch) => {
        try{
            const response = await fetch(`http://localhost:5000/api/users/username/${username}`, {method:'GET'});
            if(response.ok){
                const data = await response.json();
                dispatch(setSearchedUsers(data));
            }
        }catch(error){
            console.log(error);
        }
    }
}

export const { setSearchedUsers } = userSlice.actions;
export default userSlice.reducer;