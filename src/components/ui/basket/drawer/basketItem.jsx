import RemoveIcon from '@mui/icons-material/Remove'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { showAlert } from '../../../../store/slices/appSlice'
import { deleteItemInBasket } from '../../../../store/slices/basketSlice'

function BasketItem({ id, image, title }) {
	const dispatch = useDispatch()

	return (
		<ListItem sx={{ px: 2 }} key={id} disablePadding>
			<ListItemIcon sx={{ width: 30, padding: 1 }}>
				<img src={image} alt={title} />
			</ListItemIcon>
			<ListItemText primary={title} />
			<ListItemButton sx={{ width: 30 }}>
				<RemoveIcon
					sx={{ position: 'relative', right: 10 }}
					color='error'
					onClick={() => {
						dispatch(deleteItemInBasket(id))
						dispatch(showAlert({ type: 'error', message: `${title} удалён из корзины!` }))
					}}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default BasketItem
