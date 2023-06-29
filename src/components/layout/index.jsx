import { Container } from '@mui/material'
import React from 'react'

import HomePage from '../screens/home'
import AlertComponent from '../ui/alert'

import Header from './Header'

function Layout() {
	return (
		<>
			<Header />
			<Container sx={{ mt: 14, mb: 4 }}>
				<HomePage />
			</Container>
			<AlertComponent />
		</>
	)
}

export default Layout
