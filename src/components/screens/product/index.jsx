import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Grid, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function ProductPage() {
	const id = useParams()?.productId
	const product = useSelector(state => state.catalog.items.find(item => item.id == id))
	console.log(product)
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Button variant='text' color='inherit' startIcon={<ArrowBackIosIcon />}>
					Back
				</Button>

				<Tooltip title='Edit' sx={{ float: 'right' }}>
					<IconButton>
						<EditIcon />
					</IconButton>
				</Tooltip>
			</Grid>
			<Grid item xs={6}>
				<img src={product.image} alt={product.title} />
			</Grid>
			<Grid item xs={6}></Grid>
		</Grid>
	)
}

export default ProductPage
