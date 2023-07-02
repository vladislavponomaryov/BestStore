import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CheckoutBasket from './checkoutBasket'
import CheckoutComplete from './checkoutComplete'
import CheckoutPrice from './checkoutPrice'

function CheckoutPage(props) {
	const [competeOrder, setCompeteOrder] = useState(false)
	const basketItems = useSelector(state => state.basket.items)
	const [products, setProducts] = useState(null)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(json => setProducts(json))
	}, [])

	if (products == null) return 'Loading data'

	const checkoutItems = basketItems.map(id => products.find(item => item.id == id))

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
