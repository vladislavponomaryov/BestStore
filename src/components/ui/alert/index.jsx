import { Alert, Box } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AlertComponent() {
	const alerts = useSelector(state => state.app.alerts)
	const dispatch = useDispatch()

	return (
		<Box sx={{ position: 'fixed', left: 15, bottom: 15 }}>
			{alerts.map((alert, index) => {
				return (
					<Alert sx={{ mb: 2 }} key={index} severity={alert.type}>
						{alert.message}
					</Alert>
				)
			})}
		</Box>
	)
}

export default AlertComponent
