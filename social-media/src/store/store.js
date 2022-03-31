import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './slices/registerUserSlice';
import uiReducer from './slices/uiSlices';
import loginReducer from './slices/loginUserSlice';

const store = configureStore(
    {
        reducer: {
            registerUser: registerReducer,
            toggleUi: uiReducer,
            loginUser: loginReducer,
        },
    }
);

export default store;