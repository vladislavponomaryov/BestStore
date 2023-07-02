import React, { useEffect, useState } from 'react'

import ProductsComponent from '../../ui/products'

function HomePage() {
	const [products, setProducts] = useState()

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(json => setProducts(json))
	}, [])

	return <ProductsComponent products={products} />
}

export default HomePage
