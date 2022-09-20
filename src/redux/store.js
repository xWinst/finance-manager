import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userReducers';
// import transactionSlice from './transactionReducers';

const persistConfig = {
    key: 'user',
    storage,
    // blacklist: ['userData', 'isLoading'],

    whitelist: ['refreshToken', 'sid'],
};

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer),
    // transaction: transactionSlice,
    // user: userSlice,
});

export const store = configureStore({
    // reducer: persistReducer(persistConfig, rootReducer),
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredActionPaths: ['payload'],
            },
        }),
});
export const persistor = persistStore(store);
