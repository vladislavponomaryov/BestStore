import { Grid } from '@mui/material'
import React from 'react'

import ProductItem from './item/productItem'

function ProductsComponent({ products }) {
	return (
		<Grid container spacing={2}>
			{products ? products.map(item => <ProductItem key={item.id} item={item} />) : <h3>Loading products</h3>}
		</Grid>
	)
}

export default ProductsComponent
