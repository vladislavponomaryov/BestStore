import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function ProductItem({ item }) {
	const { id, title, price, description, image } = item
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
					<Button>Купить</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}

export default ProductItem
