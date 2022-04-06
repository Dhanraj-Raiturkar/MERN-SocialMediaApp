import {configureStore} from '@reduxjs/toolkit';
import registerReducer from './slices/registerUserSlice';
import uiReducer from './slices/uiSlices';
import loginReducer from './slices/loginUserSlice';
import postReducer from './slices/postSlice';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};


const reducers = combineReducers(
    {
        registerUser: registerReducer,
        toggleUi: uiReducer,
        loginUser: loginReducer,
        postReducer: postReducer,
    }
);
    
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore(
    {
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: [thunk],
    }
);

export default store;