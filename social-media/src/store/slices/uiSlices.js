import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        name:'registerUserSlice',
        initialState: {
            toggleLogin: true,
            toggleLogout: false,
        },
        reducers: {
            toggleLogin: (state) => {
                state.toggleLogin = !state.toggleLogin;   
            },
            toggleLogout: (state) => {
                state.toggleLogout = !state.toggleLogout;
            }
        }
    }
);

export const { toggleLogin, toggleLogout } = uiSlice.actions;
export default uiSlice.reducer;