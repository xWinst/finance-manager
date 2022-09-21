import { createSlice } from '@reduxjs/toolkit';
import message from 'helpers/Message';
import { getStatistics } from './statisticsOperation';

const initialState = {
    expenses: { total: null, data: null },
    incomes: { total: null, data: null },
};

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    extraReducers: {
        [getStatistics.fulfilled]: (state, action) => {
            state.expenses.total = action.payload.expenses.expenseTotal;
            state.expenses.data = action.payload.expenses.expensesData;
            state.incomes.total = action.payload.incomes.incomeTotal;
            state.incomes.data = action.payload.incomes.incomesData;
        },

        [getStatistics.rejected]: (state, action) => {
            message.error('Registration error', `${action.payload.message}`, 'Ok');
        },
    },
});

export default statisticsSlice.reducer;
