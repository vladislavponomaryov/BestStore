import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProductsComponent from '../../ui/products'

function SearchPage() {
	const searchParams = useParams()?.searchParams.toLowerCase()
	const products = useSelector(state => state.catalog.items)
	const searchItems = products.filter(item => item.title.toLowerCase().includes(searchParams))

	return <ProductsComponent products={searchItems} />
}

export default SearchPage
