import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './reducers';
// import authSlice from './authReduсers';

const persistConfig = {
    key: 'auth',
    storage,
    // whitelist: ['refreshToken', 'sid'],
};

// const rootReducer = combineReducers({
//     auth: authSlice,
// });

// console.log('authSlice: ', authSlice);
export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authSlice),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
                ignoredActionPaths: ['payload'],
            },
        }),
});
export const persistor = persistStore(store);
