import { createSlice } from '@reduxjs/toolkit';
import message from 'helpers/Message';
import { registration, logIn, logOut, refresh, getUser, setUserBalance } from './userOperations';
import { addExpense, addIncome, getExpenses, getIncomes, deleteTransaction } from './transactionOperation';

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    refreshToken: null,
    sid: null,
    userData: null,
    expenses: null,
    incomes: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeTransaction: (state, action) => {
            const { id, type, date, amount } = action.payload;
            state.userData.transactions = state.userData.transactions.filter(({ _id }) => _id !== id);
            state.expenses.expenses = state.expenses.expenses.filter(({ _id }) => _id !== id);
            state.incomes.incomes = state.incomes.incomes.filter(({ _id }) => _id !== id);
            state[type].monthsStats[date] -= amount;
        },

        changeMonthsStats: (state, action) => {
            const { type, date, amount } = action.payload;
            if (state[type].monthsStats[date] === 'N/А') state[type].monthsStats[date] = amount;
            else state[type].monthsStats[date] += amount;
        },
    },
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
            state.isLoading = false;
        },

        [logIn.rejected]: (state, action) => {
            state.isLoading = false;
            message.error('LogIn error', `${action.payload.message}`, 'Ok');
        },

        [logOut.fulfilled]: state => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.refreshToken = null;
            state.sid = null;
            state.userData = null;
            state.expenses = null;
            state.incomes = null;
        },

        [logOut.rejected]: (state, action) => {
            message.error('LogIn error', `${action.payload.message}`, 'Ok');
        },

        [refresh.pending]: state => {
            state.isLoading = true;
        },

        [refresh.fulfilled]: (state, action) => {
            state.refreshToken = action.payload.newRefreshToken;
            state.sid = action.payload.newSid;
            // state.isLoggedIn = true;
        },

        [refresh.rejected]: (state, action) => {
            state.isLoading = false;
            console.log('refresh error: ', action.payload);
        },

        [getUser.pending]: state => {
            state.isLoading = true;
        },

        [getUser.fulfilled]: (state, action) => {
            state.userData = action.payload;
            state.isLoading = false;
            state.isLoggedIn = true;
        },

        [getUser.rejected]: (state, action) => {
            state.isLoading = false;
        },

        [setUserBalance.fulfilled]: (state, action) => {
            state.userData.balance = action.payload.newBalance;
        },

        [addExpense.fulfilled]: (state, action) => {
            state.userData.balance = action.payload.newBalance;
            state.userData.transactions.push(action.payload.transaction);
            state.expenses.expenses.push(action.payload.transaction);
        },

        [addExpense.rejected]: (state, action) => {
            message.error('Transaction adding error', `${action.payload.message}`, 'Ok');
        },

        [addIncome.fulfilled]: (state, action) => {
            state.userData.balance = action.payload.newBalance;
            state.userData.transactions.push(action.payload.transaction);
            state.incomes.incomes.push(action.payload.transaction);
        },

        [addIncome.rejected]: (state, action) => {
            message.error('Transaction adding error', `${action.payload.message}`, 'Ok');
        },

        [getExpenses.fulfilled]: (state, action) => {
            state.expenses = action.payload;
        },

        [getExpenses.rejected]: (state, action) => {
            message.error('Expenses loading error', `${action.payload.message}`, 'Ok');
        },

        [getIncomes.fulfilled]: (state, action) => {
            state.incomes = action.payload;
            state.isLoggedIn = true;
        },

        [getIncomes.rejected]: (state, action) => {
            message.error('Incomes loading error', `${action.payload.message}`, 'Ok');
        },

        [deleteTransaction.fulfilled]: (state, action) => {
            state.userData.balance = action.payload.newBalance;
            state.isLoggedIn = true;
        },

        [deleteTransaction.rejected]: (state, action) => {
            message.error('Transaction deleting error', `${action.payload.message}`, 'Ok');
        },
    },
});

export const { removeTransaction, changeMonthsStats } = userSlice.actions;

export default userSlice.reducer;
