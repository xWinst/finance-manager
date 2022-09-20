import { createSlice } from '@reduxjs/toolkit';
import message from 'helpers/Message';
import { registration, logIn, logOut, refresh, getUser, setUserBalance } from './userOperations';
import { addExpense, addIncome, getExpenses, getIncomes } from './transactionOperation';

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
    expenses: null,
    incomes: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registration.pending]: state => {
            state.isLoading = true;
        },

        [registration.fulfilled]: state => {
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
            state.refreshToken = action.payload.refreshToken;
            state.sid = action.payload.sid;
            state.userData = action.payload.userData;
            state.isLoggedIn = true;
            state.isLoading = false;
        },

        [logIn.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('LogIn error', `${action.payload.message}`, 'Ok');
        },

        [logOut.pending]: state => {
            state.isLoading = true;
        },

        [logOut.fulfilled]: (state, action) => {
            state = initialState;
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
            // console.log('refresh COMPLITE');
            // state.accessToken = action.payload.newAccessToken;
            state.refreshToken = action.payload.newRefreshToken;
            state.sid = action.payload.newSid;
            // state.isLoggedIn = true;
            // state.isLoading = false;
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
            // console.log('getUser COMPLITE');
            // console.log('action: ', action);
            state.userData = action.payload;
            state.isLoading = false;
            state.isLoggedIn = true;
        },

        [getUser.rejected]: (state, action) => {
            state.isLoading = false;
            // console.log('getUser error: ', action.payload.message); /////////
        },

        [setUserBalance.fulfilled]: (state, action) => {
            state.userData.balance = action.payload.newBalance;
        },

        [addExpense.pending]: state => {
            state.isLoading = true;
        },

        [addExpense.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userData.balance = action.payload.newBalance;
            state.userData.transactions.push(action.payload.transaction);
            state.expenses.expenses.push(action.payload.transaction);
        },

        [addExpense.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('Transaction adding error', `${action.payload.message}`, 'Ok');
        },

        [addIncome.pending]: state => {
            state.isLoading = true;
        },

        [addIncome.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.userData.balance = action.payload.newBalance;
            state.userData.transactions.push(action.payload.transaction);
            state.incomes.incomes.push(action.payload.transaction);
        },

        [addIncome.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('Transaction adding error', `${action.payload.message}`, 'Ok');
        },

        [getExpenses.pending]: state => {
            state.isLoading = true;
        },

        [getExpenses.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.expenses.expenses = action.payload.expenses;
            state.expenses.monthStats = action.payload.monthStats;
        },

        [getExpenses.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('Expenses loading error', `${action.payload.message}`, 'Ok');
        },

        [getIncomes.pending]: state => {
            state.isLoading = true;
        },

        [getIncomes.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.incomes.incomes = action.payload.incomes;
            state.incomes.monthStats = action.payload.monthStats;
        },

        [getIncomes.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('Incomes loading error', `${action.payload.message}`, 'Ok');
        },
    },
});

export default userSlice.reducer;
