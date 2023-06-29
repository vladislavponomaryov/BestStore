import { Box, Button, Divider, Drawer } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import BasketHeader from './basketHeader'
import BasketItemsList from './basketItemsList'

function BasketDrawerBar({ state, toggleDrawer, basketItems }) {
	return (
		<Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
			<Box
				sx={{ width: 250, overflow: 'hidden' }}
				role='presentation'
				// onClick={toggleDrawer(anchor, false)}
				// onKeyDown={toggleDrawer(anchor, false)}
			>
				<BasketHeader />
				<Divider />
				<BasketItemsList basketItems={basketItems} />
				<Box sx={{ position: 'absolute', bottom: 0, width: '100%', pt: 3, background: 'white' }}>
					<Link to='checkout'>
						<Button variant='contained' sx={{ width: '100%', height: '70px' }} onClick={toggleDrawer('right', false)}>
							Checkout
						</Button>
					</Link>
				</Box>
			</Box>
		</Drawer>
	)
}

export default BasketDrawerBar
