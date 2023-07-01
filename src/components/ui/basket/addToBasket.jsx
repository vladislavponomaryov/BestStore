import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { showAlert } from '../../../store/slices/appSlice'
import { addItemInBasket } from '../../../store/slices/basketSlice'

function AddToBasket({ id, title }) {
	const dispatch = useDispatch()

	if (!id || !title) return

	return (
		<Button
			onClick={() => {
				dispatch(addItemInBasket(+id))
				dispatch(showAlert({ type: 'success', message: `${title} добавлен в корзину!` }))
			}}
		>
			В корзину
		</Button>
	)
}

export default AddToBasket
