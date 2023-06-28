import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function BasketDrawer({ state, toggleDrawer, basketItems }) {
	const catalogItems = useSelector(state => state.catalog.items)

	const list = (anchor = 'right') => (
		<Box
			sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Typography sx={{ m: 1, textAlign: 'center', textTransform: 'uppercase' }} variant='h6'>
				Basket
			</Typography>
			<Divider />
			<List>
				{basketItems.map((id, index) => {
					const { title } = catalogItems.find(item => item.id === id)

					return (
						<ListItem key={index} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<CheckCircleIcon />
								</ListItemIcon>
								<ListItemText primary={title} />
							</ListItemButton>
						</ListItem>
					)
				})}
			</List>
		</Box>
	)

	return (
		<Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
			{list('right')}
		</Drawer>
	)
}

export default BasketDrawer
