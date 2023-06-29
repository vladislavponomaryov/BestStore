import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slices/appSlice'
import basketReducer from './slices/basketSlice'
import catalogReducer from './slices/catalogSlice'

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		basket: basketReducer,
		app: appReducer,
	},
})
