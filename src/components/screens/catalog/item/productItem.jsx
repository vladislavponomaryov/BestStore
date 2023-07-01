import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import AddToBasket from '../../../ui/basket/addToBasket'

import ProductPrice from './productPrice'

function ProductItem({ item, view }) {
	const { id, title, price, description, image } = item
	const formatTitle = title && title.length < 40 ? title : title.slice(0, 40) + '...'

	return (
		<Grid item xs={3} key={id}>
			<Card>
				<Link to={`catalog/product/${id}`}>
					<CardActionArea sx={{ pb: 2 }}>
						<CardMedia component='img' image={image} alt={title} sx={{ height: 200, width: '70%', objectFit: 'contain', my: 2, mx: 'auto' }} />
						<CardContent sx={{ py: 0 }}>
							{view == 'mini' && price && <ProductPrice price={price} />}
							{view == 'full' && (
								<Typography sx={{ maxHeight: 50 }} variant='body2' color='text.secondary'>
									{description && description}
								</Typography>
							)}
						</CardContent>
						<CardHeader subheader={formatTitle && formatTitle} sx={{ py: 0, height: 50 }}></CardHeader>
					</CardActionArea>
				</Link>
				<CardActions sx={{ justifyContent: 'center', my: 1 }}>
					<AddToBasket id={id} title={title} />
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ProductItem
