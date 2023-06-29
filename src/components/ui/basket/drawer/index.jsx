import { Box, Divider, Drawer } from '@mui/material'
import React from 'react'

import BasketHeader from './basketHeader'
import BasketItemsList from './basketItemsList'

function BasketDrawer({ state, toggleDrawer, basketItems }) {
	return (
		<Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
			<Box
				sx={{ width: 250 }}
				role='presentation'
				// onClick={toggleDrawer(anchor, false)}
				// onKeyDown={toggleDrawer(anchor, false)}
			>
				<BasketHeader />
				<Divider />
				<BasketItemsList basketItems={basketItems} />
			</Box>
		</Drawer>
	)
}

export default BasketDrawer
