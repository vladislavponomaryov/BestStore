import { Grid, Typography } from '@mui/material'
import React from 'react'

import BasketItemsList from '../../ui/basket/drawer/basketItemsList'

function CheckoutBasket({ basketItems }) {
	return (
		<Grid item xs={12}>
			<Typography variant={'h5'}>Your basket:</Typography>
			<BasketItemsList basketItems={basketItems} />
		</Grid>
	)
}

export default CheckoutBasket
