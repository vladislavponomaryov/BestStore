import { Typography } from '@mui/material'
import React from 'react'

function BasketHeader(props) {
	return (
		<Typography sx={{ m: 1, textAlign: 'center', textTransform: 'uppercase' }} variant='h6'>
			Basket
		</Typography>
	)
}

export default BasketHeader
