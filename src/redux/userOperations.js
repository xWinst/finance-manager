import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getExpenses, getIncomes } from './transactionOperation';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export const setToken = token => {
    axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

export const registration = createAsyncThunk('auth/register', async (credentials, { rejectWithValue, dispatch }) => {
    try {
        const { data } = await axios.post('/auth/register', credentials);
        dispatch(logIn(credentials));
        return data;
    } catch (error) {
        if (error.response.status === 409) {
            dispatch(logIn(credentials));
        } else return rejectWithValue(error);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue, dispatch }) => {
    try {
        const { data } = await axios.post('/auth/login', credentials);
        setToken(data.accessToken);
        dispatch(getExpenses());
        dispatch(getIncomes());
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
    try {
        await axios.post('/auth/logout');
        setToken(null);
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const refresh = createAsyncThunk('auth/refresh', async (sid, thunkAPI) => {
    const refreshToken = thunkAPI.getState().user.refreshToken;
    // const accessToken = thunkAPI.getState().auth.accessToken;

    if (!refreshToken) return thunkAPI.rejectWithValue('отенен');
    setToken(refreshToken);
    // console.log('refresh START');
    try {
        const { data } = await axios.post('/auth/refresh', { sid });
        setToken(data.newAccessToken);
        thunkAPI.dispatch(getUser());
        thunkAPI.dispatch(getExpenses());
        thunkAPI.dispatch(getIncomes());
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const getUser = createAsyncThunk('getUser', async (_, { rejectWithValue }) => {
    // console.log('getUser START');
    try {
        const { data } = await axios.get('/user');
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const setUserBalance = createAsyncThunk('user/balance', async (newBalance, { rejectWithValue }) => {
    try {
        const { data } = await axios.patch('/user/balance', { newBalance });
        return data;
    } catch (error) {
        return rejectWithValue(error);
    }
});
