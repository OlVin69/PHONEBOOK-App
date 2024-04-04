import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = (token) => {
    axios.defaults.headers.common[('Authorization')]  = `Bearer ${token}`;
  };
  
  

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
        const response = await axios.get('/contacts');
        setAuthHeader(response.data.token);
          return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
    
});

export const addContact = createAsyncThunk('contacts/addContact', async(newContact, thunkApi ) => {
    try {
        const response = await axios.post('/contacts', newContact);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkApi) => {
try {
    const response = await axios.delete(`/contacts/${contactId}`);
    setAuthHeader(response.data.token);
    return response.data; 
} catch (error) {
    return thunkApi.rejectWithValue(error.message);
}
     
}
);

