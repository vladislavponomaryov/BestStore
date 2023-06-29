import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import useCatalogItems from '../../ui/catalog/hooks/useCatalogItems'

import CheckoutBasket from './checkoutBasket'
import CheckoutComplete from './checkoutComplete'
import CheckoutPrice from './checkoutPrice'

function CheckoutPage(props) {
	const [competeOrder, setCompeteOrder] = useState(false)
	const basketItems = useSelector(state => state.basket.items)
	const checkoutItems = useCatalogItems(basketItems)

	return (
		<Grid container spacing={2}>
			{!competeOrder && (
				<>
					<CheckoutBasket basketItems={basketItems} />
					<CheckoutPrice checkoutItems={checkoutItems} />
				</>
			)}
			<CheckoutComplete competeOrder={competeOrder} setCompeteOrder={setCompeteOrder} />
		</Grid>
	)
}

export default CheckoutPage
