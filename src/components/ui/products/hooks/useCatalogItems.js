import React, { useEffect, useState } from 'react'

function useCatalogItems(productIds) {
	const [products, setProducts] = useState(null)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(json => setProducts(json))
	}, [])

	return productIds.map(id => products.find(item => item.id == id))
}

export default useCatalogItems
