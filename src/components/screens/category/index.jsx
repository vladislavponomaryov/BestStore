import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ProductsComponent from '../../ui/products'

function CategoryPage() {
	const categoryName = useParams().categoryName
	const [categoryProducts, setCategoryProducts] = useState([])
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
			.then(res => res.json())
			.then(json => setCategoryProducts(json))
	}, [categoryName])

	console.log(categoryName)

	return <ProductsComponent key={categoryName} products={categoryProducts} />
}

export default CategoryPage
