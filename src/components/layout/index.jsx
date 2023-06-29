import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

import AlertComponent from '../ui/alert'

import Header from './Header'

function Layout({ children }) {
	return (
		<>
			<Header />
			<Container sx={{ mt: 14, mb: 4 }}>
				<Outlet />
				{children}
			</Container>
			<AlertComponent />
		</>
	)
}

export default Layout
