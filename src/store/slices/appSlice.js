import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
	alerts: [],
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		addAlertItem: (state, action) => {
			state.alerts.push(action.payload)
		},
		deleteAlertItem: (state, action) => {
			state.alerts.shift()
		},
	},
	extraReducers: {
		showAlert: (state, action) => {},
	},
})

export const showAlert = createAsyncThunk('app/showAlert', async (alert, thunkAPI) => {
	const state = thunkAPI.getState().app
	const dispatch = thunkAPI.dispatch
	const id = state.alerts.length

	thunkAPI.dispatch(addAlertItem(alert))
	setTimeout(() => dispatch(deleteAlertItem()), 3000)
})
export const { addAlertItem, deleteAlertItem } = appSlice.actions

export default appSlice.reducer
