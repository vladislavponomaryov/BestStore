import { Container } from '@mui/material'
import React from 'react'

import HomePage from '../screens/home'

import Header from './Header'

function Layout() {
	return (
		<div>
			<Header />
			<Container sx={{ mt: 14, mb: 4 }}>
				<HomePage />
			</Container>
		</div>
	)
}

export default Layout
