import React from 'react'
import { useSelector } from 'react-redux'

import ProductsComponent from '../../ui/products'

function HomePage() {
	const allProducts = useSelector(state => state.catalog.items)

	return <ProductsComponent products={allProducts} />
}

export default HomePage
