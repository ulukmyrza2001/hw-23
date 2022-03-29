import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_KEY, URL_SIGN_IN, URL_SIGN_UP } from "../utils/constants/general";

export const signUp = createAsyncThunk(
	'auth/signUp',
	async function (userData, { rejectWithValue }) {
		try {
			const response = await fetch(`${URL_SIGN_UP}${BASE_KEY}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			})
			const data = await response.json()
			if (!response.ok) {
				let errorMessage = 'Authentciation failed'
				if (data && data.error && data.error.message) {
					errorMessage = data.error.message
				}
				throw new Error(errorMessage)
			}
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
)
export const signIn = createAsyncThunk(
	'auth/signIn',
	async function (userData, { rejectWithValue }) {
		try {
			const response = await fetch(`${URL_SIGN_IN}${BASE_KEY}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userData),
			})
			const data = await response.json()
			if (!response.ok) {
				let errorMessage = 'Authentciation failed'
				if (data && data.error && data.error.message) {
					errorMessage = data.error.message
				}
				throw new Error(errorMessage)
			}
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
)



const initialState = {
    isAuth : JSON.parse(localStorage.getItem('authen')) || false,
    user : null,
    status : null,
    error : null
}

const setError = (state, action) => {
	state.status = 'rejected'
	state.error = action.payload
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
	reducers : {
        logout(state){
			state.isAuth = false
		}
	},
    extraReducers : {
        [signUp.pending] : (state)=>{
            state.status = 'loading'
        },
        
        [signUp.fulfilled] : (state,action)=>{
            state.status = 'succes'
            state.user = action.payload
            state.isAuth = true
        },

        [signUp.rejected] : setError,
        [signIn.pending] : (state)=>{
            state.status = 'loading'
        },

        [signIn.fulfilled] : (state,action)=>{
            state.status = 'succes'
            state.user = action.payload
            state.isAuth = true
        },
        [signIn.rejected] : setError
    }
})
export const authActions = authSlice.actions;
export default authSlice