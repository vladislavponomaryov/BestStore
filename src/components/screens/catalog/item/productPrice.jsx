import { Chip, Typography } from '@mui/material'
import React from 'react'

function ProductPrice({ price }) {
	return <>{true ? <Typography variant='h6'>{price && price} $</Typography> : <Chip label={`${price} $`} color='primary' />}</>
}

export default ProductPrice
