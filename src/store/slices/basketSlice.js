import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addItemInBasket: (state, action) => {
			if (!state.items.find(key => key == action.payload)) state.items.push(action.payload)
		},
		deleteItemInBasket: (state, action) => {
			state.items = state.items.filter(item => item !== action.payload)
		},
		deleteAllItemsInBasket: (state, action) => {
			state.items = []
		},
	},
})

// Action creators are generated for each case reducer function
export const { addItemInBasket, deleteItemInBasket, deleteAllItemsInBasket } = basketSlice.actions

export default basketSlice.reducer
