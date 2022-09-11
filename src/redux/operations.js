import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

const setToken = token => {
    axios.defaults.headers.common.Authorization = token
        ? `Bearer ${token}`
        : '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/register', credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', credentials);
            setToken(data.accessToken);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const googleAuth = createAsyncThunk(
    'auth/google',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/auth/google');
            setToken(data.accessToken);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/auth/logout');
            setToken(null);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (sid, thunkAPI) => {
        const refreshToken = thunkAPI.getState().auth.refreshToken;
        const accessToken = thunkAPI.getState().auth.accessToken;

        if (!refreshToken || accessToken)
            return thunkAPI.rejectWithValue('отенен');
        setToken(refreshToken);
        // const dispatch = useDispatch();
        try {
            const { data } = await axios.post('/auth/refresh', { sid });
            setToken(data.newAccessToken);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getUser = createAsyncThunk(
    'getUser',
    async (_, { rejectWithValue }) => {
        try {
            console.log('Bingo!'); /////////////////
            const { data } = await axios.get('/user');
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
