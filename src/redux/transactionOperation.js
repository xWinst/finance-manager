import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { removeTransaction } from './userReducers';

export const addExpense = createAsyncThunk('transaction/addExpense', async (transactionData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/transaction/expense', transactionData);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getExpenses = createAsyncThunk('transaction/expenses', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/transaction/expense');
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const addIncome = createAsyncThunk('transaction/addIncome', async (transactionData, { rejectWithValue }) => {
    try {
        const { data } = await axios.post('/transaction/income', transactionData);
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const getIncomes = createAsyncThunk('transaction/incomes', async (_, { rejectWithValue }) => {
    try {
        const { data } = await axios.get('/transaction/income');
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const deleteTransaction = createAsyncThunk('transaction/delete', async (id, { rejectWithValue }) => {
    try {
        const { data } = await axios.delete(`/transaction/${id}`);
        // dispatch(removeTransaction(id));
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
