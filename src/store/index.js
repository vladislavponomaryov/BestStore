import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/appSlice'
import basketReducer from './slices/basketSlice'

export const store = configureStore({
	reducer: {
		basket: basketReducer,
		app: appReducer,
	},
})
