import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './slices/registerUserSlice';

const store = configureStore(
    {
        reducer: {
            registerUser: registerReducer,
        },
    }
);

export default store;