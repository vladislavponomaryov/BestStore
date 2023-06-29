import DeleteIcon from '@mui/icons-material/Delete'
import RemoveIcon from '@mui/icons-material/Remove'
import { IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { showAlert } from '../../../../store/slices/appSlice'
import { deleteItemInBasket } from '../../../../store/slices/basketSlice'

function BasketItem({ id, image, title }) {
	const dispatch = useDispatch()
	const labelId = `checkbox-list-secondary-label-${id}`

	return (
		<ListItem
			key={id}
			secondaryAction={
				<IconButton
					onClick={() => {
						dispatch(deleteItemInBasket(id))
						dispatch(showAlert({ type: 'error', message: `${title} удалён из корзины!` }))
					}}
				>
					<DeleteIcon />
				</IconButton>
			}
			disablePadding
		>
			<ListItemButton>
				<ListItemAvatar sx={{ width: '40px', minWidth: '40px', mr: 1 }}>
					<img src={image} alt={title} />
				</ListItemAvatar>
				<ListItemText id={labelId} primary={title} />
			</ListItemButton>
		</ListItem>
	)

	return (
		<ListItem sx={{ px: 2 }} key={id} disablePadding>
			<ListItemIcon sx={{ width: 30, padding: 1 }}>
				<img src={image} alt={title} />
			</ListItemIcon>
			<ListItemText primary={title} />
			<ListItemButton sx={{ flex: ' 0 0 30px' }}>
				<RemoveIcon sx={{ position: 'relative', right: 10 }} color='error' />
			</ListItemButton>
		</ListItem>
	)
}

export default BasketItem
