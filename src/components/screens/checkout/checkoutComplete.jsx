import { Alert, AlertTitle, Button, Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteAllItemsInBasket } from '../../../store/slices/basketSlice'

function CheckoutComplete({ competeOrder, setCompeteOrder }) {
	const dispatch = useDispatch()
	return (
		<>
			{!competeOrder ? (
				<Grid item xs={12}>
					<Button
						variant='contained'
						onClick={() => {
							setCompeteOrder(true)
							dispatch(deleteAllItemsInBasket())
						}}
					>
						Complete Order
					</Button>
				</Grid>
			) : (
				<Grid item xs={12}>
					<Alert severity='success'>
						<AlertTitle>Your order is complete!</AlertTitle>
					</Alert>
				</Grid>
			)}
		</>
	)
}

export default CheckoutComplete
