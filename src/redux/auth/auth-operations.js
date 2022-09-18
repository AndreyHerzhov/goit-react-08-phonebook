import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/api/auth"


export const signup = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.signup(data)
            return result
        } catch (error) {
            // console.log(error)
            const errorData = {
                status: error.response.status,
                message: error.message
                // message: error.response.data.message
            }
            
            return rejectWithValue(errorData)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.login(data)
            return result
        } catch (error) {
            // console.log(error)
            const errorData = {
                status: error.response.status,
                message: error.message
                // message: error.response.data.message
            }
            
            return rejectWithValue(errorData)
        }
    }
)