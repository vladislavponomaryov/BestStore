import { Grid, Typography } from '@mui/material'
import React from 'react'

function CheckoutPrice({ checkoutItems }) {
	const price = checkoutItems.reduce((accum, item) => (accum += item.price), 0).toFixed(2)
	return (
		<Grid item xs={12}>
			<Typography variant={'h5'}>Total: {price}$</Typography>
		</Grid>
	)
}

export default CheckoutPrice
