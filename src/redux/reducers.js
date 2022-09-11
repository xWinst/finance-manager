// import { createSlice } from '@reduxjs/toolkit';
// import message from 'helpers/Message';
// import { register, logIn, googleAuth, logOut, refresh } from './operations';
// // import {  } from './actions';

// const initalState = {
//     email: null,
//     id: null,
//     isLoading: false,
//     error: null,
//     isLoggedIn: false,
//     accessToken: null,
//     refreshToken: null,
//     sid: null,
//     userData: null,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initalState,
//     extraReducers: {
//         [register.pending]: (state, action) => {
//             console.log('isLoading: ', state.isLoading);
//             state.isLoading = true;
//             state.error = '';
//         },

//         [register.fulfilled]: (state, action) => {
//             console.log('action F: ', action);
//             state.email = action.payload.email;
//             state.id = action.payload.id;
//             state.isLoggedIn = true;
//         },

//         [register.rejected]: (state, action) => {
//             console.log('action R: ', action);
//             message.error('Registration error', `${action.error}`, 'Ok');
//         },

//         [logIn.pending]: (state, action) => {
//             state.isLoading = true;
//             state.error = '';
//         },

//         [logIn.fulfilled]: (state, action) => {
//             console.log('action LF: ', action);
//             state.accessToken = action.payload.accessToken;
//             state.refreshToken = action.payload.refreshToken;
//             state.sid = action.payload.sid;
//             state.userData = action.payload.userData;
//             state.isLoggedIn = true;
//         },

//         [logIn.rejected]: (state, action) => {
//             console.log('action LR: ', action);
//             message.error('LogIn error', `${action.payload.message}`, 'Ok');
//         },
//     },
// });

// export default authSlice.reducer;
