import { createSlice } from '@reduxjs/toolkit';
import { togglerUserInfoHandler } from './uiSlices';

console.log('loginSlice');

// try{
//     var loginStatus = JSON.parse(localStorage.getItem('userState')).loginStatus;
//     var loginFailed = JSON.parse(localStorage.getItem('userState')).loginFailed;
//     var userInfo = JSON.parse(localStorage.getItem('userInfo'));
// }catch(error){
//     var loginStatus = false;
//     var loginFailed = false;
//     var userInfo = null;
// }


const loginUserSlice = createSlice(
    {
        name:'loginUserSlice',
        initialState: {
            loginStatus: false,
            loginFailed: false,
            userInfo: null,
            postUser: null,
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
            },
            updateUserInfoState: (state, action) => {
                try{
                    state.userInfo = action.payload;
                }catch(err){
                    console.log(err);
                }
            },
            setPostUser: (state,action) => {
                state.postUser = action.payload;
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
                    'Content-type':'application/json'
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

export const updateUserInfo = (userInfo) => {
    return async(dispatch) => {
        console.log(userInfo);
        try {
            const response = await fetch('http://localhost:5000/api/users/update', {
                method:'PUT',
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type':'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            if(response.ok){
                const data = await response.json();
                dispatch(updateUserInfoState(data));
                dispatch(setPostUser(data));
                dispatch(togglerUserInfoHandler());
            }
        }catch(error){
            console.log(error);
        }
    }
}

export const updateUserCoverpic = () => {
    return async(dispatch) => {
        try{
            const accesstoken = localStorage.getItem('accesstoken');
            const response = await fetch('http://localhost:5000/api/users/', {
                method:'get',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accesstoken')}`
                }
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
                dispatch(updateUserInfoState(data));
            }
        }catch(error){
            console.log(error);
        }
    }
}

export const fetchUser = (userId) => {
    return async(dispatch) => {
        try{
            const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
                method:'GET',
            });
            if(response.ok){
                const data = await response.json();
                dispatch(setPostUser(data));
            }
        }catch(error){
            console.log(error);
        }
    }
} 


export const { setUserState, setLoginFailed, deleteUserInfo, updateUserInfoState, setPostUser } = loginUserSlice.actions;
export default loginUserSlice.reducer;
