import { Alert, AlertTitle, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import BasketItemsList from '../../ui/basket/drawer/basketItemsList'
import useCatalogItems from '../../ui/catalog/hooks/useCatalogItems'

function CheckoutPage(props) {
	const [compete, setComplete] = useState(false)
	const basketItems = useSelector(state => state.basket.items)
	const checkoutItems = useCatalogItems(basketItems)
	const price = checkoutItems.reduce((accum, item) => (accum += item.price), 0).toFixed(2)
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant={'h5'}>Your basket:</Typography>
				<BasketItemsList basketItems={basketItems} />
			</Grid>
			<Grid item xs={12}>
				<Typography variant={'h5'}>Total price: {price}$</Typography>
			</Grid>
			<Grid item xs={12}>
				<Button variant='contained' onClick={() => setComplete(true)}>
					Complete Order
				</Button>
			</Grid>
			{compete && (
				<Grid item xs={12}>
					<Alert severity='success'>
						<AlertTitle>Your order is complete!</AlertTitle>
					</Alert>
				</Grid>
			)}
		</Grid>
	)
}

export default CheckoutPage
