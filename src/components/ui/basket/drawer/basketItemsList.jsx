import { List } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import BasketItem from './basketItem'

function BasketItemsList({ basketItems }) {
	const catalogItems = useSelector(state => state.catalog.items)

	return (
		<List>
			{basketItems.map(id => {
				const { title, image } = catalogItems.find(item => item.id === id)

				return <BasketItem id={id} image={image} title={title} />
			})}
		</List>
	)
}

export default BasketItemsList
