import { createSlice } from '@reduxjs/toolkit';
import message from 'helpers/Message';
import { registration, logIn, logOut, refresh, getUser } from './operations';
// import {  } from './actions';

const initialState = {
    // email: null,
    // id: null,
    isLoading: false,
    // error: null,
    isLoggedIn: false,
    // accessToken: null, /////////////
    refreshToken: null,
    sid: null,
    userData: null,
    // canLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registration.pending]: state => {
            state.isLoading = true;
        },

        [registration.fulfilled]: state => {
            state.canLogin = true;
            state.isLoading = false;
        },

        [registration.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('Registration error', `${action.payload.message}`, 'Ok');
        },

        [logIn.pending]: state => {
            state.isLoading = true;
        },

        [logIn.fulfilled]: (state, action) => {
            // state.accessToken = action.payload.accessToken; /////////////
            state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.userData = action.payload.userData;
            state.isLoggedIn = true;
            state.canLogin = false;
            state.isLoading = false;
        },

        [logIn.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('LogIn error', `${action.payload.message}`, 'Ok');
        },

        // [googleAuth]: (state, action) => {
        //     console.log('action: ', action);
        //     state.accessToken = action.payload.accessToken;
        //     state.refreshToken = action.payload.refreshToken;
        //     state.sid = action.payload.sid;
        //     setToken(action.payload.accessToken);
        // },

        [logOut.pending]: state => {
            state.isLoading = true;
        },

        [logOut.fulfilled]: (state, action) => {
            // state.accessToken = null; ////////////
            state.refreshToken = null;
            state.sid = null;
            state.userData = null;
            state.isLoggedIn = false;
            state.isLoading = false;
        },

        [logOut.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('LogIn error', `${action.payload.message}`, 'Ok');
        },

        [refresh.pending]: state => {
            state.isLoading = true;
        },

        [refresh.fulfilled]: (state, action) => {
            // console.log('action: ', action); ////////////////////
            state.accessToken = action.payload.newAccessToken;
            state.refreshToken = action.payload.newRefreshToken;
            state.sid = action.payload.newSid;
            state.isLoggedIn = true;
            state.isLoading = false;
        },

        [refresh.rejected]: (state, action) => {
            // console.log('action REFRESH: ', action); /////////////////
            state.isLoading = false;
            // console.log('refresh error: ', action.payload?.message); /////////
        },

        [getUser.pending]: state => {
            state.isLoading = true;
        },

        [getUser.fulfilled]: (state, action) => {
            // console.log('action: ', action);
            state.userData = action.payload;
            state.isLoading = false;
            state.isLoggedIn = true;
        },

        [getUser.rejected]: (state, action) => {
            state.isLoading = false;
            // console.log('getUser error: ', action.payload.message); /////////
        },
    },
});

export default authSlice.reducer;
