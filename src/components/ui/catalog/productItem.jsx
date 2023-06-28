import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { addItemInBasket } from '../../../store/slices/basketSlice'

function ProductItem({ item }) {
	const { id, title, price, description, image } = item
	const dispatch = useDispatch()

	return (
		<Grid item xs={3} key={id}>
			<Card>
				<CardHeader title={title && title} />
				<CardMedia component='img' image={image} alt={title} />
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						{description && description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						onClick={() => {
							dispatch(addItemInBasket(id))
						}}
					>
						В корзину
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ProductItem
