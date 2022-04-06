import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice(
    {
        name:'postSlice',
        initialState: {
            posts: []
        },
        reducers: {
            setPosts: (state,action) => {
                console.log(action.payload);
                state.posts = action.payload;
            }
        }
    }
);

export const fetchPosts = () => {
    return async(dispatch) => {
        console.log('fetchPosts ran');
        try{
            const response = await fetch('http://localhost:5000/api/post/all', {
                method: 'GET'
            });
            if(response.ok){
                const data = await response.json();
                dispatch(setPosts(data));
            }
        }catch(error){
            console.log(error);
        }
    }
}

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;