import { Alert, AlertTitle, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

function CheckoutPage(props) {
	const [compete, setComplete] = useState(false)
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant={'h5'}>Your basket:</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant={'h5'}>Total price: 105$</Typography>
			</Grid>
			<Grid item xs={12}>
				<Button variant='contained' onClick={() => setComplete(true)}>
					Complete Order
				</Button>
			</Grid>
			{compete && (
				<Grid item xs={12}>
					<Alert severity='success'>
						<AlertTitle>Your order is complete!</AlertTitle>
					</Alert>
				</Grid>
			)}
		</Grid>
	)
}

export default CheckoutPage
