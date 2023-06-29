import { Alert, AlertTitle } from '@mui/material'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '../components/layout'
import CheckoutPage from '../components/screens/checkout/checkoutPage'
import HomePage from '../components/screens/home'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/checkout',
				element: <CheckoutPage />,
			},
		],
		errorElement: (
			<Layout>
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					This is an error alert — <strong>404 Page not Found!</strong>
				</Alert>
			</Layout>
		),
	},
])
