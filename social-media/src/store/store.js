import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './slices/registerUserSlice';
import uiReducer from './slices/uiSlices';

const store = configureStore(
    {
        reducer: {
            registerUser: registerReducer,
            toggleUi: uiReducer,
        },
    }
);

export default store;