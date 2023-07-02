import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Button, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import AddToBasket from '../../ui/basket/addToBasket'

function ProductPage() {
	const id = useParams()?.productId
	const product = useSelector(state => state.catalog.items.find(item => item.id == id))
	const { title, price, description, image } = product
	const navigate = useNavigate()

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Button variant='text' color='inherit' startIcon={<ArrowBackIosIcon />} onClick={() => navigate(-1)}>
					Back
				</Button>

				<Tooltip title='Edit' sx={{ float: 'right' }}>
					<IconButton>
						<EditIcon />
					</IconButton>
				</Tooltip>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Box sx={{ mt: 3 }}>
					<img src={image} alt={title} />
				</Box>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Box sx={{ mt: 3 }}>
					<Typography variant='h6' sx={{ mb: 2 }}>
						{title}
					</Typography>
					<Typography variant='h6' sx={{ mb: 3 }}>
						{price} $
					</Typography>
					<Typography variant='body2' color='body2' sx={{ mb: 2 }}>
						{description}
					</Typography>
					<Divider sx={{ mb: 2 }} />
					<AddToBasket id={id} title={title} />
				</Box>
			</Grid>
		</Grid>
	)
}

export default ProductPage
