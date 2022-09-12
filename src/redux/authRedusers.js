import { createReducer } from '@reduxjs/toolkit';
import message from 'helpers/Message';
import {
    register,
    logIn,
    googleAuth,
    logOut,
    refresh,
    getUser,
} from './operations';
// import {  } from './actions';

const initalState = {
    // email: null,
    // id: null,
    isLoading: false,
    // error: null,
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    sid: null,
    userData: null,
    canLogin: false,
};

const auth = createReducer(initalState, {
    [register.pending]: state => {
        state.isLoading = true;
    },

    [register.fulfilled]: state => {
        state.canLogin = true;
        state.isLoading = false;
    },

    [register.rejected]: (state, action) => {
        state.isLoading = false;
        message.error('Registration error', `${action.payload.message}`, 'Ok');
    },

    [logIn.pending]: state => {
        state.isLoading = true;
    },

    [logIn.fulfilled]: (state, action) => {
        state.accessToken = action.payload.accessToken; /////////////
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

    [googleAuth.pending]: state => {
        state.isLoading = true;
    },

    [googleAuth.fulfilled]: (state, action) => {
        console.log('action GOOGLE: ', action); //////////
        // state.accessToken = action.payload.accessToken; /////////////
        // state.refreshToken = action.payload.refreshToken;
        // state.sid = action.payload.sid;
        // state.userData = action.payload.userData;
        // state.isLoggedIn = true;
        // state.canLogin = false;
        // state.isLoading = false;
    },

    [googleAuth.rejected]: (state, action) => {
        state.isLoading = false;
        message.error('LogIn error', `${action.payload.message}`, 'Ok');
    },

    [logOut.pending]: state => {
        state.isLoading = true;
    },

    [logOut.fulfilled]: (state, action) => {
        state.accessToken = null; ////////////
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
        console.log('action: ', action); ////////////////////
        state.accessToken = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.newSid;
        state.isLoggedIn = true;
        state.isLoading = false;
    },

    [refresh.rejected]: (state, action) => {
        console.log('action REFRESH: ', action); /////////////////
        state.isLoading = false;
        console.log('refresh error: ', action.payload?.message); /////////
    },

    [getUser.pending]: state => {
        state.isLoading = true;
    },

    [getUser.fulfilled]: (state, action) => {
        console.log('action: ', action);
        state.userData = action.payload;
        state.isLoading = false;
    },

    [getUser.rejected]: (state, action) => {
        state.isLoading = false;
        console.log('getUser error: ', action.payload.message); /////////
    },
});

export default auth;