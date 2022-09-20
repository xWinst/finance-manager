// import { createSlice } from '@reduxjs/toolkit';
// import { addExpense } from './transactionOperation';
// import message from 'helpers/Message';

// console.log('userSlice: ', userSlice);
// const transactionSlice = createSlice({
//     name: 'transaction',
//     initialState: userSlice.getInitialState(),
//     extraReducers: {
//         [addExpense.pending]: state => {
//             state.isLoading = true;
//         },

//         [addExpense.fulfilled]: state => {
//             state.isLoading = false;
//         },

//         [addExpense.rejected]: (state, action) => {
//             state.isLoading = false;
//             message.error('Error adding transaction', `${action.payload.message}`, 'Ok');
//         },
//     },
// });

// export default transactionSlice.reducer;
