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
            },
            deletePosts: state => {
                state.posts = [];
            }
        }
    }
);

export const fetchPosts = (userId) => {
    return async(dispatch) => {
        console.log('fetchPosts ran');
        try{
            console.log(userId);
            const response = await fetch(`http://localhost:5000/api/post/timeline/${userId}`, {
                method: 'GET'
            });
            if(response.ok){
                const data = await response.json();
                console.log(data);
                dispatch(setPosts(data));
            }
        }catch(error){
            console.log(error);
        }
    }
}

// export const deletePostState = () => {
//     return async(dispatch) => {
//         try{
//             dispatch(deletePosts());
//         }catch(error){
//             console.log(error);
//         }
//     }
// }

export const { setPosts, deletePosts } = postSlice.actions;
export default postSlice.reducer;