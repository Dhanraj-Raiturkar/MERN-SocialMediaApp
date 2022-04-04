import { createSlice } from '@reduxjs/toolkit';

console.log('loginSlice');

try{
    var loginStatus = JSON.parse(localStorage.getItem('userState')).loginStatus;
    console.log("--> ",loginStatus);
    var loginFailed = JSON.parse(localStorage.getItem('userState')).loginFailed;
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
}catch(error){
    var loginStatus = false;
    var loginFailed = false;
    var userInfo = null;
}

console.log(loginStatus);

const loginUserSlice = createSlice(
    {
        name:'loginUserSlice',
        initialState: {
            loginStatus: loginStatus,
            loginFailed: loginFailed,
            userInfo: userInfo,
        },
        reducers: {
            setUserState: (state, action) => {
                state.loginStatus = !state.loginStatus;
                if(action.payload){
                    state.userInfo = action.payload;
                    localStorage.setItem('userInfo', JSON.stringify(action.payload));
                }
            },
            setLoginFailed: (state, action) => {
                state.loginFailed = action.payload;
            },
            deleteUserInfo: (state) => {
                state.userInfo = null;
            }
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
                // dispatch(setUserState());
                dispatch(setUserInfoState(userToken));
                dispatch(setLoginFailed(false));
            }else{
                dispatch(setLoginFailed(true));
            }
        }catch(error){
            // console.log(error.message);
        }    
    }
}

export const setUserInfoState = (accessToken) => {
    return async(dispatch) => {
        try{
            const response = await fetch('http://localhost:5000/api/users/getUserData', {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${accessToken}` 
                }
            });
            const userInfo = await response.json();
            dispatch(setUserState(userInfo));
        }catch(error){
            console.log(error);    
        }
    }
}

export const { setUserState, setLoginFailed, deleteUserInfo } = loginUserSlice.actions;
export default loginUserSlice.reducer;
