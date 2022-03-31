import { createSlice } from '@reduxjs/toolkit';

const loginUserSlice = createSlice(
    {
        name:'loginUserSlice',
        initialState: {
            loginStatus:false,
        },
        reducers: {
            setUserState: (state) => {
                console.log('ok');
                state.loginStatus = !state.loginStatus;
            },
        }
    }
);

export const loginUser = (user) => {
    return async(dispatch) => {
        try{
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type':'application/json',
                }
            });
            if(response.status === 200){
                console.log('success');
                const userToken = await response.json();
                localStorage.setItem('accesstoken', userToken);
                dispatch(setUserState());
            }
        }catch(error){
            // console.log(error.message);
        }    
    }
}

export const { setUserState } = loginUserSlice.actions;
export default loginUserSlice.reducer;
