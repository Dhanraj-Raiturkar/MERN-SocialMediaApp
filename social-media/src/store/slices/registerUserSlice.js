import { createSlice } from "@reduxjs/toolkit";

const registerUserSlice = createSlice(
    {
        name:'registerUserSlice',
        initialState: {
            usernameIsAvailable: true,
            emailIsAvailable: true,
        },
        reducers: {
            usernameTaken: (state, action) => {
                state.usernameIsAvailable = false;
            },
            usernameAvailable: (state) => {
                state.usernameIsAvailable = true;
            },
            emailTaken: (state) => {
                state.emailIsAvailable = false;
            },
            emailAvailable: (state) => {
                state.emailIsAvailable = true;
            }
        }
    },
);

export const checkUsernameAvailability = (username) => {
    return async(dispatch, state) => {
        try{
            const response = await fetch(`http://localhost:5000/api/users/username/${username}`, {
                method: 'GET',
            });
            const user = await response.json();
            if(response.ok){
                dispatch(usernameTaken());
            }
        }catch(error){
            dispatch(usernameAvailable());
        }
    }
}

export const checkEmailAvailability = (email) => {
    return async(dispatch) => {
        try{
            const response = await fetch(`http://localhost:5000/api/users/email/${email}`, {
                method: 'GET',
            });
            const user = await response.json();
            if(user){
                dispatch(emailTaken());
            }
        }catch(error){
            dispatch(emailAvailable());
        }
    }
}

export const registerUser = (user) => {
    return async(dispatch) => {
        try{
            const newUser = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    "Content-type":"application/json",
                }
            })
            console.log(newUser);
        }catch(error){
            console.log=(error.message);
        }
    }
}

export const { usernameTaken, usernameAvailable, emailTaken, emailAvailable } = registerUserSlice.actions;
export default registerUserSlice.reducer;