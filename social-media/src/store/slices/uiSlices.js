import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice(
    {
        name:'registerUserSlice',
        initialState: {
            toggleLogin: true,
            toggleLogout: false,
            toggleCoverPic: false,
            toggleUserInfoModal: false,
        },
        reducers: {
            toggleLogin: (state) => {
                state.toggleLogin = !state.toggleLogin;   
            },
            toggleLogout: (state) => {
                console.log('ran');
                state.toggleLogout = !state.toggleLogout;
            },
            toggleCoverPicHandler: (state) => {
                console.log('clicked');
                state.toggleCoverPic = !state.toggleCoverPic;
            },
            togglerUserInfoHandler: (state) => {
                state.toggleUserInfoModal = !state.toggleUserInfoModal;
            },
        }
    }
);

export const { toggleLogin, toggleLogout, toggleCoverPicHandler, togglerUserInfoHandler } = uiSlice.actions;
export default uiSlice.reducer;