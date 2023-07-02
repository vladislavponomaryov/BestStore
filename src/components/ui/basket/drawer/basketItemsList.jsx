import { List } from '@mui/material'
import React, { useEffect, useState } from 'react'

import BasketItem from './basketItem'

function BasketItemsList({ basketItems }) {
	const [catalogItems, setCatalogItems] = useState(null)

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(json => setCatalogItems(json))
	}, [])

	return (
		<>
			{catalogItems && (
				<List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					{basketItems.map(id => {
						const { title, image } = catalogItems.find(item => item.id === id)

						return <BasketItem key={id} id={id} image={image} title={title} />
					})}
				</List>
			)}
		</>
	)
}

export default BasketItemsList
