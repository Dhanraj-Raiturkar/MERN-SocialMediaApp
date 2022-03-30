import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        name:'registerUserSlice',
        initialState: {
            toggleLogin: true,
        },
        reducers: {
            toggleLogin: (state) => {
                state.toggleLogin = !state.toggleLogin;   
            },
        }
    }
);

export const { toggleLogin } = uiSlice.actions;
export default uiSlice.reducer;