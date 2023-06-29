import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import ProductItem from './item/productItem'

function HomePage() {
	const products = useSelector(state => state.catalog.items)

	/*fetch('https://fakestoreapi.com/products')
		.then(response => response.json())
		.then(json => setProducts(json))*/

	return (
		<Grid container spacing={2}>
			{products ? products.map(item => <ProductItem key={item.id} item={item} view='mini' />) : <h3>Loading products</h3>}
		</Grid>
	)
}

export default HomePage
