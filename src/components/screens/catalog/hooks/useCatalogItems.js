import React from 'react'
import { useSelector } from 'react-redux'

function useCatalogItems(productIds) {
	const productItems = useSelector(state => state.catalog.items)

	return productIds.map(id => productItems.find(item => item.id == id))
}

export default useCatalogItems
